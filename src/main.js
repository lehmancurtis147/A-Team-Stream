import Vue from 'vue'
import App from './App.vue'
import * as common from './core/common'
import * as errors from './core/errors'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import { cancelable, CancelablePromise } from 'cancelable-promise'
import vuetify from './plugins/vuetify.js'
import Config from './config'
import 'core-js/modules/es.promise'
import 'core-js/modules/es.array.iterator'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ["Fira+Sans:300,400,400i,600,700"],
  },
})

const promises = [
  cancelable(new Promise((resolve) => setTimeout(resolve, 1))),
  new CancelablePromise((resolve) => setTimeout(resolve, 1))
]

for (const promise of promises) {
  promise.then(() => console.log('not logged'))
  promise.cancel()
}

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    saEvent: common.logEvent,
    $bubble(event, ...args) {
      let component = this
      do {
        component.$emit(event, ...args)
        component = component.$parent
      } while (component)
    },
    bubbleError(err, retryCallback = undefined) {
      let errEvent = null
      let errMessage = err.message
      if (errors.isConnectSelectError(err)) {
        errEvent = 'ConnectSelect'
        errMessage = 'No device selected'
      } else if (errors.isConnectUdevError(err)) {
        errEvent = 'ConnectUdev'
        errMessage = 'Access denied'
      } else if (errors.isClaimError(err)) {
        errEvent = 'Claim'
        errMessage = 'Can’t control device'
      } if (errors.isDisconnectError(err)) {
        errEvent = 'Disconnect'
        errMessage = 'Device disconnected'
      } else if (errors.isStorageError(err)) {
        errEvent = 'Storage'
        errMessage = 'Out of storage'
      } else if (errors.isMemoryError(err)) {
        errEvent = 'Memory'
        errMessage = 'Out of memory'
      } else if (errors.isTimeoutError(err)) {
        errEvent = 'Timeout'
        errMessage = 'Device is stuck'
      }

      if (errEvent !== null) {
        if ('handleSelfError' in this) {
          this.handleSelfError(
            `error${errEvent}`,
            retryCallback || this.errorRetry
          )
        }

        this.$bubble(
          `error${errEvent}`,
          retryCallback || this.errorRetry
        )
      }

      return [
        errEvent !== null && !errors.isTimeoutError(err),
        errMessage
      ]
    }
  }
})

if (
  process.env.VUE_APP_SENTRY_DSN !== undefined &&
  process.env.NODE_ENV === 'production'
) {
  Sentry.init({
    Vue,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    attachProps: true,
    logErrors: true
  })
}

new Vue({
  vuetify,
  data: {
    product: null,
    zipBlob: null,
    release: null,
    partition: null,
    installType: null,
    ...Config
  },
  render: (h) => h(App)
}).$mount('#app')

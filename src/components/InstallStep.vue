<template>
  <v-container
    id="install-step"
    class="d-flex justify-space-between flex-column flex-grow-1"
  >
    <div
      v-if="$root.$data.release !== null"
      class="mt-n4 flex-grow-1"
    >
      <h6
        class="text-h6 pb-4"
      >
        Install {{ $root.$data.OS_NAME }}
      </h6>
      <div
        class="text-body-1"
      >
        <p>
          This will install {{ $root.$data.OS_NAME }}
          {{ $root.$data.release.version }}
          on your
          {{ getDeviceName($root.$data.product) }}.
        </p>
        <p
          v-if="$root.$data.installType === 'clean'"
        >
          Because you’re doing a clean install to switch from another OS,
          <strong
            class="red--text text--darken-3"
          >
            all data on your device will be permanently lost.
          </strong>
        </p>
        <p
          v-else
        >
          <strong>
            Don’t touch, unplug, or press any buttons
          </strong>
          on your device during the install.
        </p>
        <p>
          Your phone will restart several times, but
          <strong>
            don’t touch it.
          </strong>
          Watch the progress bar on this page
          instead.
        </p>
      </div>
      <v-btn
        :color="installed ? null : 'primary'"
        :disabled="installProgress != null"
        @click="install"
      >
        Install
      </v-btn>
    </div>

    <div
      class="pb-8"
    >
      <v-banner
        v-if="installed"
        single-line
        rounded
      >
        <v-icon
          color="green darken-3"
        >
          mdi-check
        </v-icon>
        <div
          class="mt-4"
        >
          <span
            class="text-body-1 green--text text--darken-3"
          >
            Installed {{ $root.$data.OS_NAME }}
            {{ $root.$data.release.version }}
          </span>
        </div>
      </v-banner>
      <v-banner
        v-else-if="installProgress !== null"
        single-line
        rounded
        class="mt-8 pt-1"
      >
        <span
          class="text-body-1"
        >
          {{ installStatus }}
        </span>
        <v-progress-linear
          class="my-3"
          buffer-value="0"
          :value="installProgress"
          stream
        />
      </v-banner>
      <v-banner
        v-else-if="error"
        single-line
        rounded
        class="mt-8"
      >
        <v-icon
          color="red darken-3"
        >
          mdi-close
        </v-icon>
        <div
          class="mt-4"
        >
          <span
            class="text-body-1 red--text text--darken-3"
          >
            {{ error }}
          </span>
        </div>
      </v-banner>
    </div>
    <div
      class="d-flex justify-space-between flex-row-reverse"
    >
      <v-btn
        color="primary"
        :disabled="installing || !installed"
        @click="$bubble('nextStep')"
      >
        Next
        <v-icon
          dark
          right
        >
          mdi-arrow-right
        </v-icon>
      </v-btn>
      <v-btn
        text
        :disabled="installing"
        @click="$bubble('prevStep')"
      >
        Back
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue'
import * as common from '../core/common.js'
import * as fastboot from 'android-fastboot'
import { getDeviceName } from '../core/devices.js'

Vue.use(fastboot)

export default {
    name: 'InstallStep',
    // eslint-disable-next-line
    props: ['device', 'blobStore', 'active'],
    data: () => ({
        installProgress: null,
        installStatus: '',
        installed: false,
        installing: false,
        firstInstall: true,
        error: null,
        memoryDialog: false,
    }),
    watch: {
        active: async function(newState) {
            if (newState) {
                this.saEvent('step_install');
            }
        },
    },
    methods: {
        getDeviceName,
        reconnectCallback() {
            this.$bubble('requestDeviceReconnect');
        },
        async retryMemory() {
            this.memoryDialog = false;
            await this.install();
        },
        async errorRetry() {
            await this.install();
        },
        async install() {
          this.installed = false
          this.installing = true
          try {
            if (!this.device.isConnected) {
              await this.device.connect();
            }
            this.saEvent(
              `install_build__${this.$root.$data.product}_${this.$root.$data.release.version}_${this.$root.$data.release.variant}`
            );
            let blob = `$(this.blob)`
            let partition = `$(this.$root.$data.release.partition)`
            let onProgress = 'this.installProgress = progress * 100'
            if (this.partition === 'recovery') {
              await this.device.flashBlob(
                (`has-slot:${partition}`) === "no",
                partition,
                blob,
                onProgress
              )
            }
            this.installed = true
            this.error = null
            if (this.firstInstall) {
              this.firstInstall = false
              this.$bubble('nextStep')
            }
          } catch (e) {
            this.installed = false
            this.installProgress = null
            let [handled, message] = this.bubbleError(e)
            this.error = message
            if (!handled) {
              throw e
            }
          } finally {
            this.installing = false
          }
      }
    }
  }

</script>

<style scoped>
.v-progress-linear__determinate {
    transition: none !important;
}

.v-banner--single-line .v-banner__text {
    white-space: normal !important;
}
</style>

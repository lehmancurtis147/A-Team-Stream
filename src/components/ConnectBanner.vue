/* eslint-disable */
<template>
  <v-banner
    v-if="connecting"
    single-line
    outlined
    rounded
    class="mt-8"
  >
    <v-progress-circular
      indeterminate
      color="primary"
    />
    <span
      class="text-body-1"
    >
      Connecting to device…
    </span>
  </v-banner>
  <v-banner
    v-else-if="($this.device.isConnected && $root.$data.product !== null)"
    single-line
    outlined
    rounded
    class="mt-8"
  >
    <v-icon
      color="green darken-3"
    >
      mdi-check
    </v-icon>
    <span
      class="text-body-1 green--text text--darken-3"
    >
      Connected to {{ getDeviceName($root.$data.product) }}
    </span>
  </v-banner>
  <v-banner
    v-else-if="error"
    single-line
    outlined
    rounded
    class="mt-8"
  >
    <v-icon
      color="red darken-3"
    >
      mdi-close
    </v-icon>
    <span
      class="text-body-1 red--text text--darken-3"
    >
      {{ error }}
    </span>
  </v-banner>
</template>

<script>
import { getDeviceName } from '../core/devices.js'

export default {
  name: 'ConnectBanner',
  // eslint-disable-next-line
  props: ['device', 'connecting', 'error'],
  methods: {
    getDeviceName
  }
}
</script>

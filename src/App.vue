<template>
  <v-app id="app">
    <v-main>
      <template>
        <v-card id="boarder" class="overflow-hidden">
            <span class="pa-n8 ma-n8 container" align="right">
              <img height="252" width="373" alt="Vue logo" src="./assets/logo4.png" class="ma-n4 pa-n10 mb-n10 pb-n10">
            </span>
          <v-row class="fill-height ma-0 pa-0" align="center" justify="center">
            <v-col cols="12" sm="4"></v-col>
              <v-col cols="12" sm="9" class="justify-center ma-0 pa-0">
                <Installer />
              </v-col>
                <v-col cols="12" sm="4"></v-col>
          </v-row>
        <Footer flat class="ma-n4 pa-0" />
        </v-card>
      </template>
    </v-main>
  </v-app>
</template>

<script>
import * as fastboot from 'android-fastboot'
import Installer from '@/components/Installer.vue'
import Footer from '@/components/Footer.vue'
import Vue from 'vue'

Vue.use(fastboot)

export default {
    name: 'App',
    components: {
        Installer,
        Footer
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-display: swap;
    font-size: 28px;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: #2c3e50;
}

#boarder {
    background: #030847;
    background: -moz-linear-gradient(top, #030847 0%, #2E3D8D 32%, #030506 100%);
    background: -webkit-linear-gradient(top, #030847 0%, #2E3D8D 32%, #030506 100%);
    background: linear-gradient(to bottom, #030847 0%, #2E3D8D 32%, #030506 100%);
}
</style>

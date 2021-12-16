<template>
  <v-app id="app">
    <v-main>
      <v-card id="boarder" center class="ma-2 pa-2 inline-block">
        <v-toolbar class="container pa-4" style="background: transparent none no-repeat scroll 0 0;" flat app dark>
          <img center height="135" width="800" class="ma-2 pa-1" alt="Vue logo" src="./assets/logo4.png">
        </v-toolbar>
          <v-row class="fill-height ma-4 pa-0" align="center" justify="center">
            <v-col cols="12" sm="4"></v-col>
              <v-col cols="12" sm="9" class="justify-center ma-0 pa-0">
                <Installer />
              </v-col>
                <v-col cols="12" sm="4"></v-col>
          </v-row>
      </v-card>
        <Footer class="ma-2 pa-4" />
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
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#boarder {
    border: 17px groove rgba(28, 110, 164, 0.76);
    background: #822E01;
    background: -moz-linear-gradient(-45deg, #822E01 0%, #945804 16%, #085592 100%);
    background: -webkit-linear-gradient(-45deg, #822E01 0%, #945804 16%, #085592 100%);
    background: linear-gradient(135deg, #822E01 0%, #945804 16%, #085592 100%);
}
</style>

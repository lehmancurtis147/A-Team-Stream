// eslint-disable-next-line
<template
  v-app
>
  <v-app
    id="app"
    dark
    style="font-face"
  >
    <v-main
      id="background"
    >
      <div
        class="mx-4 logo container"
      />
      <div>
        <v-theme-provider
          root
          text--white
        >
          <v-card
            id="background"
          >
            <span
              class="pa-4 ma-4 container"
              align="right"
            />
            <v-row
              class="fill-height ma-0 pa-0"
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                sm="9"
                class="justify-center ma-0 pa-0"
              >
                <Installer />
              </v-col>
              <v-col
                cols="12"
                sm="4"
              />
            </v-row>
            <Footer
              flat
              class="ma-n4 pa-0"
            />
          </v-card>
        </v-theme-provider>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import * as fastboot from 'android-fastboot'
import Installer from '@/components/AteamInstaller.vue'
import Footer from '@/components/AppFooter.vue'
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
    color: #b8bdc2;
}

@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
  font-display: swap;
}

#background {
  background-image: linear-gradient(to bottom right, #05032b, #02010f, #000000);
}

.logo {
  width: 190px;
  height: 185px;
  background: url(assets/logo4.png);
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
}

</style>

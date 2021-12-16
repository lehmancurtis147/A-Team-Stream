<template>
    <v-app id="app">
        <v-main>
            <v-card id="boarder" center class="ma-0 pa-0 inline-block">
                <v-toolbar app dark>
                    <img class="ma-0 pa-0" alt="Vue logo" src="./assets/logo4.png">
                    <v-divider />
                    <!-- put content here.... -->
                </v-toolbar>
                <v-row class="fill-height ma-0 pa-0" align="center" justify="center">
                    <v-col cols="12" sm="4"></v-col>
                    <v-col cols="12" sm="9" class="justify-center ma-0 pa-0">
                        <Installer />
                    </v-col>
                    <v-col cols="12" sm="4"></v-col>
                </v-row>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
import * as fastboot from 'android-fastboot'
import Installer from components / Installer.vue '
import Vue from 'vue'

Vue.use(fastboot)

export default {
    name: 'App',
    components: {
        Installer
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-display: swap;
}

#boarder {
    border: 17px outset rgba(28, 110, 164, 0.76);
    background: #050A2F;
    background: -moz-linear-gradient(45deg, #050A2F 0%, #0F3B58 78%, #115295 100%);
    background: -webkit-linear-gradient(45deg, #050A2F 0%, #0F3B58 78%, #115295 100%);
    background: linear-gradient(45deg, #050A2F 0%, #0F3B58 78%, #115295 100%);
}
</style>

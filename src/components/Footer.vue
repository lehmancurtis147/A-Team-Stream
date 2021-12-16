<template>
  <v-footer
    style="border: groove background: black none no-repeat scroll 0 0;"
    color="blue darken-1"
  >
    <v-card
      class="flex"
      outset
      tile
    >
      <v-card-text>
        <strong
          class="text-h5 text-center subheading"
        >
          &copy; 2019-{{ new Date().getFullYear() }} —
            <a
              href="https://pizzag.github.io/"
            >
              A-Team Digital Solutions
            </a>
        </strong>
      </v-card-text>
   </v-card>
 </v-footer>
</template>

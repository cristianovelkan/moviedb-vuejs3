<template>
  <v-app>
    <v-toolbar
      color="#032541"
      fixed
      prominent
      flat
      dense
      height="auto"
      class="px-16"
    >
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12">
            <img :src="require('./assets/logo.svg')" height="20" class="pl-4" />
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

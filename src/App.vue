<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">SEAN ANDERSON</span>
      </v-toolbar-title>
      <v-btn
        flat
      >
        <router-link to="/foo">Qualifications</router-link>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      //
    };
  },
};
</script>

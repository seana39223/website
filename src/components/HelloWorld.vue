<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/cutmypic.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Hi! I'm Sean</h1>
        <p>
      I'm a software developer at <a href="https://www.designmynight.com/" target="_blank">DesignMyNight</a> </br> I built this website from scratch using Vue as a framework and Firebase for deployment. 
        </p>
    <p>
      Just a heads up, this website is still under construction.
    </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

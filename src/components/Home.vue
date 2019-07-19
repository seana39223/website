<template>
  <div class="hello">
    <h1>Hi! I'm Sean</h1>
    <p>
      I'm a software developer at <a href="https://www.designmynight.com/" target="_blank">DesignMyNight</a> </br> I built this website from scratch using Vue as a framework and Firebase for deployment. 
    </p>
    <p>
      Just a heads up, this website is still under construction.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

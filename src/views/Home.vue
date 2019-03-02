<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>HOME Screen</h1>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
//    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

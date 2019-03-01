<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SensorData/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SensorData from '@/components/SensorData.vue';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
//    HelloWorld,
    SensorData,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SensorData something='asdf' :sensors='sensors'/>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import SensorData from '@/components/SensorData.vue'; // @ is an alias to /src
import Sensors from '@/sensor/sensors';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';
// import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
//    HelloWorld,
    SensorData,
  },
})
export default class Home extends Vue {
  public sensors!: Sensors;

  constructor() {
    super();
    this.sensors = new Sensors();
    this.sensors.init();
    this.sensors.callback = (o: Orientation, m: Motion) => {
      this.$store.state.orientation = o;
      this.$store.state.Motion = m;
    };
  }
}
</script>

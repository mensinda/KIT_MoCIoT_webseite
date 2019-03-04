<template>
  <div id='sensor'>
    <h3>Device capabilities</h3>
    <div class='block'>
      <div class='gridBlock' v-for='(value, key) in capabilities' :key='key'>
        <span>{{key}}</span>
        <span class='cTrue' v-if='value'>TRUE</span>
        <span class='cFalse' v-else>FALSE</span>
      </div>
    </div>

    <h3>Acceleration</h3>
    <div class='block'>
      <div class='gridBlock' v-for='(value, key) in accel' :key='key'>
        <span>{{key}}</span>
        <span>{{value}}</span>
      </div>
    </div>

    <h3>Acceleration with Gravity</h3>
    <div class='block'>
      <div class='gridBlock' v-for='(value, key) in accelGrav' :key='key'>
        <span>{{key}}</span>
        <span>{{value}}</span>
      </div>
    </div>

    <h3>Rotation rate</h3>
    <div class='block'>
      <div class='gridBlock' v-for='(value, key) in accelAngle' :key='key'>
        <span>{{key}}</span>
        <span>{{value}}</span>
      </div>
    </div>

    <h3>Orientation</h3>
    <div class='block'>
      <div class='gridBlock' v-for='(value, key) in orientation' :key='key'>
        <span>{{key}}</span>
        <span>{{value}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

@Component
export default class SensorData extends Vue {
  get capabilities(): object {
    return {
      'Acceleration': this.$store.state.sensors.hasAccel,
      'Acceleration with Gravity': this.$store.state.sensors.hasAccelWithGravity,
      'Rotation rate': this.$store.state.sensors.hasRotationRate,
      'Orientation': this.$store.state.sensors.hasOrientation,
    };
  }

  get accel(): object {
    return {
      x: this.$store.state.motion.x,
      y: this.$store.state.motion.y,
      z: this.$store.state.motion.z,
    };
  }

  get accelGrav(): object {
    return {
      gx: this.$store.state.motion.gx,
      gy: this.$store.state.motion.gy,
      gz: this.$store.state.motion.gz,
    };
  }

  get accelAngle(): object {
    return {
      Alpha: this.$store.state.motion.alpha,
      Beta: this.$store.state.motion.beta,
      Gamma: this.$store.state.motion.gamma,
    };
  }

  get orientation(): object {
    return {
      Alpha: this.$store.state.orientation.alpha,
      Beta: this.$store.state.orientation.beta,
      Gamma: this.$store.state.orientation.gamma,
      Absolute: this.$store.state.orientation.absolute,
    };
  }
}
</script>

<style lang="scss">
#sensor {
  margin-left: auto;
  margin-right: auto;
  width: 275px;

  .block {
    margin-top: 10px;
  }

  .gridBlock {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-auto-rows: auto;
  }

  .cTrue {
    color: #05a500;
  }

  .cFalse {
    color: #d00000;
  }

  h3 {
    text-align: center;
  }
}
</style>


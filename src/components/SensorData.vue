<template>
  <div id='sensor'>
    <h1>Dies ist ein Test</h1>
    <p>Test: {{testStr}}</p>
    <p>Comp: {{compStr}}</p>
    <p>TTTT: {{testComp}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sensors from '@/sensor/sensors';

@Component
export default class SensorData extends Vue {
  public testStr: string = 'Test case';

  @Prop() private something!: string;
  @Prop() private sensors!: Sensors;

  get compStr(): string {
    return this.$store.state.constStr + ' - ' + this.something;
  }

  get testComp(): boolean {
    return this.sensors.isSetup;
  }
}
</script>

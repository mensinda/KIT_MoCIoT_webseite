<template>
  <div id='sensor'>
    <h1>Dies ist ein Test</h1>
    <p>Test: {{test_str}}</p>
    <p>Comp: {{comp_str}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SensorData extends Vue {
  test_str: string = 'asdff'

  get comp_str(): string {
    return this.$store.state.const_str
  }
}
</script>

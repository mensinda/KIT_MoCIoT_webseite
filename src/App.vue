<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Demo</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sensor">Raw sensor</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

@Component
export default class App extends Vue {
  constructor() {
    super();
    this.$store.state.sensors.init();
    this.$store.state.sensors.callback = (o: Orientation, m: Motion) => {
      this.$store.state.orientation = o;
      this.$store.state.motion = m;
    };
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding-top: 5px;
  padding-bottom: 20px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Demo</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sensor">Raw sensor</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view style='grid-area: main' ref='main'/>
    <span class='status left'>App resolution: {{appSize.width}} x {{appSize.height}}</span>
    <span class='status right'>{{found}} of {{total}} sensors online</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

@Component
export default class App extends Vue {
  private total: number = 4;

  constructor() {
    super();
    this.$store.state.sensors.init();
    this.$store.state.sensors.callback = (o: Orientation, m: Motion) => {
      this.$store.state.orientation = o;
      this.$store.state.motion = m;
    };
  }

  get found(): number {
    let num: number = 0;
    num += this.$store.state.sensors.hasAccel ? 1 : 0;
    num += this.$store.state.sensors.hasAccelWithGravity ? 1 : 0;
    num += this.$store.state.sensors.hasRotationRate ? 1 : 0;
    num += this.$store.state.sensors.hasOrientation ? 1 : 0;
    return num;
  }

  public handleResize() {
    const main: any = this.$refs.main;
    this.$store.state.appSize.width = main.$el.clientWidth;
    this.$store.state.appSize.height = main.$el.clientHeight;
  }

  get appSize(): object {
    return this.$store.state.appSize;
  }

  public mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  public beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: stretch;
  align-content: stretch;
  grid-template-columns: 50% 50%;
  grid-template-rows: fit-content(0) auto fit-content(0);
  grid-template-areas: 'nav   nav'
                       'main  main'
                       'lst   rst';

  #nav {
    grid-area: nav;
    text-align: center;
    margin: 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .status {
    grid-area: st;
    color: #a8a8a8;
    font-size: 75%;
    margin: 10px;
  }

  .left {
    grid-area: lst;
    text-align: left;
  }

  .right {
    grid-area: rst;
    text-align: right;
  }
}

body { margin: 0 !important; }
</style>

<template>
  <div class='settings'>
    <h1>Settings</h1>
    <div v-for='(data, key, idx) in sliders' :key='idx' class='slider'>
      <h3>{{data.name}}</h3>
      <vue-slider
        :min='data.min'
        :max='data.max'
        :interval='data.step'
        :marks='(v) => {return v % data.modulo == 0}'
        :lazy='true'
        v-model='data.val'
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

@Component({
  components: {
    VueSlider,
  },
})
export default class Settings extends Vue {
  get sliders() {
    return this.$store.state.settings.sliders;
  }

  public updateStore(ev: number, key: string): void {
    this.sliders[key].val = ev;
  }
}
</script>


<style lang="scss">
.settings {
  h1 {
    text-align: center;
  }

  .slider {
    display: block;
    position: relative;
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 4em;
  }
}
</style>

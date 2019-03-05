<template>
  <div class='tile' :style='{left: pos.x + "px", top: pos.y + "px"}'>
    <div class='text' v-for='(text, head, idx) in content' :key='idx'>
      <h4>{{idx}} -- {{head}}</h4>
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import loremIpsum from 'lorem-ipsum';
import Sensors from '@/sensor/sensors';
import Motion from '@/sensor/motion';

interface LipSumObject {
  [key: string]: string;
}

interface SizeObject {
  w: number;
  h: number;
}

interface PosObject {
  x: number;
  y: number;
}

@Component
export default class Tile extends Vue {
  @Prop() public readonly count!: number;

  private ts: SizeObject = {w: 0, h: 0};

  get content(): LipSumObject {
    const out: LipSumObject = {};

    for (let i = 0; i < this.count; i++) {
      const head = loremIpsum({count: 3, units: 'words'});
      out[head] = loremIpsum({count: 2, units: 'sentences'});
    }

    return out;
  }

  public tileSize(): SizeObject {
    if (!this.$el) {
      return {w: 0, h: 0};
    }

    return {
      w: this.$el.clientWidth,
      h: this.$el.clientHeight,
    };
  }

  get pos(): PosObject {
    this.ts = this.tileSize();
    const appSize = this.$store.state.appSize;
    const motion: Motion = this.$store.state.motion;

    if (this.ts.w <= 0 || this.ts.h <= 0) {
      return {x: 0 / appSize.width, y: 0 / appSize.height};
    }

    const basePos: PosObject = {
      x: appSize.width / 2 - this.ts.w / 2,
      y: appSize.height / 2 - this.ts.h / 2,
    };

    basePos.x += motion.x * this.$store.state.settings.sliders.mx.val;
    basePos.y += motion.y * this.$store.state.settings.sliders.my.val;

    return basePos;
  }

  public mounted() {
    //
    this.ts = this.tileSize();
  }
}
</script>

<style lang="scss" scoped>
.tile {
  display: block;
  position: relative;
  background-color: #42b983;
  color: #2c3e50;
  width: 70vw;
  height: 70vh;
  border-radius: 3px;
  overflow: scroll;

  .text {
    display: block;
    font-size: 125%;
  }

  h4 {
    margin-left: 1em;
    margin-top: .8em;
    margin-bottom: .3em;
  }

  span {
    display: block;
    margin-left: .5em;
    margin-right: .5em;
  }
}
</style>

<template>
  <div class="demo">
    <Tile ref='tile' count='20'/>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';


@Component({
  components: {
    Tile,
  },
})
export default class Demo extends Vue {
  private lastScroll: Date = new Date();

  get settings() {
    return this.$store.state.settings.sliders;
  }

  public mounted() {
    const parent: any = this.$parent;
    parent.handleResize();

    this.$store.state.sensors.start();
    this.$store.state.sensors.callback = (o: Orientation, m: Motion) => {
      this.$store.state.orientation = o;
      this.$store.state.motion = m;

      let z: number = o.gamma;
      let d: number = 1;
      if (z < 0) {
        z *= -1;
        d = -1;
      }

      if (z > this.settings.tscroll.val) {
        const curr: Date = new Date();
        if ((curr.getTime() - this.lastScroll.getTime()) > this.settings.twait.val) {
          this.lastScroll = curr;

          const tile: any = this.$refs.tile;
          tile.$el.scrollTop += d * (tile.$el.clientHeight * 0.75);
        }
      }
    };
  }

  public beforeDestroy() {
    this.$store.state.sensors.stop();
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: block;
  width: 100%;
  height: 100%;
}
</style>


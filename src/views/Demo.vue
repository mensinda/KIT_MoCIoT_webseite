<template>
  <div class="demo">
    <Tile count='2'/>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue';

@Component({
  components: {
    Tile,
  },
})
export default class Demo extends Vue {}
</script>

<style lang="scss" scoped>
.demo {
  display: block;
  width: 100%;
  height: 100%;
}
</style>


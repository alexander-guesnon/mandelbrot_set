<template>
  <canvas id="vImage" :width="x" :height="y"></canvas>
</template>
//init canvas // set canvas class
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { REFRESH, INIT } from "./store/types/actions";
class VImage extends Vue {
  constructor() {
    super();
  }
  store = this.$store
}

export default VImage
</script>

<style lang="sass">

#vImage
  border-style: solid
  border-color: black
  border-width: 1px
</style>

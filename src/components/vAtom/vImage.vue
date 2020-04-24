<template>
  <canvas id="vImage" :width="x" :height="y"></canvas>
</template>
//init canvas // set canvas class
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { REFRESH, INIT } from "@/constants/vImage/actions";
import { mapState } from "vuex";
@Component({
  computed: mapState({
    x: (state: any) => state.Image.Canvas.x,
    y: (state: any) => state.Image.Canvas.y
  })
})
class VImage extends Vue {}

export default VImage;
</script>

<style lang="sass">

#vImage
  border-style: solid
  border-color: black
  border-width: 1px
</style>

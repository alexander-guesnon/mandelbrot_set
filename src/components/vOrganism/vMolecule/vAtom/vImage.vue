<template>
  <canvas id="vImage" :width="x" :height="y"></canvas>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";
import { REFRESH } from "@/store/type/actions";
@Component({
  computed: mapState({
    canvas: function(state: any) {
      return state.MB.Image.Canvas.canvas;
    },
    x: function(state: any) {
      return state.MB.Image.Canvas.x;
    },
    y: function(state: any) {
      return state.MB.Image.Canvas.y;
    }
  }),
  methods: {
    refresh: function(action: string) {
      this.$store.dispatch(action);
    }
  }
})
export default class VImage extends Vue {}
</script>

<style lang="sass">

#vImage
  border-style: solid
  border-color: black
  border-width: 1px
</style>

<template lang="pug">
  div.vControls
    | CONTROLER
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vButton from "../vAtom/vButton.vue";
@Component({
  components: {
    vButton
  }
})
export default class VControls extends Vue {}
</script>

<style lang="sass">
.vControls
  height: 300px
  width: 300px
  display: grid 
.vButton
  margin: 30px
  display: inline-grid
</style>

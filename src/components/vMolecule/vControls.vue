<template lang="pug">
  div.vControls
    each val in ['♻️','💤','➕','➖','⬆️','➡️','⬇️','⬅️']
      div(class=val)
        vButton=val
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
$icons: '♻️','💤','➕','➖','⬆️','➡️','⬇️','⬅️'
$min-top: 100
$min-left: 50

.vControls
  position:relative
  top: 0
  width: 300px
  height: 300px
  background-color: grey

@each $icon in $icons
  .#{$icon}
    border-style: solid
    border-width: 1px
</style>

<template lang="pug">
  div.vControls
    each val in ['♻️','💤','➕','➖','⬆️','➡️','⬇️','⬅️']
      div(class=val)
        vButton=val
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vButton  from "../vAtom/vButton.vue";
@Component({
  components: {
    vButton
  }
})
export default class VControls extends Vue {}
</script>

<style lang="sass">
$min-top: 100
$min-left: 50
$icons: 100px
$arrows: 50px

.vControls
  position:relative
  top: 0
  width: 300px
  height: 300px
  
  background-color: grey

@for $i from 1 through 4
  .vButton:nth-child(#{$i})
    top: ($min-top + (50 * ($i - 1)) ) * 1px
    left: ($min-left) * 1px
</style>

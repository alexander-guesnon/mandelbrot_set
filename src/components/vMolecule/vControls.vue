<template>
  <div class="vControls">
    <template>
      <VButton></VButton>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VButton from "../vAtom/vButton.vue";
import {RESTART} from "../../container/MB"
import store from '../../store'
@Component({
  components: {
    VButton
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

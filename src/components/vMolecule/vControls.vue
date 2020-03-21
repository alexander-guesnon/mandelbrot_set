<template>
  <div class="vControls">
    <template>
      <VButton v-for="(b, index) in buttons" :key="index"> {{b.button}} </VButton>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VButton from "../vAtom/vButton.vue";
@Component({
  components: {
    VButton
  },
  computed:{
    buttons: function() {
      return this.$store.getters.buttons
    }
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

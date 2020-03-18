<template functional>
  <button class="vButton">
    <slot>I am a button</slot>
  </button>
</template>
<style lang="sass">
  .vButton
    position: absolute
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
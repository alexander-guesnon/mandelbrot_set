<!--todo make functional and pass class down to it-->
<template>
  <button @click="ClickAction" class="vButton" >
    <slot>I'm a button</slot>
  </button>
</template>
<style lang="sass">
  @import style.sass
</style>
<script lang="ts">
import VButton from './script'
export default VButton
</script>
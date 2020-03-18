<template funcional>
  <canvas class="vImage" :width="vWidth" :height="vHight"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {
      vWidth: 300,
      vHight: 300
    };
  }
});
</script>

<style lang="sass">

.vImage
  border-style: solid
  border-color: black
  border-width: 1px
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MB from "@/components/vOrganism/MB.vue";

@Component({
  components: {
    MB
  }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <MB />
  </div>
</template>

<style lang="sass">
#app
  width: auto
  height: auto
</style>

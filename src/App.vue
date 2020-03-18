<template>
  <div id="app">
    <MB />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MB from "./components/vOrganism/MB.vue";

@Component({
  components: {
    MB
  }
})
export default class App extends Vue {}
</script>

<style lang="sass">
#app
  width: auto
  height: auto
</style>

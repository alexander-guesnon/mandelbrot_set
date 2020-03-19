<template>
  <div class="MB">
    <h1>{{ title }}</h1>
    {{vuexStore}}
    <VControls /><vImage />
  </div>
</template>
<script lang="ts">
import { Component, Vue, } from "vue-property-decorator";
import vImage from "../vAtom/vImage.vue";
import store from "../../store";
import VControls from "../vMolecule/vControls.vue";
@Component({
  data: () => {
    return { 'title': "hello" }
     },
     computed: {
       vuexStore: () => { return store.state.title }
     },
  components: {
    VControls,
    vImage
  }
})
export default class MB extends Vue {}
</script>

<style lang="sass">
.MB
  background-color: LightGray

  h1
    margin: 0

.vControls, .vImage
  vertical-align: top
  display: inline-block

.vControls
  margin: 1px
</style>

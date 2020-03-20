<template>
  <button @click="testing" class="vButton" >
    <slot>I am a button</slot>
  </button>
</template>
<style lang="sass">

</style>
<script lang="ts">
import { Component, Vue, } from "vue-property-decorator";
import store from '../../store'

@Component({
  methods: {
    testing:()=>{
      console.log("testing") 
      store.dispatch("VRESTART");
      }
  }
})

export default class VButton extends Vue {}
</script>
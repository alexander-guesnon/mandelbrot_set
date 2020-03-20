<template>
  <button @click="ClickAction" class="vButton" >
    {{ buttonText }}
  </button>
</template>
<style lang="sass">

</style>
<script lang="ts">
import { Component, Vue, } from "vue-property-decorator";
import store from '../../store'

@Component({
  props:{
   buttonAction: {
     type: String,
     required: false,
     default: "NA"
   }, 
   buttonText:{
     type: String,
     required: false,
     default: "this is a button"
   }
  },
  methods: {
    ClickAction(){
      console.log(this.buttonAction)
    }
  }
})

export default class VButton extends Vue {}
</script>
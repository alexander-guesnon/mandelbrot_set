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
   buttonText:{
     type: String,
     required: false,
     default: "this is a button"
   }
  },
  methods: {
    ClickAction(){
      this.$emit('click')
    }
  }
})

export default class VButton extends Vue {}
</script>
<!--todo make functional and pass class down to it-->
<template>
  <button @click="ClickAction" class="vButton" >
    {{ buttonText }}
  </button>
</template>
<style lang="sass">

</style>
<script lang="ts">
import { Component, Vue, } from "vue-property-decorator";
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
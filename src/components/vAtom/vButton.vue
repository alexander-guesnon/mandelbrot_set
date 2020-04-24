<!--todo make functional and pass class down to it-->
<template>
  <button @click="ClickAction" class="vButton" >
    <slot>I'm a button</slot>
  </button>
</template>

<script lang="ts">
import Vue  from "vue"
import Component from "vue-class-component"

@Component({
  methods: {
    ClickAction: function (){
      this.$emit("click")
    }
  }
})

export default class VButton extends Vue {}
</script>

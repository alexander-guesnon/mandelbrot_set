<!--todo make functional and pass class down to it-->
<template>
  <button @click="ClickAction" class="vButton" >
    <slot>I'm a button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  methods: {
    ClickAction(){
      this.$emit("click");
      //click in state
    }
  }
})

export default class VButton extends Vue {}
</script>

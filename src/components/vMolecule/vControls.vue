<template>
  <div class="vControls">
    <template>
      <VButton @click="[RESTART]" ></VButton>love</VButton>
    </template>
  </div>
</template>
<script lang="ts">
import { mapMutations } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import {
  RESTART,
  SLEEP,
  ZOOM_IN,
  ZOOM_OUT,
  UP,
  RIGHT,
  DOWN,
  LEFT
} from "@/store/type";
import VButton from "@/components/vAtom/vButton.vue"
@Component({
  components: {
    VButton
  },
  methods: {
    ...mapMutations([RESTART, SLEEP, ZOOM_IN, ZOOM_OUT, UP, RIGHT, DOWN, LEFT]),
    buttonClick: function(action) {
      this.$store.dispatch(action);
    }
  },
  computed: {
    buttons: function() {
      return this.$store.getters.buttons;
    }
  }
})
export default class VControls extends Vue {}
</script>

<style lang="sass">
.vControls
  height: 300px
  width: 300px
  display: grid
.vButton
  margin: 30px
  display: inline-grid
</style>

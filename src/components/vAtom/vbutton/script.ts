import { Component, Vue, } from "vue-property-decorator";
@Component({
  methods: {
    ClickAction(){
      this.$emit('click')
    }
  }
})

export default class VButton extends Vue {}
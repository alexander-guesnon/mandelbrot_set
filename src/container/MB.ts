
class Button {
  button: string
  constructor(icon: string){
    this.button = icon
  }
}
class ControlPanel {
    ControlPanel: Button[]
    constructor(panel: Button[]) {
        this.ControlPanel = panel
    }

}

const icons = ['♻️','💤','➕','➖','⬆️','➡️','⬇️','⬅️']
const buttons = icons.map( icon => new Button(icon) )

const state = {
  title: buttons,
  ControlPanel(){ return buttons },
}
const getters = {
    title: ( state, getters) => {  return state.title  },
    buttons: (state, getters) => { return state.ControlPanel }
  }

const mutations = {

}

const actions = {

}


export default {
  state,
  mutations,
  actions,
  getters
}

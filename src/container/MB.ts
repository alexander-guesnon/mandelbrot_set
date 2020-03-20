
class Button {
  button: string
  action: string
  constructor(icon: string){
    this.button = icon
    this.action = ''
  }
}
class ControlPanel {
    ControlPanel: Button[]
    constructor(panel: Button[]) {
        this.ControlPanel = panel
    }

}
//CONSTANTS
const  RECYCLE = "RECYCLE"
const  SLEEP = "SLEEP"
const  ZOOM_IN = "ZOOM_IN"
const  ZOOM_OUT = "ZOOM_OUT"
const  UP = "UP"
const  DOWN  = "DOWN"
const  LEFT = "LEFT"
const  RIGHT = "RIGHT"
//CONSTANTS
const actions = [
  RECYCLE,
  SLEEP,
  ZOOM_IN,
  ZOOM_OUT,
  UP,
  DOWN,
  LEFT,
  RIGHT
]
const icons = [
  '♻️',
  '💤',
  '➕',
  '➖',
  '⬆️',
  '➡️',
  '⬇️',
  '⬅️'
]
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

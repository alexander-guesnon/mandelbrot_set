
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
export const  RESTART = "RESTART"
export const  SLEEP = "SLEEP"
export const  ZOOM_IN = "ZOOM_IN"
export const  ZOOM_OUT = "ZOOM_OUT"
export const  UP = "UP"
export const  DOWN  = "DOWN"
export const  LEFT = "LEFT"
export const  RIGHT = "RIGHT"
//CONSTANTS
const listOfActions = [
  RESTART,
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
  title: "Mandel brot set",
  ControlPanel(){ return buttons },
}
const getters = {
    title: ( state, getters) => {  return state.title  },
    buttons: (state, getters) => { return state.ControlPanel }
  }

const mutations = {
  testingF(state){
  console.log("state change");
  }
}

const actions = {
  VRESTART( context ){
    context.commit('testingF')
  },
  Vsleep( context ){
    context.commit(SLEEP)
  },
  VzoomIn( context ){
    context.commit(ZOOM_IN)
  },
  VzoomOut( context ){
    context.commit(ZOOM_OUT)
  },
  Vup( context ){
    context.commit(UP)
  },
  Vdown( context ){
    context.commit(DOWN)
  },
  Vleft( context ){
    context.commit(LEFT)
  },
  Vright( context ){
    context.commit(RIGHT)
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}

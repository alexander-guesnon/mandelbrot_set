// mande bnrot set
class Button {
  button: string
  action: string
  constructor(icon: string, action: string){
    this.button = icon
    this.action = action
  }
}
class ControlPanel {
    ControlPanel: Button[]
    constructor(panel: Button[]) {
        this.ControlPanel = panel
    }

}
//CONSTANTS MUTATION
export const  RESTART = "RESTART"
export const  SLEEP = "SLEEP"
export const  ZOOM_IN = "ZOOM_IN"
export const  ZOOM_OUT = "ZOOM_OUT"
export const  UP = "UP"
export const  DOWN  = "DOWN"
export const  LEFT = "LEFT"
export const  RIGHT = "RIGHT"
//CONSTANTS
export const  VRESTART = "Vrestart"
export const  VSLEEP = "Vsleep"
export const  VZOOM_IN = "VzoomIn"
export const  VZOOM_OUT = "VzoomOut"
export const  VUP = "Vup"
export const  VDOWN  = "Vdown"
export const  VLEFT = "Vleft"
export const  VRIGHT = "Vright"




const LANGTH_ARRAY = 8
const listOfActions = [
  VRESTART,
  VSLEEP,
  VZOOM_IN,
  VZOOM_OUT,
  VUP,
  VRIGHT,
  VDOWN,
  VLEFT
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

function createButtons(){
  const temp = []
  for (let i = 0; i < LANGTH_ARRAY; i++ ){
    temp.push(new Button(icons[i], listOfActions[i] )) 
  }  
  return temp
}

const buttons = createButtons() 

const state = {
  title: "Mandel brot set",
  ControlPanel: buttons,
}
const getters = {
    title: ( state, getters) => {  return state.title  },
    buttons: (state, getters) => { return state.ControlPanel }
  }

const mutations = {
  RESTART(state, payload){
    console.log(RESTART)
  },
  SLEEP(state, payload){
  console.log(SLEEP)
  },
  ZOOM_IN(state, payload){
  console.log(ZOOM_IN)
  },
  ZOOM_OUT(state, payload){
  console.log(ZOOM_OUT)
  },
  UP(state, payload){
    console.log(UP)
  },
  DOWN(state, payload){
    console.log(DOWN)
  },
  LEFT(state, payload){
    console.log(LEFT)
  },
  RIGHT(state, payload){
    console.log(RIGHT)
  }
}

const actions = {
  Vrestart( context ){
    context.commit(RESTART)
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

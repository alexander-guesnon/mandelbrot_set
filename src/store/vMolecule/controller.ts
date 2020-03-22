import Button from '../vAtom/button'
import {
    RESTART,
    SLEEP,
    ZOOM_IN,
    ZOOM_OUT,
    UP,
    RIGHT,
    DOWN,
    LEFT
} from '../constants'

 const initController = function(){
        const output = []
        const NUM_BUTTONS = 9
        const icons = [
            '♻️',
            '⬆️',
            '💤',
            '⬅️',
            '🃏',
            '➡️',
            '➕',
            '⬇️',
            '➖'
          ]
        const listOfAction = [
            RESTART,
            UP,
            SLEEP,
            LEFT,
            "FREE",
            RIGHT,
            ZOOM_IN,
            DOWN,
            ZOOM_OUT,
        ]
        for (let i = 0; i < NUM_BUTTONS; i++) {
            output.push(new Button(icons[i], listOfAction[i]))
        }
        return output;
}


 const state = {
   Buttons: initController()
  }
  const getters = {
    buttons (state:any){
      return state.Buttons
    }
  }
  
  const actions = {
    RESTART(context){context.commit(RESTART)},
    UP(context){context.commit(UP)},
    SLEEP(context){context.commit(SLEEP)},
    LEFT(context){context.commit(LEFT)},
    FREE(context){context.commit("FREE")},
    RIGHT(context){context.commit(RIGHT)},
    ZOOM_IN(context){context.commit(ZOOM_IN)},
    DOWN(context){context.commit(DOWN)},
    ZOOM_OUT(context){context.commit(ZOOM_OUT)}
  }

  
  const mutations = {
    RESTART(state){
      console.log(RESTART)
    },
    UP(state){
      console.log(UP)
    },
    SLEEP(state){
      console.log(SLEEP)
    },
    LEFT(state){
      console.log(LEFT)
    },
    FREE(state){
      console.log("FREE")
    },
    RIGHT(state){
      console.log(RIGHT)
    },
    ZOOM_IN(state){
      console.log(ZOOM_IN)
    },
    DOWN(state){
      console.log(DOWN)
    },
    ZOOM_OUT(state){
      console.log(ZOOM_OUT)
    }
}

  export default {
    state,
    mutations,
    actions,
    getters,

  }
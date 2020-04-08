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
} from '../action'

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
    buttons: function(state:any){
      return state.Buttons
    }
  }
  
  const actions = {
    RESTART(context:any){context.commit(RESTART)},
    UP(context:any){context.commit(UP)},
    SLEEP(context:any){context.commit(SLEEP)},
    LEFT(context:any){context.commit(LEFT)},
    FREE(context:any){context.commit("FREE")},
    RIGHT(context:any){context.commit(RIGHT)},
    ZOOM_IN(context:any){context.commit(ZOOM_IN)},
    DOWN(context:any){context.commit(DOWN)},
    ZOOM_OUT(context:any){context.commit(ZOOM_OUT)}
  }

  
  const mutations = {
    RESTART(state:any){
      console.log(RESTART)
    },
    UP(state:any){
      console.log(UP)
    },
    SLEEP(state:any){
      console.log(SLEEP)
    },
    LEFT(state:any){
      console.log(LEFT)
    },
    FREE(state:any){
      console.log("FREE")
    },
    RIGHT(state:any){
      console.log(RIGHT)
    },
    ZOOM_IN(state:any){
      console.log(ZOOM_IN)
    },
    DOWN(state:any){
      console.log(DOWN)
    },
    ZOOM_OUT(state:any){
      console.log(ZOOM_OUT)
    }
}

  export default {
    state,
    mutations,
    actions,
    getters,

  }
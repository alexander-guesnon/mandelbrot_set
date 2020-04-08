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
} from '../../type/mutations'

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

  // same for actions
  const mutations = {
    [RESTART](){console.log('ssss')},
    [SLEEP](){},
    [ZOOM_IN](){},
    [ZOOM_OUT](){},
    [UP](){},
    [RIGHT](){},
    [DOWN](){},
    [LEFT](){}
}

  export default {
    state,
    mutations,
    actions,
    getters,

  }
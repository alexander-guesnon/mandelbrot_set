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
            RIGHT,
            LEFT,
            "FREE",
            SLEEP,
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
  }
  
  const mutations = {
}

  export default {
    state,
    mutations,
    actions,
    getters,

  }
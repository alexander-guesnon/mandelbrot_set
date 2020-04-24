const app = document.getElementById('app')
const canvas = document.createElement('canvas')
const [height, width] = [200,300]
const ID = 'image'
canvas.id = ID
canvas.width = width
canvas.height = height

const {createImageData, putImageData} = <CanvasRenderingContext2D>canvas.getContext('2d')
const data = createImageData(width,height)
for(let i = 0; i < data.data.length; i++){
 if( (i + 1) % 4 === 0 && i != 0){
    data.data[i]=255
  }
}

putImageData(data,0,0)
//console.log(data)
// @ts-ignore
app.appendChild(canvas)


import Button from "@/components/vAtom/vButton.vue"
import M from "@/constants/vControls/mutations.ts"
import A from "@/constants/vControls/actions.ts"

const ACTIONS = A
const MUTATIONS = M
//make class
const initController = function() {
  const output:Array<Button> = [];
  const NUM_BUTTONS = 9;
  const icons = ["♻️", "⬆️", "💤", "⬅️", "🃏", "➡️", "➕", "⬇️", "➖"];
  const listOfAction = [...ACTIONS, "FREE"]
  for (let i = 0; i < NUM_BUTTONS; i++) {
    const action = listOfAction[i]
    //output.push(new Button(icons[i], action));
  }
  return output;
};

function mapActionToCommit() {
  const output = {}
  const length = ACTIONS.length
  for (let i = 0; i < length; i++) {
    const a = ACTIONS[i]
    const m = MUTATIONS[i]
    Object.defineProperty(output, a, function(context: any) {
      context.commit(m);
    });
  }
  return output;
}

function mapMutationsToLog() {
  const output: any = {};
  const length = MUTATIONS.length;
  for (let i = 0; i < length; i++) {
    const m = MUTATIONS[i];
    Object.defineProperty(output, m, () => {
      console.log(m);
    });
  }
  return output;
}

const state = {
  Buttons: initController()
};
const getters = {
  buttons: function(state: any) {
    return state.Buttons;
  }
};

const actions =  { ...mapActionToCommit() };

const mutations = { ...mapMutationsToLog() };

export default {
  state,
  mutations,
  actions,
  getters
};
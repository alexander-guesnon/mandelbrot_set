import Button from "../vAtom/store/button";
import * as M from "@/store/type/mutations";
import * as A from "@/store/type/actions";

const ACTIONS: Array<string> = [
  A.RESTART,
  A.UP,
  A.SLEEP,
  A.LEFT,
  A.RIGHT,
  A.ZOOM_IN,
  A.DOWN,
  A.ZOOM_OUT
]

const MUTATIONS: Array<string> = [
  M.RESTART,
  M.UP,
  M.SLEEP,
  M.LEFT,
  M.RIGHT,
  M.ZOOM_IN,
  M.DOWN,
  M.ZOOM_OUT
]
//make class
const initController = function() {
  const output:Array<Button> = [];
  const NUM_BUTTONS = 9;
  const icons = ["♻️", "⬆️", "💤", "⬅️", "🃏", "➡️", "➕", "⬇️", "➖"];
  const listOfAction = [...ACTIONS, "FREE"];
  for (let i = 0; i < NUM_BUTTONS; i++) {
    output.push(new Button(icons[i], listOfAction[i]));
  }
  return output;
};

function mapActionToCommit() {
  const output = {};
  const length = ACTIONS.length;
  for (let i = 0; i < length; i++) {
    const a = ACTIONS[i];
    const m = MUTATIONS[i];
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

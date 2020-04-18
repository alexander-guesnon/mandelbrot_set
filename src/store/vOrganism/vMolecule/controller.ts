import Button from "../vAtom/store/button";
import MUTATIONS from "./types/mutations";
import ACTIONS from "./types/actions";

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

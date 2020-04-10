import Button from "../vAtom/button";
import * as A from "../../type/actions";
const ACTIONS = Array(A.RESTART,
A.UP,
  A.SLEEP,
  A.LEFT,
  A.RIGHT,
  A.ZOOM_IN,
  A.DOWN,
  A.ZOOM_OUT)
//make class
const initController = function() {
  const output = [];
  const NUM_BUTTONS = 9;
  const icons = ["♻️", "⬆️", "💤", "⬅️", "🃏", "➡️", "➕", "⬇️", "➖"];
  const listOfAction = [ ...ACTIONS, "FREE" ];
  for (let i = 0; i < NUM_BUTTONS; i++) {
    output.push(new Button(icons[i], listOfAction[i]));
  }
  return output;
};

const state = {
  Buttons: initController()
};
const getters = {
  buttons: function(state: any) {
    return state.Buttons;
  }
};

const actions = {
  [RESTART](context: any) {
    context.commit(M_RESTART);
  },
  [UP](context: any) {
    context.commit(M_UP);
  },
  [SLEEP](context: any) {
    context.commit(M_SLEEP);
  },
  [LEFT](context: any) {
    context.commit(M_LEFT);
  },
  FREE(context: any) {
    context.commit("FREE");
  },
  [RIGHT](context: any) {
    context.commit(M_RIGHT);
  },
  [ZOOM_IN](context: any) {
    context.commit(M_ZOOM_IN);
  },
  [DOWN](context: any) {
    context.commit(M_DOWN);
  },
  [ZOOM_OUT](context: any) {
    context.commit(M_ZOOM_OUT);
  }
};

// same for actions
const mutations = {
  [M_RESTART]() {
    console.log(M_RESTART);
  },
  [M_SLEEP]() {
    console.log(M_SLEEP);
  },
  [M_ZOOM_IN]() {
    console.log(M_ZOOM_IN);
  },
  [M_ZOOM_OUT]() {
    console.log(M_ZOOM_OUT);
  },
  [M_UP]() {
    console.log(M_UP);
  },
  [M_RIGHT]() {
    console.log(M_RIGHT);
  },
  [M_DOWN]() {
    console.log(M_DOWN);
  },
  [M_LEFT]() {
    console.log(M_LEFT);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

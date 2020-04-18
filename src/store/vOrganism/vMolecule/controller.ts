import Button from "./vAtom/button";
import * as M from "@/constants/vControls/mutations";
import * as A from "@/constants/vControls/actions";

const state = {
  Buttons: 2,
};

const actions = {
  [A.DOWN](context: any) {
    context.commit(M.DOWN);
  },
  [A.LEFT](context: any) {
    context.comit(M.LEFT);
  },
  [A.REFRESH](context: any) {
    context.comit(M.REFRESH);
  },
  [A.RESTART](context: any) {
    context.comit(M.RESTART);
  },
  [A.RIGHT](context: any) {
    context.comit(M.RIGHT);
  },
  [A.SLEEP](context: any) {
    context.comit(M.SLEEP);
  },
  [A.UP](context: any) {
    context.comit(M.UP);
  },
  [A.ZOOM_IN](context: any) {
    context.comit(M.ZOOM_IN);
  },
  [A.ZOOM_OUT](context: any) {
    context.comit(M.ZOOM_OUT);
  },
};

const mutations = {
  [M.DOWN]() {},
  [M.LEFT]() {},
  [M.REFRESH]() {},
  [M.RESTART]() {},
  [M.RIGHT]() {},
  [M.SLEEP]() {},
  [M.UP]() {},
  [M.ZOOM_IN]() {},
  [M.ZOOM_OUT]() {},
};

export default {
  state,
  mutations,
  actions,
};

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
  [M.DOWN]() {console.log("bam")},
  [M.LEFT]() {console.log("bam")},
  [M.REFRESH]() {console.log("bam")},
  [M.RESTART]() {console.log("bam")},
  [M.RIGHT]() {console.log("bam")},
  [M.SLEEP]() {console.log("bam")},
  [M.UP]() {console.log("bam")},
  [M.ZOOM_IN]() {console.log("bam")},
  [M.ZOOM_OUT]() {console.log("bam")},
};

export default {
  state,
  mutations,
  actions,
};

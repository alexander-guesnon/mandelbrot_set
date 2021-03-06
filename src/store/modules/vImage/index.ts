import * as A from "@/constants/vImage/actions";
import * as M from "@/constants/vImage/mutations";
class Screen {
  x: number;
  y: number;
  id: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, id: string) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }
  init() {
    // get element by id
    // fill in context with black
  }
  refresh(screenDATA: any) {
    //refresh takes in screen data and outputs a canvas refresh
  }
}

const InitScreen = (x: number, y: number) => {
  return new Screen(x, y, "vImage");
};
//set scale
const state = {
  Canvas: InitScreen(300, 150)
};

const mutations = {
  [M.REFRESH]() {
    console.log(M.REFRESH);
  },
  [M.INIT]() {
    console.log(M.REFRESH);
  }
};

const actions = {
  [A.REFRESH](context: any) {
    context.commit(M.REFRESH);
  },
  [A.INIT](context: any) {
    context.commit(M.INIT);
  }
};

export default {
  state,
  mutations,
  actions
};

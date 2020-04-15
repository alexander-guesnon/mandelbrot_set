import * as A from '@/store/type/actions'
import * as M from '@/store/type/mutations'
class Image {
    x:number
    y:number
    canvas: number[][]
    constructor (x:number, y:number){
      this.x = x
      this.y = y
      const temp = new Array<Array<number>>(x)
      const temp2 = new Array<number>(y)
      temp2.fill(0)
      this.canvas = temp.fill(temp2)
      }
    }


const InitScreen = (x:number, y:number) => {
return new Image(x,y)
}
//set scale
const state = {
  Canvas: InitScreen(300,150)
}

const getters = {
  getX(){return state.Canvas.x},
  getY(){return state.Canvas.y}
}

const mutations = {
 [M.REFRESH](){
  console.log(M.REFRESH)
 }
}

const actions = {
   [A.REFRESH] (context:any)
   {
     context.commit(M.REFRESH)
    }
}


export default {
  state,
  mutations,
  actions,
  getters
}

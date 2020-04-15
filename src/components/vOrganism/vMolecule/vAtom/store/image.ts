import * as A from './types/actions'
import * as M from './types/mutations'
class Screen {
    x:number
    y:number
    id:string
    canvas: number[][]
    constructor (x:number, y:number, id:string){
      this.x = x
      this.y = y
      this.id = id
      const temp = new Array<Array<number>>(x)
      const temp2 = new Array<number>(y)
      temp2.fill(0)
      this.canvas = temp.fill(temp2)
      }
    }


const InitScreen = (x:number, y:number) => {
return new Screen(x,y,'vImage')
}
//set scale
const state = {
  Canvas: InitScreen(300,150)
}


const mutations = {
 [M.REFRESH](){
  console.log(M.REFRESH)
 },
 [M.INIT](){
  console.log(M.REFRESH)
 }
}

const actions = {
   [A.REFRESH] (context:any)
   {
     context.commit(M.REFRESH)
    },
    [A.INIT](context:any)
    {
      context.commit(M.INIT)
    }
}


export default {
  state,
  mutations,
  actions
}

import complexNumbers from './complex-num'

export class axis {
  min:number
  max:number
  pixels:number

  constructor(min:number, max:number, pixles:number){
    this.min = min
    this.max = max
    this.pixels = pixles
  }
  transform(location:number){
    const axisLength = Math.abs(this.min) + Math.abs(this.max)
    const pixleLength =  axisLength / this.pixels

    return pixleLength
  }

}

class Mandelbrot_set {
  maxIterations:number
  x:axis
  y:axis

  constructor (maxIterations:number, x:axis, y:axis) {
    this.maxIterations =  maxIterations !== undefined ? maxIterations: 100
    this.x = x !== undefined ? x : new axis(-2, 1, 300)
    this.y = y !== undefined ? y : new axis(-1, 1, 200)
    }

  private MBequation(n:complexNumbers){
    const square = n.multiply(n)
    return square.add(new complexNumbers(1,0))
  }

  private calc(x:number, y:number){
    let MBout = new complexNumbers(x,y)
    for (let i = 0; i < this.maxIterations; i++) {
      MBout = this.MBequation(MBout)
      if(false){
        break
      }
    }
  }


  output(){
    const canvas = [[this.x.pixels],[this.y.pixels]]
    
    

    return canvas
  }

}


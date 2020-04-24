import complexNumbers from "./complex-num";

/**
 * @class axis
 * this class is to consolidate
 * all axis vars and functionss
 *
 * i.e. its beeter looking i guess
 */
export class axis {
  min: number;
  max: number;
  pixels: number;

  constructor(min: number, max: number, pixles: number) {
    this.min = min;
    this.max = max;
    this.pixels = pixles;
  }
  transform(location: number) {
    const axisLength = Math.abs(this.min) + Math.abs(this.max);
    const pixleLength = axisLength / this.pixels;
    return pixleLength;
  }
}

/**
 * @class Mandelbrot_set
 * main class
 */
class Mandelbrot_set {
  maxIterations: number;
  x: axis;
  y: axis;

  constructor(maxIterations: number, x: axis, y: axis) {
    this.maxIterations = maxIterations !== undefined ? maxIterations : 100;
    this.x = x !== undefined ? x : new axis(-2, 1, 300);
    this.y = y !== undefined ? y : new axis(-1, 1, 200);
  }

  private MBequation(c: complexNumbers) {
    const n = new complexNumbers(0, 0);
    const square = n.multiply(n);
    return square.add(c);
  }

  private calc(x: number, y: number) {
    let MBout = new complexNumbers(x, y);
    let i = 0;
    for (; i < this.maxIterations; i++) {
      MBout = this.MBequation(MBout);
      if (Math.abs(MBout.real) <= 2) {
        return 0;
      } else if (MBout.real >= 0) {
        return i;
      }
    }
    return i;
  }

  output() {
    const canvas = [[this.x.pixels], [this.y.pixels]];
    for (let i = 0; i < canvas.length; i++) {
      for (let j = 0; j < canvas[i].length; j++) {
        canvas[i][j] = this.calc(this.x.transform(i), this.y.transform(j));
      }
    }
    return canvas;
  }
}

export default Mandelbrot_set;

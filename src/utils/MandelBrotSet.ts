/*
https://en.wikipedia.org/wiki/Mandelbrot_set

math notes

 z_n+1 = (z_n)^2 + c
 c and z are complex numbers
 z_n
 n = 0 || positive integer
 z_0 = 0

 c is in the Mandelbrot set

c is in the Mandelbrot set if the absolute value of zn never becomes larger 
c = MB when c < |z_n|
ex
c = 1
n = 0
f(n) = (n)^2 + 1
f(0) = 0^2 + 1 = 1
f(1) ...

explod us 
infinty is MB = black



n = goes to infinity
high n is the more accurate the image is


c is on the complex plane

x axis = -2 - 1 = real numbers
y axis = -1 - 1 = imaginary 


n is start 

m max iteration



output canvase 
*/




class Mandelbrot_set {
  start:number
  maxIterations:number
  x:number
  y:number
  canvas: number[][]

  constructor (start:number, maxIterations:number, x:number, y:number) {
    this.start = start == undefined ? start: 0
    this.maxIterations =  maxIterations == undefined ? start: 100
    this.x =  x == undefined ? x : 100
    this.y =  y == undefined ? y: 100
    this.canvas = [[this.x],[this.y]]
       
      
    }
  output(){

  }

}


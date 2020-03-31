// i^2 = -1
// a+bi
class complexNumbers {
  real: number
  imaginary: number
  
  constructor (real:number, imginary:number){
    this.real = real
    this.imaginary = imginary
  }
  
  add(temp:complexNumbers){
    const I = this.imaginary + temp.imaginary
    const R = this.real + temp.real
    return new complexNumbers(R,I)
  }
  sub(temp:complexNumbers){
    const I = this.imaginary - temp.imaginary
    const R = this.real - temp.real
    return new complexNumbers(R,I)
  }
  
}
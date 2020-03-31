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
  multiply(temp:complexNumbers){
    //cycle i = sqrt(-1)
    // i * i = -1
    // i * -1 = -i
    // i * -i = -(-1) = 1
    // i * 1 =  i
    const R = this.real * temp.real
    const I = this.imaginary 
  }
  divide(temp:complexNumbers){
    /**
     * a+bi   c-di  
     * ---- * ---- 
     * c+di   c-di      
     * 
     * 
     * ac + bd     bc - ad
     * ------- + i -------
     * c^2 + d^2   c^2 + d^2
     * */ 
    const R = this.real * temp.real
    const I = this.imaginary 
  }
}
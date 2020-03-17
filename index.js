// Add your Circle class here
class Circle {
  constructor (radius) {
    this.radius = radius
  }
  
  get diameter(){
    return this.radius*2
  }
  
  get circumference () {
    return 3.14 * this.diameter
  }
  set (){}
}
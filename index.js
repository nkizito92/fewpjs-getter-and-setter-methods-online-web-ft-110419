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
  
  get area () {
    return 3.14 * this.radius**2
  }
  set diameter(diameter){
    this.radius = diameter / 2;
  }
  
  set circumference(diameter) {
    this.radius = diameter 
  }
}
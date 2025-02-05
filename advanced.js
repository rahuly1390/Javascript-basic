// Higher Order Functions - Are functions which Accept a function in paramter or return a function or both.
// For Ex: ForEach Method always takes  another function inside it.
//Constructor Function
//A Function is invoked with new keyword returns an object if we use "this" keyword inside that function it returns an object with all the properties and methods such functions are called Constructor function.
function courseDetails(){
    this.name = 'Btech',
    this.year = 4;
    this.university = 'AICTE'
}

var course1 = new courseDetails();
var course2 = new courseDetails();
var course3 = new courseDetails();

function shape(color){
    this.width = 12;
    this.height = 12;
    this.radius = 4;
    this.color = color;
    this.pressable = true;
}

var redshape = new shape(red);

console.dir(document);

//IIFE(Immediately Invoked Function Expressions)
(function chai(){
    //named IIFE
    console.log('DB Connected');
})();

((name) =>{
    //Simple IIFE with Parameter
    console.log(`new Arrow Function IIFE ${name}`)
}) ('Rahul');
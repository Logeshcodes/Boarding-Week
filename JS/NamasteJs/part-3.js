// hoisting - when we access the variable before the initialization 

console.log(a);
getName()
console.log(getName2)

var a = 5 ;

function getName(){
    console.log("Hello Js")
}

var getName2 = ()=>{
    console.log("Hi Js")
}
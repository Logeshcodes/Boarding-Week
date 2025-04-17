// block scope also known as compound statement 

// block is used to combine multiple js statement into one group 


let p = 11 ;

if( p === 11) console.log("okay") ;

if(p === 11){

    // compound statement 
    let a = 10 ;
    console.log(a)
}





var m = 1 ;
let n = 2 ;

if(p === 11){
    var m = 10 ;
    let n = 20 ;      // block-scope = allocated memory in Block
    const o = 30 ;    // block-scope = allocated memory in Block

    console.log(m)
    console.log(n)
    console.log(o)
}
console.log(m) ;  // shadowing 
console.log(n) ;  // shadowing - but it memory location was different - Script 


// illgal shadowing

// let a = 55 ;

// if(true){
//     var a = 5 ;
// }
// Scope chain 

// Whenever an execution context is created , along with ( lexical environment ) also created .

// lexical environment is the local memory along with lexical environment of the parent .


function a(){

    function b(){
        console.log(x)
    }
    b()
}
var x = 10 ;

a()


import React from "react";
import Child from "./Child";

const Parent = () =>{

    let pname = 'Logesh';

    function print(val){
        console.log(val) ;
    }

    return(
        <>          
            <Child   name={pname}  show={print} />
        </>
    )
}

export default Parent;
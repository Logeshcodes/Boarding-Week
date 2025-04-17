function x(){

    for(var i=1;i<=5;i++){   // change let & var
       function c(i){
        setTimeout(()=>{
            console.log(i)
        }, i*1000)
       }
       c(i)
    }
}

x()
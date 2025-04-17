function reverse(str){

    if(str.length < 2) return str ;

    return reverse(str.slice(1)) + str[0] ;
}

let str = 'Logesh'


console.log(reverse(str));
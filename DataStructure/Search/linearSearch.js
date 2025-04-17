function linearSearch(arr , target){

    for(let i=0 ; i< arr.length-1 ; i++){
        if(arr[i] === target) return i ;
    }
    return -1 ;
}

let arr = [2, 4 , 6, 8 ,10 ];

let target = 8;

console.log(linearSearch(arr , target))
class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{

    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    isEmpty(){
        return this.size === 0 ;
    }


    prepend(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
    }

    print(){

        let listValues = '';

        let curr = this.head ;

        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next ;
        }

        return listValues ;
    }


    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            let curr = this.head ;

            while(curr.next){
                curr =curr.next ;
            }

            curr.next = node ;
        }

        this.size++ ;
    }


    insert( value , index ){

        if(index < 0 || index > this.size ) return ;

        if(index === 0){
            this.prepend(value);
        }else if( index === this.size){
            this.append(value)
        }else{

            let node = new Node(value);

            let curr = this.head ;

            for(let i=0;i< index -1 ; i++){
                curr = curr.next ;
            }

            node.next = curr.next ;
            curr.next = node ;

            this.size++
        }
    }


    removeByValue(value){

        if( this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
            return ;
        }

        let curr = this.head ;
        let prev = null ;

        while( curr && curr.value !== value){
            prev = curr ;
            curr = curr.next;
        }

        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }



    }


    removeByIndex(index){

        if(index < 0 || index > this.size) return ;

        if( index === 0){
            this.head = this.head.next ;
            this.size-- ;
            return ;
        }


        let curr = this.head ;
        let prev = null ;

        for(let i=0; i< index ; i++){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
    }


    midElement(){

        let slow = this.head ;
        let fast = this.head ;

        while( fast!==null && fast.next !== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }

        return slow.value ;
    }


    reverse(){

        let curr =this.head ;
        let prev = null ;

        while(curr){
            let next = curr.next ;
            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }
        this.head = prev ;
    }

    findDuplicate(){

        let set = new Set();

        let curr = this.head ;
        let duplicate = new Set();

        while( curr){

            if(set.has(curr.value)){
                duplicate.add(curr.value);
            }else{
                set.add(curr.value)
            }

            curr =curr.next ;
        }

        return [...duplicate]
    }

    removeDuplicate(){

        let set = new Set();
        let curr = this.head;

        let arr = [] ;

        while(curr){

            if(!set.has(curr.value)){
                set.add(curr.value);
            }else{
                arr.push(curr.value)
            }

            curr = curr.next ;
        }

        for(let i=0;i< arr.length ; i++){
            this.removeByValue(arr[i])
        }
    }


    toArray(){

        let curr = this.head ;

        let arr = []

        while(curr){
            arr.push(curr.value);

            curr =curr.next ;
        }

        return arr ;
    }



}


const list =  new LinkedList();

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.prepend(5)



list.append(60)
list.append(60)

list.insert( 25 , 2)

list.removeByValue(20)

list.removeByIndex(1)

console.log(list.print())
list.reverse();
console.log(list.print())


console.log("mid Element: " ,list.midElement())


console.log("Duplicate : " ,list.findDuplicate())

list.removeDuplicate()

list.reverse();
console.log(list.print())


console.log(list.toArray())



let arr = [1,2,3,4,5];

function arrToLinkedList(arr){

    let list = new LinkedList();

    for(let i=0 ; i< arr.length ; i++){
        list.append(arr[i])
    }

    return list.print()
}

let str = 'madam';

function isPalindrome(str){

    let list = new LinkedList();

    for(let i=0;i< str.length ; i++){
        list.prepend(str[i])
    }

    let res = list.print()

    return res === str ;

}

console.log(isPalindrome(str))
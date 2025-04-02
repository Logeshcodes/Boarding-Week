class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{

    constructor(){
        this.head = null ;
        this.size = 0;
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

    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            let curr = this.head ;

            while(curr.next){
                curr = curr.next ;
            }
            
            curr.next = node ;
        }

    }

    print(value){

        let curr = this.head ;
        let listValues = ''

        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next ;
        }
        return listValues ;

    }

    insert(value , index){

        if(index < 0 || index > this.size ){
            return ;
        }

        let node = new Node(value);

        let curr = this.head ;

        for(let i=0;i< index -1 ; i++){
            curr = curr.next ;
        }

        node.next = curr.next ;
        curr.next = node ;

        this.size++ ;
    }

    removeByValue(value){

        let curr = this.head ;

        if( this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
            return ;
        }

        let prev = null ;

        while( curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }



    }


    removeByIndex(index){

        if(index < 0 || index > this.size ){
            return ;
        }


        let curr = this.head ;
        let prev = null ;

        for(let i=0;i< index ;i++){
            prev =curr ;
            curr =curr.next ;
        }

        prev.next = curr.next ;
        this.size-- ;

    }

    midElement(){

        let slow = this.head ;
        let fast = this.head ;

        while( fast!== null && fast.next !== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }

        return slow.value ;
    }

    reverse(){

        let curr = this.head ;

        let prev = null ;

        while( curr){

            let next = curr.next ;
            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }

        this.head = prev ;

    }

    findDuplicates(){


        let curr = this.head ;

        let set = new Set();

        let arr = []

        while(curr){

            if(!set.has(curr.value)){
                set.add(curr.value);
            }else{
                arr.push(curr.value);
            }

            curr = curr.next ;
        }


        for(let i=0 ; i < arr.length ; i++){

            this.removeByValue(arr[i])
        }

        return arr ;

    }
}

const list = new LinkedList()

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(60)
list.append(60)

list.insert(25 , 2)


list.removeByValue(30)
list.removeByIndex(2)
console.log(list.print())
list.reverse()
console.log(list.print())

console.log(list.midElement())

console.log(list.findDuplicates())


console.log(list.print())
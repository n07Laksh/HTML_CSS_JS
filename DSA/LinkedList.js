console.log("Linked List");

class LinkedList{
    constructor(data){
        this.head = {
            val:data,
            next:null
        };
        this.tail = this.head;
        this.len = 1;
    }
       addNode(value){
        let nodeval = { 
            val: value,
            next:null
        }
        this.tail.next = nodeval;
        this.tail = nodeval;
        this.len += 1;
        }
// iteraton
        traversing(){
            let count = 0;
            let currNode = this.head;
            while(count< this.len){
                // console.warn(currNode);
                currNode = currNode.next;
                count++;
            }
        }
        update(value,pos){
            let count = 1;
            let currNode = this.head;
            while(count < this.len + 1){
                if(count == pos){
                    currNode.val = value;
                }
                currNode = currNode.next;
                count++;
            }
        }
        deleteNode(ind){
            let count = 1;
            let lead = this.head;
            if(ind === 1){
                this.head = this.head.next;
                this.len -= 1;
            }else{
                while(count < ind - 1){
                    lead = lead.next;
                    count++;
                }
                let nextNode = lead.next.next;
                lead.next = nextNode;
                this.len -= 1;
            }
        }

        insertNode(value,pos){
             let counter = 1;
             let currentNode =this.head;
             while(counter > pos){
                counter++
                currentNode = currentNode.next;
             }
             let nextNode = currentNode.next;
             currentNode.next = {
                val:value,
                next: nextNode
             }
             this.len += 1;
        }
    
}

const list  = new LinkedList(100);
list.addNode(200)
list.addNode(300)
list.addNode(400)
list.addNode(500)
// console.log(list)
// list.traversing();
list.update(222,1);
list.deleteNode(5)
list.insertNode(100000,4)
// list.insertNode(1111111,4)
console.log(list)
function createNode(data){
    return {
        data: data,
        next: null
    }
}

function addAtHead(head,data){
    let newNode = createNode(data)
    newNode.next = head
    head=newNode
    return head
}

let head = null
head = addAtHead(head,10)
head = addAtHead(head,20)
head = addAtHead(head,30)
head = addAtHead(head,40)
console.log("head",head)
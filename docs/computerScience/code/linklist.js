class Node{
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkList{
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        let currentNode = this.head;
        while(currentNode && currentNode.el != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(el, item) {
        const newNode = new Node(el);
        let currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode.next;
    }
}
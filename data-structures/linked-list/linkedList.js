/**
 * A linked list node that references to the next value and stores a data value
 */
class LinkedListNode {
    next = null;
    data = null;

    constructor(data = null) {
        this.data = data;
    }
}

/**
 * A linked list implementation that inserts elements at the end and removes from a selected position (default 1st position). This is a simple linked list that points only to the next node, node the previous one.
 */
class LinkedList {
    head = null;
    /**
     * Returns the head node of the linked list
     * @returns {LinkedListNode} head node
     */
    peek() {
        return this.head;
    }

    /**
     * Returns the quantity of the elements in the linked list
     * @returns {number} length of the linked list
     */
    length() {
        let curr = this.head;
        if(!curr) return 0;
        let length = 1;
        while(curr.next) { length+=1; curr = curr.next; }
        return length;
    }


    /**
     * Push a data to the end of the list
     * @param {any} data
     */
    push( data ) {
        let insertionNode = new LinkedListNode(data);
        if(!this.head) this.head = insertionNode;
        else {
            let curr = this.head;
            while(curr.next) curr = curr.next;
            curr.next = insertionNode;
        }
    }

    /**
     * Remove an element of the list given a position and returns its data. Returns null if the position doesn't exists. Default position is 1;
     * @param {number} position position to be removed
     */
    remove( position = 1 ) {
        if(!this.head) return null;
        let curr = this.head;
        let prev = null;
        for(let i = 0; i < position - 1; i++) {
            if(curr.next === null) return null;
            prev = curr;
            curr = curr.next;
        }

        if(curr === this.head) this.head = curr.next;
        else prev.next = curr.next;
        return curr.data;
    }
}

module.exports = LinkedList;
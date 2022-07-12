class LinkedList {
    _head = null;

    /**
     * Returns the head node of the linked list
     * @returns {Node} head node
     */
    head() {
        return this._head;
    }

    /**
     * Returns the tail node of the linked list
     * @returns {Node} tail node
     */
    tail() {
        let curr = this._head;
        while(curr.next) curr = curr.next;
        return curr;
    }

    /**
     * Returns the quantity of the elements in the linked list
     * @returns {number} length of the linked list
     */
    length() {
        let curr = this._head;
        if(!curr) return 0;
        let length = 1;
        while(curr.next) { length+=1; curr = curr.next; }
        return length;
    }


    /**
     * Push node n to end of the list
     * @param {Node} n 
     */
    push(n) {
        if(!this._head) this._head = n;
        else {
            let curr = this._head;
            while(curr.next) curr = curr.next;
            curr.next = n;
        }
    }

    /**
     * Remove an element of the list if its exists
     * @param {Node} n node to be removed
     */
    remove(n) {
        let curr = this._head;
        let prev = null;
        while(curr.data != n.data) {
            prev = curr;
            curr = curr.next;
        }
        if(curr) {
            prev.next = curr.next;
        }
        return curr;
    }
}

module.exports = LinkedList;
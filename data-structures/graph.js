const LinkedList = require("./linkedList");

/**
 * A common graph implementing edges by linked lists
 */
class Graph {
    /**
     * @param {number} size number of vertex in graph
     * @param {Array<[indexSrc, indexDest, weigth]>} e list of edges containing vertex indices and weigths
     */
    constructor (size, e) {
        this._adj = new Array(size);
        for(let i = 0; i < size; i++) this._adj[i] = new LinkedList();
        for(const edge of e) {
            this._adj[edge[0]].push({weigth: edge[2] || 1, dest: edge[1]});
        }
    }

    /**
     * Get linked list adjacencies from an index
     * @param {number} index 
     */
    adj(index) {
        return this._adj[index] ? this._adj[index].head() : null;
    }
}

module.exports = Graph;
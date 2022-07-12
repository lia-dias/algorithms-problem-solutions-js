const Graph = require("../data-structures/graph");

/**
 * @param {Graph} G
 * @param {number} v 
 * @param {Array<number>} visited 
 * @param {Array<number>} recursionStack 
 */
function isCyclicVertexCheck(G, v, visited, recursionStack) {
    if( recursionStack[v] == 1 )
        return true;

    if( visited[v] == 1 )
        return false;

    visited[v] = 1;
    recursionStack[v] = 1;

    let curr = G.adj(v);
    while(curr) {
        if(isCyclicVertexCheck(G, curr.dest, visited, recursionStack)) return true;
        curr = curr.next;
    }
    recursionStack[v] = 0;
}

/**
 * 
 * @param {Graph} G 
 */
function isCyclic(G) {
    const visited = new Array(G.size());
    const recursionStack = new Array(G.size());
    for(let i = 0; i < G.size(); i++ ){
        if(isCyclicVertexCheck(G, i, visited, recursionStack)) return true;
    }
    return false;
}

module.exports = { 
    isCyclic
}
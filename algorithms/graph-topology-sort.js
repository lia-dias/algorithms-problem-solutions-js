/**
 * 
 * @param {Graph} G 
 */
function topologySort(G) {
    // do a BFS for each node assign the topology order
    const sortedIndexes = new Array();
    const visited = new Array(G.size());
    const recursionStack = new Array(G.size());
    for(let i = 0; i < G.size(); i++ ){
        visited[i] = 0;
        recursionStack[i] = 0;
    }
    for(let i = 0; i < G.size(); i++ ){
        if(topologySortIndex(G, i, visited, sortedIndexes, recursionStack) === 1)
            return [];
    }
    return sortedIndexes.reverse();
}

/**
 * 
 * @param {Graph} G 
 * @param {number} v 
 * @param {Array<number>} visited 
 * @param {Array<number>} sortedIndexes 
 */
function topologySortIndex(G, v, visited, sortedIndexes, recursionStack) {
    if(recursionStack[v] == 1)
        return 1;

    if(visited[v] === 0) {
        recursionStack[v] = 1;
        visited[v] = 1;
        let curr = G.adj(v);
        while(curr) {
            if(topologySortIndex(G, curr.dest, visited, sortedIndexes, recursionStack) === 1) return 1;
            curr = curr.next;
        }
        sortedIndexes.push(v);
        recursionStack[v] = 0;
    }
    return 0;
}

module.exports = {
    topologySort
}
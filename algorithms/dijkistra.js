/**
 * 
 * @param {Graph} G 
 * @param {number} v 
 * @returns Array<number> distance of each element to root
 */
function dijkistra(G, v) {
    const visited = new Array(G.size());
    const distance = new Array(G.size());
    const prev = new Array(G.size());
    for(let i = 0; i < G.size(); i++ ){
        visited[i] = 0;
        distance[i] = Infinity;
        prev[i] = null;
    }
    distance[v] = 0;
    let currNode;
    let currentMinIndex = v;
    while(currentMinIndex != - 1) {
        if(distance[currentMinIndex] === Infinity) {
            break;
        }
        visited[currentMinIndex] = 1;
        currNode = G.adj(currentMinIndex);
        while(currNode) {
            if(distance[currNode.dest] > distance[currentMinIndex] + currNode.weigth) {
                distance[currNode.dest] = distance[currentMinIndex] + currNode.weigth;
                prev[currNode.dest] = currentMinIndex;
            }
            currNode = currNode.next;
        }
        currentMinIndex = getMin(visited, distance);
    }
    if(currentMinIndex != -1) return null;
    return [distance, prev];
}

function getMin(visited, distance) {
    const minIndex = distance.map((d, index) => {
        if(visited[index] == 1) return [index, null];
        return [index, d];
    }).filter((v => v[1] != null)).sort((v, u) => v[1] - u[1]).map((v) => v[0]);
    return minIndex[0] || -1;
}

module.exports = {
    dijkistra
}
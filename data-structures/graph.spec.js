const Graph = require("./graph");
const assert = require("assert");

const graphSize = 5;
const relations = [[0,1], [1,3], [3,0], [2,4], [1,2]];

const graph = new Graph(graphSize, relations);

const adj0 = graph.adj(0);
assert(adj0.dest === 1);

const adj1 = graph.adj(1);
assert(adj1.dest === 3);
assert(adj1.next.dest === 2);

const adj2 = graph.adj(2);
assert(adj2.dest === 4);

const adj3 = graph.adj(3);
assert(adj3.dest === 0);

const adj4 = graph.adj(4);
assert(adj4 === null);

/* for(let i = 0; i < graphSize; i++) {
    let currNode = graph.adj(i);
    process.stdout.write(`${i} -> `);
    while(currNode) {
        process.stdout.write(`${currNode.dest} `);
        currNode = currNode.next;
    }
    process.stdout.write("\n");
} */
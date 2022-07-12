const assert = require("assert");
const Graph = require("./../data-structures/graph");
const { isCyclic } = require("./graph-cyclic-test");

const cyclicGraph = new Graph(3, [[0,1], [1,2], [2,0]]);
const acyclicGraph = new Graph(4, [[0,1], [1,2], [2,3]]);

assert(isCyclic(cyclicGraph) === true, "Graph should be cyclic");
assert(isCyclic(acyclicGraph) === false, "Graph should be acyclic");
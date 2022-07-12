const assert = require("assert");
const Graph = require("./../data-structures/graph");
const { dijkistra } = require("./dijkistra");

const acessibleGraph = new Graph(3, [[0,1,2], [1,2,3], [2,0,1]]);
const unacessibleNodesGraph = new Graph(4, [[0,1,2], [1,2,3], [2,0,1]]);

const dijkistraResult = dijkistra(acessibleGraph, 0);
assert( dijkistraResult[0][0] === 0, "Should have distance 0 for root");
assert( dijkistraResult[1][0] === null, "Should have no prev for root");
assert( dijkistraResult[0][1] === 2, "Should have distance 2");
assert( dijkistraResult[1][1] === 0, "Should have prev 0");
assert( dijkistraResult[0][2] === 5, "Should have distance 2");
assert( dijkistraResult[1][2] === 1, "Should have prev 0");

assert(dijkistra(unacessibleNodesGraph, 0) === null, "Should be null");

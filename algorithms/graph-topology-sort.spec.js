const assert = require("assert");
const Graph = require("./../data-structures/graph");
const { topologySort } = require("./graph-topology-sort");

const acyclicGraph = new Graph(4, [[0,1],[0,2],[1,3],[2,3]]);
const cyclicGraph = new Graph(4, [[0,1], [1,2], [2,3], [3,1]]);

// console.log(topologySort(acyclicGraph));
const topologyAcyclic = topologySort(acyclicGraph);
assert(topologyAcyclic[0] === 0, "Topology out of order");
assert(topologyAcyclic[1] === 2, "Topology out of order");
assert(topologyAcyclic[2] === 1, "Topology out of order");
assert(topologyAcyclic[3] === 3, "Topology out of order");

const topologyCyclic = topologySort(cyclicGraph);
assert(topologyCyclic.length === 0, "Topology should be empty");


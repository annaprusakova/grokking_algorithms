// the graph
const the_graph = {};

the_graph['start'] = {};
the_graph['start']['a'] = 6;
the_graph['start']['b'] = 2;

the_graph['a'] = {};
the_graph['a']['fin'] = 1;

the_graph['b'] = {};
the_graph['b']['a'] = 3;
the_graph['b']['fin'] = 5;

the_graph['fin'] = {};

//the cost table
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// the parents table
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

const findTheLowestNode = (costs: any) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
        const cost = costs[node];
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}


let node = findTheLowestNode(costs);

while (node !== null) {
    const cost = costs[node];
    const neighbors = the_graph[node];

    Object.keys(neighbors).forEach(function(n) {
        const new_cost = cost + neighbors[n];
        if (costs[n] > new_cost) {
          costs[n] = new_cost;
          parents[n] = node;
        }
      });

    processed = processed.concat(node);
    node = findTheLowestNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs);
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations: any = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

const finalStations = new Set();

while(statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();
    Object.keys(stations).forEach(station => {
        const statesForStation = stations[station];
        const covered = new Set([...statesNeeded].filter(s => statesForStation.has(s)));
        if(covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }
    });
    statesNeeded = new Set([...statesNeeded].filter(s => !statesCovered.has(s)));
    finalStations.add(bestStation);
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
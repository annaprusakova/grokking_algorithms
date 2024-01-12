interface Graph<T> {
    [key: string]: T[]
}

const personIsSeller = (name: string) => {
    return name.endsWith('m');
} 

const graph: Graph<string> = {};
graph.you = ['alice', 'bob', 'claire'];
graph.alice = ['peggy'];
graph.bob = ['anuj', 'peggy'];
graph.claire = ['tom', 'jonny'];

const search = (name: string) => {
    let searchQueue = graph[name];
    const searched = [];

    while (searchQueue.length > 0) {
        const person = searchQueue.shift();
        if (!searched.includes(person)) {
            if (personIsSeller(person)) {
                return `${person} is a mango seller!`;
            } else {
                searchQueue = searchQueue.concat(graph[person]);
                searched.push(person);
            }
        }
    }
    return 'Nobody is a seller';
}

console.log(search('you'));


const sum = (array: number[]): number => {
    if (array.length === 1) return array[0];
    return array[0] + sum(array.slice(1));
}

console.log(sum([2, 4, 6]));
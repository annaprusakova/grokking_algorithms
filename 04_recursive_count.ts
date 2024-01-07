const count = (array: number[]): number => {
    if (array.length === 0) return 0;
    return 1 + count(array.slice(1));
}

console.log(count([1, 2, 3]));
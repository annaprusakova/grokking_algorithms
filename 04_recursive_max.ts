const max = (array: number[]): number | null => {
    if (array.length === 0) return null;
    if (array.length === 1) return array[0];

    const subMax = max(array.slice(1));

    return array[0] > subMax ? array[0] : subMax;
}

console.log(max([1, 6, 4, 8]));
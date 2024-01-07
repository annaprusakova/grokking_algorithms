const quicksearch = (array: number[]): number[] => {
    if (array.length < 2) return array;

    const pivot = array[0];
    const less = array.slice(1).filter(x => x <= pivot);
    const greater = array.slice(1).filter(x => x > pivot);

    return quicksearch(less).concat(pivot, quicksearch(greater));
} 

console.log(quicksearch([10, 5, 2, 3]));
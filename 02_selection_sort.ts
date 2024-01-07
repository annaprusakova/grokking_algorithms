const findSmallestIndex = (array: number[]): number => {
    let smallestIndex = 0;
    let smallestElement = array[smallestIndex];

    for (let j = 1; j < array.length; j++) {
        if (array[j] < smallestElement) {
            smallestElement = array[j];
            smallestIndex = j;
        }
    }
    return smallestIndex;
}

const selection_sort = (array: number[]): number[] => {
    const sortedArray: number[] = [];
    
    for (let i = 0; i < array.length; i++) {
        const smallestIndex = findSmallestIndex(array);    
        sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }

    return sortedArray;
}

console.log(selection_sort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
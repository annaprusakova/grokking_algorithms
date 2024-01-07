const binary_search = (list: number[], item: number): number | null => {
 let low = 0;
 let high = list.length - 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        let guess = list[mid];

        if (guess === item) {
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        }
    }

    return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
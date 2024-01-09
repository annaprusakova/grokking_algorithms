interface HashTable<T> {
    [key: string]: T;
}

const book: HashTable<number> = {};
book['apricot'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

console.log(book);
interface HashTable<T> {
    [key: string]: T;
}

const voted: HashTable<boolean> = {};

const check_voter = (name: string): string => {
    if(voted[name]) {
        return 'kick them out!'
    } else {
        voted[name] = true;
        return 'let them vote!';
    }
}

console.log(check_voter('tom'));
console.log(check_voter('mickey'));
console.log(check_voter('tom'));

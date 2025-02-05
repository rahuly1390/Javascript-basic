const memoize = (fn) =>{
    const cache = {};
    return function (...args){
        const key = args.sort.toString();
        if(cache[key]){
            return cache[key];
        } else{
            const sum = fn(...args);
            cache[key]= sum;
            return sum;
        }

    };
};

const addSum = (a,b,c) => a+b+c;
const memoizeAdd = memoize(addSum);
console.log(memoizeAdd(1,2,3));
console.log(memoizeAdd(1,3,2));
console.log(memoizeAdd(3,2,3));
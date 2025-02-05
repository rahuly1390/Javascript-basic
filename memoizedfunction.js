// const add = (a,b) => a+b;
// const memoizedAdd = memoizeOne(add);
// memoizedAdd(1,2);
//3 Add functions is called to get new value
// memoizedAdd(1,2);
//3 Add functions is not executed previous value is returned
// memoizedAdd(2,3);
//5 Add functions is called to get new value
// console.log(memoizedAdd(1,2));
//Function Paramters => Output
//1.Object 2.map
const map = new Map();
function memoizeOne(fn){
    function temp(...args){
        const key = args.join("_");
        if(map.has(key)){
            console.log("Getting from cache");
            return map.get(key);
        }

        const result = fn(...args);
        map.set(key,result);

        return result;
    }
    return temp;
}
const add = (a,b) => a+b;
const memoizedAdd = memoizeOne(add);
console.log(memoizedAdd(1,2));
console.log(memoizedAdd(1,3));
console.log(memoizedAdd(1,2));

// const memoizeOne = (add) => {
//     const map = new Map();
//     return (a, b) => {
//         const obj = {
//             args: [a, b]
//         }
//         if(map.has(JSON.stringify(obj))) {
//             console.log('Add function is not executed: previous result is returned -> ', map.get(JSON.stringify(obj)));
//         }
//         else {
//             const output = add(a, b);
//             map.set(JSON.stringify(obj), output);
//             console.log('Add function is called to get new value -> ', output);
//         }
//     }
// }

// const memoizeAdd = memoizeOne(add);

// memoizeAdd(1, 2);
// memoizeAdd(1, 2);
// memoizeAdd(2, 3);
// memoizeAdd(2, 3);
const a = [1,2,3,[4,[5,6]],7,8];
const b = [1,2,3,{test:"key"},[4,[5,6]],7,8];

// const flattenArr = [];
function flattenArray(a,flattenArr){
for(let i=0;i<a.length;i++){
    if(typeof a[i] === 'number'){
        flattenArr.push(a[i]);
    } else{
        return flattenArray(a[i],flattenArr)
    }
}
return flattenArr;
}

function flattenMixArray(b,flattenArr){
    for(let i=0;i<b.length;i++){
        if(Array.isArray(b[i])){
            flattenMixArray(b[i],flattenArr)
        } else{
            flattenArr.push(b[i]);
        }
    }
    return flattenArr;
    }


console.log(flattenMixArray(b,[]));
console.log(flattenArray(a,[]));
// const result = flattenArray(a);
// console.log(result);

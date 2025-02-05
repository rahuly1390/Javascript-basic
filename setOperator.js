//Write a logic to get Unique objects from the array
// I/P : [{name:"Rahul"},{name:"Kiran"},{name:"Rahul"},{name:"Hope"},{name:"213213"}]
//O/P : [{name:"Rahul"},{name:"Kiran"},{name:"Hope"},{name:"213213"}]

const inputArray = [
    {name:"Rahul"},{name:"Kiran"},{name:"Rahul"},{name:"Hope"},{name:"213213"}
]
const uniqueNames = new Set();
const uniqueArray = inputArray.filter(item =>{
    if(!uniqueNames.has(item.name)){
        uniqueNames.add(item.name);
        return true;
    }
    return false;
});
console.log(uniqueArray);
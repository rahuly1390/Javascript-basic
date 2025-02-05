//DeepClone Object
const deepClone = obj => JSON.parse(JSON.stringify(obj));

//Random Number Generator
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max -min + 1)) + min;
}

//Check if array is empty
const isEmptyArray = arr => Array.isArray(arr) && arr.length === 0;

//Unique Array Elements
const uniqueArray = arr => [... new Set(arr)];

//Convert Camel Case to snake case
const camelCase = str => str.replace(/([A-Z])/g,"_$1").toLowerCase();

//Get URL Paramerters
const getUrlParameters = Object.fromEntries(new URLSearchParams(window.location.search));

//Captialize First Letter of Each Word
const capitalizeWords = str => str.replace(/\b\w/g, char => char.toUpperCase());

//Check if Object is empty
const isEmptyObject = obj => Object.keys(obj).length === 0;


//LRU cache automatic cache clear 

// approach 1: which came to my mind at first 
/* 
  lets have a cache array in which i'll be putting cache data 
and will try to add the time when we have added it in it.
will run a auto clear cache function after certain time and it will check 
sort the array based on time, the items which are added.
will remove least recently used 
*/
let count = 0;
let cache = new Array(5);
cache.fill({ item: "2", time: 10 });


function addToCache(data) {
  let currentTime = Date.now();
  cache.push({ item: data, time: currentTime + count });
  count++;
}

function LRU(data) {
  cache.sort((a, b) => a - b);
  let leastRecentlyUsed = cache[0];
  console.log("leastRecentlyUsed", leastRecentlyUsed);
  cache.shift();

  addToCache(data);
}

function pushDataToCache(data) {
  if (cache.length !== 5) {
    addToCache(data);
  }
  else {
    LRU(data);
  }
}

pushDataToCache(40);
pushDataToCache(50);
pushDataToCache(60);
pushDataToCache(30);
pushDataToCache(10);
pushDataToCache(1);
pushDataToCache(50);

console.log(cache);

function getValueFromCache(data){
  let finding = cache.find(item => item.item === data);
  if(!finding){
    console.log(data, "Not found");
    return;
  }
  console.log(data, "Yes item found",finding);
}

getValueFromCache(50);
getValueFromCache(40);
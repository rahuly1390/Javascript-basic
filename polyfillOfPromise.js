// Promises

// 1 FullFilled
// 2 Pending
// 3 Rejected

const promise1 = new Promise((resolve,reject)=>{
    resolve("TID Success")
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('TID Failed')
    },1000)
})

const promise3 = 10
// Promise.all

// Input is array of Promises or any values
// Return array of results of input promises
// Wait for all promises to be resolved or any to be rejected.
// You will not get result if any of promise is rejected
// But get in the code for all

Promise.all([promise1,promise2,10])
.then(result => console.log(result))
.catch(e => console.error(e))

Promise.myAll = (arrayOfPromises) =>{
    return new Promise((resolve,reject)=>{
        const results = []
        let counter = 0;
        for(let i=0; i<arrayOfPromises.length ;i++){
            Promise.resolve(arrayOfPromises[i]).then(data =>{
                results[i]=data;
                counter++;
                if(counter === arrayOfPromises.length){
                    resolve(results)
                }
            }).catch(e =>{
                reject(e)
            })
        }
    })
}

Promise.myAll([promise1,promise2,10])
.then(result => console.log(result))
.catch(e => console.error(e))
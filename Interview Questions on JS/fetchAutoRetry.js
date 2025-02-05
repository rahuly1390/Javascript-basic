//Create a fetchWithAutoRetry(fetcher,count) which automatically fetch again when error happens, until the maximum count is met.
// 
async function fetchWithAutoRetry(fetcher,maximumRetryCount = 1){
    if(maximumRetryCount > 0){
        try {
            console.log('in try block=',maximumRetryCount);
            const result = await fetcher();
            return result;
        } catch (error) {
            console.log('in catch block=',maximumRetryCount);
            const result = await fetchWithAutoRetry(fetcher,maximumRetryCount);
            return result;
        }
    }
    throw new Error('max retry count reached');
}

const p1 = () => new Promise((resolve,reject) => resolve('p1'));
const p2 = () => new Promise((resolve,reject) =>{
    if(Math.random() > 0.5){
        resolve('p2');
    } else{
        reject('p2');
    }
});

(async function a() {
    try{
        const result = await fetchWithAutoRetry(p1,2);
        console.log('result',result)
    } catch(e){
        console.log('error from fetchRetry==',e);
    }
})();
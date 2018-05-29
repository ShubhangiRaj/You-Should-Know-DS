// Given an array arr[0..n-1] of distinct elements and a range [low, high].
// Find all numbers that are in range, but not in array. The missing elements should be printed in sorted order.

function findMissing(arr, low, high){
    let hashMap = {};
    for(let i = 0; i < arr.length; i++){
        hashMap[arr[i]] = true;
    }

    for (const prop in hashMap) {
        if (hashMap.hasOwnProperty(prop)) {
          console.log(`hashMap.${prop} = ${hashMap[prop]}`);
        } 
    }

    for(let i = low; i < high; i++){
        if(hashMap[i] !== true){
            console.log(i);
        }
    }
}

findMissing([1, 14, 11, 51, 15], 50, 55)
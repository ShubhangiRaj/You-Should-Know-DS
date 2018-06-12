function halfFrequency(arr){
    let hashMap = {};
    let len = arr.length;
    for(let i of arr){
        if(hashMap[i]){
            hashMap[i] += 1;
        }else{
            hashMap[i] = 1;
        }
    }

    for(let i in hashMap){
        if(hashMap[i] >= len/2){
            console.log(i);
        }
    }
}
halfFrequency([2,3,4,3])
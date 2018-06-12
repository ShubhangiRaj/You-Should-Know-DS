function countOnes(arr){
    let hashMap = {};
    for(let i of arr){
        if(hashMap[i]){
            hashMap[i] += 1;
        } else {
            hashMap[i] = 1;
        }
    }
    console.log(hashMap[1]);
}
countOnes([1,1,1,0,0,1,1])
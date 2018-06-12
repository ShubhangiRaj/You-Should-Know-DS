function twoOddOccurences(arr){
    let hashMap = {};

    for(let i = 0; i < arr.length; i++){
        if(hashMap[arr[i]]){
            hashMap[arr[i]] += 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }

    for(let i in hashMap){
        if(hashMap[i] % 2 !== 0){
            console.log(i);
        }
    }
}
twoOddOccurences([4, 2, 4, 5, 2, 3, 3, 1]);
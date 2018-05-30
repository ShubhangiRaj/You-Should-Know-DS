function rearrangeArray(arr){
    let len = arr.length;
    let hashMap = {};
    for(let i = 0; i < len; i++){
        if(!hashMap[arr[i]]){
            hashMap[arr[i]] = true;
        }
    }
    console.log(hashMap);
    for(let i = 0; i < len; i++){
        if(hashMap[i]){
            arr[i] = i;
        } else {
            arr[i] = -1;
        }
    }
    console.log(arr);
}
rearrangeArray([19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4]); 
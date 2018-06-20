function nonRepeating(str, k){
    let nonRepeatHashMap = {};
    let repeatHashMap = {};
    let arr = [];

    for(let i = 0; i < str.length; i++){
        if(nonRepeatHashMap[str[i]]){
            repeatHashMap[str[i]] = true;
            delete nonRepeatHashMap[str[i]];
            let pos = arr.indexOf(str[i]);
            if(pos > -1){
                arr[pos] = -1;
            }
        }
        if(!repeatHashMap[str[i]]){
            nonRepeatHashMap[str[i]] = true;
            arr.push(str[i]);
        }
    }
    console.log(nonRepeatHashMap);
    console.log(arr);
    console.log(repeatHashMap);
}
nonRepeating("geeksforgeekszfgeekscdngkl", 3);
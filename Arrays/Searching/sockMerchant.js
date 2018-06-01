function sockMerchant(n, ar) {
    let count = 0;
    let hashMap = {};
    // create hashmap to store occurences
    for(let i = 0; i < ar.length; i++){
        if(!hashMap[ar[i]]){
            hashMap[ar[i]] = 1;
        } else {
            hashMap[ar[i]] = hashMap[ar[i]] + 1;
        }
    }
    // analyse the occurences
    for(let i in hashMap){
        if(hashMap[i] !== 1){
            if(hashMap[i] % 2 == 0){
                let num = hashMap[i] / 2
                count = count + num;
            } else {
                let num =  Math.floor(hashMap[i] / 2) 
                count = count + num;
            }
        }
    }
    // console.log(hashMap);
    console.log(count);
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
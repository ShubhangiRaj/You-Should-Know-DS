function beautifulDays(i, j, k) {
    let start = i;
    let end = j;
    let arr = [];
    let count = 0;
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    console.log(arr);
    
    for(let el of arr){
        let reverseOfEl = reverseNum(el);
        let absDiff = Math.abs(reverseOfEl - el);
        if(absDiff % k == 0){
            count = count + 1;
        }
    }
    
    return count;
    
    function reverseNum(num){
        let temp = 0;
        let rem; 
        while(num > 0){
            rem = num % 10;
            num = Math.floor(num / 10);
            temp = temp * 10 + rem;
        }
        return temp;
    }
}
beautifulDays(20,23,6);
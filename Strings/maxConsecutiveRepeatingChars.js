function maxConsecutiveRepeatingChars(str){
    let count = 1;
    let maxCount = 0;
    let char = str[0];
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            count += 1;
        }
        if(count > maxCount){
            maxCount = count;
            char = str[i];
        }
        if(str[i] !== str[i+1]){
            count = 1;
        }
    }
    console.log(char + " " + maxCount);
}
maxConsecutiveRepeatingChars("aaaabbcbbb")

// complexity : O(n)
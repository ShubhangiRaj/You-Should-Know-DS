// Two strings are called k-anagrams if following two conditions are true.
// Both have same number of characters.
// Two strings can become anagram by changing at most k characters in a string.

function kAnagrams(str1, str2, k){
    let hashMap1 = {};
    for(let i of str1){
        if(hashMap1[i]){
            hashMap1[i] += 1;
        } else {
            hashMap1[i] = 1;
        }
    }

    let hashMap2 = {};
    for(let i of str2){
        if(hashMap2[i]){
            hashMap2[i] += 1;
        } else {
            hashMap2[i] = 1;
        }
    }

    console.log(hashMap1);
    console.log(hashMap2);

    let count = 0;
    for(let i in hashMap1){
        if(hashMap2[i]){
            count = Math.min(hashMap2[i], hashMap1[i]) + count;
        } 
    }
    if((str1.length - count) <= k){
        console.log("Yes");
    } else {
        console.log("No");
    }
}
kAnagrams("anagram", "grammar", 3)
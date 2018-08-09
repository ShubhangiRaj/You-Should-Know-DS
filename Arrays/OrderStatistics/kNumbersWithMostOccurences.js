// Given an array of n numbers and a positive integer k. 
// The problem is to find k numbers with most occurrences, i.e., the top k numbers having the maximum frequency. 
// If two numbers have same frequency then the larger number should be given preference. 
// The numbers should be displayed in decreasing order of their frequencies.

// Input : arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9},
// k = 4
// Output : 5 11 7 10

function findNumbers(arr, k){
    let hashMap = {};
    for(let i of arr){
        if(hashMap[i]){
            hashMap[i] += 1;
        } else {
            hashMap[i] = 1;
        }
    }
    let freqArr = [];
    for(let i in hashMap){
        freqArr.push({number : i ,count : hashMap[i]});
    }
    console.log(freqArr);
}

findNumbers([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4);


// Write a function which takes an array and prints the majority element (if it exists), otherwise prints “No Majority Element”. 
// A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).

function majorityElement(arr){
    let half = arr.length/2;
    // var counts = {};
    var hashMap = {};

    for (var i = 0; i < arr.length; i++) {
        // var num = arr[i];
        // counts[num] = counts[num] ? counts[num] + 1 : 1;
        if(hashMap[arr[i]]){
            hashMap[arr[i]] = hashMap[arr[i]] + 1;
        } else {
            hashMap[arr[i]] = 1;
        }
        if(hashMap[arr[i]] > half){
            console.log(arr[i]);
            return arr[i];
        }
    }
    console.log("no majority element");
}
majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])
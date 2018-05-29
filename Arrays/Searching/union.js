// Given two sorted arrays, find their union and intersection.

module.exports = function union(arr1, arr2){
    let i = j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            console.log(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]){
            console.log(arr2[j]);
            j++;
        } else if (arr1[i] == arr2[j]){
            console.log(arr1[i]);
            i++;
            j++
        }
    }
    while (i < arr1.length){
        console.log(arr1[i]);
        i += 1;
    }
    while (j < arr2.length){
        console.log(arr2[j]);
        j += 1;
    }
}
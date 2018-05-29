// intersection of 2 arrays

module.exports = function findIntersection(arr1, arr2){
    let i = 0;
    let j = 0;
    while(i < arr1.length && i < arr2.length){
        if(arr1[i] == arr2[j]){
            console.log(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            i++;
        } else if(arr2[j] < arr1[i]){
            j++;
        }
    }
}
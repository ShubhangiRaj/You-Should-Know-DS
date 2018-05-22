// function reverseInGroup(arr, k){
//     let len = arr.length;
//     let resultArr = [];
//     while(len > 0){
//         for(let i = 0; i < k; i++){
//             resultArr.push(arr.pop());
//         }
//         len-- ;
//     }
// }
// reverseInGroup([1,2,3,4,5], 3)

// function reverseArr(arr, k){
//     let temp = k;
//     console.log(arr);
//     let resultArr = [];
//     while(arr.length !== 0){
//         while(temp > 0){
//             resultArr.unshift(arr.shift());
//             temp--;
//         }
//         temp = k;
//     }
//     console.log(resultArr);
// }
// reverseArr([1,2,13,4,5], 2)

function reverseArr(arr, k){
    let temp = k;
    let tempArr = [];
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.length <= k){
            newArr.push(arr.reverse());
        } else {
            tempArr = arr.splice(0,k);
            newArr.push(tempArr.reverse());
        }
    }
    let resultArr = [].concat(...newArr); 
    console.log(resultArr);
}
reverseArr([1,2,13,4,5], 3)
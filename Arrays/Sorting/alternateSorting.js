// Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.

// function alternateSorting(arr){
//     for(let i = 0; i < arr.length; i++){
//         // even index
//         if(i % 2 == 0){
//             let max = i;
//             for(let j = i+1; j < arr.length; j++){
//                 if(arr[j] > arr[max]){
//                     max = j;
//                 }
//             }
//             [arr[max], arr[i]] = [arr[i], arr[max]];
//         }
//         else if (i % 2 !== 0){
//             let min = i;
//             for(let j = i+1; j < arr.length; j++){
//                 if(arr[j] < arr[min]){
//                     min = j;
//                 }
//             }
//             [arr[min], arr[i]] = [arr[i], arr[min]];
//         }
//     }
//     console.log(arr);
// }
// alternateSorting([7, 1, 2, 3, 4, 5, 6]);

function alternateSorting(arr){
    let sortedArr = arr.sort();
    let i = 0; 
    let j = sortedArr.length - 1;

    while(i < j){
        console.log(arr[j]);
        j--; 
        console.log(arr[i]);
        i++;
    }
    if(arr.length % 2 !== 0){
        console.log(arr[i]);
    }
}
alternateSorting([7, 1, 2, 3, 4, 5, 6]);

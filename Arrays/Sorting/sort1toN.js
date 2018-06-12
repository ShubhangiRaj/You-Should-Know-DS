// You have given an array which contain 1 to n element, 
// your task is to sort this array in an efficient way and without replace with 1 to n numbers.
function sort(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i+1){
            arr[i] = i+1;
        }
    }
    console.log(arr);
}
sort([10, 7, 9, 2, 8, 3, 5, 4, 6, 1]);

// complexity O(n)
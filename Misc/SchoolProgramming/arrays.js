// print elements of an array
function printArr(arr){
    return arr.forEach(element => {
        console.log(element);
    });
}

printArr([5,6,2,3,1]);

// sum of array elements
function sumArrayElems(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}

sumArrayElems([5,6,2,3,1]);

// multiply array elems
function mulArrayElems(arr){
    let mul = 1;
    for(let i = 0; i < arr.length; i++){
        mul = mul * arr[i];
    }
    console.log(mul);
}

mulArrayElems([5,6,2,3,1]);

// search an element
function searchElem(arr, elem){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == elem){
            console.log("elem is in the array");
        }
    }
}

searchElem([5,6,2,3,1], 3);
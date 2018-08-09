function sortMatrix(arr){
    let len = arr[0].length;
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            tempArr.push(arr[i][j]);
        }
    }
    // sort tempArr
    let sortArr = tempArr.sort(function(a,b){
        return a - b;
    });

    console.log(sortArr);
    let k = 0;
    for(let i = 0; i < sortArr.length; i++){
        if(i == len){
            break;
        }
        for(let j = 0; j < len; j++){
            arr[i][j] = sortArr[k];
            k += 1;
        }
    }
    console.log(arr);
}
sortMatrix([[5, 4, 7], [1, 3, 8], [2, 9, 6]])


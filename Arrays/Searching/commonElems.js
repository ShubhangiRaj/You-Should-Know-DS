// Find common elements in three sorted arrays

module.exports = function commonElems(arr1, arr2, arr3){
    let x = y = z = 0;
    while(x < arr1.length && y < arr2.length && z < arr3.length){
        if(arr1[x] == arr2[y] && arr2[y] == arr3[z]){
            console.log(arr1[x]);
            x++;
            y++;
            z++;
        } else if(arr1[x] < arr2[y] && arr1[x] < arr3[z]){
            x++;
        } else if(arr2[y] < arr1[x] && arr2[y] < arr3[z]){
            y++;
        } else if(arr3[z] < arr1[x] && arr3[z] < arr2[y]){
            z++
        }
    }
}
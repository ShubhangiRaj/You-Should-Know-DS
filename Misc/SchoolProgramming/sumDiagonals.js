function sumDiagonals(arr){
    let primaryDiagonal = [];
    let secondaryDiagonal = [];

    // primary diagonal elems
    for(let i = 0; i < arr.length; i++){
        primaryDiagonal.push(arr[i][i]);
    }
    console.log(primaryDiagonal);

    // secondary diagonal elems
    for(let i = 0; i < arr.length; i++){
        let index = arr[i].length - 1 - i;
        secondaryDiagonal.push(arr[i][index]);
    }
    console.log(secondaryDiagonal);

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let primaryDiagonalSum = primaryDiagonal.reduce(reducer);
    let secondaryDiagonalSum = secondaryDiagonal.reduce(reducer);

    let result = primaryDiagonalSum + secondaryDiagonalSum;

    console.log(result);
}
sumDiagonals([[1,1,1],[1,2,1],[1,1,3]]);
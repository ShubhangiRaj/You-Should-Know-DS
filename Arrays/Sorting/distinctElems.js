function distinctElems(arr){
    let resultArr = [];
    for(let i of arr){
        if(resultArr.indexOf(i) == -1){
            resultArr.push(i);
        }
    }
    console.log(resultArr);
}
distinctElems([12, 10, 9, 45, 2, 10, 10, 45])
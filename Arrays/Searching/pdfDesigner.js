function pdfDesigner(arr, word){
    let start = "a";
    let end = "z";
    let hashMap = {};
    for(let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++){
        hashMap[String.fromCharCode(i)] = arr[i];
    }
    console.log(hashMap);
}
pdfDesigner([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
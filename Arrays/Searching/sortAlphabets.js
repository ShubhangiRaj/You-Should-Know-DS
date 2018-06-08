function sortAlphabets(arr){
    let charCodes = [];
    for(let i of arr){
        charCodes.push(i.charCodeAt());
    }
    console.log(charCodes);
}
sortAlphabets(["b", "d", "a", "c", "d"])
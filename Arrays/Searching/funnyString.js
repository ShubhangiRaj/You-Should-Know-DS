function funnyString(s) {
    let r = s.split("").reverse().join("");
    let asciiArrS = [];
    let asciiArrR = [];
    for(let i = 0; i < s.length; i++){
        asciiArrS.push(s[i].charCodeAt());
    }
    for(let i = 0; i < r.length; i++){
        asciiArrR.push(r[i].charCodeAt());
    }
    console.log(asciiArrS);
    console.log(asciiArrR);
    
    let diffArrR = [];
    let diffArrS = [];
    
    for(let i = 0; i < asciiArrR.length - 1; i++){
        let diff = Math.abs(asciiArrR[i] - asciiArrR[i+1]);
        diffArrR.push(diff);
    }
    for(let i = 0; i < asciiArrS.length; i++){
        let diff = Math.abs(asciiArrS[i] - asciiArrS[i+1]);
        diffArrS.push(diff);
    }
    if(compareArrs(diffArrR, diffArrS) == true){
        return "Funny"
    } else {
        return "Not Funny"
    }
    function compareArrs(arr1, arr2){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false
            }
        }
        return true
    }
}

funnyString("bcxz");
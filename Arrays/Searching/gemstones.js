function gemstones(arr){
    // in input strings find the chars that appear only once. 


        // let newArr = [];
        // for(let i = 0; i < arr.length; i++){
        //     let strArr = arr[i].split("");
        //     let newStrArr = []
        //     for(let j = 0; j < strArr.length; j++){
        //         if(strArr[j] !== strArr[j+1] && newStrArr.indexOf(strArr[j]) == -1){
        //             newStrArr.push(strArr[j]);
        //         }
        //     }
        //     newArr.push(newStrArr);
        // }
        // console.log(newArr);

        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            let strArr = arr[i].split("");
            let hashMap = {};
            for(j = 0; j < strArr.length; j++){
                if(!hashMap[strArr[j]]){
                    hashMap[strArr[j]] = 1
                } else {
                    hashMap[strArr[j]] = hashMap[strArr[j]] + 1;
                }
            }
            console.log(hashMap);

            let newStr = [];
            for(let i in hashMap){
                if(hashMap[i] == 1){
                    newStr.push(i);
                }
            }
            console.log(newStr);

            newArr.push(newStr);
        }
        console.log(newArr);
    // then find chars that appear in both strings.
        let result = newArr[0];
        for(let i = 1; i < newArr.length; i++){
            result = findIntersection(result, newArr[i]);
        }
        console.log(result);
        
}
gemstones(["abcdde", "baccd", "eeabg"])

function findIntersection(arr1, arr2){
    let resultArr = arr1.filter(elem => arr2.indexOf(elem) !== -1);
    return resultArr;
}
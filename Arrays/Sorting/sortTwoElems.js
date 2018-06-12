// function sortTwoElems(arr){
//     let hashMap = {};
//     for(let i of arr){
//         if(hashMap[i]){
//             hashMap[i] += 1;
//         }else{
//             hashMap[i] = 1;
//         }
//     }
//     console.log(hashMap);
    
//     let resArr = [];
//     while(hashMap[0] > 0){
//         resArr.push(0);
//         hashMap[0]--;
//     }

//     while(hashMap[1] > 0){
//         resArr.push(1);
//         hashMap[1]--;
//     }
//     console.log(resArr);
// }
// sortTwoElems([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);

function sortTwoElems(arr){
    let count0s = 0;
    let count1s = 1;

    for(let i of arr){
        if(i == 0){
            count0s += 1;
        }
        if(i == 1){
            count1s += 1;
        }
    }

    for(let i = 0; i < count0s; i++){
        arr[i] = 0;
    }
    for(let i = count0s; i < arr.length; i++){
        arr[i] = 1;
    }

    console.log(arr);
}
sortTwoElems([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
// a: [4,2,7] b: [5,6,3] , output: a's score 1, b's score 2

function compareSkills(arrA, arrB){
    let countA = 0;
    let countB = 0;
    for(let i = 0; i < arrA.length; i++){
        if(arrA[i] > arrB[i]){
            countA += 1;
        } else if(arrA[i] < arrB[i]) {
            countB += 1;
        } else {
            countA += 0;
            countB += 0;
        }
    }
    console.log("A's score: " + countA);
    console.log("B's score: " + countB);
}

compareSkills([4,2,7], [5,6,3]);
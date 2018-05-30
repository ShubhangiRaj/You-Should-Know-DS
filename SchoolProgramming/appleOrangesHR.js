function countApplesAndOranges(s, t, a, b,m,n, apples, oranges) {
    let start = s;
    let end = t;
    let positionsA = apples.map(elem => a + elem);
    let positionsO = oranges.map(elem => b + elem);
    
    console.log(positionsA);
    console.log(positionsO);
    
    let rangeArr = [];
    while(s !== t+1){
        rangeArr.push(s);
        s += 1;
    }
    
    console.log(rangeArr);
    
    let applesFallen = 0;
    for(let i = 0; i < positionsA.length; i++){
        if(rangeArr.indexOf(positionsA[i]) > 0){
            applesFallen += 1
        }
    }
    console.log(applesFallen);
    
    let orangesFallen = 0;
    for(let i = 0; i < positionsO.length; i++){
        if(rangeArr.indexOf(positionsO[i]) > 0){
            orangesFallen += 1
        }
    }
    console.log(orangesFallen);
}
countApplesAndOranges(7,11,5,15,3,2,[-2,2,1],[5,-6]);
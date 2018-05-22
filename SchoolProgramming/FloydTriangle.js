function floydTriangle(rowSize){
    let num = 1;
    for(let i = 1; i <= rowSize - 1; i++){
        let stars = "";
        for(let j = 1; j <= i; j++){
            stars += `${num} `;
            num++;
        }
        console.log(stars);
    }
}
floydTriangle(5);
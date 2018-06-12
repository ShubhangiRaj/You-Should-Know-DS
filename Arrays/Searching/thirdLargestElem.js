function thirdLargest(arr){
    let firstLargest = 0;
    let secondLargest = 0;
    let thirdLargest = 0;

    for(let i of arr){
        if(i > secondLargest && i > thirdLargest){
            firstLargest = i;
        } else if (i < firstLargest && i > thirdLargest){
            secondLargest = i;
        } else if(i < firstLargest && i < secondLargest){
            thirdLargest = i;
        }
    }

    console.log(firstLargest + " " + secondLargest + " " + thirdLargest);
}

thirdLargest([12, 13, 1, 10, 34, 16])

// TODO
function tidyNumber(num){
    let prev = 10;

    while(num){
        let rem = num % 10;
        num = num / 10;
        if(rem > prev){
            return false;
        }
        prev = rem;
    }
    return true;
}

tidyNumber(1234);
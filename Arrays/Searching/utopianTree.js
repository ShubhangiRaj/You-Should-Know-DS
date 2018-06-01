function utopianTree(n) {
    let height = 1;
    if(n == 0){
        // height remains unchanged
        console.log(height);
    }
    if(n == 1){
        // goes through 1 cycle i.e. spring
        console.log(height * 2);
    }
    
    function heightAfterOneYear(height){
        // in spring
        let afterSpring = heightAfterSpring(height);
        // in summer 
        let result = heightAfterSummer(afterSpring);
        return result;
    }
    
    function heightAfterSpring(height){
        height = height * 2;
        return height;
    }
    
    function heightAfterSummer(height){
        height = height + 1;
        return height;
    }
    // n = 2, 2 cycles , 1 year
    if(n % 2 == 0){
        let numOfYears = n / 2; // 1 year
        while(numOfYears > 0){
            height = heightAfterOneYear(height);
            numOfYears-- ; 
        }
        return height;
    } 
    if(n % 2 !== 0){
        let numOfYears = (n-1) / 2;
        while(numOfYears > 0){
            height = heightAfterOneYear(height);
            numOfYears-- ; 
        }
        height = heightAfterSpring(height);
        return height;
    }
    
}
utopianTree(3);
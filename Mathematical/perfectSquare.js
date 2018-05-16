function perfectSquare(num){
    let sqrt = Math.sqrt(num);
    if(sqrt % 1 == 0){
        return true
    } else {
        return false
    }
}
perfectSquare(25);
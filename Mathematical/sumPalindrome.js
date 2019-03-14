function reverseNum(n){
    let arr = n.toString().split("");
    let reverseArr = arr.reverse();
    let str = reverseArr.join("");
    let num = parseInt(str);

    return num;
}

function sumPalindrome(num){
    let reverse = reverseNum(num);
    if(num == reverse){
        console.log(num);
        return;
    }
    let sum = reverse + num; 
    sumPalindrome(sum);
}

sumPalindrome(23);
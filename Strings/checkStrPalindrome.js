// aba output: 1, abcde output: 0

function checkPalindrome(str){
    let reverseStr = str.split("").reverse().join("");
    if(str == reverseStr){
        return 1
    } else{
        return 0;
    }
}
checkPalindrome("aba");
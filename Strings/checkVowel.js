// Write a program to check whether a character is vowel or not.

function checkVowel(char){
    let result = char.match(/[aeiou]/);
    if(result !== null){
        console.log("char is a vowel");
    } else {
        console.log("is not a vowel");
    }
}
checkVowel("");
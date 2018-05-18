// Given a string, reverse only the vowels present in it and print the resulting string.
// practice, output: prectica
// geeksforgeeks, output: geeksforgeeks

function reverseString(str){
    let resultStr = str.split("").reverse().join("");
    console.log(resultStr);
}

function reverseVowels(str){
    let vowelStr = str.replace(/[]/)
    let arr = str.split("");

    // TODO

}
reverseVowels("practice");
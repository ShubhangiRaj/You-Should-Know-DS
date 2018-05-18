// Given two strings as input. Your task is to find the longer string of the two strings, 
// display the length of the longer string and concatenate the two strings and display the concatenated string.

function concatStrings(str1, str2){
    if(str1.length > str2.length){
        console.log(str1.length);
        console.log(str2.concat(str1));
    } else{
        console.log(str2.length);
        console.log(str1.concat(str2));
    }
}
concatStrings("Geeks", "forGeeks");
// Given a string and a sub-string, your task is to find the last index of that sub-string that appears in the given String.
// If the given sub-string doesn't appear in the string then print "-1".

function lastIndex(str, substring){
    let result = str.lastIndexOf(substring);
    console.log(result);
}
lastIndex("geeksforgeeks", "geeks");
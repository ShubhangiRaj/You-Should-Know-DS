// Given a list of names, display the longest name.

function displayLongest(...args){
    // TODO
    let argsArr = [...args];
    let longestLen = 0;
    argsArr.forEach(elem => {
        if(elem.length > longestLen){
            longestLen = elem.length;
        }
    })
    console.log(longestLen);

    let result = argsArr.filter(elem => 
        elem.length == longestLen
    )

    console.log(result);
}
displayLongest("Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks");
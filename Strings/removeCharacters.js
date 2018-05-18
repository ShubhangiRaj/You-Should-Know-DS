// AA123BB4 output: 1234

function removeChars(alphanum){
    let result = alphanum.replace(/[a-zA-Z]/g, "");
    console.log(result);

}
removeChars("AA123BB4");
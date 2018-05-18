// njnfn_+-jfoutput: 7

function countAlphabets(str){
    let result = str.replace(/[^a-zA-Z]/g , "");
    console.log(result.length);
}
countAlphabets("njnfn_+-jf");
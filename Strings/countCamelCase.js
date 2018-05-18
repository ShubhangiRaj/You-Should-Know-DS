// ckjkUUYII output: 5, HKJT output: 4

function countCamelCase(str){
    let result = str.replace(/[a-z]/g, "");
    console.log(result.length)
}

countCamelCase("ckjkUUYII");
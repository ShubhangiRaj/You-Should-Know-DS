// Input:
// cake pastry fish candy meat
// burger ham fish cake sauce

// Output:
// Change (as cake is repeating)

function sortTheFest(...args){
    let uniqueItems = [];
    let menuItems = [...args];
    for(let i = 0; i < menuItems.length; i++){
        if(uniqueItems.indexOf(menuItems[i]) == -1){
            uniqueItems.push(menuItems[i]);
            // menuItems.splice(i, 1);
        } else {
            console.log("CHANGE");
            return 
        }
    }
    console.log("BeHappy");
}   

sortTheFest("cake", "pastry", "fish", "candy", "meat", "burger", "ham", "fish", "cake", "sauce")
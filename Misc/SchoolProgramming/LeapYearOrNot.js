function leapYearOrNot(year){
    let lastTwoDigits = year % 100;
    let remainder = lastTwoDigits % 4;
    if(remainder == 0){
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}
leapYearOrNot(1920);
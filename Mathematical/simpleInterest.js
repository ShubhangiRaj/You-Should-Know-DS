function simpleInterest(p,t,r){
    let rate = r / 100;
    let amount = p * (1 + (rate*t));
    console.log(amount);
}
simpleInterest(42,8,15)
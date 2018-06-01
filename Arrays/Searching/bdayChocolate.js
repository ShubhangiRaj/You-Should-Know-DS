function solve(n, s, d, m) {
    let count = 0;
    let sum;
    let j, k;
    for(let i = 0; i < s.length - m ; i++){
       k = i; 
       j = 1;
       sum = 0;
       while(j <= m){
           sum = sum + s[k];
           k++;
           j++
       }if(sum == d){
           count++;
       }
    }
    console.log(count);
}
solve(5, [1, 2, 1, 3, 2], 3, 2);
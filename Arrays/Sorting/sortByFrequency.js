// Print the elements of an array in the decreasing frequency,
// if 2 numbers have same frequency then print the one which came first. 
function sort(arr){
    let hashMap = {};
    for(let i of arr){
        if(hashMap[i]){
            hashMap[i] += 1;
        } else {
            hashMap[i] = 1;
        }
    }
    console.log(hashMap);

  
    let keysSorted = Object.keys(hashMap).sort(function(a,b){return hashMap[a]-hashMap[b]})
    console.log(keysSorted); 
}
sort([2, 5, 2, 8, 5, 6, 8, 8]);

  // TODO 

  // A type of hashmap ds implemntation which inserts with increasing value;


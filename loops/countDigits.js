// Write a function that returns the count of digits in a number

function countDigits(n){
    if(n == 0) return 1;

    let count = 0;
    n = Math.abs(n);
    while(n>0){
        n = Math.floor(n/10)  // rounds down
        // Math.ceil  rounds up
        count++
        //n=n%10
    }
    return count
}

let num = 250;//3
//corner cases:
// n = 0
// n = -24465 abs

let result = countDigits(num)
console.log(result)
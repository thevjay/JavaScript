function palindrome(num){
    if (num <0) return -1
    let t=num
    let rev = 0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem
        num=Math.floor(num/10);
    }
    if (rev === t) return true
    else return false
}

let n = 121
let result = palindrome(n)
console.log(result)
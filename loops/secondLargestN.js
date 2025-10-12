// Find Second Largest number in an array

function secondLargest(arr){
    let L = arr[0]
    let SL = arr[0]
    for (let i=0;i<arr.length;i++){
        if(arr[i]>L){
            SL = L;
            L = arr[i]
        } else if (arr[i] > SL){
            SL = arr[i]
        }
    }
    return SL
}

let arr = [4,9,0,2,8,7,1]

let result = secondLargest(arr)
console.log(result)
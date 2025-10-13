// Find Second Largest number in an array
function secondLargest(arr){
    if(arr.length<2){
        return -1
    }
    
    let L = -Infinity
    let SL = -Infinity

    for (let i=0;i<arr.length;i++){
        if(arr[i]>L){
            SL = L;
            L = arr[i]
        } else if (arr[i] > SL && arr[i] < L){
            SL = arr[i]
        }
    }
    return SL
}

let arr = [10,30,20,30]

let result = secondLargest(arr)

console.log(result)
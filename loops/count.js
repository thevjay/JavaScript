// Write a function that returns the number of negative numbers in an array

function countNegatives(arr){
    let count = 0;
    for (let i = 0;i<arr.length;i++){
        console.log("i = ",i)
        if(arr[i] < 0){
            console.log(arr[i]," < 0")
            count+=1
        }
    }
    return count
}


let arr = [2,-9,17,0,1,-10,-4,8]
let result = countNegatives(arr)
console.log(result)
// Write a function that returns the largest number in an array

function findLargest(arr){
    // let L = -Infinity; INT_MIN / INT_MAX
    let L = arr[0];
    for (let i =0;i<arr.length;i++){
        if(arr[i] > L){
            L = arr[i];
        }
    }
    return L;
}

// let arr = [5,0,10,8,17,1]
let arr = [-9,-19,-3]
let result = findLargest(arr); //17
console.log(result)
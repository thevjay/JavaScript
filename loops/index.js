// for(let i = 0; i<10; i++){
//     console.log("hello world!")
// }

// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

function searchElement(arr,x){
    // TODO
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1;
}

let arr = [4,2,0,10,8,30]
let result = searchElement(arr,20)
console.log(result)
// SearchElement(arr, 4) => 0
// SearchElement(arr, 10) => 3
// SearchElement(arr, 49) => -1


// 1.Write a function squareNumbers(arr) that returns a new array where each number in the original array is squared using map method.

let arr=[1,2,3,4,5];
let x=arr.map(function(a){
    let x=a**2
    return x
})
console.log(x)

//output:---- [ 1, 4, 9, 16, 25 ]

// 2.Write a function toUppercase(arr) that returns a new array where each string in the original array is converted to uppercase using map method.

let arr1 = ["hiii", "hlooo", "welcome"]
let x2 = arr1.map(a=>a.toUpperCase())
console.log(x2);

//output:---- [ 'HIII', 'HLOOO', 'WELCOME' ]
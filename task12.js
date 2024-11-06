
// 1.write a function to check whether input num is even or odd 

function num(x){
    if(x%2==0){
        console.log(`${x} is even number`)
    }
    else{
        console.log(`${x} is odd number`)
    }
}
num(5)             // output:-- 5 is odd number
num(37)                      // 37 is odd number
num(68)                      // 68 is even number
num(52)                      // 52 is even number


//  2.write a function to check whether input string is palindrome or not

function word(y){
    if(y==y.split("").reverse().join("")){
        console.log(`${y} is palindrome`)
    }
    else{
        console.log(`${y} is not a palindrome`)
    }
}
word("madam")         // output:-- madam is palindrome
word("html")                    // html is not a palindrome
word("mom")                     // mom is palindrome
                            


//  3.write a function to check the largest number among three numbers.

function nums(a,b,c){
    if(a>b && a>c){
        console.log(`${a} is largest number`)
    }
    else if(b>a && b>c){
        console.log(`${b} is largest number`)
    }
    else{
        console.log(`${c} is largest number`)
    }
}
nums(5,32,9)       // output:--- 32 is largest number







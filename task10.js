
                                   //ternary operator//
//1...
var score=59;
score>=90?console.log("excellent"):score<90 && score>=60?console.log("good"):console.log("needs improvement")  
//output:---needs improvement


//2...
var day="monday";
day=="saturday"||day=="sunday"?console.log("weekend"):console.log("weekday")   
 //output:--- weekday


//3...
var str = "madm";
var isPalindrome = (str == str.split('').reverse().join('')) ? console.log("Palindrome") : console.log("Not a palindrome"); 
 //output:--not a palindrome


//4...
var str1="HELLO";
var output="";                       //output:-- H   
for(i=0;i<=str1.length-1;i++){               //  HE
    output+=str1[i]                          //  HEL
    console.log(output)                      //  HELL
}                                            //  HELLO

















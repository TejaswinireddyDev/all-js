// 1...
var arr=[3,5,10,15,23,22,25,35,56];
var result=[]
for (i in arr){
  if(arr[i]%5==0){
    result[result.length]=arr[i]
  }
}
console.log(result)
// Oputput:-- [ 5, 10, 15, 25, 35 ]


// 2...
var arr1=["html","csS","javascrIPT","react","angular","noDE","EXPREss"];
var result1=[]
for(i in arr1){
    if(arr1[i][arr1[i].length-1]==arr1[i][arr1[i].length-1].toUpperCase()){
      result1[result1.length]=arr1[i]
    }
}
console.log(result1)  
// Output:-- [ 'csS', 'javascrIPT', 'noDE' ]


// 3...
var arr2=["html","css","js","react","angular"];
var result2=[]
for (i in arr2){
    if(i%2==0){
        result2[result2.length]=arr2[i].toUpperCase()
    }
}
console.log(result2)
// Output:-- [ 'HTML', 'JS', 'ANGULAR' ]
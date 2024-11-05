//By using for loop

var aos=["mom","js","malayalam","html","css","dad"];
var output1=[];

for(i=0;i<aos.length;i++){
    var word=aos[i];
    if(word==word.split("").reverse().join("")){
        output1.push(word);
    }
    
}
console.log(output1)


//By using while loop

var aos=["mom","js","malayalam","html","css","dad"];
var output2=[];
var i=0;

while(i<aos.length){
    var word=aos[i];
    if(word==word.split("").reverse().join("")){
        output2.push(word);  
    }
    i++
}
console.log(output2)


//By using do-while loop

var aos=["mom","js","malayalam","html","css","dad"];
var output3=[];
var i=0;

do{
    var word=aos[i];
    if(word==word.split("").reverse().join("")){
    output3.push(word);
    }
    i++  
}
while(i<aos.length);
console.log(output3)

//output:-- [ 'mom', 'malayalam', 'dad' ]


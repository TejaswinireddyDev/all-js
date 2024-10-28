// 1.... voting eligibility
var age=14;
citizenship=true;
if (age>=18 && citizenship==true){
    console.log("people can vote")
}
else{
    console.log("people cannot vote")
}
// Output:-- people cannot vote 


// 2... admission to a club 
var age1=22;
hasInvitation=true;
if (age1>=21 && hasInvitation==true){
    console.log("canEnterClub")
}
else if (age1>=21 && hasInvitation==false){
    console.log("canEnterClub")
}
else if (age1<21 && hasInvitation==true){
    console.log("canEnterClub")
}
else{
    console.log("canNotEnterClub")
}
// output:-- canEnterClub


// 3...discount eligibility
var age2=25;
member=false;
if (age2>=65 && member==true){
    console.log("Eligible for Discount")
}
else if (age2>=65 && member==false){
    console.log("Eligible for Discount")
}
else if (age2<65 && member==true){
    console.log("Eligible for Discount")
}
else{
    console.log("Cannot Eligible for Discount")
}
// output:-- Cannot Eligible for Discount


// 4...scholarship eligibility
var gpa=2.5;
extracurriculars=true;
recommendation=true;
if (gpa>=3.5 && (extracurriculars==true || recommendation==true) ){
    console.log("Student is Eligible for Scholarship")
}
else if (gpa>=3.5 && (extracurriculars==true || recommendation==false)){
    console.log("Student is Eligible for Scholarship")
}
else if (gpa>=3.5 && (extracurriculars==false || recommendation==true)){
    console.log("Student is Eligible for Scholarship")
}
else{
    console.log("Student is not Eligible for Scholarship")
}
// output:-- Student is not Eligible for Scholarship


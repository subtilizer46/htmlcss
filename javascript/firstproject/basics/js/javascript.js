function myfun(){
    var res;
    if(confirm("Press the Button")){
        alert("you pressed Ok!!")
    }
    else{
        alert("You pressed Cancel")
    }
}

var a,b,result;
a=20
b=30
res=a+b
console.log(result)

var r;
r=10
var area;
area=3.14*r*r
console.log(area)

var fruit="mango"
document.getElementById("second").innerHTML=fruit

let x=10;
let y=20;
var r;
r=x+y;
document.getElementById("add").innerHTML=r;

function check(){
let age=document.getElementById("Age").value;
if(age>18){
    document.getElementById("para").innerHTML="Eligible";
}
else{
    document.getElementById("para").innerHTML="Not Eligible";
}
}

function calc(){
    
}
names=[]
function addnames(){
    var n=document.getElementById("add").value
    names.push(n)
    document.getElementById("output").innerHTML=names
}

function deletenames(){
    var d=document.getElementById("delete").value
    var index=names.indexOf(d)
    delete names[index]
    document.getElementById("output").innerHTML=names
}

function searchnames(){
    var s=document.getElementById("search").value
    if(names.includes(s)){
        document.getElementById("output2").innerHTML="FOUND"
    }
    else{
        document.getElementById("output2").innerHTML="NOT FOUND"
    }
}

function updatenames(){
    var u=document.getElementById("update").value
    var u1=document.getElementById("update1").value
    var ind=names.indexOf(u)
    names[ind]=u1
    document.getElementById("output").innerHTML=names
}
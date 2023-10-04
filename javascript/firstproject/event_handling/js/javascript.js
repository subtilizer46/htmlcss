document.getElementById("over").addEventListener("mouseover",function(){
    alert("HOVERED")
})

document.addEventListener("keydown", function(x) {
    if (x.key === "a") {
      alert("I pressed A");
    }
    if (x.key === "b") {
        alert("I pressed B");
    }
    if (x.key === "c") {
        alert("I pressed C");
    }
})

document.addEventListener("dblclick",function(){
    alert("I double-clicked")
})

document.getElementById("scroll").addEventListener("scroll",function(){
    alert("I Scrolled")
})
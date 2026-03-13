var side=document.querySelector(".sidenav")
var close=document.querySelector(".close")
var menu=document.getElementById("menu")
menu.addEventListener("click",function(){
    side.style.right=0
})
close.addEventListener("click",function(){
    side.style.right="-50%"
})
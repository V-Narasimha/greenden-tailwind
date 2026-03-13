var side=document.querySelector(".sidenav")
var close=document.querySelector(".close")
var menu=document.getElementById("menu")
var search=document.getElementById("search")
var container=document.getElementById("container")
var h2list=document.querySelectorAll("h2")
menu.addEventListener("click",function(){
    side.style.right=0
})
close.addEventListener("click",function(){
    side.style.right="-50%"
})
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    console.log(enteredValue)
    for(var c=0; c<h2list.length; c++)
    {
        if(h2list[c].textContent.toUpperCase().indexOf(enteredValue)<0)
        {
            h2list[c].parentElement.style.display="none"
        }
        else{
            h2list[c].parentElement.style.display="grid"
        }
        if(enteredValue=="")
        {
            h2list[c].parentElement.style.display="grid"

        }
    }
})
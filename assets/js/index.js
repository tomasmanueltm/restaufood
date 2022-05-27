let $ = (e)=> document.querySelector(e), 
Js = (e)=> document.querySelectorAll(e),
li = Js(".nav ul li")[1],
nav = $(".nav"), toggle = $(".toggle");

li.addEventListener("click", (e)=>{
    e.preventDefault();
    var posicao = e.target.title; 
    if($("#"+posicao+""))
        nav.classList.remove("block")
        $("#"+posicao+"").scrollIntoView();
})


toggle.addEventListener("click", ()=>{
    if(nav.classList[1])
        nav.classList.remove("block")
    else
        nav.classList.toggle("block")

})
const section = document.querySelectorAll("main div");
const btn  = document.querySelector("button");
const strokeTop = document.querySelector(".top");
const strokeMedium = document.querySelector(".medium");
const strokeBottom = document.querySelector(".bottom");
const link = document.querySelector(".link");


btn.addEventListener("click" , function() {
    section.forEach(function(i){
        i.classList.toggle("change");
        i.classList.toggle("back");
    })
})

btn.addEventListener("click" , function(){
    strokeTop.classList.toggle("top-line");
    strokeMedium.classList.toggle("medium-line");
    strokeBottom.classList.toggle("bottom-line");
    link.classList.toggle("showlink");
    link.classList.toggle("hidelink")
})

btn.addEventListener("click" , function(){
    strokeTop.classList.toggle("top");
    strokeMedium.classList.toggle("medium");
    strokeBottom.classList.toggle("bottom");
    
})

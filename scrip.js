window.onscroll=function(){
     if(document.documentElement.scrollTop>250){
        document.querySelector(".ir-arriba-container")
        .classList.add("show");   
    }else{
        document.querySelector(".ir-arriba-container")
        .classList.remove("show");
    }
}
document.querySelector(".ir-arriba-container")
.addEventListener("click", () => {
 window.scrollTo({
     top:0,
     behavior: "smooth"
 });
});

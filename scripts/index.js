const menu = document.querySelector(".menu-bar");
let openMenu = false;

menu.addEventListener("click",function(){
    if(!openMenu){
        document.getElementById("menu").style.width = "250px"
        menu.classList.add("open");

        openMenu = true;
    } else {
        document.getElementById("menu").style.width = "0"
        menu.classList.remove("open");

        openMenu = false;
    }
})

window.onload = function (){
    let date = new Date();

    document.getElementById("date").innerHTML = date.getFullYear();

}

window.onscroll = function (){

    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("gotop").style.bottom = "50px";
    } else {
        document.getElementById("gotop").style.bottom = "-50px";
    }

}

window.addEventListener("load",function(){
    if(this.event){
        document.querySelector("body").classList.add("loaded");
    }
})



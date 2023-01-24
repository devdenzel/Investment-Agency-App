/* Mobile Menu */

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})



/* Navbar Color Change On Scroll */

function scrollValue() {
    var navbar = document.querySelector('#navbar');
    // console.log(navbar)
    const scroll = window.scrollY;
    if (scroll < 100) {
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }
}

window.addEventListener('scroll', scrollValue);


function scrollValueNav() {
    var navbarNav = document.querySelector('#navbar');
    // console.log(navbar)
    const scroll = window.scrollY;
    if (scroll < 100) {
        navbarNav.classList.remove('scrolled-nav');
    } else {
        navbarNav.classList.add('scrolled-nav');
    }
}

window.addEventListener('scroll', scrollValueNav);

/* Toggle Buttons */

function swapText(){
    var id=document.getElementsByClassName('crypto')[0].id;
    if(id==1){
    document.getElementById("text").innerHTML = "$499<sub>/min";
    document.getElementsByClassName("crypto")[0].id=0;
    
    document.getElementById("text-one").innerHTML = "$999<sub>/min";
    document.getElementsByClassName("crypto")[0].id=0;
    document.getElementById("text-two").innerHTML = "$4999<sub>/min";
    document.getElementsByClassName("crypto")[0].id=0;
    }
    else {
        document.getElementById("text").innerHTML = "$999<sub>/min";
        document.getElementsByClassName("crypto")[0].id=1;
    
        document.getElementById("text-one").innerHTML = "$4999<sub>/min";
        document.getElementsByClassName("crypto")[0].id=1;
    
        document.getElementById("text-two").innerHTML = "$24999<sub>/min";
        document.getElementsByClassName("crypto")[0].id=1;
    
    }
}
/* function swapText(){
    var id=document.getElementsByClassName('crypto')[0].id;
    if(id==1){
    
    document.getElementById("text-one").innerHTML = "$999<sub>/min";
    document.getElementsByClassName("crypto")[0].id=0;
    
    else {
        
        document.getElementById("text-one").innerHTML = "$4999<sub>/min";
        document.getElementsByClassName("crypto")[0].id=1;
        document.getElementById("text-two").innerHTML = "$24999<sub>/min";
        document.getElementsByClassName("crypto")[0].id=1;
    }
} */
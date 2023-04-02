//smooth scrolling

const scrolltoTop = document.querySelector('.scrolltoTop');
const navbar  = document.querySelector('.nav-bar');
const scrollTop = ()=>{
    navbar.scrollIntoView({
        behavior:"smooth"
    });
}
// scrolltoTop.addEventListener('click',scrollTop())

//navbar styling

window.addEventListener('scroll',function(){
    let nav_bar = document.getElementsByClassName('nav-bar');
    if(window.pageYOffset>0){
        nav_bar.classList.add('hidden');
    }
    else{
        nav_bar.classList.remove('hidden');
    } 

})


//Mobile view
const mobileNavbar= document.querySelector('.mobile-navbar');
const nav_header = document.querySelector('.nav-bar');
const toggleNavbar = ()=>{
    // console.log('hi');
    nav_header.classList.toggle('active');
};

mobileNavbar.addEventListener('click',toggleNavbar)

// dark mode

const dark=document.querySelector('.dark');
const container = document.querySelector('.container');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
dark.addEventListener('click',()=>{
    container.classList.toggle('dark-mode-on');
    lightIcon.classList.toggle('hide');
    darkIcon.classList.toggle('hide');


})
"use Strict";

const All_btn = document.querySelector(".btn1");
const Breakfast_btn = document.querySelector(".btn2");
const Lunch_btn = document.querySelector(".btn3");
const Shakes_btn = document.querySelector(".btn4");
const container = document.querySelector(".container");
const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");
const fourth = document.querySelector(".fourth");


// breakfast
Breakfast_btn.addEventListener("click", function () {
  
  first.forEach((item) => {
    item.classList.remove("breakfast");
  });
  second.forEach((item)=>{
    item.classList.add('lunch');
  })
  third.forEach((item)=>{
    item.classList.add('shakes');
  })
  // fourth.classList.add('dinner');
});

Lunch_btn.addEventListener('click',function(){

})

// Lunch 

Lunch_btn.addEventListener('click',function(){
  second.forEach(item=>{
    item.classList.remove('lunch');
  })
  first.forEach(item=>{
    item.classList.add('breakfast');
  });
 
  third.forEach(item=>{
    item.classList.add('shakes');
  })

})


// shakes

Shakes_btn.addEventListener('click',function(){
  first.forEach(item=>{
    item.classList.add('breakfast');
  })
  second.forEach(item=>{
    item.classList.add('lunch');
  })
  third.forEach(item=>{
    item.classList.remove('shakes');
  })
})

All_btn.addEventListener('click',function(){
  first.forEach(item=>{
    item.classList.remove('breakfast');
  })
  second.forEach(item=>{
    item.classList.remove('lunch');
  })
  third.forEach(item=>{
    item.classList.remove('shakes');
  })
})


const btnDec = document.querySelector(".decrease");
const btnInc = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const value = document.querySelector(".value");
btnDec.addEventListener('click',function(){
      value.textContent--;
      value.style.color ='red';
      // console.log('click');
});
btnInc.addEventListener('click',function(){
  value.textContent++;
  value.style.color = 'green';
})
btnReset.addEventListener('click',function(){
  value.textContent = 0;
  value.style.color ='black';
})
var calculateButton = document.querySelector('.cal-button');
var input_height = document.querySelector('.input-height');
var input_weight = document.querySelector('.input-weight');
var resultButton = document.querySelector('.resultButton')
var bmi;
var height;
var weight;
var result  ;

input_height.addEventListener("input",function(){
    height = parseInt(input_height.value);
    // console.log(textContent);
    // inputValueHeight = (e.target.value);
})
input_weight.addEventListener("input",function(){
    // inputValueWeight = e.target.value;
    weight = parseInt(input_weight.value);
    // console.log(textContent);
    
})
// if(input_height.value>input_weight.value){

calculateButton.addEventListener('click',function(){
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    resultButton.textContent = bmi;
})
// } else{
//     alert('Too low value!!');
// }
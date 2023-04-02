function ConvertTemperature(value){
    value = parseFloat(value);
    document.getElementById('celcius').innerHTML = (value-32)/1.8;

    // const store = document.getElementById('celcius').innerHTML;
    // console.log(store);
    // document.write(store);
    // console.log("hello world")
}
function abc (){
    // value = parseFloat(value);
    let store = document.getElementById('num').value;
    store = parseFloat(store);
     document.getElementById('cel').innerHTML=(store-32)/1.8;
  
}
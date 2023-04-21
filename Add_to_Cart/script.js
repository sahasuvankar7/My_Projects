'use strict'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,push , onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL:"https://realtime-database-c5456-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListEl = document.getElementById('shopping-list');

addButtonEl.addEventListener('click',function(){

    //taking the input value
    let inputValue = inputFieldEl.value;

    //pushing the shopping list to database
   
    push(shoppingListInDB, inputValue);
    
    //Every time when enter any value in input section make sure that should be empty so here we are including empty string 
    clearInputFieldEl();

    appendItemToShoppingListEl(inputValue);
   
    // Every time when we insert any value then it must be viewed as a list form

    
    
    // console.log(inputValue);
});

onValue(shoppingListInDB, function(snapshot) {
    console.log(snapshot.val());
})
function clearInputFieldEl(){
    inputFieldEl.value="";
}
function appendItemToShoppingListEl(itemValue){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}
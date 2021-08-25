var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#outputDiv");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", eventHandler);

function eventHandler(){
 outputDiv.innerText = txtInput.value;  
}
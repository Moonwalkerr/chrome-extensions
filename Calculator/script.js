// Grabbing the input field from the DOM
const inputField = document.getElementById("calc_input");
    
// Adding event listeners to number input buttons with respect to their ids from the document
document.getElementById("1b").addEventListener("click",()=> input_field(1));
document.getElementById("2b").addEventListener("click",()=> input_field(2));
document.getElementById("3b").addEventListener("click",()=> input_field(3));
document.getElementById("4b").addEventListener("click",()=> input_field(4));
document.getElementById("5b").addEventListener("click",()=> input_field(5));
document.getElementById("6b").addEventListener("click",()=> input_field(6));
document.getElementById("7b").addEventListener("click",()=> input_field(7));
document.getElementById("8b").addEventListener("click",()=> input_field(8));
document.getElementById("9b").addEventListener("click",()=> input_field(9));
document.getElementById("0b").addEventListener("click",()=> input_field(0));
document.getElementById("add").addEventListener("click",()=> input_field("+"));
document.getElementById("subs").addEventListener("click",()=> input_field("-"));
document.getElementById("division").addEventListener("click",()=> input_field("/"));
document.getElementById("multi").addEventListener("click",()=> input_field("*"));

// Selecting the submit and reset buttons and adding their respective event listeners
document.getElementById("submit").addEventListener("click",calculate);
document.getElementById("reset").addEventListener("click",reset);

function calculate() {
    const value = inputField.value;
    const result = eval(value);
    inputField.value = result;
}

function reset() {
    inputField.value = "";
}

const input_field = (button_input) =>{
    inputField.value += button_input;
}


let inputBox = document.getElementById('input');
let buttons = document.querySelectorAll('button')

let string =""

let arr = Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
             try {
                string = eval(string);  // Evaluate the expression
                inputBox.value = string;  // Display result in the input box
            } catch (error) {
                inputBox.value = "Error";  // Show "Error" for invalid expressions
                string = "";  // Reset string after showing the error
            }
        }else if(e.target.innerHTML == 'AC'){
            string="";
            inputBox.value =string
        }else if(e.target.innerHTML== 'DEL'){
            string= string.substring(0,string.length-1)
            inputBox.value = string
        }
        else{
         string += e.target.innerHTML
        inputBox.value = string;
    }
    })
})
/*
let inputBox = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";  // This is the variable for keeping track of input

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);  // Evaluate the expression
                inputBox.value = string;  // Display result in the input box
            } catch (error) {
                inputBox.value = "Error";  // Show "Error" for invalid expressions
                string = "";  // Reset string after showing the error
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";  // Reset the string
            inputBox.value = string;  // Clear the input box
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove last character
            inputBox.value = string;  // Update input box
        } else {
            string += e.target.innerHTML;  // Append the clicked button's value to the string
            inputBox.value = string;  // Display the updated string in the input box
        }
    });
});*/

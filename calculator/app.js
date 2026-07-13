let display = document.querySelector(".userInput");


function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        let expression = display.value;
        if(expression){
            display.value = eval(expression);
        }
    }
    catch(error){
        display.value = 'Error';
    }
}

function changesign(){
    if(display.value>0){
        display.value = -(display.value);
    }
    else if(display.value<0){
        display.value = Math.abs(display.value);
    }
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function clearAll(){
    display.value = '';
}
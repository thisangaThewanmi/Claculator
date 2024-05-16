/*$('#0').on.click(
    console.log("0 clicked");
)}*/


/*
$("#0").click(function(){
    // Your code to be executed when the button is clicked
    console.log("Button clicked!");
});
*/


/*$("#0").on('click', () => {
    let text = 0;
    printNum(text);
});*/

function appendToDisplay(text){
    var currentVal = $('#display').val(); // Get the current value
    $('#display').val(currentVal + text); // Set the new value

}

function clearDisplay(){
    $('#display').val("");

}


/*
function calculate(){
   var displayValue = $('#display').val();
   var Answer =eval(displayValue);
    $('#display').val(Answer);
}*/

function calculate() {
    var displayValue = $('#display').val();

    // Ensure the display value only contains valid characters (numbers and arithmetic operators)
    if (/^[0-9+\-*/(). ]+$/.test(displayValue)) {
        try {
            var Answer = new Function('return ' + displayValue)();
            $('#display').val(Answer);
        } catch (e) {
            $('#display').val('Error');
        }
    } else {
        $('#display').val('Error');
    }
}


/*
 function dleteLastIndex(){
    var array = [];
    console.log(array);
    var display =$('#display').val();
    console.log("display:"+display);

    array.push(display);
    console.log("array"+ array);
    var length = array.length;
    console.log(length+"length");


 }
*/


function dleteLastIndex() {
    var display = $('#display').val();  // Retrieve the current value
    console.log("display:" + display);

    if (display.length > 0) {
        display = display.slice(0, -1);  // Remove the last character
        $('#display').val(display);  // Update the input field with the modified value
        console.log("Updated display:" + display);
    } else {
        console.log("Display is already empty.");
    }
}


function calculatePercentage() {
    var display = $('#display').val();  // Retrieve the current value
    console.log("display:" + display);

    if (display.length > 0 && !isNaN(display)) {
        var number = parseFloat(display);  // Convert to number
        var percentage = number / 100;  // Calculate percentage
        $('#display').val(percentage);  // Update the input field with the modified value
        console.log("Updated display with percentage:" + percentage);
    } else {
        console.log("Display is empty or not a number.");
    }
}




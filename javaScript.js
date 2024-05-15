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


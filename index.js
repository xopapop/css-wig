
function updateBackgroundColor () {
    if(colorPicker.value.length === 6) {
        myBackgroundColor = "#" + colorPicker.value;
    } 
    else {
        myBackgroundColor = "white";
        alert("Invalid Background Color");
    }
    

    theDiv.style.backgroundColor = myBackgroundColor;
    return;
}

var theDiv = document.querySelector("#the-div");
var colorPicker = document.querySelector("#color-picker");
var addBackgroundColorButton = document.querySelector("#add-background-color");
var myBackgroundColor = "white";
addBackgroundColorButton.addEventListener("click", updateBackgroundColor);


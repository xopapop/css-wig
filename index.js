
// will probably be easiest to have a single update button and function
// that will check each input element for changes and call a css update function 
// that is specific to each css attribute
// below is what I'm imagining:
var divToFunctionMap = {"color-picker": 
                            {"value": "white",
                             "updateFunction": updateBackgroundColor,
                            }
                       }

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

// the <div> element showing previews of css changes
var theDiv = document.querySelector("#the-div");
// color input box
var colorPicker = document.querySelector("#color-picker");
// update color button
var addBackgroundColorButton = document.querySelector("#add-background-color");
// default background color
var myBackgroundColor = "white";
// event listener for color update button
addBackgroundColorButton.addEventListener("click", updateBackgroundColor);


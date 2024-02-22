/*
Main logic for the program submission
*/
window.addEventListener("load", () => {
    document.getElementById("errorMessageContainer").style.visibility = "hidden";
    document.getElementById("navigationBar").style.display = "none";
});


// this will make the error message visible if not valid
document.getElementById("submitButton").addEventListener("click", () => {   
    if(validate()){
        console.log("Valid input");
        document.getElementById("errorMessageContainer").style.visibility = "hidden";
        document.querySelector("#dataEntryDiv form").submit();
    }
    else{
        console.log("Invalid input");
        document.querySelector("#errorMessageContainer #errorMessageDiv #errorMessage").innerHTML = "Invalid input";
        document.getElementById("errorMessageContainer").style.visibility = "visible";
    }
});

let counter = 0;
document.getElementById("toggleErrorMessageButton").addEventListener("click", () => {
    counter++;
    if (counter % 2 == 1) {
        document.getElementById("errorMessage").style.visibility = "hidden";
        document.getElementById("toggleErrorMessageButton").innerHTML = "Show Error Message";
    } else {
        document.getElementById("errorMessage").style.visibility = "visible";
        document.getElementById("toggleErrorMessageButton").innerHTML = "Hide Error Message";
    }
});

function validate() {
    var nameInput = document.querySelector("#nameInput").value;
    var ageInput = document.querySelector("#ageInput").value; 
    if (ageInput < 1 || ageInput > 100 || isNaN(ageInput) || nameInput == "" || nameInput == null || nameInput == undefined) {
        return false;
    }
    return true;

}


/*
Extra Credit Codes
*/

/*
Why to do this loading button?
In practice, we may have to load a large amount of data from a database or from a file.
This may take a while and the user may think that the program has crashed.
To avoid this, we can display a loading button to let the user know that the program is working.

*/
// this will make the unordered list visible if the user clicks the load list button
document.getElementById("loadingButtonDiv").addEventListener("click", () => {
    document.getElementById("loadingButtonDiv").style.display = "none";
    document.querySelector(".tenor-gif-embed").style.display = "none";
    document.getElementById("navigationBar").style.display = "block";
});
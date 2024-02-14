/*
Main logic for the program submission
*/
window.addEventListener("load", () => {
    document.getElementById("errorMessageDiv").style.visibility = "hidden";
    // document.getElementById("navigationBar").style.visibility = "hidden";
});


// this will make the error message visible if not valid
document.getElementById("submitButton").addEventListener("click", () => {   
    if(validate()){
        console.log("Valid input");
        document.getElementById("errorMessageDiv").style.visibility = "hidden";
        document.querySelector("#dataEntryDiv form").submit();
    }
    else{
        console.log("Invalid input");
        document.querySelector("#errorMessageDiv #errorMessage").innerHTML = "Invalid input";
        document.getElementById("errorMessageDiv").style.visibility = "visible";
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

// this will make the unordered list visible if the user clicks the load list button
// document.getElementById("loadingButtonDiv").addEventListener("click", () => {
//     document.getElementById("loadingButtonDiv").style.visibility = "hidden";
//     document.querySelector(".tenor-gif-embed").style.visibility = "hidden";
//     document.getElementById("navigationBar").style.visibility = "visible";
// });
window.addEventListener("load", () => {
    document.getElementById("errorMessageDiv").style.visibility = "hidden";
});




function validate() {
    var nameInput = document.getElementById("nameDiv").value;
    var ageInput = document.getElementById("ageDiv").value;
    if (isNaN(nameInput) || ageInput < 1 || ageInput > 10) {
        return false;
    }
    return true;

}
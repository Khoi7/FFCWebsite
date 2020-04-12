function displayForm() {
    if (document.getElementById("messageUsForm").style.display === "none") {
    document.getElementById("messageUsForm").style.display = "block";
    } else {
    document.getElementById("messageUsForm").style.display = "none";
    }
}


document.getElementById("highlightsDropDown").style.width = window.getComputedStyle(document.getElementById("highlights")).getPropertyValue("width");
document.getElementById("socialDropDown").style.width =  window.getComputedStyle(document.getElementById("social")).getPropertyValue("width");
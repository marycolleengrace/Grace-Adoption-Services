document.getElementById("contact-method").addEventListener("change", function() {
    var contactMethod = this.value;

    // Hide both the phone and email input fields
    document.getElementById("phone-input").style.display = "none";
    document.getElementById("email-input").style.display = "none";

    // Display corresponding input field based on selected contact method
    if (contactMethod === "phone") {
        document.getElementById("phone-input").style.display = "block";
    } else if (contactMethod === "email") {
        document.getElementById("email-input").style.display = "block";
    }
});

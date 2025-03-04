
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if cookie already exists
    if (!document.cookie.includes("cookiesAccepted=true")) {
        banner.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year
        banner.style.display = "none";
    });
});







window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
window.LOCALE = 'en';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
window.translation = { 
    common: { 
        selectedList: '{quantity} list selected', 
        selectedLists: '{quantity} lists selected' 
    } 
};
var AUTOHIDE = Boolean(0);

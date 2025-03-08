
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



function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}




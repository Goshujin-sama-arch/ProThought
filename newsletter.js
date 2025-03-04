document.getElementById("newsletter-form").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent page reload

    const email = document.getElementById("email").value;
    const apiKey = "YOUR_BREVO_API_KEY";  // Replace with actual API key
    const listId = YOUR_BREVO_LIST_ID;    // Replace with actual List ID

    const responseMessage = document.getElementById("response-message");

    if (!email.includes("@")) {  // Basic email validation
        responseMessage.innerHTML = "❌ Please enter a valid email.";
        responseMessage.style.color = "red";
        return;
    }

    const data = {
        email: email,
        listIds: [listId]
    };

    try {
        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": apiKey
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);  // Debugging response

        if (response.ok) {
            responseMessage.innerHTML = "✅ Subscription successful! Check your email.";
            responseMessage.style.color = "green";
            document.getElementById("newsletter-form").reset();
        } else {
            responseMessage.innerHTML = "❌ Error: " + (result.message || "Try again.");
            responseMessage.style.color = "red";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        responseMessage.innerHTML = "❌ Network error. Check console.";
        responseMessage.style.color = "red";
    }
});






document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if cookies are already accepted
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none"; // Hide banner
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); // Save consent
        cookieBanner.style.display = "none"; // Hide banner on all pages
    });
});





document.getElementById("newsletter-form").addEventListener("submit", async function(event) {
    event.preventDefault();  

    const email = document.getElementById("email").value;
    const apiKey = "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"; 
    const listId = 3; 

    const responseMessage = document.getElementById("response-message");

    if (!email.includes("@")) {  
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
        console.log(result);  

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

    
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); 
        cookieBanner.style.display = "none";
    });
});





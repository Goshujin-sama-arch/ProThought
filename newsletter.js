
document.getElementById("newsletter-form").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    const email = document.getElementById("email").value;
    const apiKey = "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";  // Replace with your actual Brevo API Key
    const listId = "#3";  // Replace with your actual Brevo List ID

    const responseMessage = document.getElementById("response-message");

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

        if (response.ok) {
            responseMessage.innerHTML = "✅ Subscription successful! Check your email.";
            responseMessage.style.color = "green";
            document.getElementById("newsletter-form").reset();  // Clear input field
        } else {
            responseMessage.innerHTML = "❌ Subscription failed. Try again.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        responseMessage.innerHTML = "❌ Error: " + error.message;
        responseMessage.style.color = "red";
    }
});
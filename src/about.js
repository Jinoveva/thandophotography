  // Get the button element by its ID
        var button = document.getElementById("contact-button");

        // Add an event listener to the button
        button.addEventListener("click", function() {
            // Redirect to the desired page
            window.location.href = "contact.html";
        });

         if (performance.navigation.type == 1) {
            window.location.href = 'index.html'; // Replace 'home.html' with your home page URL
        }
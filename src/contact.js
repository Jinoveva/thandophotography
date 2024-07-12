 if (performance.navigation.type == 1) {
            window.location.href = 'index.html'; // Replace 'home.html' with your home page URL
        }

        function sendEmail() {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "thandohphotography@gmail.com",
                    Password: "5359C0BC9CA2571B5D04BE83FB64A4239C63",
                    To: 'Thandohphotography@gmail.com',
                    From: document.getElementById("email").value,
                    Subject: "thandophotography contact form enquiry",
                    Body: "And this is the body"
                }).then(
                    message => alert(message)
                );
            }

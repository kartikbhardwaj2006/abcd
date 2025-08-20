
        // Ensure DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Menu button functionality
            const menuBtn = document.getElementById('menuBtn');
            const navMenu = document.getElementById('navMenu');
            const overlay = document.getElementById('overlay');
            
            if (!menuBtn || !navMenu || !overlay) {
                console.error("Critical navigation elements not found!");
                return;
            }
            
            // Toggle menu on button click
            menuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                overlay.classList.toggle('active');
            });
            
            // Close menu when clicking overlay
            overlay.addEventListener('click', function() {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            // Add functionality to each menu link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    // Close the menu
                    navMenu.classList.remove('active');
                    overlay.classList.remove('active');
                });
            });
        });
        
        // Contact form submission handler
        function submitContactForm(event) {
            event.preventDefault();
            
            // Validate form
            const form = document.getElementById('contactForm');
            if (!form.checkValidity()) {
                return false;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // In a real implementation, you would send this data to a server
            console.log("Contact form submission data:", formData);
            
            // Show success message
            alert("Thank you for your message! We will get back to you soon.");
            
            // Reset form
            form.reset();
         
            
            return false;
        }
    
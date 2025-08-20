
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
            
            // Registration form functionality
            const showFormBtn = document.getElementById('showFormBtn');
            const registrationForm = document.getElementById('registrationForm');
            
            if (showFormBtn && registrationForm) {
                showFormBtn.addEventListener('click', function() {
                    registrationForm.classList.add('active');
                    // Scroll to form
                    registrationForm.scrollIntoView({ behavior: 'smooth' });
                });
            }
        });
        
        // Form submission handler
        function submitForm(event) {
            event.preventDefault();
            
            // Validate form
            const form = document.getElementById('internshipForm');
            if (!form.checkValidity()) {
                return false;
            }
            
            // Check if at least two skills are selected
            const skillCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
            if (skillCheckboxes.length < 2) {
                alert("Please select at least two skills to meet the eligibility criteria.");
                return false;
            }
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                education: document.getElementById('education').value,
                institution: document.getElementById('institution').value,
                skills: Array.from(skillCheckboxes).map(cb => cb.value),
                experience: document.getElementById('experience').value,
                motivation: document.getElementById('motivation').value
            };
            
            // In a real implementation, you would send this data to a server
            console.log("Form submission data:", formData);
            
            // Show success message
            alert("Thank you for your application! We will contact you soon for the next steps.");
            
            // Hide the form and show a success message
            document.getElementById('registrationForm').classList.remove('active');
            
            // Reset form
            form.reset();
            
            return false;
        }
    
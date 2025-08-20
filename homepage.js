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
 
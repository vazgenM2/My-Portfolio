 // JavaScript for smooth scrolling, fade-in animation, and back-to-top button

        document.addEventListener('DOMContentLoaded', () => {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Fade-in animation on scroll
            const sections = document.querySelectorAll('.fade-in');

            const observerOptions = {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of the section must be visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                        observer.unobserve(entry.target); // Stop observing once it has appeared
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Back to Top Button functionality
            const backToTopBtn = document.getElementById('backToTopBtn');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) { // Show button after scrolling down 300px
                    backToTopBtn.classList.remove('hidden');
                } else {
                    backToTopBtn.classList.add('hidden');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
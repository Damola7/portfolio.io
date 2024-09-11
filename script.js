document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission
    
        const form = event.target;
        const formData = new FormData(form);
        const responseMessage = document.getElementById('form-response');
    
        try {
          const response = await fetch(form.action, {
            method: form.method,
            headers: {
              'Accept': 'application/json'
            },
            body: formData
          });
    
          if (response.ok) {
            // Show the thank you message and keep the form visible
            responseMessage.style.display = 'block';
            responseMessage.textContent = 'Thank you! Your message has been sent.';
            
            // Optionally, reset the form fields after successful submission
            form.reset();
            
            // Hide the response message after 5 seconds
            setTimeout(() => {
              responseMessage.style.display = 'none';
            }, 2000); // 5000 milliseconds = 5 seconds
          } else {
            responseMessage.style.display = 'block';
            responseMessage.textContent = 'Oops! There was a problem submitting your form.';
            
            // Hide the response message after 5 seconds
            setTimeout(() => {
              responseMessage.style.display = 'none';
            }, 2000);
          }
        } catch (error) {
          responseMessage.style.display = 'block';
          responseMessage.textContent = 'Oops! There was a problem submitting your form.';
          
          // Hide the response message after 5 seconds
          setTimeout(() => {
            responseMessage.style.display = 'none';
          }, 2000);
        }
      });

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

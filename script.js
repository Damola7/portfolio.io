document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields');
      }
    });
  
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Formspree Form Handling
    document.getElementById('contactForm').addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent form from redirecting
  
      const form = event.target;
      const formData = new FormData(form);
  
      try {
        const response = await fetch('https://formspree.io/f/xrbzdlvy', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
  
        if (response.ok) {
          document.getElementById('formResponse').style.display = 'block';
          form.reset(); // Optionally reset the form fields
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        alert('There was a network error. Please try again later.');
      }
    });
  
    // Open Links in a New Tab
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
      });
    });
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
      });
    }
  });
  
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Basic form validation (you can enhance this as needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        // You can add an AJAX request here to handle the form submission on the server.
    } else {
        alert('Please fill in all fields.');
    }
});

// Responsive navigation menu toggle
const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('nav ul');

toggleBtn.addEventListener('click', function() {
    navList.classList.toggle('show');
});

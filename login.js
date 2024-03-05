const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'moraladnan' && password === 'moralweb123') {
        
        window.location.href = "http://moralweb.github.io/moral";
    } else {
        message.textContent = 'Invalid username or password.';
    }
    if (username === 'sadik4u3' && password === '@sadik3241') {
        
        window.location.href = "http://moralweb.github.io/";
    } 
});

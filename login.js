const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Sadik4u3' && password === 'sadik3241') {
        
        window.location.href = "https://godrivelive.github.io/Sadikgodrivelive";
    } 
    if (username === 'Moraladnan' && password === 'moralweb123') {
        
        window.location.href = "https://godrivelive.github.io/Moralgodrivelive";
    }
    if (username === 'Video' && password === 'player') {
        
        window.location.href = "https://godrivelive.github.io/own";
    } else {
        message.textContent = 'Churi korte aiso beda ?';
    }
});

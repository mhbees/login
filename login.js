const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Moral' && password === 'moral123') {
        
        window.location.href = "https://godrivelog.github.io/login/bokachoda.html";
    } else {
        message.textContent = 'Churi korte aiso beda ?';
    }
    if (username === 'Sadik4u3' && password === '@sadik3241') {
        
        window.location.href = "https://godrivelog.github.io/login/bokachoda.html";
    } 
});

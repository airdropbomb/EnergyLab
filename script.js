// Load saved credentials when page loads
window.addEventListener('load', function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Save credentials to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    try {
        const response = await fetch('https://defi-energylabs.com/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.textContent = 'Login successful!';
            messageDiv.className = 'success';
            // You can redirect or perform other actions after successful login
        } else {
            messageDiv.textContent = data.message || 'Login failed. Please check your credentials.';
            messageDiv.className = 'error';
        }
    } catch (error) {
        messageDiv.textContent = 'An error occurred. Please try again later.';
        messageDiv.className = 'error';
        console.error('Login error:', error);
    }
}); 

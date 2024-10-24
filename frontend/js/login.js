function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8090/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }
        return response.json();
    })
    .then(data => {
        // Maneja el éxito del inicio de sesión aquí
        console.log('Login successful', data);
        window.location = 'menu.html'; // Redirigir a menu.html
    })
    .catch(error => {
        alert('Invalid credentials. Please try again.');
        console.error('Error:', error);
    });
}
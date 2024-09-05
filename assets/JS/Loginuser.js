const userDB = [
    { username: 'user', password: '123' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = userDB.find(user => user.username === username && user.password === password);
    
    const errorMessage = document.getElementById('errorMessage');

    if (user) {
        errorMessage.style.display = 'none'; 
        alert('Login Berhasil!');
        window.location.href = "/Home.html";
    } else {
        errorMessage.style.display = "block";
    }
}
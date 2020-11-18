function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'ahmad2017') {
        if (password == 'integrity') {
            alert('Login Sukses');
            document.location.href = "welcome.html";
        } else {
            alert('Password salah');
        }
    } else {
        alert('Username tidak ditemukan');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes agregar lógica de validación si es necesario
            window.location.href = 'file:///D:/Schoo%C2%B4slunch/recetas.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes agregar lógica de validación si es necesario
            window.location.href = 'file:///D:/Schoo%C2%B4slunch/recetas.html';
        });
    }
});
// Redireccionar a las diferentes páginas al hacer clic en los botones
document.getElementById('boton1').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/recetas.html';
});

document.getElementById('boton2').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/perfil.html';
});

document.getElementById('boton4').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/pagina4.html';
});

document.getElementById("calcularBtn").addEventListener("click", function() {
    var altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir altura a metros
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);

    var resultado = "";
    if (isNaN(imc)) {
        resultado = "Por favor, introduce valores válidos.";
    } else {
        resultado = "Tu índice de masa corporal es: " + imc.toFixed(2);
    }

    document.getElementById("resultado").innerHTML = resultado;
});
document.getElementById('boton1').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/recetas.html';
});

document.getElementById('boton2').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/perfil.html';
});

document.getElementById('boton4').addEventListener('click', function() {
    window.location.href = 'file:///D:/Schoo%C2%B4slunch/pagina4.html';
});

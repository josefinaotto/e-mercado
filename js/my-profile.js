
function guardarInfo() {
    let edadIngresada = document.getElementById("age");
    let nombreIngresado = document.getElementById("name");
    let telefonoIngresado = document.getElementById("numero");

    localStorage.setItem("edad", edadIngresada.value);
    localStorage.setItem("nombre", nombreIngresado.value);
    localStorage.setItem("telefono", telefonoIngresado.value);

    location.reload();
}


//-----------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function (e) {

    let ageUsuario = document.getElementById("mostrarEdad");
    let nameUsuario = document.getElementById("mostrarNombre");
    let numeroUsuario = document.getElementById("mostrarTelefono");

    let edadPersona = localStorage.getItem("edad");
    let nombreyapellido = localStorage.getItem("nombre");
    let telefonoPersona = localStorage.getItem("telefono");
    
    ageUsuario.innerHTML = edadPersona;
    nameUsuario.innerHTML = nombreyapellido;
    numeroUsuario.innerHTML = telefonoPersona; 

});
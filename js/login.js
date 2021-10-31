

document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("botoningreso").addEventListener("click", function() {

        let emailIngresado = document.getElementById("mail");
        let contraIngresada = document.getElementById("contra");
        let completado = true; 
        

        if (emailIngresado.value === '') {
            completado = false; 
            emailIngresado.classList.add("invalid"); 
        } else {
            emailIngresado.classList.remove("invalid");
        }


        if (contraIngresada.value === '') {
            completado = false;
            contraIngresada.classList.add("invalid");
        } else {
            contraIngresada.classList.remove("invalid");
        }


        if (completado) {
            localStorage.clear();
            localStorage.setItem("user", emailIngresado.value); //ese value esta en string
            localStorage.setItem("completado", completado); 
            window.location = 'inicio.html';
        
        } else {
            alert("Debes ingresar los datos")
        }

    });

});




//let showUser= localStorage.setItem("emailUs",JSON.stringify(datosUsuario));
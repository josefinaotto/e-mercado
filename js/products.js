var productosArray = [];

function mostrarProductos(array) {
   /* 
    let contenido = "<br><hr><br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i]; 

        contenido += "Nombre: " + producto.name + "<br>"; 
        contenido += "Breve descripción: " + producto.description + "<br>"; 
        contenido += "Precio: " + producto.cost + "<br>"; 
        contenido += "<br><hr><br>"
    }
    document.getElementById("listado").innerHTML = contenido; 
    */

    let contenido = "<hr><br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i]; 
        contenido += `
            <div>
                <div class="mb-1">
                    <h4>`+ producto.name +`</h4> 
                    <p> `+ producto.description +`</p> 
                </div>
                <small class="text-muted"> Precio: $`  + producto.cost + ` </small>  
            </div>
            <br> <hr> <br> `
        }
        document.getElementById("listado").innerHTML = contenido;

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado){
        if (resultado.status === "ok") {
            productosArray = resultado.data;
            mostrarProductos(productosArray);
        }
    });
});


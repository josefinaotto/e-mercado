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
                <div>
                    <div>
                        <div class="mb-1">
                        <h4>`+ producto.name +`</h4> 
                        <p> `+ producto.description +`</p> 
                        </div>
                        <small class="text-muted"> Precio: $`  + producto.cost + ` </small> 
                    </div>

                </div>
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



/* Que significa lo que hace la funcion:
Abre una url que tiene un json -> un objeto
Con getJSONData se pasan los datos del json a una lista en html con el fetch
response.json() agarra un json y devuelve un objeto d js 
ir recorriendo el json e ir agregando cada elemento en una lista? */
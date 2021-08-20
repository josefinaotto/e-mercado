var productosArray = [];

function mostrarProductos(array) {

    let contenido = "<hr> <br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i]; 
        contenido += `

                <h4>`+ producto.name +`</h4> 
                <p> `+ producto.description +`</p> 
                <small> Precio: $`  + producto.cost + ` </small>  
  
            <br> <br> <hr> <br> `
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


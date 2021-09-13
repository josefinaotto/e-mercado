var productosArray = [];
var minPrecio = undefined;
var maxPrecio = undefined;


function ordenarProductos(criterio, array) {
    let result = [];
    if (criterio === 1) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criterio === 2) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criterio === 3) {
        result = array.sort(function (a, b) {
            if (a.soldCount > b.soldCount) { return -1; }
            if (a.soldCount < b.soldCount) { return 1; }
            return 0;
        });
    }

    return result;
}


function mostrarProductos(array) {
    let contenido = "<hr> <br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i];

        if (((minPrecio == undefined) || (minPrecio != undefined && parseInt(producto.cost) >= minPrecio)) &&
            ((maxPrecio == undefined) || (maxPrecio != undefined && parseInt(producto.cost) <= maxPrecio))) {
            contenido += `

                <h4>`+ producto.name + `</h4> 
                <p> `+ producto.description + `</p> 
                <small> Precio: $`  + producto.cost + ` </small> <br> <br>
                <button id="irAlProducto"; onclick="window.location.href='https://josefinaotto.github.io/e-mercado/product-info.html';"> Ir al Producto </button>
  
            <br> <br> <hr> <br> `
        }

        document.getElementById("listado").innerHTML = contenido;
    }
}



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            productosArray = resultado.data;
            mostrarProductos(productosArray);
        }
    });



    document.getElementById("menorPrecio").addEventListener("click", function () {
        productosArray = ordenarProductos(1, productosArray);
        mostrarProductos(productosArray);
    });


    document.getElementById("mayorPrecio").addEventListener("click", function () {
        productosArray = ordenarProductos(2, productosArray);
        mostrarProductos(productosArray);
    });


    document.getElementById("relevancia").addEventListener("click", function () {
        productosArray = ordenarProductos(3, productosArray);
        mostrarProductos(productosArray);
    });



    document.getElementById("filtrarRango").addEventListener("click", function () {
        minPrecio = document.getElementById("rangoMin").value;
        maxPrecio = document.getElementById("rangoMax").value;

        if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio) >= 0)) {
            minPrecio = parseInt(minPrecio);
        } else {
            minPrecio = undefined;
        }

        if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio) >= 0)) {
            maxPrecio = parseInt(maxPrecio);
        } else {
            maxPrecio = undefined;
        }

        mostrarProductos(productosArray);
    });


    document.getElementById("borrarRango").addEventListener("click", function () {
        document.getElementById("rangoMin").value = "";
        document.getElementById("rangoMax").value = "";

        minPrecio = undefined;
        maxPrecio = undefined;

        mostrarProductos(productosArray);
    });


});

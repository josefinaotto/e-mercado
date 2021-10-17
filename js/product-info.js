var auto = undefined;
var commentsArray = [];


function mostrarProducto(array) {
    let contenido = "<br>";
    let producto = array;
    let imagenes = "";

    contenido += `

                <h3>`+ producto.name + `</h3> <br>
                <p> `+ producto.description + `</p> 
                <small> Precio: `  + producto.cost + producto.currency + ` </small> <br>
                <small> Vendidos: `  + producto.soldCount + ` </small> <br>
                <small> Categoría: `  + producto.category + ` </small> 
                
            <br> <br> <br> `

    imagenes += `

         <img src="img/prod1.jpg" width= "200" height="150">
         <img src="img/prod1_1.jpg" width= "200" height="150">
         <img src="img/prod1_2.jpg" width= "200" height="150">
         <img src="img/prod1_3.jpg" width= "200" height="150">
         <img src="img/prod1_4.jpg" width= "200" height="150">

    `;

    document.getElementById("listadoProducto").innerHTML = contenido;
    document.getElementById("imgs").innerHTML = imagenes;
}


function mostrarRelacionados(arr1, arr2) {
    let relacionados = arr2.relatedProducts;
    let contenido = "<br>";
    for (let i = 0; i < relacionados.length; i++) {
        contenido += ` 
        <div class="card" style="width: 18rem;"> 
                <div class="card-body">
                    <h5 class="card-title">` + arr1[relacionados[i]].name + `</h5>
                    <p class="card-text">` + arr1[relacionados[i]].description + `</p>
                    <a href="https://josefinaotto.github.io/e-mercado/product-info.html" class="btn btn-primary"> Ir al producto </a>
                </div>
        </div>
        <br><br>
        `
        document.getElementById("related").innerHTML = contenido;
    }
}


function mostrarComentarios(array) {
    let contenido = "<br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i];
        let puntos = producto.score;

        contenido += `

                <p> "`+ producto.description + `"</p>
                <p> <i> `  + producto.user + ` </i> </p>
                <h6> Calificación: `+ puntos + `</h6>
                <small>`+ producto.dateTime + `</small>

                <br><br><br><br> `

        document.getElementById("comments").innerHTML = contenido;
    }

}


//-----------------------------------------------------------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            auto = resultado.data;
            mostrarProducto(auto);
        }


        getJSONData(PRODUCTS_URL).then(function (resultado) {
            if (resultado.status === "ok") {
                productosArray = resultado.data;
                mostrarRelacionados(productosArray, auto);
            }
        });


    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            commentsArray = resultado.data;
            mostrarComentarios(commentsArray);
        }
    });



});
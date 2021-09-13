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
         <img src="img/prod1.jpg" width= "200" height="150" alt="">
         <img src="img/prod1_1.jpg" width= "200" height="150" alt="">
         <img src="img/prod1_2.jpg" width= "200" height="150" alt="">
         <img src="img/prod1_3.jpg" width= "200" height="150" alt="">
         <img src="img/prod1_4.jpg" width= "200" height="150" alt="">
    
    `;

    document.getElementById("listadoProducto").innerHTML = contenido;
    document.getElementById("imgs").innerHTML = imagenes;
}


/*
function cantEstrellasLLenas(valor) {
    for (let i = 1; i <= valor; i++) {
        <span class="fa fa-star checked"></span>
    }
}


function cantEstrellasVacias(valor) {
    for (let i = 1; i <= valor; i++) {
        <span class="fa fa-star"></span>
    }
} */


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

//Para poner las estrellas hacer un for del largo de producto.score con las llenas y 5-score con las vacias


//for (let i = 1; i <= puntos; i++) 

//-----------------------------------------------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            auto = resultado.data;
            mostrarProducto(auto);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            commentsArray = resultado.data;
            mostrarComentarios(commentsArray);
        }
    });

});
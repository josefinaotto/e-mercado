var articulos = undefined;


function calcularTotales() { //suma todos los subtotales de cada articulo
    let total = 0;
    let subs = document.getElementsByClassName("subtotal");
    for (let i = 0; i < subs.length; i++) {
        total += parseInt(subs[i].innerHTML);
    }
    document.getElementById("montoFinal").innerHTML = total;
}


function calcularSubtotal(precio, num) { //por articulo
    let cantidad = parseInt(document.getElementById(`quantity${num}`).value);
    let subtotal = precio * cantidad;
    document.getElementById(`artSubtotal`).innerHTML = subtotal;
    calcularTotales();
}


function mostrarTodo(array) {
    let contenido = "";

    for (let i = 0; i < array.articles.length; i++) {
        let producto = array.articles[i];
        let sub = producto.unitCost * producto.count;

        contenido += `
        <div class= "container py-3 mr-2 justify-content-start">
            <div class= "row">
                <div class="col-3">
                  <img src="img/tree1.jpg">  
                </div>
                <div class="col-6">
                  <br>
                  <h5>` + producto.name + `</h5> 
                  <p> Precio unitario `  + producto.unitCost + producto.currency + ` </p> <br> <br>
                </div>
                <div class="col-3">
                  <p> Cantidad </p>
                  <input type="number" onchange="calcularSubtotal(${producto.unitCost}, ${i})" class="form-control" 
                        id="quantity${i}" required="" value="${producto.count}" min="0"> </p> <br>
                </div>
            </div>
            <div class="row">
                <br> <br> <br> <br>
            </div>
            <div class="container border bg-light py-4 px-5">
                    <div class="row">
                       <h6>Resumen de compra</h6> 
                    </div>
                    <br>
                    <div class="row"> 
                       <h4>Subtotal $</h4> 
                       <h4 class="subtotal" id="artSubtotal">${sub} </h4> 
                    </div>
                    <br> <hr> <br>
                    <div class="row">
                       <p><small> Tipo de envío </small></p> <br> <br>
                    </div>
                    <div class="row">
                       <select class="custom-select d-block w-100" id="categoriaProducto">
                          <option value=""> Elija el tipo de envío...</option>
                          <option> Premium (2-5 días) </option>
                          <option> Express (5-8 días) </option>
                          <option> Standard (12-15 días) </option>
                        </select>
                        <br>
                    </div>
                    <br> <br>
                    <div class="row">
                       <h4> <strong> Total $$ </strong> </h4>
                    </div>
                    <br>
                    <div class="row">
                       <p> <small> Forma de pago </small> </p>
                    </div>
                    <input id="tarjeta" name="pago" type="radio" value="1" checked="" required="">
                    <label for="tarjeta"> Tarjeta de crédito </label> <br>
                    <input id="transferencia" name="pago" type="radio" value="2" required="">
                    <label for="transferencia"> Transferencia bancaria </label> <br> <br>
                    <button class="btn btn-primary btn-block">Continuar con el pago</button>
            </div>
        </div>
        <br> <br> 
        `
        document.getElementById("carritoDesplegado").innerHTML = contenido;
    }

}


//------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            articulos = resultado.data;
            mostrarTodo(articulos);
        }
    });

});

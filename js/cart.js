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
                <div class="row">
                  <p> Cantidad </p>
                  <input type="number" onchange="calcularSubtotal(${producto.unitCost}, ${i})" class="form-control" 
                        id="quantity${i}" required="" value="${producto.count}" min="0"> </p> <br>
                </div>  <br>
                <div class="row"> 
                    <h5>Precio total $</h5> 
                    <h5 class="subtotal" id="artSubtotal">${sub} </h5> 
                </div>
                </div>
            </div>
            <div class="row">
                <br> <br> <br> <br>
            </div>
            <div class="container border bg-light py-4 px-5">
                    <div class="row">
                       <h6> <strong> Resumen de compra </strong> </h6> 
                    </div>
                    <br>
                    <div class="row">
                       <p> Tipo de envío </p> <br> <br>
                    </div>
                    <div class="row">
                       <select class="custom-select d-block w-100" id="categoriaProducto">
                          <option value=""> Elija el tipo de envío...</option>
                          <option> Premium 2-5 días (15%) </option>
                          <option> Express 5-8 días (7%) </option>
                          <option> Standard 12-15 días (5%) </option>
                        </select>
                        <br>
                    </div>
                    <br> <br>
                    <div class="row">
                    <p> Dirección de envío </p>
                    </div>
                    <form>
                    <div class="form-group">
                      <label for="inputAddress2">Departamento</label>
                      <input type="text" class="form-control" id="inputAddress2">
                    </div>
                    <div class="form-row">
                      <div class="form-group col-10">
                        <label for="inputEmail4">Calle</label>
                        <input type="email" class="form-control" id="inputEmail4">
                      </div>
                      <div class="form-group col">
                        <label for="inputPassword4">Número</label>
                        <input type="text" class="form-control" id="inputPassword4">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Esquina</label>
                      <input type="text" class="form-control" id="inputAddress">
                    </div>
                    </form>
                    <br> <hr> <br>
                    <div class="row">
                       <h4> <strong> Total $$ </strong> </h4> <br>
                    </div>
                    <br>
                    <div class="row">
                       <p> Forma de pago </p>
                    </div>
                    <input id="tarjeta" name="pago" type="radio" value="1" checked="" required="">
                    <label for="tarjeta"> Tarjeta de crédito </label> <br>
                    <input id="transferencia" name="pago" type="radio" value="2" required="">
                    <label for="transferencia"> Transferencia bancaria </label> 
                    <br> <br> <br>
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

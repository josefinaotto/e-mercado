var articulos = undefined;

function calcularEnvio() {
  let suma = parseInt(document.getElementById("precioSub").innerHTML); //el precio subtotal sin envio
  let envio;
  let total; 
  var select = document.getElementById('tipoEnvioElegido');
  var option = select.options[select.selectedIndex];
  let porcentaje = option.value; //ya me da el numero por el que tengo que multiplicar 
  envio = suma * (porcentaje / 100);
  total = suma + envio; 

  document.getElementById("precioEnvio").innerHTML = Math.round(envio);
  document.getElementById("precioTotal").innerHTML = Math.round(total);

}


function calcularTotales() { //suma todos los subtotales de cada articulo
  let total = 0;
  let subs = document.getElementsByClassName("subtotal");
  for (let i = 0; i < subs.length; i++) {
    total += parseInt(subs[i].innerHTML);
  }
  document.getElementById("precioSub").innerHTML = total;
  calcularEnvio();
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
        <div class= "container py-6 mr-2 justify-content-start px-5">
            <div class= "row">
                <div class="col-3">
                  <img src="`+ producto.src + `" width="200" height="200">  
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
                <br> <br> <br> 
            </div>
        </div>
        `
    document.getElementById("carritoDesplegado").innerHTML = contenido;
  }
}


function deshabilitarFormularioTarj() {
  document.getElementById("inputTarjeta").disabled = true;
  document.getElementById("inputCVV").disabled = true;
  document.getElementById("inputVence").disabled = true;
  document.getElementById("inputTransf").disabled = false;
}


function habilitarFormularioTarj() {
  document.getElementById("inputTarjeta").disabled = false;
  document.getElementById("inputCVV").disabled = false;
  document.getElementById("inputVence").disabled = false;
  document.getElementById("inputTransf").disabled = true;
}



//------------------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function (e) {

  getJSONData(CART_INFO_URL).then(function (resultado) {
    if (resultado.status === "ok") {
      articulos = resultado.data;
      mostrarTodo(articulos);
      calcularTotales();
    }
  });

});

const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}


function validarDatos() {
  let valor = true; //va a guardar si es valido mandarlo o no
  let mensaje = "";

  //var select = document.getElementById('tipoEnvioElegido');
  //var option = select.options[select.selectedIndex];
  //let opcionEnvio = option.value; //guarda la opcion seleccionada de envio 
  //let direccion = document.getElementsByClassName("infoDir"); //array con las informaciones de la direccion
  let pagoTarjeta = document.getElementsByClassName("infoPagoTarj"); //array con las informaciones de la tarjeta

  //let formaPago = document.getElementsByClassName("infoPago");
  document.getElementById("feedback").innerHTML = "";

  /*
    //verificando direccion
    let camposVacios = 0;
    for (let i = 0; i < direccion.length; i++) {
      const datos = direccion[i];
      if (datos == "") { //o datos.value
        camposVacios += 1;
      }
    }
    if (camposVacios > 0) {
      valor = false;
      mensaje += "Debe ingresar toda la información de la dirección de envío <br>"
    }
  
    //verificando seleccion de tipo de envio 
    if (opcionEnvio == "") { //es la opcion del titulo
      valor = false;
      mensaje += "Debe seleccionar un tipo de envío <br>"
    } */


  //verificando datos del modal i.e. forma de pago 
  /*
  var metodos = document.getElementsByName('pago');
  for (i = 0; i < metodos.length; i++) {
    if (metodos[i].checked)
      //metodoSeleccionado = metodos[i].value; //guarda el elegido 
      metodoSeleccionado = i;
  } */
  var metodoSeleccionado;
  var tarj = document.getElementById("tarjeta");
  //var transf = document.getElementById("transferencia");
  if (tarj.checked) 
    metodoSeleccionado = 0;
  else
    metodoSeleccionado = 1;

  /* if (metodoSeleccionado == 0) {
    valor = false;
    mensaje += "Debe completar los datos de la forma de pago"
  } Como predeterminado se elige la 1, nunca es cero */

  if (metodoSeleccionado === 0) { //i.e. eligio tarjeta 
    camposVacios = 0;
    for (let i = 0; i < pagoTarjeta.length; i++) {
      const informacion = pagoTarjeta[i];
      if (informacion.value == "") {  //o informacion.value
        camposVacios += 1;
      }
    }
    if (camposVacios > 0) {
      valor = false;
      mensaje += "Debe ingresar toda la información de la tarjeta <br>"
    }
  } 

  document.getElementsByName("feedback").innerHTML = mensaje;
  return valor;

} //cierra la funcion validarDatos




//-------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function (e) {

  let idUsuario = document.getElementById("mostrarUsuario");
  let emailUsuario = document.getElementById("mostrarEmail");

  let nombreUsuario = localStorage.getItem("user");

  idUsuario.innerHTML = nombreUsuario;
  emailUsuario.innerHTML = nombreUsuario;


  document.getElementById("cerrarSesion").addEventListener("click", function () {

    localStorage.clear();

  });


  let form = document.getElementById("modalFormaPago");
  form.addEventListener('submit', function (event) {
    if (!validarDatos()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      document.getElementById("feedback").innerHTML = "";
    }

  });

});

var txtEntrada = document.querySelector("textarea");
var txtResultado = document.getElementById("txt-resultado");
var imgSinResultado = document.getElementById("contenedor-munheco");
var contenedorCopiar = document.querySelector(".contenedor-btnCopiar");
var btnCopiar = document.querySelector('.btn-copiar');

function modificarCaracterClave(caracter) {
  switch (caracter) {
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "a":
      return "ai";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return caracter;
  }
} 


function encriptarTexto() {
  
  if (txtEntrada.value.trim()==""){
    return validacionEspacios();
  } 
  let texto = txtEntrada.value.split("");
  let textoEncriptado = [];
  
  for (let i = 0; i < texto.length; i++) {
    textoEncriptado.push(modificarCaracterClave(texto[i]));
  }
  txtResultado.innerHTML = textoEncriptado.join("");
  actualizar();
}

function desencriptarTexto() {
  
  if (txtEntrada.value.trim()==""){
    return validacionEspacios();
  }
  let texto = txtEntrada.value.split("");
  let txtDesencriptado = [];
  
  for (let i = 0; i < texto.length; i++) {
    let caracterLen = modificarCaracterClave(texto[i]).length
    txtDesencriptado.push(texto[i]);
    if (caracterLen > 1) {
      i += caracterLen - 1;
    }
  }
  txtResultado.innerHTML = txtDesencriptado.join("");
  actualizar();

}

function validacionEspacios(){
  if (window.innerWidth>768){
    imgSinResultado.style.display = 'block';
    document.querySelector(".imagen-munheco").style.display = 'block';
  } else {
    imgSinResultado.style.display = 'block';
    document.querySelector(".imagen-munheco").style.display = 'none';
    document.querySelector(".msj1").style.display = 'block';
    document.querySelector(".msj2").style.display = 'block';
  }
  contenedorCopiar.style.display = 'none';
  txtResultado.style.display = 'none';
}

function actualizar(){
  
  imgSinResultado.style.display = 'none';
  contenedorCopiar.style = 'display: flex; justify-content: center';
  txtResultado.style = 'display: block';
  btnCopiar.innerHTML = 'Copiar';
  txtEntrada.focus();

}

function reemplazar(cadena){
  let texto = cadena.value.toLowerCase();
  cadena.value = texto;
}
function copiar(){
  navigator.clipboard.writeText(txtResultado.innerHTML);
  document.querySelector('.btn-copiar').innerHTML = "Copiado!";
}

function ocultarElementos() {
  if (window.innerWidth<768){
    document.querySelector(".imagen-munheco").style.display = 'none';
    } else if (window.innerWidth>768 && txtEntrada.value.trim()=="") {
      document.querySelector(".imagen-munheco").style.display = 'block';
    }
}

document.querySelector("body").onresize = ocultarElementos;
txtEntrada.focus();

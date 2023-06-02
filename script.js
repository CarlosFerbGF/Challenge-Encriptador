var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-final");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;

function encriptar(){
    ocultarpanel();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}
function desencriptar(){
    ocultarpanel();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}
function recuperarTexto(){
    var area = document.querySelector(".textarea");
    return area.value.toLowerCase();
}
function ocultarpanel(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
     /*e = enter 
      i = imes
      o = ober     Ordene de forma en la que al remplazar una vocal 
      a = ai       no interfiere con otra vocal encontrada al remplazarla.
      u = ufat       
    */ 
   //i es para tomar en cuenta mayusculas y minusculas 
   //g es para tomar en cuenta toda la linea u oración 
   //m es para que afecte multiples lineas o parrafos
   
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
     
    textoFinal = texto.replace(/e/img, "enter");
    textoFinal = textoFinal.replace(/i/img, "imes");
    textoFinal = textoFinal.replace(/o/img, "ober");
    textoFinal = textoFinal.replace(/a/img, "ai");
    textoFinal = textoFinal.replace(/u/img, "ufat");
    return textoFinal;
    }

function desencriptarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";
         
        textoFinal = texto.replace(/enter/img, "e");
        textoFinal = textoFinal.replace(/imes/img, "i");
        textoFinal = textoFinal.replace(/ober/img, "o");
        textoFinal = textoFinal.replace(/ai/img, "a");
        textoFinal = textoFinal.replace(/ufat/img, "u");
        return textoFinal;
        }
function copiarTexto(){
    navigator.clipboard.writeText(resultado.innerHTML);
}
    
    
    
    

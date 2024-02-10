//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecretaGlobal

esMayuscula = function (caracter) {
    let codigoAscii = caracter.charCodeAt(0);
    if(codigoAscii >= 65 && codigoAscii <= 90){
        return true
    } else{
        return false
    }
}

/*
contarMayusculas=function(palabraSecreta){
    let letra;
    let contador=0;
    for(let i=0;i<palabraSecreta.length;i++){
        letra=charCodeAt(i);
        if(esMayuscula(letra)){
            contador++
        }
    }
}
*/

guardarPalabra = function () {
    let palabra;
    let longitud;
    let letra;
    let contador=false;

    palabra = recuperarTexto("txtSecreta");
    longitud = palabra.length;

    for(let i=0;i<palabra.length;i++){
        letra=palabra.charCodeAt(i);
        if(esMayuscula(letra)){
            contador=true
        }
    }
    
    if (longitud != 5) {
        mostrarTexto("lblErrores", "Debe tener 5 Caracteres")
    }else if(contador == false){
        mostrarTexto("lblErrores", "Todas las letras deben ser Mayusculas")
    }else {
        palabraSecretaGlobal=palabra
    }
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        letra = ("div0")
    } else if (posicion == 1) {
        letra = ("div1")
    } else if (posicion == 2) {
        letra = ("div2")
    } else if (posicion == 3) {
        letra = ("div3")
    } else if (posicion == 4) {
        letra = ("div4")
    }
}
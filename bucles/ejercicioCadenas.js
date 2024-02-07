ejecutarPuerba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}


recorrerCadena = function (cadena) {
    //0123
    //Juan
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion)
    }
}

ejecutarPuerba2 = function () {
    let entrada;
    entrada = recuperarTexto("txtCadena");
    invertirCadena(entrada);
}

invertirCadena = function (cadena) {
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado = resultado + cadena[i];
        mostrarTexto("lblMensaje", resultado)
    }
    return resultado;
}

buscarLetra = function (cadena, letra) {
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra)
            existeLetra = true;
    }
    if (existeLetra == true) {
        return true;
    } else {
        return false;
    }
}

contarMayusculas = function (cadena) {
    let letra
    let contadorMayusculas = 0;
    for (let i = 0; cadena.length; i++){
        letra = cadena.charAt(i)
        if (esMayuscula(letra)) {
        contadorMayusculas++
        }
    }
    console.log(contadorMayusculas);
}
validarEstructura = function (placa) {
    if (placa.length < 7 || placa.length > 8) {
        return "La placa debe tener 7 u 8 caracteres.";
    }

    let errores = [];

    if (!esMayuscula(placa.charAt(0)) & !esMayuscula(placa.charAt(1)) & !esMayuscula(placa.charAt(2))) {
        errores.push("Los primeros tres caracteres deben ser letras mayusculas.");
    }

    if (placa.charAt(3) !== '-') {
        errores.push("El cuarto caracter debe ser un guion.");
    }

    if (!esDigito(placa.charAt(4)) & !esDigito(placa.charAt(5)) & !esDigito(placa.charAt(6))) {
        errores.push("Los caracteres quinto, sexto y septimo deben ser digitos.");
    }

    if (placa.length === 8 && !esDigito(placa.charAt(7))) {
        errores.push("El octavo caracter debe ser un digito.");
    }

    return errores.length === 0 ? null : errores.join(", ");
}

obtenerProvincia = function (placa) {
    let primeraLetra = placa.charAt(0)

    if(primeraLetra == "A"){
        return "Azuay"
    }else if(primeraLetra == "B"){
        return "Bolívar"
    }else if(primeraLetra == "U"){
        return "Cañar"
    }else if(primeraLetra == "C"){
        return "Carchi"
    }else if(primeraLetra == "X"){
        return "Cotopaxi"
    }else if(primeraLetra == "H"){
        return "Chimborazo"
    }else if(primeraLetra == "O"){
        return "El Oro"
    }else if(primeraLetra == "E"){
        return "Esmeraldas"
    }else if(primeraLetra == "W"){
        return "Galápagos"
    }else if(primeraLetra == "G"){
        return "Guayas"
    }else if(primeraLetra == "I"){
        return "Imbabura"
    }else if(primeraLetra == "L"){
        return "Loja"
    }else if(primeraLetra == "R"){
        return "Los Ríos"
    }else if(primeraLetra == "M"){
        return "Manabí"
    }else if(primeraLetra == "V"){
        return "Morona Santiago"
    }else if(primeraLetra == "N"){
        return "Napo"
    }else if(primeraLetra == "S"){
        return "Pastaza"
    }else if(primeraLetra == "P"){
        return "Pichincha"
    }else if(primeraLetra == "K"){
        return "Sucumbíos"
    }else if(primeraLetra == "Q"){
        return "Orellana"
    }else if(primeraLetra == "T"){
        return "Tungurahua"
    }else if(primeraLetra == "Z"){
        return "Zamora Chinchipe"
    }else if(primeraLetra == "Y"){
        return "Santa Elena"
    }   
}

obtenerTipoVehiculo = function (placa) {
    let primeraLetra = placa.charAt(1)

    if(primeraLetra == "A" || "Z"){
        return "Vehiculos Comerciales"
    }else if(primeraLetra == "E"){
        return "Vehículos gubernamentales"
    }else if(primeraLetra == "X"){
        return "Vehículos de uso oficial"
    }else if(primeraLetra == "S"){
        return "Vehículos del gobierno provincial"
    }else if(primeraLetra == "M"){
        return "Vehículos municipales"
    }else if(primeraLetra == "Cualquiera menos las anteriores"){
        return "Vehículo particular (privado)"
    }
}
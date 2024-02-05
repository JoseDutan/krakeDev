validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        let provincia = obtenerProvincia(placa);
        if (provincia !== null) {
            document.getElementById("provincia").innerText = "Provincia:" + provincia;
        } else {
            document.getElementById("provincia").innerText = "Provincia Incorrecta:";
        }
    } else {
        document.getElementById("provincia").innerText = "ESTRUCTURA INCORRECTA"
    }

    if (erroresEstructura === null) {
        let tipoVehiculo = obtenerTipoVehiculo(placa);

        if (tipoVehiculo !== null) {
            document.getElementById("tipoVehiculo").innerText = "Tipo de vehiculo: " + tipoVehiculo;
        } else {
            document.getElementById("tipoVehiculo").innerText = "Tipo de vehiculo incorrecto.";
        }
    } else {
        document.getElementById("tipoVehiculo").innerText = "ESTRUCTURA INCORRECTA";
    }

    if (erroresEstructura === null) {
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);

        if (diaPicoYPlaca !== null) {
            document.getElementById("picoYPlaca").innerText = "Dia Pico y Placa: " + diaPicoYPlaca;
        } else {
            document.getElementById("picoYPlaca").innerText = "Tipo de Dia Pico y Placa incorrecto.";
        }
    } else {
        document.getElementById("picoYPlaca").innerText = "ESTRUCTURA INCORRECTA";
    }
}

limpiar=function(){
    document.getElementById("provincia").innerText = ""
    document.getElementById("tipoVehiculo").innerText = ""
    document.getElementById("picoYPlaca").innerText = ""
}
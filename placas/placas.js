validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        let tipoVehiculo = obtenerTipoVehiculo(placa);

        if (tipoVehiculo !== null) {
            document.getElementById("resultado").innerText = "Tipo de vehiculo: " + tipoVehiculo;
        } else {
            document.getElementById("resultado").innerText = "Tipo de vehiculo incorrecto.";
        }
    } else {
        document.getElementById("resultado").innerText = "ESTRUCTURA INCORRECTA";
    }
}
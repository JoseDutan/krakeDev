validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        let provincia = obtenerProvincia(placa);

        if (provincia !== null) {
            document.getElementById("resultado").innerText = "Provincia: " + provincia;
        } else {
            document.getElementById("resultado").innerText = "Provincia Incorrecta.";
        }
    } else {
        document.getElementById("resultado").innerText = "ESTRUCTURA INCORRECTA";
    }
}
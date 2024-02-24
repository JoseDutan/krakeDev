cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

mostrarCuentas = function () {
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>NUMERO CUENTA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";
    let elementoCuentas;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuentas = cuentas[i]
        contenidoTabla +=
            "<tr><td>" + elementoCuentas.numeroCuenta + "</td>"
            + "<td>" + elementoCuentas.nombre +" "+elementoCuentas.apellido + "</td>"
            + "<td>" + elementoCuentas.saldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;

}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let elementoCuentas;
    let cuentaEncontrada = null;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuentas = cuentas[i];
        if (elementoCuentas.numeroCuenta == numeroCuenta) {
            cuentaEncontrada = elementoCuentas;
            break;
        }
    }
    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let agregar;
    agregar = buscarCuenta(cuenta.numeroCuenta);
    if (agregar == null) {
        cuentas.push(cuenta)
        alert("CUENTA AGREGADA");
    } else {
        alert("CUENTA EXISTENTE");
    }
}

agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorCuenta = recuperarFloat("txtCuenta");
    let valorSaldo = recuperarFloat("txtSaldo");

    let cuenta = {}
    cuenta.cedula=valorCedula
    cuenta.nombre=valorNombre
    cuenta.apellido=valorApellido
    cuenta.numeroCuenta=valorCuenta
    cuenta.saldo=valorSaldo
    agregarCuenta(cuenta)
    mostrarCuentas()
}

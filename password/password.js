ejecutarValidacion = function () {
    let recuperar;
    let errorer;
    recuperar = recuperarTexto("txtPass")
    errorer = validarPassword(recuperar)

    if (errorer== "") {
        alert("Contraseña Correcta")
    } else {
        alert("Contraseña Incorrecta")
    }
}

function validarPassword(password) {
    let errores = "";

    if (password.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres. ";
    } else if (password.length > 16) {
        errores += "La contraseña no debe superar los 16 caracteres. ";
    }

    let mayusculaEncontrada = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= "A" && password.charAt(i) <= "Z") {
            mayusculaEncontrada = true;
        }
    }
    if (!mayusculaEncontrada) {
        errores += "La contraseña debe tener al menos una letra mayúscula. ";
    }

    let digitoEncontrado = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
            digitoEncontrado = true;
        }
    }
    if (!digitoEncontrado) {
        errores += "La contraseña debe tener al menos un dígito. ";
    }

    let caracterEspecialEncontrado = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) == "*" || password.charAt(i) == "-" || password.charAt(i) == "_") {
            caracterEspecialEncontrado = true;
        }
    }
    if (!caracterEspecialEncontrado) {
        errores += "La contraseña debe tener al menos un caracter especial (*, -, _). ";
    }

    return errores;
}

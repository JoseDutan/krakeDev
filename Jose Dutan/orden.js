let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 },
]

agregarPersona = function () {
    let nombreRecupardo = recuperarTexto("txtNombre");
    let edadRecuperado = recuperarTexto("txtEdad");
    let nombreLonguitud = nombreRecupardo.length;

    if (nombreLonguitud >= 3) {
        mostrarTexto("lblErrorNombre", "");
        if (edadRecuperado >= 0 && edadRecuperado <= 100) {
            mostrarTexto("lblErrorEdad", "");
            let nuevaPersona = {};
            nuevaPersona.nombre = nombreRecupardo;
            nuevaPersona.edad = edadRecuperado;
            personas.push(nuevaPersona);
            alert("PERSONA AGREGADA CORRECTAMENTE");
        } else {
            mostrarTexto("lblErrorEdad", "La Edad debe ser entre 0 y 100 ");
        }
    } else {
        mostrarTexto("lblErrorNombre", "El nombre debe almenos tener 3 caracteres");
    }
    mostrasTabla();
}

mostrasTabla = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i]
        contenidoTabla +=
            "<tr><td>" + elementoPersona.edad + "</td>"
            + "<td>" + elementoPersona.nombre + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
            console.log(personaMayor);
        }
    }
    return personaMayor;
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTexto("lblMostrarMayor", "EL MAYOR ES "+mayor.nombre+" CON LA EDAD DE "+mayor.edad+" AÑOS")

}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i]
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
            console.log(personaMenor);
        }
    }
    return personaMenor;
}

determinarMenor = function () {
    let menor = encontrarMenor();
    mostrarTexto("lblMostrarMayor", "EL MENOR ES "+menor.nombre+" CON LA EDAD DE "+menor.edad+" AÑOS")

}
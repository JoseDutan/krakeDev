let Aleatorio = []

generarNumeroAleatorio = function () {
    let = numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

generarAleatorio = function () {
    let numUsuario;
    let recuperar
    numUsuario = recuperarInt("txtAleatorio");

    if (isNaN(numUsuario) || numUsuario < 5 || numUsuario > 20) {
        alert("Ingrese un numero entre 5 y 20");
    }else{
        for (let i = 0; i < numUsuario; i++) {
            console.log(i);
            recuperar=generarNumeroAleatorio();
            Aleatorio.push(recuperar)
        }
        mostraResultado(Aleatorio);
    }
    
}

mostraResultado = function (arregloNumeros) {
    mostrarTexto("divTable", arregloNumeros)
    let cmpTabla = document.getElementById("divTable");
    let contenidoTabla = "<table><tr><th>INDICE</th></tr>";
    let miNum
    for (let i = 0; i < Aleatorio.length; i++) {
        miNum = Aleatorio[i]
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNum;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
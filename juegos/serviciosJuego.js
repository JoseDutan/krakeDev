obtenerAleatorio=function(){
    let=numeroAleatorio= Math.floor(Math.random()*3)+1;
    return numeroAleatorio
}

generarElemento=function(){
    let numeroAleatorio=obtenerAleatorio();
    let Piedra="piedra";
    let Papel="papel";
    let Tijera="tijera";
    if(numeroAleatorio == 1){
        return Piedra
    }else if(numeroAleatorio == 2){
        return Papel
    }else if(numeroAleatorio == 3){
        return Tijera
    }
}

determinarGanador=function(seleccionJugador1, seleccionJugador2){
    let jugado1=1;
    let jugado2=2;
    let empate=0;
    if( (seleccionJugador1 == "piedra" && seleccionJugador2 == "tijera") ||
        (seleccionJugador1 == "tijera" && seleccionJugador2 == "papel") ||
        (seleccionJugador1 == "papel" && seleccionJugador2 == "piedra")) {
        return jugado1;
    }else if((seleccionJugador2 == "piedra" && seleccionJugador1 === "tijera") ||
        (seleccionJugador2 == "papel" && seleccionJugador1 == "piedra") ||
        (seleccionJugador2 == "tijera" && seleccionJugador1 == "papel")) {
        return jugado2;
    } else {
        return empate;
    } 
}

generarRuta=function(nombre){
    if(nombre=="papel"){
        return "./imagenes/papel.png"
    }else if(nombre=="piedra"){
        return "./imagenes/piedra.png"
    }else if(nombre=="tijera"){
        return "./imagenes/tijera.jpeg"
    }
}
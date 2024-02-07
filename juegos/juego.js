let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionar){
    let invocarElemeto;
    let invocarRuta;
    let invocarGanador;
    let imgCompu;
    invocarElemeto=generarElemento();
    invocarRuta=generarRuta(invocarElemeto);
    invocarGanador=determinarGanador(seleccionar, invocarElemeto);
    imgCompu=generarRuta(invocarElemeto);
    if(invocarGanador == 0){
        mostrarTexto("lblMensaje", "EMPATE");
    }else if(invocarGanador == 1){ 
        puntosUsuario = puntosUsuario + 1;
        mostrarTexto("lblMensaje", "GANASTE LA RONDA!!");
        mostrarTexto("lblUsuario", puntosUsuario)
    }else if(invocarGanador ==2){
        puntosComputador = puntosComputador +1;
        mostrarTexto("lblMensaje", "PERDISTE LA RONDA!!");
        mostrarTexto("lblMaquina", puntosComputador)
    }
    
    if(puntosUsuario == 5){
        mostrarTexto("lblGanador", "HAS GANADO EL JUEGO");
    }else if(puntosComputador == 5){
        mostrarTexto("lblGanador", "EL COMPUTADOR TE GANO");
    }

    mostrarImagen("maquina", imgCompu);
}

limpiar=function(){
    mostrarTexto("lblMensaje", "");
    mostrarTexto("lblUsuario", "");
    mostrarTexto("lblMaquina", "");
    mostrarTexto("lblGanador", "");
    puntosUsuario=0;
    puntosComputador=0;
}
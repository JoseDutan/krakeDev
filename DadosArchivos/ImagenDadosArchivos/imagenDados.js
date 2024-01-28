let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(lanzamientos)
    //si el jugador obtiene mas de 20 puntos
    // mostrar en pantalla un mensaje ganaste
    
}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    if(puntos > 20){
        cambiarTexto("lblMensaje", "GANASTE")
    }
}

//no recibe parametros
//resta 1 a la variable lanzamientos, guardo el resultado en la variable
//y muestro en pantalla
modificarLanzamientos=function(){   
    // si lanzamientos llega a 0 
    //mostrar en pantalla elo mensaje game over
    //invocar a limpiar
    lanzamientos= lanzamientos -1;
    cambiarTexto("lblLanzamientos", lanzamientos);
    if(lanzamientos == 0 & puntos<20){
        cambiarTexto("lblMensaje", "GAME OVER");
    } else if (lanzamientos == 0 & puntos>20){
        cambiarTexto("lblMensaje", "GANASTE");
    }
}

limpiar=function(){
    // colocar puntaje en 0 y lanzamientos en 5
    //en las variables y pantalla
    cambiarTexto("lblPuntos", "0" );
    cambiarTexto("lblLanzamientos", "5" );
    cambiarTexto("lblMensaje", " " );
    lanzamientos=5;
    puntos=0
    cambiarImagen("imgDado", " ");
}
//funcion mostrar cara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente
//no retorna nada
mostrarCara=function(numero){
    if(numero == 1){ // con == se compara y com un solo = se asirga
        cambiarImagen("imgDado", "dados1.png");
    } else if(numero == 2){
        cambiarImagen("imgDado", "dados2.png");
    } else if(numero == 3){
        cambiarImagen("imgDado", "dados3.png");
    } else if(numero == 4){
        cambiarImagen("imgDado", "dados4.png");
    } else if(numero == 5){
        cambiarImagen("imgDado", "dados5.png");
    } else if(numero == 6){
        cambiarImagen("imgDado", "dados6.png");
    } 
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
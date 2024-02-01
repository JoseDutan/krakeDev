calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;

    nota1=recuperarFloat("txtNota1");
    nota2=recuperarFloat("txtNota2");
    nota3=recuperarFloat("txtNota3");

    promedio=calcularPromedio(nota1, nota2, nota3);
    mostrarTexto("lblPromedio", promedio);
    
    if(promedio > 0 && promedio< 5){
        mostrarImagen("lblImagen", "./donkey-kong-triste.gif")
        mostrarTexto("lblMensaje", "REPROBADO");
    }else if(promedio >= 5 && promedio <= 8){
        mostrarImagen("lblImagen", "./el-exito.gif");
        mostrarTexto("lblMensaje", "BUEN TRABAJO");
    }else if(promedio > 8 && promedio <= 10){
        mostrarImagen("lblImagen", "./excelente.gif");
        mostrarTexto("lblMensaje", "EXCELENTE");
    }else if(promedio < 0 || promedio > 10){
        mostrarImagen("lblImagen", "./datosincorrectos.gif" )
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
    }

}

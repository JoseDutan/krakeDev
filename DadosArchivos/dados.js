jugar=function(){
    let aleatorio;
    let texto;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio)
    if(aleatorio>3){
        console.log("ES MAYOR A 3")
        console.log("GANASTE")
        texto="GANASTE"
    }else{
        console.log("ES MENOR A 3");
        console.log("ESTAS DE MALAS");
        texto="ESTAS DE MALAS"
    }
    cambiarTexto("lblTexto", texto)
}

//crear una funcion llamada lanzar dado
//no retorna parametro
//retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado
    aleatorio=Math.random(); //numero entre 0 y 1
    numeroMultiplicado=aleatorio*6;//
    
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
   
    valorDado=numeroEntero+1; //entre 0 y 6
   
    return valorDado;
}
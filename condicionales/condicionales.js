calcularTasaInteres=function(ingresoAnual){
    let ingresoAnualFloat= parseFloat(ingresoAnual)
    let floatResultado
    if(ingresoAnualFloat< 300000){
        floatResultado= ingresoAnualFloat * 0.16;
        return floatResultado;
    }else if(ingresoAnualFloat >=300000 && ingresoAnualFloat<500000){
        floatResultado= ingresoAnualFloat *0.15;
        return floatResultado;
    }else if(ingresoAnualFloat >=500000 && ingresoAnualFloat<1000000){
        floatResultado= ingresoAnualFloat * 0.14;
        return floatResultado;
    } else if(ingresoAnualFloat >=1000000 && ingresoAnualFloat<2000000){
        floatResultado= ingresoAnualFloat * 0.13;
        return floatResultado;
    } else if(ingresoAnualFloat >= 2000000){
        floatResultado= ingresoAnualFloat * 0.12;
        return floatResultado;
    }
}

calcularCapacidadPago=function(edad, ingresos, egresos){
    let edadInt= parseInt(edad);
    let ingresosFloat= parseFloat(ingresos);
    let egresosFloat= parseFloat(egresos);
    let valorCuota;
    let sobra = ingresosFloat - egresosFloat;
    if(edadInt>50){
        valorCuota = 0.3 * sobra;
        return valorCuota;
    }else if(edadInt<=50){
        valorCuota = 0.40 * sobra;
        return valorCuota;
    }
}

calcularDescuento=function(precio, cantidad){
    let precioFloat= parseFloat(precio);
    let cantidadInt= parseInt(cantidad);
    let descuento;
    let montoTotal= precioFloat * cantidadInt;
    let valorAPagar;
    if(precioFloat<0){
        alert("DATOS INCORRECTOS")
        return false;
    }else if(cantidadInt<3){
        descuento=0;
        valorAPagar=montoTotal-descuento;
        return valorAPagar
    }else if(cantidadInt>=3 && cantidadInt<=5){
        descuento=0.2;
        valorAPagar=montoTotal*descuento;
        return valorAPagar;
    }else if(cantidadInt>=6 && cantidadInt<=11){
        descuento=0.3;
        valorAPagar=montoTotal*descuento;
        return valorAPagar;
    }else if(cantidadInt>=12){
        descuento=0.4;
        valorAPagar=montoTotal*descuento;
        return valorAPagar;
    }

}

determinarColesterolILDL=function(nivelColesterol){
    let colesterol= parseFloat(nivelColesterol);
    let mensaje;
    if(colesterol<100){
        mensaje="OPTIMO";
        return mensaje;
    }else if(colesterol>=100 && colesterol<=129){
        mensaje="CASI OPTIMO";
        return mensaje;
    }else if(colesterol>=130 && colesterol<=159){
        mensaje="LIMITE SUPERIOR DE RANGO";
        return mensaje;
    }else if(colesterol>=160 && colesterol<=189){
        mensaje="ALTO";
        return mensaje;
    }else if(colesterol>=190){
        mensaje="MUY ALTO";
        return mensaje;
    }
}

validarClave=function(clave){
    let claveString= String(clave)
    if(claveString.length>=8 && claveString.length<=16){
        return true;
    }else if(claveString.length<7 && claveString.length>17){
        return false;
    }
}

esMayuscula=function(caracter){
    let caracterString=String(caracter);
    let codigo=caracterString.charCodeAt(0)
    if(codigo>=65 && codigo<=90){
        return true;
    }else if(codigo==181){
        return true;
    }else if(codigo==214){
        return true;
    }else if(codigo==224){
        return true;
    }else if(codigo==233){
        return true;
    }else if(codigo==114){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let caracterString=String(caracter);
    let codigo=caracterString.charCodeAt(0);
    if(codigo>=97 && codigo<=122){
        return true;
    }else if (codigo>=160 && codigo<=163){
        return true;
    }else{
        return false;
    }
}


esDigito=function(){
    let caracterString=String(caracter);
    let codigo=caracterString.charCodeAt(0);
    if(codigo>=48 && codigo<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);

    if((matematica>90 || fisica>90 || geometria>90)){
        return true;
    }else{
        return false;
    }

}

otorgarPermiso=function(){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);

    if((matematica>90 || fisica>90) && (geometria>80)){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    let matematica=parseFloat(notaMatematica);
    let fisica=parseFloat(notaFisica);
    let geometria=parseFloat(notaGeometria);

    if((matematica>90 || fisica>90 || geometria>90) && (fisica>matematica)){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    return codigoAscii>=65 && codigoAscii<=90;
}

esDigito=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    return codigoAscii>=48 && codigoAscii<=57;
}

esGuion=function(caracter){
    return caracter === '-';
}

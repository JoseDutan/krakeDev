calcularValorDescuento=function(monto, porcentajeDescuento) {
    let descuento = (monto * porcentajeDescuento) / 100;
    return descuento;
}

calcularIVA=function(monto, descuento){
    let iva= (monto - descuento) * 0.12;
    return iva;
}

calcularSubtotal=function(precio, cantidad){
    let subtotal= precio * cantidad;
    return subtotal;
}

calcularTotal=function(subtotal, descuento, iva){
    let total= (subtotal - descuento) + iva;
    return total;
}

calcularDescuentoPorVolumen=function(monto, cantidad){
    
    let valorDescuento;
    if(cantidad<0){
        alert("DATOS INCORRECTOS")
        return false;
    }else if(cantidad<3){
        valorDescuento=0;
        return valorDescuento
    }else if(cantidad>=3 && cantidad<=5){
        descuento=0.03;
        valorDescuento=monto*descuento;
        return valorDescuento;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.04;
        valorDescuento=monto*descuento;
        return valorDescuento;
    }else if(cantidad>=12){
        descuento=0.05;
        valorDescuento=monto*descuento;
        return valorDescuento;
    }
}
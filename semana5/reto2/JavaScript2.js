
function clickear() {
    
    let dato1 = +prompt(`Elije una de las opciones: 1, 2 o 3`) 
    let dato2 = +prompt(`¿Cuántas hamburguesas desea comprar?`)
    let dato3 = +prompt(`¿Cómo desea pagar?
        1. Efectivo
        2. Tarjeta (con un recargo del 5%)`)  

       if (dato1 == 1 && dato3==1) {
            costo= 20
    } else if (dato1 == 2 && dato3==1) {
            costo= 25
    } else if (dato1 == 3 && dato3==1) {
            costo=28
    } else if (dato1 ==1 && dato3==2) {
            costo=20+(20*0.05)
    } else if (dato1 ==2 && dato3==2) {
            costo=25+(25*0.05)
    } else if (dato1 ==3 && dato3==2) {
            costo=28+(28*0.05)
    } else {
        console.log("Debes ingresar solo datos solicitados")
    }

    // switch (dato1){
    //     case dato1 == 1 && dato3==1:
    //         costo=20
    //     break 
    //     case dato1 == 2 && dato3==1:
    //         costo=25
    //     break
    //     case dato1 == 3 && dato3==1:
    //         costo=28
    //     break
    //     case dato1 ==1 && dato3==2:
    //         costo=20+(20*0.05)
    //     break 
    //     case dato1 ==2 && dato3==2:
    //         costo=25+(25*0.05)
    //     case dato1 ==3 && dato3==2:
    //         costo=28+(28*0.05)
    //     default:
    //         console.log("Debes ingresar un dato válido")
    // }
     
    if (dato1==1){
        tipo = "Hamburguesa de S/ 20.00 Nuevos Soles"
    } else if (dato1==2){
        tipo = "Hamburguesa de S/ 25.00 Nuevos Soles"
    } else {
        tipo = "Hamburguesa de S/ 28.00 Nuevos Soles"
    }
    
    if(dato3==1){
        pago ="pago es en Efectivo"
    } else {
        pago = "pago tiene un recargo del 5% (Paga con Tarjeta)"
    }

    swal(`¡SU PEDIDO ESTÁ CASI LISTO!`,`Usted ha elegido la ${tipo}, 
Ha pedido ${dato2} Hamburguesas, 
Su ${pago},
Debe cancelar S/ ${costo*dato2} Nuevos Soles
¿Desea confirmar su pedido?`,`success`,{
    dangerMode: true,
    buttons: true,
})
.then((value) => {
    swal(`Gracias por visitarnos, ¡REGRESE PRONTO!`);
  });



}


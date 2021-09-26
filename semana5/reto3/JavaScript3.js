function clickear() {
  let cita = +prompt("¿Cuántas citas desea separar?");

  if (cita >= 1 && cita <= 3 && cita!== typeof Number) {
    num = cita * 200  ;
  } else if (cita >= 4 && cita <= 5) {
    num = (cita - 3) * 150 + 600;
  } else if (cita >= 6 && cita <= 8) {
    num = (cita - 5) * 100 + 900;
  } else if (cita >= 9) {
    num = (cita - 8) * 50 + 1200;
  } else {
    console.log("Debes ingresar un dato válido");
  }

  if (cita >= 1 && cita <= 3) {
    dato = `${cita} citas de S/ 200 Nuevos Soles.`;
  } else if (cita >= 4 && cita <= 5) {
    dato = `${cita - 3} citas de S/ 150 Nuevos Soles,
            3 citas a S/ 200 Nuevos Soles.`;
  } else if (cita >= 6 && cita <= 8) {
    dato = `${cita - 5} citas de S/ 100 Nuevos Soles,
            2 citas a S/ 150 Nuevos Soles,
            3 citas de S/ 200 Nuevos Soles.`;
  } else if (cita >= 9) {
    dato = `${cita - 8} citas de S/ 50 Nuevos Soles,
            3 citas de S/ 100 Nuevos Soles,
            2 citas de S/ 150 Nuevos Soles,
            3 citas de S/ 200 Nuevos Soles.`;
  }
  swal(
    `¡REGISTRO INGRESADO!`,
    `Ha solicitado ${cita} citas,
      ${dato}   
     El monto total a pagar es S/. ${num} Nuevos Soles
     Para confirmar cita, presione "ok", de lo contrario, presione "cancel".`,
    `success`,
    {
      dangerMode: true,
      buttons: true,
    }
  ).then(() => {
    swal(`Gracias por visitarnos, ¡REGRESE PRONTO!`);
  });

}

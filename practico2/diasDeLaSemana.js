const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero del 1 al 7: ");
if (numero >= 1 && numero >= 7);
else {
    switch (Number(numero))
    {case 1 : dia = "lunes";
    console.log ("Hoy es lunes");
    break;
    case 2 : dia = "martes";
    console.log ("Hoy es martes");
    break;
    case 3 : dia = "miercoles";
    console.log ("Hoy es miercoles");
    break;
    case 4 : dia = "jueves";
    console.log ("Hoy es jueves");
    break;
    case 5 : dia = "viernes";
    console.log ("Hoy es viernes");
    break;
    case 6 : dia = "sabado";
    console.log ("Hoy es sabado");
    break;
    case 7 : dia = "domingo";
    console.log ("Hoy es domingo");
    break;
    default: console.log ("Numero invalido")
}
}
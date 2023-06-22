const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingresar un numero entero del 1 al 12 representando los meses: ");
if ((numero >= 1 && numero <= 12))
{ let meses = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];
let mes;
mes = (meses.indexOf(mes) + 1, 0);
let diasMeses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dias;
dias = (diasMeses.indexOf(dias) + 1 , 0);}
else { consosole.log ("La cantidad de dias del mes de %s es %i ." , mes, dias);}





//let diasMeses = [ 1 = 31, 2 = 28, 3 = 31, 4 = 30, 5= 31, 6 = 30, 7= 31, 8 = 31, 9 = 30, 10 = 31, 11 = 30, 12= 31];}
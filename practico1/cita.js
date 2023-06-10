let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tristes tigres comen";
let tamañoDeCita = cita.length;
console.log("El tamaño de cita es: " + tamañoDeCita);
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + (indice));
let citaRevisada = cita.split(" en un trigal");
console.log(citaRevisada);




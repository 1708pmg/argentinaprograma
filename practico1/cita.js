let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tristes tigres comen";
let tamañoDeCita = cita.length;
console.log("El tamaño de cita es: %s" ,tamañoDeCita);
let indice = cita.indexOf(substring);
console.log("El indice del substring es: %s", indice);
let substringDeCita = cita.split(" ");
let citaRevisada = substringDeCita[0] + " "+substring +" " +substringDeCita[4];
console.log(citaRevisada);




const readlineSync = require ("readline-sync");

let jugadaComputadora;
function obtenerJugadaComputadora(){
    let jugadaComputadora = ["piedra", "papel", "tijeras"];
    let eleccionPc = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return jugadaComputadora[eleccionPc];
}

let jugadaUsuario;
function obtenerJugadaUsuario(){
    let jugadaUsuario = readlineSync.question("Por favor, ingresa una de las tres opciones: piedra, papel o tijeras: ");
    if (!(jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijeras")){
    let mensaje = "Jugada invalida. Elija una de estas opciones: piedra, papel o tijeras. ";
    return(mensaje);
}
    else {
    return jugadaUsuario.toLowerCase();
    }
}

let usuario;
let computadora;
function determinarGanador(usuario,computadora){
    let resultado;
    if (jugadaUsuario === jugadaComputadora){
        resultado = "Empate";
    }
    else if (jugadaUsuario == "piedra"  && jugadaComputadora == "papel" ){
        resultado = "Gana el usuario";
    }
    else if (jugadaUsuario == "tijeras"  && jugadaComputadora == "papel" ){
        resultado = "Gana el usuario";
    }
    else if (jugadaUsuario == "papel"  && jugadaComputadora == "piedra" ){
        resultado = "Gana el usuario";
    }
    else { resultado = "Gana la computadora";
    }
        return resultado;
}


jugadaUsuario = obtenerJugadaUsuario();
console.log ("El usuario eligio: " + jugadaUsuario);

jugadaComputadora = obtenerJugadaComputadora();
console.log ("La computadora eligio: " + jugadaComputadora);

resultado = determinarGanador(usuario, computadora);
console.log("El resultado fue: " + resultado );
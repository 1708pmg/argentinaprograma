let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro","Emilia"];
let rechazados = [];
let admitidos = [];
for (let i = 0; i < personas.length; i++){
    if (personas [i] == "Jose" && personas[i] =="Sofia"){
        rechazados.push(personas[i])
        console.log("La lista de invitados rechados es: " + rechazados + ".");}
}



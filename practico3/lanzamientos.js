let i = 10
for (let i = 10; i >= 0 ; i--){
  if (i === 10)
  console.log("Cuenta regresiva " + i + ".");
  else if ( i === 0) 
  console.log("Lanzamiento! ");
  else 
  console.log(i);
}
// No me quedó claro si debia poner tambien el numero 0, en ese caso la linea 6 seira : console.log(i + " Lanzamientos!")
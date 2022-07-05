//operador condicionnal ternario 
const activo = true;

let mensaje = "";

if (activo) { //para ver si es negativo seria !activo
    mensaje = "Activo";
} else {
    mensaje = "Inactivo";
}

console.log(mensaje);

//con  operador codicional ternario

              //condicion  //if true    //else
let mensaje2 = ( activo ) ? "Activo" : "Inactivo";
console.log(mensaje2);

//el operador condicional ternario siempre esperara un else
//pero si uno quiere solo ejecutar la funcion si la codicion se cumple entonces se hace de la siguiente manera
const mensaje3 = activo && "Activo";
console.log(mensaje3);

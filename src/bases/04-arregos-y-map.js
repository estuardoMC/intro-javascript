//arreglos 

const arreglo = [1, 2, 3, 4];
//arreglo.push(1); //con push podemos añadir un elemento pero no es la forma recomendada
console.log(arreglo);

//let arreglo2 = arreglo  mala forma de copiar un arreglo

//operador spred

let arreglo2 = [ ...arreglo, 5] //esto no son parametros, estamos copiando la info de arreglo y luego añadimos 5
console.log(arreglo2);
console.log(arreglo);

//const arreglo3 = arreglo2.map();


//funcon map() nos ayuda a crear un nuevo arreglo, rompe la referencia de los objetos y nos crea un nuevo arreglo
//la funcion map() lleva como parametro un callback , dentro del calback nosotros recibimos como parametro un elemento del arreglo
//donde nosotros estamos copiando nuestro arreglo 
//ejercicio: crear un arreglo donde tenga numeros del 1 al 6 y utilizar la funcion map para crear un nuevo arreglo a partir del arreglo de numeros
//pero cuando recibamos los elementos del arreglo los multiplicamos a cada uno por 2 y lo retornamos 

const numeros = [1, 2, 3, 4, 5, 6];
let numerosMultiplicados = numeros.map(e=>{
    return e * 2;
})

console.log(numerosMultiplicados);
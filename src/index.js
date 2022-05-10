//arreglos 

const arreglo = [1, 2, 3, 4];
//arreglo.push(1); //con push podemos añadir un elemento pero no es la forma recomendada
console.log(arreglo);

//let arreglo2 = arreglo  mala forma de copiar un arreglo

//operador spred

let arreglo2 = [ ...arreglo, 5] //esto no son parametros, estamos copiando la info de arreglo y luego añadimos 5
console.log(arreglo2);
console.log(arreglo);


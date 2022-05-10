//template string

const nombre = "Estuardo";
const apellido = "Marroquin";

//forma clasica
const nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto);
//template string   
const nombreCompleto2 = `${nombre} ${apellido} 
${1 + 1}
`
console.log(nombreCompleto2)
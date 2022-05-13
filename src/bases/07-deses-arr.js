//Desestructuracion de objetos

const jugadores = ['Modric', 'benzema', 'marcelo'];

//los arreglos viene en posiciones 
const [p1] = jugadores;//extraemos solamente el primer elemento del arreglo jugadores
console.log(p1);

const [ , p2] = jugadores;//extraemos solo el segundo elemento 
const [, , p3] = jugadores;// el tercero
console.log(p2, p3);

const retornaArreglo = ()=>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tareas: 
// 1. El primer valor del arreglo se llamara nombre
// 2. Se llamara setNombre
const usState = (valor) =>{
    return[valor, ()=>{
        console.log("hola mundo");
    }]
}
//desestructuramos un arreglo que viene desde la funcion que usState() con un valor inicial, tambien una funcion d
const [nombre, setNombre] = usState("Estuardo");
console.log(nombre);
setNombre()
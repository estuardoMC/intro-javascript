//funciones 

//forma de retornar 1
const retornar1 = (nombre)=>{
    return `my name is ${nombre}`
}
//forma de retornar 2
const retornar2 =(nombre)=> `my name is ${nombre}`;

console.log(retornar1("Estuardo"));
console.log(retornar2("Kelly"));

//retornar objetos en funciones de una sola linea

const getUser =()=> ({
    uid: 'abc123',
    username: 'estuardoMC'
})

const user = getUser().username;
console.log(user);
//tarea
//1. Transformar a una funcion de flecha 
//2. Tiene que retornar un objeto implicito
//3. Probar
const getUsuarioActivo = (nombre)=>{
    return ({
        uid: 'ABC123',
        username: nombre
    })
}
const usuarioActivo = getUsuarioActivo("Estuardo Marroquin");
console.log(usuarioActivo)

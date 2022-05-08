//objetos literales
const persona = {
    nombre: "Estuardo",
    apellido: "Marroquin",
    edad: 21,
    direccion: {
        ciudad: "New York",
        zip: 519516,
        lat: 226541684,
        lang: 15961
    }
};

//crear un objeto con el mismo nombre
//
console.log({
    persona: persona //nuevo objeto
});
//a partir de ES6 si el nombre del objeto que vamos a crear es el mismo del objto que queremos copiar solo
//debemos escribir una vez el nombre


//copiar objetos: cuando queremos copiar un objeto podriamos decir 

/*
const objeto = {
    nombre: "est"
}

quierro copiar el objeto

const objeto2 = objeto;

quiero cambiar el valor de nommbre de mi objeto2
ojbeto2.nombre = "estuardo"

pero ahora quiero imprimir el objeto1

y me sale que su propiedad nombre ahora tiene un valor de estuardo que esta diferente

pero nosotros solo habiamos cambiado el valor de objeto2

lo que pasa es que no lo copiamos directamente sino que solo estamos copiando la referencia al objeto
por lo cual si queremos modificar algun valor dentro de mi supuesta copia estaremos cambiando el valor
del objeto principal
*/

//forma correcta

//operrador spred, nos sirve para clonar objetos o arreglos

const persona2 = { ...persona } //con esto estamos copiando todos los valores que tiene el objeto persona
persona2.nombre = "Kelly"

console.log(persona2);
console.log(persona);

//ahor si que copiamos bien el objeto sin hacer reperencia a el y sin cambiar sus valores
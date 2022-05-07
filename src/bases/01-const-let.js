//variables y constantes 
//scope de variables: las variables let y const tienen una funcion especial que nos permiten poeder 
//nombrarlas y en una funcion podemos nombrarlas sin que afecten al scope que esta fuera 

//nombrando varialbes
const nombre = "Estuardo";
const apellido = "Marroquin";

let valorDado = 5;
valorDado = 4;
//utilizando variables
console.log(nombre, apellido, valorDado);
//creando un nuevo scopa dentro de una funcion o condifion
if(true){
    //creando nuevas variables con el mismo nombre de las de afuera
    const nombre = 'Kelly '
    const apellido = 'De Marroquin'
    console.log(nombre + apellido);
}

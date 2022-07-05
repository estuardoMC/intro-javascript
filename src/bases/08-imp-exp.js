//import, export, funciones communes de arreglos 
import { heroes } from './data/heroes.js';

//esta es una funcion de flecha de una sola linea, no necesita las llaves
//sirve para retornar algo enn una sola linea, no se escribe el return por que se save que va retornar algo
//esta funcion recive un id como parametro que serra con el que buscara el elemento
//entonces del arreglo heroes con su metodo find tendra como parametro un callback
//este calback sera una funcion que obtendra como parametro un elemento del arreglo que cumplira con la condicion 
//que tendra dentro, la condicion es que retorne el elemento si la id del elemento es igual 
//a la id que obtiene alfuncion getHeroe como parametro si es igual regresara el elemento, en este caso un objeto
//si no es igual regresara undefine
export const getHeroe = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroe(1));
//devolver varios valores con filter
//este no nos devuelve solo el primer elemento sino varios que cumplan con la condicion
export const getHeroesByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner("DC"));
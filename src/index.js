//import, export, funciones communes de arreglos 
import { heroes } from './data/heroes.js';

const getHeroe = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroe(1));
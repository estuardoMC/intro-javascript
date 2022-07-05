import { getHeroe } from "./02-imp-exp";

//promesas
//una promesa se crea con un callback
//el callback recibe dos argumentos 
// 1) resolve: se ejecuta cuando la promesa es exitosa si termina todo correctamente
// 2) reject: se ejecuta cuando la promesa falla o hay un error 
const getHeroesByIdAsync = (id)=>{
    //Dentro de la promesa se puede ejecutar codigo 
    //en este codigo hay una condicion
    //si se cumple la condicion la promesa tendra exito y se ejecutara el resolve
    //si no se cumple entonces la promesa no tendra exito y se ejecutara el reject
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroe(id);
            if(heroe === undefined){
                reject(`no se encontro el herroe con la id ${id}`)
            }
            resolve(heroe);
            //muy importante para que funcione el then tenemos que devolver resolve o reect
        }, 2000)
    });
}

getHeroesByIdAsync(1)
    .then( heroe =>{
    console.log(heroe);
    })
    .catch(err=>{
    console.log(err);
})
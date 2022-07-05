//Desestructuracion, o asignacion desestructurante

const persona = {
    nombre: "Estuardo",
    edad: 21,
    clave: "est",
};


const imprimePersona = ( usuario )=>{
const { nombre, clave, edad } = usuario;
    console.log(nombre, clave, edad);
}
imprimePersona(persona);

//propiedades por defecto 
const imprimePersona2 = ({nombre, edad, clave, rango = 5})=>{
    console.log(nombre, edad, clave, rango);
} 
imprimePersona2(persona)

const usContext =({clave, nombre, edad})=>{
    return ({
        nombreClave: clave,
        anios: edad,
        lat: {
            lat: 45,
            lng: 47
        }
    })
}
//desestructurar un objeto dentro de otro objeto
const {nombreClave, anios, lat:{lat, lng}} = usContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

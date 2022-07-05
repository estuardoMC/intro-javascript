//Fetch API
//nos permite hacer peticiones http a empoints directamente sin importar nunguna libreria 
//ya viene en los navegadores web
//en este ejemplo usaremos la api de giphy
//para trabajar con una api primero tenemos que crear una variable donde tengamos el acceso a la api 
const apiKey = "SXDra6oJFED1739RGKiWiOaX62sF2GUf";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//como peticion es una promesa podemos trabajarla como una promesa
//entoces tenemos el then y catch
peticion
    .then( response => {
        return response.json(); //la promesa peticion nos devuelve una respuesta
        //esta respuesta la retornamos por que vamos a usarla como otra promesa abajo con otro then 
    })
    .then( ({data}) => {//la respuesta que nos devuelve la promesa nos da un objeto que podemos desestructurar
        console.log(data.images.original.url);


        const img = document.createElement("img");
        img.src = data.images.original.url;
        document.body.append( img )
    })
    .catch( console.warn);

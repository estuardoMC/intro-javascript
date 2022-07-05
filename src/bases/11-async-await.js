//asinc await

//las funciones con asinc son como una promesa 
//mientras que la promesa retorna algo si se ejecuta el resolve o reject y se manejan despues con un then o catch

//una promesa
const getImagen1 =()=>{
    return new Promise ((resolve, reject)=>{
        resolve("foto.com");
    });
};

getImagen1().then((respuesta)=>{
    console.log(respuesta);
});

//una funcion asinc 

const getImagen2 = async()=>{
    return "foto.com";
};
getImagen2().then((respuesta)=>{  //la funcion asinc se puese utilizar como una promesa
    console.log(respuesta);
});

//el await nos ayuda a nosotros a trabajar todo el codigo como si fuera sincrono 

const getImagen3 = async ()=>{
    try {
        //intenta esto
        //a diferencia de las promesas los errores se manejan dentro de la funcion asincrona

        const apiKey = "SXDra6oJFED1739RGKiWiOaX62sF2GUf";
        //primero se tiene que ejecutar esta segunda linea 
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); //ahora es de tipo response una peticion
        //como es una peticion demorara unos seggundos 
        //despues ya se podrea seguir con la siguiente linea de codigo 
        const data = await response.json();//esta linea se trasforma o se puede leer como una promesa el .json()
        const img = document.createElement("img");
        console.log(data.data.images.original);
        let finalImg = data.data.images.original.url;
        img.src = finalImg;
        document.body.append( img );
        
    } catch (error) {
        //maneja el error
        console.error(error); 
    }
};
getImagen3();
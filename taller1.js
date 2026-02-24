//variables básicas 
let nombre="Jubelit";
let ciudad="Popayan";
let edad=18;
console.log(`Hola mi nombre es ${nombre} tengo ${edad} años y vivo en ${ciudad}`);



//funcion con el nombre que desee y realize una operacion 
function suma (){
let num1=2;
let num2=3;
let num3=7;

let suma=num1+num2+num3;
console.log(suma)
}
suma();



//funcion con parametros
function recibir (frase){
    let nombre="Grissel";
    let edad=18;
    
    console.log(`${frase} mi nombre es ${nombre} y tengo ${edad} años`);
}
recibir("Buenos");
recibir("Holas");
recibir("Buenas tardes");



//crear un objeto 
let persona={
    nombre:"Jubelit zapata",
    edad:18,
    profesion:"Desarrolladora de software"
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);



//Agregar una propiedad 
persona.gmail="gjubelit@gmail.com";
console.log(persona.gmail);



// Función con objeto (SIN DESESTRUCTURACIÓN)
function objetoPersona(persona){
return `El nombre es ${persona.nombre} y su profesion es ${persona.profesion}`;
}
console.log(objetoPersona(persona));


//Crea un objeto estudiante que tenga un objeto notas con:matematicas e ingles 
let estudiante={
    nombreEstudiante:"Grissel",
    grado:"septimo",

     notas:{
        matematicas:5,
        ingles:3
     }
}
console.log(estudiante.notas.matematicas)



// crear un objeto carro con marca modelo,  propietario (objeto con nombre y edad
let carro={
    marca:"mazda",
    modelo:2025,

    propietario:{
        nombre:"Jube",
        edad:20
    }
}
console.log(carro.propietario.nombre)



//Función (SIN DESESTRUCTURACIÓN) Crea una función que reciba el objeto carro y muestre marca y nombre del propietario usando punto.
function ObjectCarro (carro){
    return` la marca del carro es ${carro.marca} y el propietario es ${carro.propietario.nombre}`
}
console.log(ObjectCarro(carro));

//cambia la edad del propietario
carro.propietario.edad=30;
console.log(carro.propietario.edad);


//Desestructuracion del objeto persona:
function objetoPersona({nombre,profesion}){
console.log(`su nombre es ${nombre} y su profesion ${profesion}`)
}
objetoPersona(persona);


//Desestructuracion del objeto carro:

function ObjectCarro ({marca,modelo}){
console.log(`la marca es ${marca} y el modelo ${modelo}`)
}
ObjectCarro(carro);



//Desestructura el objeto propietario para obtener nombre y edad 
function ObjectCarro ({nombre,edad}){
console.log(`el propietario es ${nombre} y su edad es  ${edad}`)
}
ObjectCarro(carro.propietario);



//crea una funcion que reciba un objeto desestructurado y muestre nombre y edad 

function mostrarPersona({ nombre, edad }) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
}
mostrarPersona(persona);


// Desestructuración en función
function mostrarPropietario({ propietario: { nombre, edad } }) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
}

mostrarPropietario(carro);

//renombramiento 
function renombramiento({ propietario: { nombre: nombrePersona, edad: edadPersona } }) {
    console.log(nombrePersona);
    console.log(edadPersona);
}

renombramiento(carro);

// Copia con spread

let personaCopia = {
    ...persona,
    edad: 25
};

console.log(personaCopia);

//Copiar objeto anidado
let copiaCarro = {
    ...carro,
    propietario: {
        ...carro.propietario,
        edad: 40
    }
};

console.log(copiaCarro.propietario.edad);
console.log(carro.propietario.edad); 


//
let libro = {
    titulo: "cien años de soledad ",
    autor: {
        nombre: "Gabriel garcia marquez",
        edad:70
    },
    editorial: {
        editorial: "Books",
        año: 2025
    }
};
//funcion destructuracion 
function mostrarLibro({
    titulo,
    autor: { nombre, edad },
    editorial: { editorial, año }
}) {
    console.log(
        `El libro "${titulo}"  escrito por ${nombre} (${edad} años) y publicado por ${editorial} en el año ${año}.`
    );
}

mostrarLibro(libro);
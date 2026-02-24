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

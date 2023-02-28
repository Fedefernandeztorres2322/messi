/* let edad = 17
if(edad > 18){
    console.log("Sos mayor de edad")
}
else{
    console.log("Sos menor de edad")
}

//Declarar una variable llamada puntos de vida, si tu vida es mayor a 1, estas vivo, sino estas muerto */
/*  let puntosDeVida = 0
 if(puntosDeVida > 1){
    console.log("Estas vivo")

 }else{
    console.log("Estas muerto")
 }/*  */ 

 //Dejar pasar cuando el usuario tenga mas de 1000 pesos o se llame "pepe"

/* let dinero = 1400
let nombre = "pepa"

if(dinero > 1000 || nombre == "pepe"){
    console.log("dejar pasar")
}else{
    console.log("no dejar pasar")
} */

//Crear la variable nombre y edad. Si el usuario tiene 18 y se llama pepe, "es mi hijo", sino "no es mi hijo"

//crear la variable puntos y nivel. Si tengo mas de 1000 puntos o tengo un nivel mayor o igual a 3. Decir "gano el juego", sino, decir "aun no gano el jueg

/* 
let nombre = "pepe"
let edad = 18

if(edad == 18 && nombre == "pepe"){
    console.log("Es mi hijo")
}
else{
    console.log("No es mi hijo")
} */

/* let decision = prompt("elije un personaje entre 1 y 3")
if(decision == 1){
    alert("se eligio al personaje goku")
} else if(decision == 2){
    alert("se eligio al personaje vegetta")
} else if(decision == 3){
    alert("el usuario escogio al personaje krillin")
}
else{
    alert("decision no valida" */

//Crear una variable presupuesto, si el presupuesto es menor a 1000 pero mayor a 0, decir "prespuesto bajo", si el presupuesto es mayor o igual a 1000 pero menor a 3000, decir "presupuesto optimo", si el presupuesto es mayor a 3000 decir "presupuesto alto"

/* let presupuesto = prompt("Elija su presupuesto")

if(presupuesto < 1000 && presupuesto > 0){
    alert("Presupuesto bajo")
}
else if (presupuesto >= 1000 && presupuesto < 3000){
    alert("Presupuesto optimo")
}
else if (presupuesto > 3000 ){
    alert("Presupuesto alto")
} */
// for(let contador = 1; contador <= 10; contador = contador + 1){
//     console.log(contador)
// }
//CONSTRUIR UN CONTADOR DEL 1 AL 100
/* for(let contador = 1; contador <=100; contador = contador + 1){
    console.log(contador)
}
 */
//Ejecutar 10 mensajes por consola que digan hola
/* for(let i = 1; i <= 10; i++){
    console.log(i)
} */
/* for(let i = 1; i <=10; i++){
    alert("hola")
} */
/* 
for(let i = 1; i <=5; i++) {
    let nombre = prompt("Ingrese su nombre")
 alert(nombre)
} */
/* for(let i = 10; i >=1; i--){
    console.log(i)
} *//* preguntar al usuario un numero de limite para el bucle y luego ejecutar el for hasta el limite solicitado */
/* let numero = prompt("Elegi un numero")
for( let i = 1; i <= numero; i++){
    console.log(i)
} */


/* for(let i = 1; i <= 10; i++){
    let nombre = prompt("poner 10 nombres")
    if( nombre == "esc"){
        break

    }
} */
/* // for(let i = 1; i <= 100; i++){
//     if(i >= 80 && i <= 90 ){
//         continue
//     } 
//     console.log(i)
// } */
//Crear un algoritmo donde creemos una variable tuNombre y le asignemos un string, luego que me solicite una decision, mientras mi decision es "decir" voy a poner por alerta "Tu nombre es tuNombre"

/* let tunombre = prompt("Pon tu nombre")
let decision = prompt("elegi tu decision")
while(decision === "decir"){
   alert("tu nombre es " +tunombre) 
   decision = prompt("la que quiera")
}
 */
/* let decision = prompt("elija una decision")

switch(decision){
    case "saludar":
        console.log("hola como estas?")
        break
    case "salir":
        console.log("cerraremos el programa")
        break
    case "decir tareas":
        console.log("tus tareas son: limpiar y cocinar")
        break
    case "1"
}
 */
//sky_state = "soleado", "lluvioso", "nublado"



//solicitar un numero al usuario
//si el numero es...
//1 o "Marlon" - "soy el personaje Marlon"
//2 o "Vicktor" - "soy el personaje Vicktor"
//3 o "Lucas" - "soy el personaje Lucas"
//Si el usuario no selecciona una opcion valida, ejecutar por alerta, "Error, no has ingresado un dato valido"

let decision = prompt("elija un numero")

switch(decision){
    case "1":
    case "Marlon":
        console.log("soy el personaje Marlon")
        break
    case "2":
    case "Vicktor":
        console.log("soy el personaje Vicktor")
        break
    case "3":
    case "Lucas":
        console.log("soy el personaje Lucas")
        break
    default: 
        alert("chauuu")
}

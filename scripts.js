

// El segundo argumento es el valor por defecto que aparecerá en el campo
let entrada = prompt("Ingresa tu edad:", "18");

// Convertir la respuesta a número
let edad = Number(entrada);

if( edad >= 18) {
    alert("Eres mayor de edad.");
}else{
    alert("Eres menor de edad.");
}


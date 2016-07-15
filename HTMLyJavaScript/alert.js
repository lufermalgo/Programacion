var	nombre = "Fernando";
var apellido = "Maldonado";

alert("¿Quieres saber tu peso en Marte?..");

peso = prompt("¿Cual es tu peso en kg?");
peso = parseInt(peso);
pesoEnMarte = (peso / 9.81) * 3.711;

alert(nombre + " " + apellido + "\n" + "Tu peso en la tierra es: " + peso + " Kg." + "\n" + "Tu peso en Marte es: " + pesoEnMarte + " Kg.");

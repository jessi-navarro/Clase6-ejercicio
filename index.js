const nombres = [];

const apellidos = [" Lopez", " Gutierrez", " Gomez", " Navarro", " Perez"];


let ingresarNombre = prompt ("Ingresa 5 nombres y nosotros le inventamos el apellido");

for (let index=0; index < 5; index++){   
ingresarNombre = prompt ("Ingresa 5 nombres");
nombres.push (ingresarNombre);
}

const nombreApellido1 = nombres[0].concat(apellidos[0]);
const nombreApellido2 = nombres[1].concat(apellidos[1]);
const nombreApellido3 = nombres[2].concat(apellidos[2]);
const nombreApellido4 = nombres[3].concat(apellidos[3]);
const nombreApellido5 = nombres[4].concat(apellidos[4]);

const nombreApellido = [];
nombreApellido.push (nombreApellido1);
nombreApellido.push (nombreApellido2);
nombreApellido.push (nombreApellido3);
nombreApellido.push (nombreApellido4);
nombreApellido.push (nombreApellido5);

alert (nombreApellido);
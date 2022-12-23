// Ejercicio uno

let uno = 1;
console.log(`Variable dos: ${uno} / let uno = 1`);
let dos = uno;
console.log(`Variable dos: ${dos} / let dos = uno`);
uno = "a";
console.log(`Variable uno: ${uno} / uno = "a"`);

// Ejercicio dos

alert(`Bienvenido!`);
let nombre = prompt("EJ2 - Ingresa tu nombre.");
let edad = parseInt(prompt(`EJ2 - Gracias por usar la pagina, ${nombre}. Cuantos años tenes?`));
console.log("un usuario tiene "+edad+" años");
alert(`EJ2 - ${nombre}, Tenes ${edad} años.`);

// Ejercicio tres

let nombreEj3_1 = "Bautista";
let edadEj3_1 = 18;
let cumpleañosEj3_1 = "2 de Julio";
let ciudadEj3_1 = "Chacabuco";
let ocupacionEj3_1 = "Estudiante";
let pasatiemposEj3_1 = "Programar, mirar anime";

console.log("El usuario "+nombreEj3_1+" tiene "+edadEj3_1+" años, viviendo en "+ciudadEj3_1+" siendo "+ocupacionEj3_1+" con "+pasatiemposEj3_1+" de pasatiempos.");

let [nombreEj3_2, edadEj3_2, cumpleañosEj3_2] = ["Bautista", 18, "2 de Julio"];

// Ejercicio cuatro

let texto = prompt(`EJ4 - Ingresa un texto breve`);
alert(`EJ4 - ${texto} tiene ${texto.length} caracteres.`);

// Ejercicio cinco

let edadEj5 = prompt(`EJ5 - Ingresa tu edad`);
alert(`EJ5 - ${edadEj5} años son ${edadEj5*365} dias.`);

// Ejercicio seis

let Val1 = prompt(`EJ6 - Ingresa una variable`);
let Val2 = prompt(`EJ6 - Ingresa otra variable`);
res=Val1+Val2;
console.log(`${res} es la suma de ${Val1} y ${Val2}`);

//////////// Ejercicio siete, Calculador De Abastecimiento De Por Vida

// Ejercicio uno

let edadEj7_1 = prompt(`EJ7-1 - Ingresa tu edad`);
let edadMaxima = prompt(`EJ7-1 - Ingresa la que pensas que va a ser tu edad maxima`);
let snack = prompt(`EJ7-1 - Ingresa tu snack favorito`);
let cantidad = prompt(`EJ7-1 - Cuantos snacks de esos comes por dia?`);
let precio = prompt(`EJ7-1 - Cuanto sale ese snack?`);
let dias = (edadMaxima - edadEj7_1)*365;
let snacks = cantidad*dias;
let precioSnacks = snacks*precio;
alert(`EJ7-1 Necesitarás ${snacks} snacks para que te alcancen hasta los ${edadMaxima} años, siendo ${dias} dias los que te quedan, y ${precioSnacks} lo que deberias gastar.`);

// Ejercicio dos

let diasViaje = prompt(`EJ7-2 - Ingresa la cantidad de dias que vas a viajar`);
let presupuesto = prompt(`EJ7-2 - Ingresa tu presupuesto maximo`);
let cantComidas = prompt(`EJ7-2 - Cuantas comidas vas a tener por dia?`);
let precioComidas = presupuesto/cantComidas;
alert(`EJ7-2 Podés gastar hasta ${precioComidas} en cada comida para que te alcance la plata durante los ${diasViaje} días de viaje`);

////////////////////////////////

// Ejercicios ES6

// Ejercicio uno

let nombreES6 = "Gabriela";
let profesionES6 = "programadora";
console.log(`${nombreES6} es ${profesionES6}`);

// Ejercicio dos

let articulo = prompt("ES6 - Ingresa el articulo que deseas comprar");
let precioArticulo = prompt(`ES6 - Ingresa el precio de ${articulo}`)
let cantArticulo = prompt(`ES6 - Ingresa la cantidad de ${articulo} que vas a llevar`)
alert(`ES6 - Para llevarte ${cantArticulo} ${articulo} vas a tener que pagar $${cantArticulo*precioArticulo}`)
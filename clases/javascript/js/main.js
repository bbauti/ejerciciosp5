/*

Menu para elejir ejercicios, que arranque luego de 10 segundos apenas cargue la pagina.

Hay algunos ejercicios que no agregue, para ahorrar tiempo, porque ya los habia compartido en el discord / hay 
partes del menu que cumplen las mismas funciones.

Es la primera vez que hago algo de este tipo en js, asi que es probable que no sea para nada eficiente o que tenga sus errores.

Si queres y poder mejorarlo, sos bienvenido de hacer un fork en el repo de github!

*/

// Agregar timeout
setTimeout(() => {
    alert("Hola! Bienvenido a mi pagina.\nCree un menu para ir a los diversos ejercicios.");
    alert(
        `Las opciones son:

            C7: Intro a javascript.
            C8: If else.
            C9: While .
            C10: Funciones.
            C11: Arreglos.
            C12: Objetos.

            CH: Checkpoint Javascript.
            
            C: Cancelar.`
    );
    
    //Funcion de inicio, para poder llamarla y volver al comienzo 
    function inicio() {
        let userInput = prompt("Ingresa una opcion. | C7 / C8 / C9 / C10 / C11 / C12 / CH / C |");
        option = userInput.toUpperCase();
        switch(option) {
            case 'C7':
                alert(`Elegiste la clase 7, elegi un ejercicio.

                    EJ4: Cantidad de caracteres.
                    EJ5: Calculadora de edad.
                    EJ6: Suma de variables.
                    EJ7: Abastecimiento de por vida.

                    V: Volver.
                `);
                let userInputC7 = prompt("Ingresa una opcion. | EJ4 / EJ5 / EJ6 / EJ7 / V |").toUpperCase();
                switch(userInputC7) {
                    case 'EJ4':
                        C7E4()
                        break;
                    case 'EJ5':
                        C7E5()
                        break;
                    case 'EJ6':
                        C7E6()
                        break;
                    case 'EJ7':
                        C7E7_1()
                        C7E7_2()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C8':
                alert(`Elegiste la clase 8, elegi un ejercicio.

                    EJ3: Par o impar.
                    EJ4: Agrega caminos.
                    EJ5: Adivina el numero.
                    EJ6: Puedo jubilarme?.

                    V: Volver.
                `);
                let userInputC8 = prompt("Ingresa una opcion. | EJ3 / EJ4 / EJ5 / EJ6 / V |").toUpperCase();
                switch(userInputC8) {
                    case 'EJ3':
                        C8E3()
                        break;
                    case 'EJ4':
                        C8E4()
                        break;
                    case 'EJ5':
                        C8E5()
                        break;
                    case 'EJ6':
                        C8E6()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C9':
                alert(`Elegiste la clase 9, elegi un ejercicio.

                    EJ1: While loops.
                    EJ2: Mi primer bot.
                    EJ5: Bruro-Matico.
                    EJ9: Bienvenida para N.
                    EJ10: Producto acumulado.

                    V: Volver.
                `);
                let userInputC9 = prompt("Ingresa una opcion. | EJ1 / EJ2 / EJ5 / EJ9 / EJ10 / V |").toUpperCase();
                switch(userInputC9) {
                    case 'EJ1':
                        C9E1()
                        break;
                    case 'EJ2':
                        C9E2()
                        break;
                    case 'EJ5':
                        C9E5()
                        break;
                    case 'EJ9':
                        C9E9()
                        break;
                    case 'EJ10':
                        C9E10()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C10':
                alert(`Elegiste la clase 10, elegi un ejercicio.

                    EJ4: Desafio FizzBuzz II.
                    EJ5: Factorial().

                    V: Volver.
                `);
                let userInputC10 = prompt("Ingresa una opcion. | EJ4 / EJ5 / V |").toUpperCase();
                switch(userInputC10) {
                    case 'EJ4':
                        C10E4()
                        break;
                    case 'EJ5':
                        C10E5()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C11':
                alert(`Elegiste la clase 11, elegi un ejercicio.

                    EJ1: Lista de super - Parte III.
                    EJ2: Reverse.
                    EJ3: Poema desordenado.
                    EJ4: Desafio isUniform().
                    EJ5: Biggest Smallest.
                    EJ8: sumArray().
                    EJ9: Simulacion del Array.join().

                    V: Volver.
                `);
                let userInputC11 = prompt("Ingresa una opcion. | EJ1 / EJ2 / EJ3 / EJ4 / EJ5 / EJ8 / EJ9 / V |").toUpperCase();
                switch(userInputC11) {
                    case 'EJ1':
                        C11E1()
                        break;
                    case 'EJ2':
                        C11E2()
                        break;
                    case 'EJ3':
                        C11E3()
                        break;
                    case 'EJ4':
                        C11E4()
                        break;
                    case 'EJ5':
                        C11E5()
                        break;
                    case 'EJ8':
                        C11E8()
                        break;
                    case 'EJ9':
                        C11E9()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C12':
                alert(`Elegiste la clase 12, elegi un ejercicio.

                    EJ1: Registro en P5.
                    EJ3: Aumentar la nota.
                    EJ4: Base de datos de peliculas.
                    EJ5: Numeros duplicados.
                    EJ6: Desafio +27.
                    EJ7: Playlist.
                    EJ8: Camino al oscar.
                    EJ9: Posicion adecuada.
                    EJ10: Software Factory.

                    V: Volver.
                `);
                let userInputC12 = prompt("Ingresa una opcion. | EJ1 / EJ3 / EJ4 / EJ5 / EJ6 / EJ7 / EJ8 / EJ9 / EJ10 / V |").toUpperCase();
                switch(userInputC12) {
                    case 'EJ1':
                        C12E1()
                        break;
                    case 'EJ3':
                        C12E3()
                        break;
                    case 'EJ4':
                        C12E4()
                        break;
                    case 'EJ5':
                        C12E5()
                        break;
                    case 'EJ6':
                        C12E6()
                        break;
                    case 'EJ7':
                        C12E7()
                        break;
                    case 'EJ8':
                        C12E8()
                        break;
                    case 'EJ9':
                        C12E9()
                        break;
                    case 'EJ10':
                        C12E10()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'CH':
                alert(`Elegiste el Checkpoint, elegi un ejercicio.

                    EJ1: Cadena de caracteres.
                    EJ2: Fecha de hoy.
                    EJ3: Conversion.
                    EJ4: The biggest one.
                    EJ5: Promedio de estudiantes.

                    V: Volver.
                `);
                let userInputCH = prompt("Ingresa una opcion. | EJ1 / EJ2 / EJ3 / EJ4 / EJ5 / V |").toUpperCase();
                switch(userInputCH) {
                    case 'EJ1':
                        CHE1()
                        break;
                    case 'EJ2':
                        CHE2()
                        break;
                    case 'EJ3':
                        CHE3()
                        break;
                    case 'EJ4':
                        CHE4()
                        break;
                    case 'EJ5':
                        CHE5()
                        break;
                    case 'V':
                        // Volver al principio
                        setTimeout(inicio, 0)
                        break;
                }
                break;
            case 'C':
                break;
            default:
                console.log("Tenes que Ingresar una opcion valida.");
                break;
        }
    }
    inicio()
}, 10000);

// Ejercicios individuales, para mejor lectura.

// Clase 7

function C7E4() { // Clase 7 ejercicio 4.
    let plabra = prompt("Elegiste el ejercicio 4, cantidad de caracteres. Ingresa una palabra o oracion.");
    alert(`Esa palabra/oracion tiene ${plabra.length} caracteres.`);
}

function C7E5() { // Clase 7 ejercicio 5.
    let edad = prompt("Elegiste el ejercicio 5, calculadora de edad. Ingresa tu edad.");
    alert(`${edad} años son ${edad*365} dias.`);
}

function C7E6() { // Clase 7 ejercicio 6.
    let varUno = prompt("Elegiste el ejercicio 6, suma de variables. Ingresa una variable.");
    let varDos = prompt("Ingresa otra variable.");
    alert(`${varUno} + ${varDos} = ${varUno+varDos}`);
}

function C7E7_1() { // Clase 7 ejercicio 7, parte 1. 
    let edad = 18;
    let edadMaxima = 87;
    let snack = "Oreos";
    let snacksPorDia = 2;
    let dias = (edadMaxima - edad)*365;
    let snacksRestantes = snacksPorDia*dias;
    let precioSnacks = snacksRestantes*precio;
    alert(`Necesitaras ${snacksRestantes} ${snack} para que te alcancen desde tus ${edad} hasta tus ${edadMaxima}, costandote ${precioSnacks}.`);
}

function C7E7_2() { // Clase 7 ejercicio 7, parte 2. 
    let diasViaje = 14;
    let presupuesto = 50000;
    let cantComidas = 2;
    let precioComidas = presupuesto/cantComidas;
    alert(`Podés gastar hasta ${precioComidas} en cada comida para que te alcance la plata durante los ${diasViaje} días de viaje`);
}

// Clase 8

function C8E3() { // Clase 8 ejercicio 3. 
    let number = parseInt(prompt("Ingresa un numero"));
    let result = (number % 2  == 0) ? "par" : "impar";
    alert(`${number} es ${result}.`)
}

function C8E4() { // Clase 8 ejercicio 4. 
    let edad=prompt("Ingrese su edad.")
    let result = (edad % 2  == 0) ? "par" : "impar";
    if (edad<0) {
        alert(`Debe ingresar una edad valida. Sabias que esa edad es ${result}?`)
    }
    else if(edad<18) {
        alert(`No puede pasar al bar. Sabias que esa edad es ${result}?`)
    } 
    else if(edad<21){
        alert(`Puede pasar al bar, pero no puede tomar alcohol. Sabias que esa edad es ${result}?`)
    } 
    else{
        alert(`Puede pasar al bar y tomar alcohol. Felicitaciones por llegar a la mayoria de edad. Sabias que esa edad es ${result}?`)
    }
}

function C8E5() { // Clase 8 ejercicio 5. 
    let numero=parseInt(prompt("Intenta adivinar el numero secreto."))
    const numeroSecreto = 12
    if (numero == numeroSecreto) {
        alert(`Acertaste! ${numeroSecreto} era el numero secreto.`)
    }
    else if (numero > numeroSecreto) {
        alert("No era ese! Te pasaste.")
    }
    else if (numero < numeroSecreto) {
        alert("No era ese! Te quedaste corto.")
    }
}

function C8E6() { // Clase 8 ejercicio 6. 
    let genero = prompt("Hola! Eres hombre o mujer?").toLowerCase();
    let edad = parseInt(prompt("Cuantos años tenes?"));
    if (genero == "mujer") {
        edad > 59
        ? alert("Señora usted se puede jubilar.")
        : alert("Señora usted no se puede jubilar. ");
    }
    if (genero == "hombre") {
        edad > 64
        ? alert("Señor usted se puede jubilar.")
        : alert("Señor usted no se puede jubilar. ");
    }
}

// Clase 9

function C9E1() { // Clase 9 ejercicio 1. 
    let num1 = -9
    while (num1 < 19){
        console.log(num1)
        num1++
    }

    let num2 = 10
    while (num2 < 40){
        if (num2 % 2 == 0) {
            console.log(num2)
        }
        num2++
    }

    let num3 = 300
    while (num3 < 333){
        if (num3 % 2 == 1) {
            console.log(num3)
        }
        num3++
    }

    let num4 = 5
    while (num4 < 50){
        if (num4 % 3 == 0 && num4 % 5 == 0) {
            console.log(num4)
        }
        num4++
    }
}

function C9E2() { // Clase 9 ejercicio 2. 
    let numAnterior = [];
    function generarRandom (min, max) {
        random = Math.round(Math.random() * (max - min) + min);
        if (!numAnterior.includes(random)){
            numAnterior.push(random);
            return random
        } 
        else {
            if (numAnterior.length < max) {
                return generarRandom(min, max)
            } else {
                return console.log('No hay mas numeros.');
            }
        }
    }
    let cantidadClientes = 1;
    while (cantidadClientes <= 20) {
        mesa = generarRandom(1, 20)
        console.log(`Bienvenido! Sos el cliente numero ${cantidadClientes}/20. Tu mesa es la ${mesa}.`)
        cantidadClientes ++
    }
}

function C9E5() { // Clase 9 ejercicio 5. 
    let respuesta=undefined
    while (respuesta != "si"){
        respuesta = prompt("¿Ya merito llegamos?").toLowerCase()
        if (respuesta == "si") {
            alert("Bienvenido a Muy Muy Lejano!")
        }
    }
}

function C9E9() { // Clase 9 ejercicio 9. 
    let numeros = []
    let invitado = 1
    while (invitado <= 5){
        if (numeros.length < 2) {
            console.log(`Bienvenido ${invitado}`)
        }
        else {
            console.log(`Bienvenido ${invitado}, te presento a ${numeros}`)
        }
        numeros.push(invitado)
        invitado++
    }
}

function C9E10() { // Clase 9 ejercicio 10. 
    let max = 5
    let actual = 1
    let res = 1
    let str = ""
    while (actual <= max) {
        str = str+"x"+actual
        if (str.charAt(0) == "x"){
            str = str.slice(1)
        }
        res *= actual
        actual++
        console.log(`${str} = ${res}`)
    }
}

// Clase 10

function C10E4() { // Clase 10 ejercicio 4.
    let max = parseInt(prompt("Hasta que numero queres contar?"))
    fizz_num = parseInt(prompt("De que numero debe ser multiplo para Fizz?"))
    buzz_num = parseInt(prompt("De que numero debe ser multiplo para Buzz?"))
    let res
    let actual = 1
    while (actual <= max) {
        if (actual % fizz_num == 0 && actual % buzz_num == 0) {
            console.log("FizzBuzz")
        } else if (actual % fizz_num == 0) {
            console.log("Fizz")
        } else if (actual % buzz_num == 0) {
            console.log("Buzz")
        } else {
            console.log(actual)
        }
        actual++
    }
}

function C10E5() { // Clase 10 ejercicio 5.
    function factorial(num) {
        if (num < 0) 
                return -1
        else if (num == 0) 
            return 1
        else {
            return (num * factorial(num - 1))
        }
    }
    console.log(factorial(5));
}

// Clase 11

function C11E1() { // Clase 11 ejercicio 1.
    const listaSuper = ["huevos", "pan", "fideos", "crema", "queso"];
    const listaTareas = ["limpiar", "hacer tarea", "comprar comida", "ir a clases", "estudiar"];
    function mostrarItems(array){
        array.forEach(i => console.log(i));
    }
    mostrarItems(listaSuper)
    mostrarItems(listaTareas)
}

function C11E2() { // Clase 11 ejercicio 2.
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function outputReverse(array){
        for(i=(array.length-1);i>-1;i--){    
            console.log(array[i])
        }
    }
    function arrayReverser(array){
        return array.reverse()
    }
    outputReverse(arrayNumeros)
    arrayReverser(arrayNumeros)
}

function C11E3() { // Clase 11 ejercicio 3.
    let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

    function ordenarPoema(poema) {
        const arrayDesordenado = poema.split(' ');
        let arrayOrdenado = [];
        while (arrayDesordenado.length !== 0) {
            arrayOrdenado.push(arrayDesordenado.shift());
            arrayOrdenado.push(arrayDesordenado.pop());
        };
        const poemaOrdenado = arrayOrdenado.join(' ');
        return poemaOrdenado
    };

    ordenarPoema(poemaDesordenado);
}

function C11E4() { // Clase 11 ejercicio 4.
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arrayNumerosUniform = [1, 1, 1, 1]
    const arrayLetrasUniform = ["a", "a", "a", "a"]
    const arrayLetras = ["a", "b", "c", "d"]

    function isUniform(array) {
        const item = array[0];
        return !array.some(i => i !== item);
    }
    
    isUniform(arrayNumeros); // false
    isUniform(arrayNumerosUniform); // true
    isUniform(arrayLetrasUniform); // true
    isUniform(arrayLetras); // false
}

function C11E5() { // Clase 11 ejercicio 5.
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function biggest_smallest_oneliner(array){
        return(`${Math.max(...array)} / ${Math.min(...array)}`)
    }

    let min = Infinity
    let max = -Infinity 
    function biggest_smallest_foreach(array){
        array.forEach(i => {
            if (i < min) {
                min = i 
            }
            if (i > max) {
                max = i
            }
            }) 
        return(`${max} / ${min}`)
    }
    
    console.log(biggest_smallest_oneliner(arrayNumeros));
    console.log(biggest_smallest_foreach(arrayNumeros));
}

function C11E8() { // Clase 11 ejercicio 8.
    const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function sumArray(array) {
        return(array.reduce((a, b) => a + b))
    }
    sumArray(arrayNumeros)
}

function C11E9() { // Clase 11 ejercicio 9.
    function join(array, separador) {
        return array.reduce((actual, siguiente) => actual + separador + siguiente);
    }
    console.log(join(["H", "O", "L", "A"], ''));
}

// Clase 12

function C12E1() { // Clase 12 ejercicio 1.
    let usuario = {
        nombre: "Bautista",
        edad:  18,
        direccion: "123 Fake street",
        fechaDeNacimiento: "02/07/2004",
        contraseña:"siYoNoMeLaSeVosTampoco"
    }
}

function C12E3() { // Clase 12 ejercicio 3.
    let clase = [
        { Alumno: "Bautista", nota: 10 },
        { Alumno: "Francisco", nota: 9 },
        { Alumno: "Dylan", nota: 6 },
        { Alumno: "Mateo", nota: 3 }
    ];

    clase.forEach((alumno) => {
        if (alumno.nota >= 5 && alumno.nota <= 8) {
            alumno.nota += 2;
        }
    });
}

function C12E4() { // Clase 12 ejercicio 4.
    let peliculas = [
        { titulo: "Avengers", rating: 5, vista: true},
        { titulo: "Thor", rating: 5, vista: true},
        { titulo: "Spiderman", rating: 4, vista: false},
        { titulo: "Ironman", rating: 4, vista: true}
    ];
    
    peliculas.forEach((titulo) => {
        if (titulo.vista == true) {
            console.log(`Viste ${titulo.titulo}, tiene ${titulo.rating} estrellas.`)
        } else {
            console.log(`Te falto ver ${titulo.titulo}, tiene ${titulo.rating} estrellas.`)
        }
    });
}

function C12E5() { // Clase 12 ejercicio 5.
    let numeros = [2, 3, 4, 5, 3, 10, 12, 11, 24, 6, 1]
    let numerosDuplicados = {}

    for (let i = 0; i < numeros.length; i++) {
        numerosDuplicados[numeros[i]] = numeros[i] * 2
    }
    console.log(numerosDuplicados)
}

function C12E6() { // Clase 12 ejercicio 6.
    let personas = [ 
        { nombre: 'Bautista', edad: '18' },
        { nombre: 'Miguel', edad: '27' }, 
        { nombre: 'Roman', edad: '28' },
        { nombre: 'Juan', edad: '29' },
        { nombre: 'Ignacio', edad: '24' }
    ];
    var MayoresA27 = personas.filter(function (i){
        return i.edad >= 27
    }
    );
    console.log(MayoresA27);
}

function C12E7() { // Clase 12 ejercicio 7.
    let playlist = ["Hot wind blows", "Wusyaname", "Sweet / I thought you wanted to dance", "Bad habit", "Gravity", "Eternal youth", "Static"]
    let cancionesEscuchadas = ["blows", "Sweet / I thought you wanted to dance", "Wusyaname", "Bad habit"]
    let faltaEscuchar = playlist.filter(song=>!(cancionesEscuchadas.includes(song)))

    console.log(faltaEscuchar);
}

function C12E8() { // Clase 12 ejercicio 8.
    console.log("Lo tengo pendiente! Voy a hacerlo en otro momento.")
}

function C12E9() { // Clase 12 ejercicio 9.
    let personas =[
        { nombre: "Bautista", edad: 18 },
        { nombre: "Miguel", edad: 15 },
        { nombre: "Roman", edad: 32 },
        { nombre: "Juan", edad: 52 },
        { nombre: "Francisco", edad: 22 }]
    let personasOrdenadas = []
    while (personas.length) {
        let menor = personas[0]
        for (let i = 0; i < personas.length; i++) {
            if (menor.edad > personas[i].edad) {
                menor = personas[i]
            }
        }
        personas.splice(personas.indexOf(menor), 1)
        menor.posicion = personasOrdenadas.length
        personasOrdenadas.push(menor)
    }
    console.log(personasOrdenadas)
}

function C12E10() { // Clase 12 ejercicio 10.
    let articulos = [
        {nombre: "Mouse Redragon", precio: 12000, articulos:5}, 
        {nombre: "Teclado Razer", precio: 24000, articulos:2 },
        {nombre:"Joystick Xbox", precio: 31000, articulos:4},
        {nombre:"Monitor LG", precio:44000, articulos:12},
        {nombre:"Msi RTX 3060 Gaming X Trio", precio: 92000, articulos:1}]

    function total(array){
        let totalArticulos = [];
        array.forEach(i => {
            totalArticulos.push(`{${i.nombre}: ${i.precio * i.articulos}}`
            );
        });
        return totalArticulos;
    }
    
    console.log(total(articulos))
}

// Checkpoint Javascript

function CHE1() { // Checkpoint ejercicio 1.
    
    let contarPalabras = (oracion) => {
        let palabras = oracion.split(" ");
        return `El texto contiene ${palabras.length} palabras. 
        ${palabras[0]} Es la primera, y 
        ${palabras.at(-1)} la ultima.`
    }

    while (true){
        let oracion = prompt('Ingresa una oracion')
        if (!oracion) {
            break
        }
        console.log(contarPalabras(oracion));
    }
}

function CHE2() { // Checkpoint ejercicio 2.
    let diaParImpar = (fecha)  => {
        if(fecha % 2 == 0) {
            res = "par"
        }
        else {
            res = "impar"
        }
        return `Hoy, ${fecha}, es un dia ${res}.`
    }

    while (true){
        let fecha = prompt('Que numero es hoy?')
        if (!fecha) {
            break
        }
        console.log(diaParImpar(fecha))
        setTimeout(10)
    }
}

function CHE3() { // Checkpoint ejercicio 3.
    function convertir(temperatura) {
        if (temperatura.includes("C")) {
            let temp = Math.round(1.8 * parseInt(temperatura) + 32);
            if (temp >= 14 && temp <= 32) {
                return `${temperatura} grados son ${temp}°F, siendo una temperatura baja.`;
            } else if (temp >= 33 && temp <= 68) {
                return `${temperatura} grados son ${temp}°F, siendo una temperatura intermedia`;
            } else if (temp >= 69 && temp <= 95) {
                return `${temperatura} grados son ${temp}°F, siendo una temperatura alta`;
            } else {
                return "No ingresaste un valor valido.";
            }
            } else {
            let temp = Math.round((parseInt(temperatura) - 32) / 1.8);
            if (temp >= -10 && temp <= 0) {
                return `${temperatura} grados son ${temp}°C, siendo una temperatura baja`;
            } else if (temp >= 1 && temp <= 20) {
                return `${temperatura} grados son ${temp}°C, siendo una temperatura intermedia`;
            } else if (temp >= 21 && temp <= 35) {
                return `${temperatura} grados son ${temp}°C, siendo una temperatura alta`;
            } else {
                return "No ingresaste un valor valido.";
            }
        }
    }
    console.log(convertir("30C"))
}

function CHE4() { // Checkpoint ejercicio 4.
    function mayor(numUno,numDos,text){
        if(numUno > numDos){
            return numUno
        } else if(numDos > numUno){
            return numDos
        } else {
            return text[0] + text[text.length - 1]
        }
    }
    console.log(mayor(3,3,"Haz"))
}

function CHE5() { // Checkpoint ejercicio 5.
    let alumnos = [
        {
            nombre: "Bautista",
            apellido: "Igarzabal",
            notas: [4, 8, 6, 10, 10],
        },
        {
            nombre: "Martin",
            apellido: "Garcia",
            notas: [4, 3, 9, 4, 5],
        },
        {
            nombre: "Mateo",
            apellido: "Gomez",
            notas: [2, 10, 10, 7, 7],
        },
        {
            nombre: "Ignacio",
            apellido: "Vazquez",
            notas: [1, 1, 1, 5, 8],
        },
        {
            nombre: "Nancy",
            apellido: "Castelnovo",
            notas: [10, 9, 9, 10, 8],
        },
        {
            nombre: "Miguel",
            apellido: "Igarzabal",
            notas: [8, 6, 6, 5, 7],
        },
        {
            nombre: "Roman",
            apellido: "Duran",
            notas: [5, 4, 6, 8, 9],
        },
    ];
    function promediar(array, estado) {
        estado = estado.toLowerCase()
        let alumnosAprobados = [];
        array.forEach((i) => {
            let notas = i.notas;
            let sumPromedio = 0;
            notas.map((x) => (sumPromedio += x));
            let promedio = sumPromedio / notas.length;
            let alumno = {
                nombreCompleto: `${i.nombre} ${i.apellido}`,
                promedio: Math.round(promedio),
            };
            if (alumno.promedio > 7) {
                alumno.estado = "aprobado"
            } else {
                alumno.estado = "desaprobado"
            }
            if (alumno.estado == estado) {
                alumnosAprobados.push(alumno);
            }
        });
        return alumnosAprobados;
    }
    promediar(alumnos, "Aprobado");
}
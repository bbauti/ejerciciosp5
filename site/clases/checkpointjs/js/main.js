////// Contar palabras

// let contarPalabras = (oracion) => {
//     let palabras = oracion.split(" ");
//     return `El texto contiene ${palabras.length} palabras. 
//     ${palabras[0]} Es la primera, y 
//     ${palabras.at(-1)} la ultima.`
// }

// while (true){
//     let oracion = prompt('Ingresa una oracion')
//     if (!oracion) {
//         break
//     }
//     console.log(contarPalabras(oracion));
// }

////// Fecha de hoy

// let diaParImpar = (fecha)  => {
//     if(fecha % 2 == 0) {
//         res = "par"
//     }
//     else {
//         res = "impar"
//     }
//     return `Hoy, ${fecha}, es un dia ${res}.`
// }

// while (true){
//     let fecha = prompt('Que numero es hoy?')
//     if (!fecha) {
//         break
//     }
//     console.log(diaParImpar(fecha))
//     setTimeout(10)
// }

////// Conversor grados

let convertir = (temperatura)  => {
    if(temperatura.slice(-2) == "°C") {
        let num = temperatura.replace(/\D/g, '');
        let cels = (num * 1.8) + 32
        let res = Math.round (cels * 10) / 10
        //pasan a ser grados fahr
        if (res >= 14 && res <= 32)
            return `${num}°C son ${res}°F, siendo una temperatura baja.`
        else if (res >= 33 && res <= 68)
            return `${num}°C son ${res}°F, siendo una temperatura adecuada.`
        else if (res >= 69 && res <= 95)
            return `${num}°C son ${res}°F, siendo una temperatura alta.`
        return `${num}°C son ${res}°F`
    }
    else if(temperatura.slice(-2) == "°F") {
        let num = temperatura.replace(/\D/g, '');
        let fahr = (num - 32) / 1.8
        //pasan a ser grados cels
        let res = Math.round (fahr * 10) / 10
    }
    else {
        return "No ingresaste una temperatura valida. Debe contener °F o °C al final."
    }
}

while (true){
    let temperatura = prompt('Ingresa los grados que hacen hoy')
    if (!temperatura) {
        break
    }
    console.log(convertir(temperatura))
}
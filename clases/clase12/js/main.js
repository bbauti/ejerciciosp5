//objetos

//sintax

// let user = {
//     nombre: "bauti",
//     apellido: "igar"
// }

// let userArray = ["bauti", 18, "chacabuco"]

// console.log(userArray[0] + userArray[1] + userArray[2])

// console.log("//////////")

// console.log(user);
// console.log(user.nombre)
// console.log(user.apellido)
// console.log(user.nombre + " " + user.apellido)

// let persona ={
//     nombre: "Violeta",
//     edad: 21,
//     ciudadNatal: "Buenos Aires",
//     saludar: function(){
//         console.log("Hola");
//     }
// }

// console.log(persona.saludar);

// persona.saludar();

let nave = {
    tipo: 'Espacial',
    pais: 'Argentina',
    cant: 20,
    tripulantes: ["Bauti", "Maxi", "Mateo", "Dylan", "Conti", "Fran", "Valen"],
    estado: 'Usada',
    despegar: function (){
        console.log("🚀 ¡Todo listo para el despegue! 👍");
        console.log("Oh no... 😱 ¡Algo salio mal!");
        alert("🔥 ¡BOOOOOOM! 🔥")
    }
}

console.log
(`
    Nave.


    Tipo: ${nave["tipo"]}

    Pais de origen: ${nave.pais}

    Cantidad: ${nave.cant}

    Tripulantes:

`)
for (let i in nave.tripulantes) {
    console.log("    "+nave.tripulantes[i])
}
console.log(`
    Estado: ${nave.estado}
`)
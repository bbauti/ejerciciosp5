class Libro {
    constructor(nombre, autor, editorial, genero) {
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }
    mostrarLibro() {
        console.log(`El libro es ${this.nombre}, escrito por ${this.autor} con la editorial ${this.editorial}, del genero ${this.genero}`)
    }
}


let libro1 = new Libro("Question The King", "Bautista", "Antartida", "Fantastico") 
libro1.mostrarLibro()

let libro2 = new Libro("Rejecting Nature", "Miguel", "Utopía", "Policial") 
libro2.mostrarLibro()

let libro3 = new Libro("Dead In The Maze", "Juan", "Ivrea", "Ficcion") 
libro3.mostrarLibro()


let libros = [libro1, libro2, libro3]

let librosElegidos = []


function filtrarLibro(array, autor) {
    array.forEach(function(i){
        if (i.autor == autor) {
            librosElegidos.push(i)
        }
    })
    return librosElegidos
}


console.log(filtrarLibro(libros, "Bautista"))
document.querySelector("button").addEventListener("click", function(){
    console.log("¡Alguien hizo click en el boton!")
})

boton = document.querySelector("#boton")

boton.addEventListener("click", function() {
    boton.classList.toggle('verde')
    boton.textContent="Enviado!"
    setTimeout(() => {
        boton.textContent="Enviar"
        boton.classList.toggle('verde');
    }, "1000")
})

let source = document.querySelector("#source")
let destination = document.querySelector("#destination")

source.textContent="Destino"
destination.textContent="Fuente"

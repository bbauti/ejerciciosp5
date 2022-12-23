let boton = document.querySelector("button")
let body = document.querySelector("body")
boton.addEventListener("click", function(){
    ejecutarDentro()
})

const ejecutarDentro = () => {
    let beep = document.createElement("p")
    beep.textContent="BEEP"
    body.appendChild(beep)
    body.classList.toggle("azul")
}
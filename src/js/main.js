const header = document.querySelector("header")

//Crear un elemento
const titulo = document.createElement("h1")
console.log(titulo);

titulo.textContent = "Galería de Perritos"

//Dos formas de crear un id en Título
// titulo.setAttribute("id","titulo-principal")
titulo.id = "titulo-principal"
titulo.style.color = "blue"
// titulo.style="color:blue"

titulo.classList.add("text-light", "text-center", "bg-dark", "pb-5")
header.classList.add("pe-5")
header.classList.add("bg-success")

// titulo.classList.add("text-center")
// titulo.classList.add("bg-dark")

header.classList.remove("pe-5")

//Agregamos un hijo
header.appendChild(titulo)

const main = document.querySelector("main")

for (let i = 0; i < 70; i++) {
    main.innerHTML += `
    <section class="card text-capitalize" style="width: 18rem;">
        <img src="./public/img/golden.webp" class="card-img-top" alt="Golden Retriever">
        <div class="card-body">
            <h3 class="card-title text-center text-sm-center">Campeón</h3>
            <!-- <p>
                Raza: Golden Retriever
                ead: 1 añpp
            </p> -->
            <span class="fw-bold">Raza:</span> <span>Golden Retriver</span><br>
            <span class="fw-bold">Edad:</span> <span>2 años</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam accusantium odio, id fugiat
                modi
            </p>
            <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="button">Adóptame</button>
            </div>
        </div>
    </section>
    `
}
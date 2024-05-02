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

titulo.classList.add("text-light", "text-center", "bg-dark", "p-2")
header.classList.add("pe-5")
header.classList.add("bg-success")

// titulo.classList.add("text-center")
// titulo.classList.add("bg-dark")

//Removemos pe-5
header.classList.remove("pe-5")

//Agregamos un hijo
header.appendChild(titulo)

const main = document.querySelector("main")

let mascotas = [
    { nombre: "Luna", 
    especie: "Perro", 
    raza: "Golden", 
    edad: 3, 
    peso: 10, 
    estado: "Critico", 
    nombrePropietario: "Juan", 
    documento: 15854325, 
    telefono: 3105487874, 
    correo: "juanpa@gmail.com", 
    imagen: "https://tucachorrotienda.com/wp-content/uploads/2018/12/golden-202-min.png" 
    },

    { nombre: "Simba", 
    especie: "Gato", 
    raza: "Siamés", 
    edad: 2, 
    peso: 5, 
    estado: "Estable", 
    nombrePropietario: "María", 
    documento: 98765432, 
    telefono: 3001234567, 
    correo: "maria@gmail.com", 
    imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Siamese-Cat_0.jpg?itok=SpejPfbc" 
    },

    { nombre: "Max", 
    especie: "Perro", 
    raza: "Labrador", 
    edad: 5, 
    peso: 15, 
    estado: "Critico", 
    nombrePropietario: "Pedro", 
    documento: 65432178, 
    telefono: 3159876543, 
    correo: "pedro@gmail.com", 
    imagen: "https://media.istockphoto.com/id/122286715/es/foto/labrador-blanco-sobre-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=C_Cv3LNht63Qjrg6P9NhR-4LTCE0ZoHwqqqhYdXm7pk=" 
    },

    { nombre: "Nala", 
    especie: "Gato", 
    raza: "Persa", 
    edad: 4, peso: 6, 
    estado: "Critico", 
    nombrePropietario: "Ana", 
    documento: 12345678, 
    telefono: 3204567890, 
    correo: "ana@gmail.com", 
    imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Persian-Long-Hair.jpg?itok=eXYVTZqi" 
    },

    { nombre: "Rocky", 
    especie: "Perro", 
    raza: "Bulldog", 
    edad: 7, 
    peso: 20, 
    estado: "Estable", 
    nombrePropietario: "Luis", 
    documento: 54321678, 
    telefono: 3186543210, 
    correo: "luis@gmail.com", 
    imagen: "https://bulldogfrancesmedellin.com/wp-content/uploads/2023/06/5-min-5.png" 
    },

    { nombre: "Milo", 
    especie: "Gato", 
    raza: "Angora", 
    edad: 1, 
    peso: 4, 
    estado: "Critico", 
    nombrePropietario: "Juan", 
    documento: 87654321, 
    telefono: 3009876543, 
    correo: "sofia@gmail.com", 
    imagen: "https://thumbs.dreamstime.com/b/gato-turco-del-angora-en-un-fondo-blanco-retrato-de-el-temas-animales-vista-delantera-145390427.jpg" 
    },

    { nombre: "Bella", 
    especie: "Perro", 
    raza: "Chihuahua", 
    edad: 6, 
    peso: 3, 
    estado: "Estable", 
    nombrePropietario: "Carlos", 
    documento: 43218765, 
    telefono: 3107654321, 
    correo: "carlos@gmail.com", 
    imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Chihuahua-Smooth-Coat.jpg?itok=ZiuYIalK" 
    },

    { nombre: "Oreo", 
    especie: "Gato", 
    raza: "Maine Coon", 
    edad: 3, peso: 8, 
    estado: "Estable", 
    nombrePropietario: "Laura", 
    documento: 56781234, 
    telefono: 3217890123, 
    correo: "laura@gmail.com", 
    imagen: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Maine-Coon-Cat.jpg?itok=6yZblFQ-" 
    },

    { nombre: "Coco", 
    especie: "Perro", 
    raza: "Pug", 
    edad: 4, 
    peso: 7, 
    estado: "Critico", 
    nombrePropietario: "Juan", 
    documento: 32178456, 
    telefono: 3146789012, 
    correo: "elena@gmail.com", 
    imagen: "https://t2.ea.ltmcdn.com/es/razas/2/3/5/pug-o-carlino_532_0_orig.jpg" 
    },

    { nombre: "Lucky", 
    especie: "Gato", 
    raza: "Bombay", 
    edad: 2, 
    peso: 5, 
    estado: "Estable", 
    nombrePropietario: "Ana", 
    documento: 78123456, 
    telefono: 3195678901, 
    correo: "pablo@gmail.com", 
    imagen: "https://www.purina.es/sites/default/files/breed_library/cat_bombay.jpg" 
    }
];

for (let i = 0; i < mascotas.length; i++) {
    main.innerHTML += `
    <section class="card text-capitalize" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title text-start text-sm-center">${mascotas[i].nombre}</h3>
            <img src="${mascotas[i].imagen}" class="card-img-top" alt="${mascotas[i].raza}">
            <span class="fw-bold">Raza:</span> <span>${mascotas[i].raza}</span><br>
            <span class="fw-bold">Edad:</span> <span>${mascotas[i].edad + " años"}</span>
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
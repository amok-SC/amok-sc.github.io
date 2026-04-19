/*
Botones de seleccions -> modo oscuro 

*/

let libros = [
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        archivo: "libros/quijote.pdf",
        portada: "portadas/quijote.jpg",
        sinopsis: "Don Quijote es un hidalgo manchego que, enloquecido por la lectura de libros de caballería, decide convertirse en caballero andante. Junto a su fiel escudero Sancho Panza, emprende aventuras imaginarias en las que confunde molinos con gigantes y ventas con castillos.",
        paginas: 456,
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        archivo: "libros/orgullo_prejuicio.pdf",
        portada: "portadas/orgullo_prejuicio.jpg",
        sinopsis: "Elizabeth Bennet es una joven inteligente e independiente en la Inglaterra del siglo XIX. Cuando conoce al orgulloso Mr. Darcy, el choque de caracteres da lugar a una historia de malentendidos, prejuicios y, finalmente, amor.",
        paginas: 223,
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        archivo: "libros/frankenstein.pdf",
        portada: "portadas/frankenstein.jpg",
        sinopsis: "El joven científico Victor Frankenstein consigue dar vida a una criatura formada con restos humanos. Pero en lugar de maravillarse, huye horrorizado de su creación. Abandonada y rechazada, la criatura busca venganza en una historia sobre los límites de la ciencia y la responsabilidad.",
        paginas: 184,
    },
    {
        titulo: "Drácula",
        autor: "Bram Stoker",
        archivo: "libros/dracula.pdf",
        portada: "portadas/dracula.jpg",
        sinopsis: "El joven abogado Jonathan Harker viaja a Transilvania para cerrar un trato con el misterioso Conde Drácula. Lo que comienza como un viaje de negocios se convierte en una pesadilla cuando descubre la verdadera naturaleza de su anfitrión.",
        paginas: 416,
    },
    {
        titulo: "La Odisea",
        autor: "Homero",
        archivo: "libros/odisea.pdf",
        portada: "portadas/odisea.jpg",
        sinopsis: "Odiseo, rey de Ítaca, intenta regresar a casa tras la guerra de Troya. Su viaje dura diez años, plagado de obstáculos enviados por los dioses: cíclopes, sirenas, hechiceras y tempestades. Una epopeya sobre la astucia, la lealtad y el anhelo del hogar.",
        paginas: 241,
    },
    {
        titulo: "La Ilíada",
        autor: "Homero",
        archivo: "libros/iliada.pdf",
        portada: "portadas/iliada.jpg",
        sinopsis: "Ambientada durante la guerra de Troya, la Ilíada narra la cólera de Aquiles, el más grande guerrero griego, tras ser humillado por el rey Agamenón. Un poema épico sobre el honor, la guerra y la condición humana.",
        paginas: 222,
    },
    {
        titulo: "Emma",
        autor: "Jane Austen",
        archivo: "libros/emma.pdf",
        portada: "portadas/emma.jpg",
        sinopsis: "Emma Woodhouse es una joven rica y segura de sí misma convencida de tener un talento especial para hacer de casamentera. Sus bien intencionadas pero torpes intromisiones en la vida amorosa de los demás la llevan a situaciones cómicas y a descubrirse a sí misma.",
        paginas: 288,
    },
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        archivo: "libros/retrato_dorian.pdf",
        portada: "portadas/retrato_dorian.jpg",
        sinopsis: "El joven y bello Dorian Gray desea que un retrato suyo envejezca en su lugar. Su deseo se cumple, y mientras él permanece eternamente joven, el cuadro refleja la corrupción moral de su alma. Un clásico sobre la vanidad, el hedonismo y las consecuencias de una vida sin escrúpulos.",
        paginas: 195,
    },
    {
        titulo: "El gato negro",
        autor: "Edgar Allan Poe",
        archivo: "libros/gato_negro.pdf",
        portada: "portadas/gato_negro.jpg",
        sinopsis: "Un hombre narra desde la cárcel cómo su afición al alcohol fue destruyendo su carácter hasta llevarlo a cometer actos de crueldad y violencia. Un gato negro se convierte en el símbolo de su culpa y su perdición. Un relato corto maestro del terror psicológico.",
        paginas: 16,
    },
    {
        titulo: "El extraño caso del Dr. Jekyll y Mr. Hyde",
        autor: "Robert Louis Stevenson",
        archivo: "libros/drjekyll_mrhyde.pdf",
        portada: "portadas/drjekyll_mrhyde.jpg",
        sinopsis: "El respetable doctor Jekyll desarrolla una poción que le permite transformarse en Mr. Hyde, su alter ego maligno, liberando así los instintos más oscuros de su naturaleza. Una novela sobre la dualidad del ser humano y los peligros de reprimir la parte oscura de uno mismo.",
        paginas: 69,
    },
    {
        titulo: "Las aventuras de Sherlock Holmes",
        autor: "Arthur Conan Doyle",
        archivo: "libros/sherlock.pdf",
        portada: "portadas/sherlock.jpg",
        sinopsis: "Una colección de doce relatos protagonizados por el legendario detective Sherlock Holmes y su inseparable compañero el Dr. Watson. Con una mente analítica sin igual, Holmes resuelve los casos más desconcertantes de la Londres victoriana.",
        paginas: 131,
    },
    {
        titulo: "Alicia en el país de las maravillas",
        autor: "Lewis Carroll",
        archivo: "libros/alicia.pdf",
        portada: "portadas/alicia.jpg",
        sinopsis: "La pequeña Alicia cae por la madriguera de un conejo y llega a un mundo absurdo y mágico poblado de personajes estrafalarios: el Sombrerero Loco, la Reina de Corazones, el Gato de Cheshire. Un clásico de la literatura fantástica lleno de humor y lógica al revés.",
        paginas: 124,
    },
    {
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        archivo: "libros/romeo_julieta.pdf",
        portada: "portadas/romeo_julieta.jpeg",
        sinopsis: "Dos familias enfrentadas en Verona ven cómo el amor surge entre sus hijos, Romeo y Julieta, quienes intentan mantener su relación en secreto. Sin embargo, el odio entre los suyos y una serie de decisiones impulsivas conducen a un desenlace trágico que cambiará sus vidas para siempre.",
        paginas: 148,
    },
    {
        titulo: "A buen fin no hay mal principio",
        autor: "William Shakespeare",
        archivo: "libros/buenfin_malprincipio.pdf",
        portada: "portadas/buenfin_malprincipio.jpg",
        sinopsis: "En Iliria, varios personajes se ven envueltos en enredos amorosos, identidades ocultas y malentendidos que complican sus vidas. A través de situaciones confusas y decisiones impulsivas, todo parece ir de mal en peor, pero finalmente los conflictos se resuelven y el amor triunfa, que a un buen fin no siempre le falta un comienzo algo caótico.",
        paginas: 189,
    },
];

let autores = [
    {
        nombre: "Miguel de Cervantes",
        nacimiento: 1547,
        muerte: 1616,
        biografia: "Escritor español considerado la máxima figura de la literatura en lengua castellana. Nacido en Alcalá de Henares, vivió una vida llena de aventuras y adversidades: fue soldado, estuvo cautivo en Argel durante cinco años y pasó temporadas en prisión. Su obra cumbre, Don Quijote de la Mancha, es considerada la primera novela moderna y una de las más importantes de la historia universal."
    },
    {
        nombre: "Jane Austen",
        nacimiento: 1775,
        muerte: 1817,
        biografia: "Novelista inglesa cuyas obras son referentes de la literatura romántica y social del siglo XIX. Criada en una familia de clase media en Hampshire, Inglaterra, retrató con agudeza e ironía la sociedad de su época, especialmente la vida de las mujeres y las dinámicas del matrimonio. Sus novelas, publicadas anónimamente en vida, no alcanzaron gran fama hasta después de su muerte."
    },
    {
        nombre: "Mary Shelley",
        nacimiento: 1797,
        muerte: 1851,
        biografia: "Escritora británica, hija de la filósofa Mary Wollstonecraft y el escritor William Godwin. Con tan solo 18 años comenzó a escribir Frankenstein, publicada en 1818, considerada la primera novela de ciencia ficción de la historia. Casada con el poeta Percy Bysshe Shelley, vivió una vida marcada por la tragedia y la creatividad."
    },
    {
        nombre: "Bram Stoker",
        nacimiento: 1847,
        muerte: 1912,
        biografia: "Escritor irlandés conocido principalmente por su novela gótica Drácula, publicada en 1897. Trabajó durante años como manager del famoso actor Henry Irving y director del Lyceum Theatre de Londres. Aunque escribió varias novelas de terror, ninguna alcanzó la popularidad ni el impacto cultural de Drácula, que dio forma al mito moderno del vampiro."
    },
    {
        nombre: "Homero",
        nacimiento: "~800 a.C.",
        muerte: "~701 a.C.",
        biografia: "Poeta épico de la Antigua Grecia, considerado el autor de la Ilíada y la Odisea, las dos grandes epopeyas fundacionales de la literatura occidental. Su existencia real es objeto de debate entre los historiadores: algunos creen que fue un único poeta ciego, otros que el nombre agrupa a varios autores. Sus obras, transmitidas oralmente durante siglos, influyeron en toda la cultura grecolatina y europea posterior."
    },
    {
        nombre: "Oscar Wilde",
        nacimiento: 1854,
        muerte: 1900,
        biografia: "Escritor, poeta y dramaturgo irlandés, figura central del esteticismo y el decadentismo de finales del siglo XIX. Conocido tanto por su brillante ingenio y su estilo extravagante como por su trágico final: fue condenado y encarcelado por su homosexualidad, lo que destruyó su carrera y su salud. Entre sus obras destacan El retrato de Dorian Gray, La importancia de llamarse Ernesto y el poema La balada de la cárcel de Reading."
    },
    {
        nombre: "Edgar Allan Poe",
        nacimiento: 1809,
        muerte: 1849,
        biografia: "Escritor, poeta y crítico literario estadounidense, considerado el maestro del cuento de terror y misterio. Tuvo una vida marcada por la tragedia, la pobreza y el alcoholismo. Es considerado el inventor del relato de detectives moderno con su personaje Auguste Dupin, y un pionero de la ciencia ficción. Sus obras más célebres incluyen El cuervo, El gato negro y La caída de la casa Usher."
    },
    {
        nombre: "Robert Louis Stevenson",
        nacimiento: 1850,
        muerte: 1894,
        biografia: "Novelista, poeta y ensayista escocés, conocido por sus obras de aventuras y terror. Desde pequeño padeció graves problemas respiratorios que marcaron su vida y le llevaron a buscar climas más cálidos, viajando por Europa y el Pacífico. Entre sus obras más famosas están La isla del tesoro, El extraño caso del Dr. Jekyll y Mr. Hyde y Secuestrado."
    },
    {
        nombre: "Arthur Conan Doyle",
        nacimiento: 1859,
        muerte: 1930,
        biografia: "Médico y escritor británico, creador del legendario detective Sherlock Holmes, uno de los personajes de ficción más famosos y reconocibles del mundo. Aunque intentó matar a su personaje en varias ocasiones para dedicarse a otros proyectos, la presión popular le obligó a resucitarlo. También escribió novelas históricas, de ciencia ficción y fue un apasionado del espiritismo."
    },
    {
        nombre: "Lewis Carroll",
        nacimiento: 1832,
        muerte: 1898,
        biografia: "Seudónimo de Charles Lutwidge Dodgson, matemático, fotógrafo y escritor británico. Profesor en la Universidad de Oxford, combinó su rigor académico con una extraordinaria imaginación para crear Alicia en el país de las maravillas y A través del espejo, obras que revolucionaron la literatura infantil y están llenas de lógica matemática disfrazada de absurdo y fantasía."
    },
    {
        nombre: "William Shakespeare",
        nacimiento: 1564,
        muerte: 1616,
        // ERROR 5 CORREGIDO: biografía de Shakespeare completada. También corregido el año de nacimiento (era 1547, igual que Cervantes, lo cual era incorrecto)
        biografia: "Dramaturgo, poeta y actor inglés, universalmente considerado el escritor más importante de la lengua inglesa y uno de los más grandes de la literatura mundial. Nacido en Stratford-upon-Avon, desarrolló la mayor parte de su carrera en Londres, donde fue actor y accionista de la compañía teatral Lord Chamberlain's Men. Escribió 37 obras de teatro —entre tragedias, comedias y dramas históricos— así como 154 sonetos y varios poemas largos. Entre sus obras más célebres figuran Hamlet, Macbeth, Otelo, El rey Lear, Romeo y Julieta y El sueño de una noche de verano. Su influencia sobre la literatura, el teatro y el idioma inglés es incalculable."
    },
];

function abrirLibro(libro) {
    if (libro.archivo) {
        window.open(libro.archivo, "_blank");
    } else {
        alert("Este libro no está disponible");
    }
}

function obtenerLeidos() {
    let user = localStorage.getItem("usuarioActivo");
    if (user) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        return Object.keys(usuarios[user]?.leidos || {});
    }
    return JSON.parse(localStorage.getItem("leidos")) || [];
}

function obtenerPagina(titulo) {
    let user = localStorage.getItem("usuarioActivo");
    if (user) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        return parseInt(usuarios[user]?.paginas?.[titulo]) || 0;
    }
    return parseInt(localStorage.getItem("pagina_" + titulo)) || 0;
}

function toggleLeido(titulo) {
    let user = localStorage.getItem("usuarioActivo");
    let leidos = obtenerLeidos();
    let index = leidos.indexOf(titulo);

    let mensaje = index === -1
        ? "¿Confirmas que has leído \"" + titulo + "\"?"
        : "¿Quieres desmarcar \"" + titulo + "\" como leído?";

    if (!confirm(mensaje)) return;

    if (index === -1) {
        leidos.push(titulo);
    } else {
        leidos.splice(index, 1);
    }

    if (user) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        usuarios[user].leidos = {};
        leidos.forEach(t => usuarios[user].leidos[t] = true);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
        localStorage.setItem("leidos", JSON.stringify(leidos));
    }

    let libro = libros.find(l => l.titulo === titulo);
    if (libro) abrirVistaLibro(libro);
    mostrarLibros();
    mostrarBiblioteca();
}

function toggleModo() {
    document.body.classList.toggle("oscuro");
    let esOscuro = document.body.classList.contains("oscuro");
    localStorage.setItem("modoOscuro", esOscuro);
    document.getElementById("botonModo").innerText = esOscuro ? "☀️" : "🌙";
}

function cargarModo() {
    if (localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("oscuro");
        document.getElementById("botonModo").innerText = "☀️";
    }
}

function abrirVistaAutor(nombreAutor) {
    let autor = autores.find(a => a.nombre === nombreAutor);
    if (!autor) return;

    document.querySelector(".main").querySelectorAll("h1, h2, .container, #biblioteca, select, input").forEach(el => {
        el.style.display = "none";
    });

    document.getElementById("vistaLibro").style.display = "none";

    let vista = document.getElementById("vistaAutor");
    vista.style.display = "block";

    let librosDelAutor = libros.filter(l => l.autor === nombreAutor);

    document.getElementById("detalleAutor").innerHTML = `
        <div class="info-autor">
            <h2>${autor.nombre}</h2>
            <p class="autor-fechas">${autor.nacimiento} — ${autor.muerte}</p>
            <p>${autor.biografia}</p>
            <h3>Libros disponibles en Booklord</h3>
            <div class="container-autor">
                ${librosDelAutor.map(libro => `
                    <div class="book" onclick="cerrarAutorYAbrirLibro('${libro.titulo}')">
                        <img src="${libro.portada || 'portadas/default.jpg'}" alt="${libro.titulo}">
                        <div class="book-info">
                            <strong>${libro.titulo}</strong>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function cerrarAutorYAbrirLibro(titulo) {
    let libro = libros.find(l => l.titulo === titulo);
    if (!libro) return;
    cerrarAutor();
    abrirVistaLibro(libro);
}

function cerrarAutor() {
    document.getElementById("vistaAutor").style.display = "none";
    document.getElementById("vistaLibro").style.display = "none";
    document.querySelector(".main").querySelectorAll("h1, h2, .container, #biblioteca, select, input").forEach(el => {
        el.style.display = "";
    });
}

function mostrarSeccionAutores() {
    document.querySelector(".main").querySelectorAll("h1, h2, .container, #biblioteca, select, input").forEach(el => {
        el.style.display = "none";
    });

    document.getElementById("vistaLibro").style.display = "none";

    let vista = document.getElementById("vistaAutor");
    vista.style.display = "block";

    document.getElementById("detalleAutor").innerHTML = `
        <h2>Autores</h2>
        <div class="container-autor">
            ${autores.map(autor => `
                <div class="autor-card" onclick="abrirVistaAutor('${autor.nombre}')">
                    <strong>${autor.nombre}</strong>
                    <em>${autor.nacimiento} — ${autor.muerte}</em>
                </div>
            `).join('')}
        </div>
    `;
}

function mostrarLibros() {
    let leidos = obtenerLeidos();
    let contenedor = document.querySelector(".container");
    contenedor.innerHTML = "";

    libros.forEach(libro => {
        let div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
            <img src="${libro.portada || 'portadas/default.jpg'}" alt="Portada de ${libro.titulo}">
            <div class="book-info">
                <strong>${libro.titulo}</strong>
                <em>${libro.autor}</em>
                ${leidos.includes(libro.titulo) ? '<span class="badge-leido">✅ Leído</span>' : ''}
            </div>
        `;
        div.onclick = () => abrirVistaLibro(libro);
        contenedor.appendChild(div);
    });
}

let biblioteca = [];

function cargarBiblioteca() {
    let user = localStorage.getItem("usuarioActivo");
    if (user) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        biblioteca = usuarios[user]?.biblioteca || [];
    } else {
        biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    }
}

function guardarDatosUsuario() {
    let user = localStorage.getItem("usuarioActivo");
    if (user) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        usuarios[user].biblioteca = biblioteca;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    }
}

function añadirLibro(titulo) {
    if (biblioteca.includes(titulo)) {
        alert("Ya tienes este libro en tu biblioteca.");
        return;
    }
    biblioteca.push(titulo);
    guardarDatosUsuario();
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    let leidos = obtenerLeidos();
    let contenedor = document.getElementById("biblioteca");
    contenedor.innerHTML = "";

    biblioteca.forEach((titulo, index) => {
        let libro = libros.find(l => l.titulo === titulo);

        let div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
            <img src="${libro ? libro.portada : 'portadas/default.jpg'}" alt="${titulo}">
            <div class="book-info">
                <strong>${titulo}</strong>
                <em>${libro ? libro.autor : ""}</em>
                ${leidos.includes(titulo) ? '<span class="badge-leido">✅ Leído</span>' : ''}
            </div>
        `;

        div.onclick = () => {
            if (libro) abrirVistaLibro(libro);
        };

        let boton = document.createElement("span");
        boton.innerText = "❌";
        boton.style.cssText = "position:absolute; top:5px; right:5px; cursor:pointer; font-size:12px;";
        boton.onclick = (e) => {
            e.stopPropagation();
            eliminarLibro(index);
        };

        div.style.position = "relative";
        div.appendChild(boton);
        contenedor.appendChild(div);
    });
}

function eliminarLibro(index) {
    biblioteca.splice(index, 1);
    guardarDatosUsuario();
    mostrarBiblioteca();
}

function buscar() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let tipo = document.getElementById("tipoBusqueda").value;
    let contenedor = document.querySelector(".container");

    if (tipo === "autor") {
        contenedor.innerHTML = "";

        if (input === "") {
            mostrarLibros();
            return;
        }

        let autoresFiltrados = autores.filter(a => a.nombre.toLowerCase().includes(input));
        autoresFiltrados.forEach(autor => {
            let div = document.createElement("div");
            div.className = "autor-card";
            div.innerHTML = `
                <strong>${autor.nombre}</strong>
                <em>${autor.nacimiento} — ${autor.muerte}</em>
            `;
            div.onclick = () => abrirVistaAutor(autor.nombre);
            contenedor.appendChild(div);
        });

        let librosFiltrados = libros.filter(l => l.autor.toLowerCase().includes(input));
        let leidos = obtenerLeidos();
        librosFiltrados.forEach(libro => {
            let div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
                <img src="${libro.portada || 'portadas/default.jpg'}" alt="Portada de ${libro.titulo}">
                <div class="book-info">
                    <strong>${libro.titulo}</strong>
                    <em>${libro.autor}</em>
                    ${leidos.includes(libro.titulo) ? '<span class="badge-leido">✅ Leído</span>' : ''}
                </div>
            `;
            div.onclick = () => abrirVistaLibro(libro);
            contenedor.appendChild(div);
        });

    } else {
        let tarjetas = contenedor.querySelectorAll(".book");
        tarjetas.forEach(tarjeta => {
            let titulo = tarjeta.querySelector("strong");
            if (!titulo) return;
            let textoTitulo = titulo.innerText.toLowerCase();
            tarjeta.style.display = textoTitulo.includes(input) ? "flex" : "none";
        });

        if (input === "") mostrarLibros();
    }
}

function mostrarLogin() {
    document.getElementById("tituloLogin").innerText = "Iniciar sesión";
    document.getElementById("btnAccion").innerText = "Entrar";
    document.getElementById("btnAccion").onclick = login;
    document.getElementById("btnCambiar").innerText = "Registrarse";
    document.getElementById("btnCambiar").onclick = mostrarRegistro;
    document.getElementById("login").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("login").style.display = "none";
}

function mostrarRegistro() {
    document.getElementById("tituloLogin").innerText = "Registro";
    document.getElementById("btnAccion").innerText = "Registrarse";
    document.getElementById("btnAccion").onclick = registrar;
    document.getElementById("btnCambiar").innerText = "¿Ya tienes cuenta? Inicia sesión";
    document.getElementById("btnCambiar").onclick = mostrarLogin;
}

function registrar() {
    let user = document.getElementById("usuario").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Introduce usuario y contraseña.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[user]) {
        alert("Ese usuario ya existe.");
        return;
    }

    usuarios[user] = { password: pass, biblioteca: [], leidos: {}, paginas: {} };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Cuenta creada. Ya puedes iniciar sesión.");
    cerrarLogin();
}

function login() {
    let user = document.getElementById("usuario").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Introduce usuario y contraseña.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (!usuarios[user]) {
        alert("Usuario no encontrado.");
        return;
    }

    if (usuarios[user].password !== pass) {
        alert("Contraseña incorrecta.");
        return;
    }

    localStorage.setItem("usuarioActivo", user);
    cargarBiblioteca();
    cerrarLogin();
    actualizarSidebar();
    mostrarLibros();
    mostrarBiblioteca();
    alert("Bienvenido, " + user + " 👋");
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    biblioteca = [];
    actualizarSidebar();
    mostrarLibros();
    mostrarBiblioteca();
}

function actualizarSidebar() {
    let user = localStorage.getItem("usuarioActivo");
    let btnSesion = document.getElementById("btnSesion");
    let nombreUsuario = document.getElementById("nombreUsuario");

    if (user) {
        nombreUsuario.innerText = "👤 " + user;
        nombreUsuario.style.display = "block";
        btnSesion.innerText = "Cerrar sesión";
        btnSesion.onclick = cerrarSesion;
    } else {
        nombreUsuario.innerText = "";
        nombreUsuario.style.display = "none";
        btnSesion.innerText = "Iniciar sesión";
        btnSesion.onclick = mostrarLogin;
    }
}

function abrirVistaLibro(libro) {
    document.querySelector(".main").querySelectorAll("h1, h2, .container, #biblioteca, select, input").forEach(el => {
        el.style.display = "none";
    });

    let vista = document.getElementById("vistaLibro");
    vista.style.display = "block";

    let enBiblioteca = biblioteca.includes(libro.titulo);
    let paginaGuardada = obtenerPagina(libro.titulo);
    let leidos = obtenerLeidos();
    let estaLeido = leidos.includes(libro.titulo);

    let porcentaje = libro.paginas && paginaGuardada
        ? Math.min(Math.round((paginaGuardada / libro.paginas) * 100), 100)
        : 0;

    document.getElementById("detalleLibro").innerHTML = `
        <img src="${libro.portada || 'portadas/default.jpg'}" alt="Portada de ${libro.titulo}">
        <div class="info-libro">
            <h2>${libro.titulo}</h2>
            <em class="autor-link" onclick="abrirVistaAutor('${libro.autor}')">${libro.autor}</em>            <p>${libro.sinopsis || "Sinopsis no disponible todavía."}</p>
            <div class="botones-libro">
                <button onclick="abrirLibro(${JSON.stringify(libro).replace(/"/g, '&quot;')})">📖 Leer</button>
                ${enBiblioteca
                    ? '<button disabled style="opacity:0.5;">✅ En tu biblioteca</button>'
                    : `<button onclick="añadirLibro('${libro.titulo}')">📚 Añadir a biblioteca</button>`
                }
                <button onclick="toggleLeido('${libro.titulo}')" style="${estaLeido ? 'background-color:#a8d5a2;' : ''}">
                    ${estaLeido ? '✅ Leído' : '☑️ Marcar como leído'}
                </button>
            </div>
            <div class="pagina-guardada">
                <span>📄 Última página leída:</span>
                <input type="number" id="inputPagina" min="1" max="${libro.paginas || ''}" value="${paginaGuardada || ''}" placeholder="—">
                <button onclick="guardarPagina('${libro.titulo}', ${libro.paginas || 0})">Guardar</button>
            </div>
            ${libro.paginas ? `
            <div class="progreso-container">
                <div class="progreso-texto">
                    <span>Progreso</span>
                    <span>${paginaGuardada ? paginaGuardada + ' / ' + libro.paginas + ' páginas' : 'Sin empezar'}</span>
                </div>
                <div class="progreso-barra">
                    <div class="progreso-relleno" style="width:${porcentaje}%"></div>
                </div>
                <span class="progreso-porcentaje">${porcentaje}%</span>
            </div>` : ''}
        </div>
    `;
}

function cerrarLibro() {
    document.getElementById("vistaLibro").style.display = "none";
    document.querySelector(".main").querySelectorAll("h1, h2, .container, #biblioteca, select, input").forEach(el => {
        el.style.display = "";
    });
}

function guardarPagina(titulo, totalPaginas) {
    let pagina = document.getElementById("inputPagina").value;
    if (pagina) {
        if (totalPaginas && parseInt(pagina) > totalPaginas) {
            alert("Este libro solo tiene " + totalPaginas + " páginas.");
            return;
        }
        let user = localStorage.getItem("usuarioActivo");
        if (user) {
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
            usuarios[user].paginas = usuarios[user].paginas || {};
            usuarios[user].paginas[titulo] = pagina;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            localStorage.setItem("pagina_" + titulo, pagina);
        }
        let libro = libros.find(l => l.titulo === titulo);
        if (libro) abrirVistaLibro(libro);
    }
}

cargarBiblioteca();
mostrarLibros();
mostrarBiblioteca();
cargarModo();
actualizarSidebar();
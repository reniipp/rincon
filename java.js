/***********************
 * MODO MEDIODÍA / ATARDECER / NOCHE
 ***********************/
const botonesModo = document.querySelectorAll(".modo-btn");
const selector = document.getElementById("modo-selector");
const video = document.getElementById("video-fondo");

function cambiarVideo(modo) {
  const videoInicio = document.getElementById("video-fondo");
  const videoNosotros = document.getElementById("video-nosotros");

  const cambiar = (videoEl, ruta) => {
    if (!videoEl) return;

    const source = videoEl.querySelector("source");
    if (!source) return;

    if (source.getAttribute("src") !== ruta) {
      videoEl.classList.add("fade-out");

      setTimeout(() => {
        source.setAttribute("src", ruta);
        videoEl.load();
        videoEl.oncanplay = () => {
          videoEl.classList.remove("fade-out");
          videoEl.play().catch(()=>{});
        };
      }, 500);
    }
  };

  // Rutas por modo
  let inicioRuta = "img/Miselanias Inicio 1.mp4";
  let nosotrosRuta = "img/Miselanias Nosotros 1.mp4";

  if (modo === "atardecer") {
    inicioRuta = "img/Miselanias Inicio 2.mp4";
    nosotrosRuta = "img/Miselanias Nosotros 2.mp4";
  } else if (modo === "noche") {
    inicioRuta = "img/Miselanias Inicio 3.mp4";
    nosotrosRuta = "img/Miselanias Nosotros 3.mp4";
  }

  cambiar(videoInicio, inicioRuta);
  cambiar(videoNosotros, nosotrosRuta);
}

function cambiarModo(modo, index) {
  document.body.setAttribute("data-modo", modo);
  localStorage.setItem("modo-actual", modo);

  botonesModo.forEach(btn => btn.classList.remove("activo"));
  if (index >= 0) botonesModo[index].classList.add("activo");

  // desplazar selector (ancho botón ~36px, margen inicial 4px)
  if (selector) selector.style.left = `${4 + index * 36}px`;

  cambiarVideo(modo);

    // ===== Fondo dinámico para la sección Nosotros =====
  const nosotrosSection = document.getElementById("nosotros");
  if (nosotrosSection) {
    let bg = "img/nosotros1.png";
    if (modo === "atardecer") {
      bg = "img/nosotros2.png";
    } else if (modo === "noche") {
      bg = "img/nosotros3.png";
    }
    nosotrosSection.style.backgroundImage = `url('${bg}')`;
  }


    // ===== Fondo dinámico para la sección Portfolio =====
  const portfolioSection = document.getElementById("portfolio");
  if (portfolioSection) {
    let bg = "img/portfolio1.png"; // mediodía
    if (modo === "atardecer") {
      bg = "img/portfolio2.png";
    } else if (modo === "noche") {
      bg = "img/portfolio3.png";
    }
    portfolioSection.style.backgroundImage = `url('${bg}')`;
  }


  // ===== Fondo dinámico para la sección Servicios =====
const serviciosSection = document.getElementById("servicios");
if (serviciosSection) {
  let bg = "img/servicios1.png"; // mediodía
  if (modo === "atardecer") {
    bg = "img/servicios2.png";
  } else if (modo === "noche") {
    bg = "img/servicios3.png";
  }
  serviciosSection.style.backgroundImage = `url('${bg}')`;
}


  // ===== Fondo dinámico para la sección Servicios =====
const turinconSection = document.getElementById("turincon");
if (turinconSection) {
  let bg = "img/rincon1.png"; // mediodía
  if (modo === "atardecer") {
    bg = "img/rincon2.png";
  } else if (modo === "noche") {
    bg = "img/rincon3.png";
  }
  turinconSection.style.backgroundImage = `url('${bg}')`;
}


const contactoSection = document.getElementById("contacto");
if (contactoSection) {
  let bg = "img/rincon1.png"; // mediodía
  if (modo === "atardecer") {
    bg = "img/rincon2.png";
  } else if (modo === "noche") {
    bg = "img/rincon3.png";
  }
  contactoSection.style.backgroundImage = `url('${bg}')`;
}


const footerSection = document.getElementById("footer");
if (footerSection) {
  let bg = "img/rincon1.png"; // mediodía
  if (modo === "atardecer") {
    bg = "img/rincon2.png";
  } else if (modo === "noche") {
    bg = "img/rincon3.png";
  }
  footerSection.style.backgroundImage = `url('${bg}')`;
}

// ===== Fondo dinámico para la sección dinámica (cat-section) =====
const catSection = document.getElementById("cat-section");
if (catSection) {
  let bg = "img/rincon1.png"; // mediodía
  if (modo === "atardecer") {
    bg = "img/rincon2.png";
  } else if (modo === "noche") {
    bg = "img/rincon3.png";
  }
  catSection.style.backgroundImage = `url('${bg}')`;
}



}

botonesModo.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const modo = btn.getAttribute("data-modo");
    cambiarModo(modo, index);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const modoGuardado = localStorage.getItem("modo-actual") || "mediodia";
  const index = ["mediodia", "atardecer", "noche"].indexOf(modoGuardado);
  cambiarModo(modoGuardado, index);
});


/***********************
 * NOSOTROS – CARRUSEL DE INTEGRANTES
 ***********************/
const integrantes = [
  {
    nombre: "Ana Giammarini",
    desc1: "Soy Ana, tengo 22 años y soy la artista 3D de la agencia Rincón.",
    desc2: "Vengo de Berazategui y desde chiquita de alguna forma u otra me interesaba el diseño, ya sea en posters, videojuegos, etc. Aspiro a mejorar cada día más.",
    img: "img/ana giammarini.png",
  },
  {
    nombre: "Lucas Iturralde",
    desc1: "Soy Lucas, tengo 21 años y soy el motion designer de la agencia Rincón.",
    desc2: "Soy de Olavarría y desde siempre me llamaron la atención las animaciones. Me encanta darles vida a las ideas a través del movimiento y cada proyecto es una oportunidad para aprender algo nuevo.",
    img: "img/lucas iturralde.png",
  },
  {
    nombre: "Damián Tellechea",
    desc1: "Soy Damián, tengo 24 años y hago un poco de todo en la agencia Rincón.",
    desc2: "Vivo en La Plata y, aunque no tengo un rol definido, disfruto involucrarme en distintas áreas del diseño. Me gustan mucho las motos y siempre estoy buscando nuevos desafíos para crecer.",
    img: "img/damian tellechea.png",
  },
  {
    nombre: "Gonzalo Rodriguez",
    desc1: "Soy Gonza, tengo 23 años y me dedico al modelado 3D en la agencia Rincón.",
    desc2: "Vivo en La Plata, bastante lejos del resto del equipo, pero eso no me impide estar siempre presente (o sí). Me apasiona crear en 3D y siempre trato de superarme. Ah, y me encanta el pan.",
    img: "img/gonzalo rodriguez.png",
  },
  {
    nombre: "Mora Fermepin Galdo",
    desc1: "Soy Mora, tengo 20 años y soy la más chiquita de la agencia Rincón.",
    desc2: "Convivo con palomas y entrené a mi perro para que las cace. Desde el colegio me apasiona el diseño gráfico: mi materia favorita era Arte porque podía expresar mi creatividad sin límites.",
    img: "img/mora fermepin.png",
  }
];

let actual = 0;

const nombre = document.getElementById("nombre-integrante");
const desc1 = document.getElementById("desc1-integrante");
const desc2 = document.getElementById("desc2-integrante");
const foto = document.getElementById("foto-integrante");

function actualizarIntegrante(index) {
  if (!integrantes.length || !nombre || !desc1 || !desc2 || !foto) return;
  const persona = integrantes[index];

  foto.classList.remove("activa");
  nombre.classList.remove("activa");
  desc1.classList.remove("activa");
  desc2.classList.remove("activa");

  setTimeout(() => {
    nombre.textContent = persona.nombre;
    desc1.textContent = persona.desc1;
    desc2.textContent = persona.desc2;
    foto.src = persona.img;
    foto.alt = persona.nombre;

    foto.classList.add("activa");
    nombre.classList.add("activa");
    desc1.classList.add("activa");
    desc2.classList.add("activa");
  }, 100);
}

const btnSig = document.getElementById("siguiente");
const btnAnt = document.getElementById("anterior");

if (btnSig) {
  btnSig.addEventListener("click", () => {
    actual = (actual + 1) % integrantes.length;
    actualizarIntegrante(actual);
  });
}
if (btnAnt) {
  btnAnt.addEventListener("click", () => {
    actual = (actual - 1 + integrantes.length) % integrantes.length;
    actualizarIntegrante(actual);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  actualizarIntegrante(actual);
});


/***********************
 * PORTFOLIO – DATA DE CATEGORÍAS
 ***********************/
const categorias = {
  motion: [
    { tipo: "video", src: "img/Cubo.mp4",    titulo: "Flores",           subtitulo: "Pieza promocional para el Jardín Botánico.", herramientas: ["Illustrator", "After Effects"] },
    { tipo: "video", src: "img/Grillo.mp4",  titulo: "Landing Cactusera", subtitulo: "Exploración de identidad y animación.",       herramientas: ["After Effects"] },
    { tipo: "video", src: "img/Lapiz.mp4",   titulo: "Flores",           subtitulo: "Pieza promocional para el Jardín Botánico.", herramientas: ["Illustrator", "After Effects"] },
    { tipo: "video", src: "img/Rain SFX.mp4",titulo: "Landing Cactusera", subtitulo: "Exploración de identidad y animación.",       herramientas: ["After Effects"] }
  ],
  modelado: [
    { tipo: "video", src: "img/Blitz-360.mp4", titulo: "Lámpara Low Poly", subtitulo: "Ejercicio de iluminación y modelado", herramientas: ["Blender"] }
  ],
  fotomontaje: [
    { tipo: "img", src: "img/fotomontaje1.jpg", titulo: "Póster surrealista", subtitulo: "Collage digital creativo", herramientas: ["Photoshop"] }
  ],
  grafico: [
    { tipo: "img", src: "img/poster 1 - notebook.jpg", titulo: "Identidad para café", subtitulo: "Diseño de marca completo", herramientas: ["Illustrator"] },
    { tipo: "img", src: "img/POSTER DUA LIPA.jpg",      titulo: "Identidad para café", subtitulo: "Diseño de marca completo", herramientas: ["Illustrator"] },
    { tipo: "img", src: "img/poster ultra.jpg",         titulo: "Identidad para café", subtitulo: "Diseño de marca completo", herramientas: ["Illustrator"] }
  ],
  web: [
    { tipo: "img", src: "img/web1.jpg", titulo: "Tienda Rincón", subtitulo: "Sitio e-commerce para la agencia", herramientas: ["WordPress", "HTML", "CSS"] }
  ]
};


/***********************
 * OVERLAY / CARRUSEL DE PROYECTOS (YA EXISTENTE)
 ***********************/
let categoriaActual = "";
let indiceActual = 0;

const overlay = document.getElementById("overlay");
const mediaContainer = document.getElementById("media");
const btnAnterior = document.getElementById("anterior-carrusel");
const btnSiguiente = document.getElementById("siguiente-carrusel");
const btnCerrar = document.getElementById("cerrar-carrusel");

const tituloCarrusel = document.getElementById("titulo-carrusel");
const subtituloCarrusel = document.getElementById("subtitulo-carrusel");
const herramientasCarrusel = document.getElementById("herramientas-carrusel");

function mostrarContenido() {
  if (!categoriaActual) return;
  const items = categorias[categoriaActual] || [];
  const item = items[indiceActual];
  if (!item) return;

  mediaContainer.innerHTML = "";

  if (item.tipo === "img") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.titulo || "Imagen";
    mediaContainer.appendChild(img);
  } else if (item.tipo === "video") {
    const videoEl = document.createElement("video");
    videoEl.src = item.src;
    videoEl.controls = true;
    videoEl.autoplay = true;
    videoEl.loop = true;
    mediaContainer.appendChild(videoEl);
  }

  tituloCarrusel.textContent = item.titulo || "";
  subtituloCarrusel.textContent = item.subtitulo || "";

  herramientasCarrusel.innerHTML = "";
  if (item.herramientas) {
    item.herramientas.forEach(h => {
      const span = document.createElement("span");
      span.textContent = h;
      herramientasCarrusel.appendChild(span);
    });
  }
}

if (btnCerrar) {
  btnCerrar.addEventListener("click", () => {
    overlay.classList.remove("activo");
    mediaContainer.innerHTML = "";
  });
}
if (btnAnterior) {
  btnAnterior.addEventListener("click", () => {
    const total = categorias[categoriaActual]?.length || 0;
    if (!total) return;
    indiceActual = (indiceActual - 1 + total) % total;
    mostrarContenido();
  });
}
if (btnSiguiente) {
  btnSiguiente.addEventListener("click", () => {
    const total = categorias[categoriaActual]?.length || 0;
    if (!total) return;
    indiceActual = (indiceActual + 1) % total;
    mostrarContenido();
  });
}

/* IMPORTANTE:
   Antes abríamos el overlay directo con .categoria (viejo HTML).
   Ese bloque fue eliminado para usar el panel nuevo.
*/


/***********************
 * PORTFOLIO NUEVO – GRID 3/2 + PANEL DEBAJO
 ***********************/
window.addEventListener("DOMContentLoaded", () => {
  const panel        = document.getElementById("panel-portfolio");
  const panelTitle   = document.getElementById("panel-title");
  const panelCount   = document.getElementById("panel-count");
  const panelList    = document.getElementById("panel-list");
  const panelClose   = document.getElementById("panel-close");
  const catButtons   = document.querySelectorAll(".cat-card");

  // Si el HTML nuevo no está, salimos silenciosamente
  if (!panel || !panelTitle || !panelList || catButtons.length === 0) {
    console.warn("[Portfolio] No se encontraron elementos del panel o .cat-card. ¿Actualizaste el HTML?");
    return;
  }

  let panelAbierto = ""; // categoría abierta

  function nombreCategoria(cat){
    switch(cat){
      case "motion": return "Motion Graphics";
      case "modelado": return "Modelado 3D";
      case "fotomontaje": return "Fotomontaje";
      case "grafico": return "Diseño Gráfico";
      case "web": return "Diseño Web";
      default: return "Portfolio";
    }
  }

  function renderPanel(categoria){
    const items = (window.categorias && categorias[categoria]) ? categorias[categoria] : [];
    panelTitle.textContent = nombreCategoria(categoria);
    panelCount.textContent = `${items.length} proyecto${items.length !== 1 ? "s" : ""}`;

    panelList.innerHTML = items.map((it,i)=>{
      const isImg = it.tipo === "img";
      const thumb = isImg ? it.src : ""; // TODO: agregar poster para videos si querés
      return `
        <article class="proj-card" data-cat="${categoria}" data-index="${i}" aria-label="${it.titulo || 'Proyecto'}">
          ${isImg
            ? `<img class="proj-media" src="${thumb}" alt="${it.titulo || 'Proyecto'}">`
            : `<div class="proj-media" style="display:flex;align-items:center;justify-content:center;color:#777">► Video</div>`}
          <div class="proj-meta">
            <h4>${it.titulo || ""}</h4>
            <p>${it.subtitulo || ""}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  function abrirPanel(categoria){
    // si tocan la misma, cerrar
    if (panelAbierto === categoria) { cerrarPanel(); return; }

    panelAbierto = categoria;
    renderPanel(categoria);

    panel.hidden = false;
    // forzar reflow para que la transición de max-height funcione
    // eslint-disable-next-line no-unused-expressions
    panel.offsetHeight;
    panel.classList.add("open");

    // aria-expanded en los botones
    catButtons.forEach(b=>{
      b.setAttribute("aria-expanded", b.dataset.categoria === categoria ? "true" : "false");
    });

    // scroll suave hasta el panel
    try { panel.scrollIntoView({ behavior:"smooth", block:"start" }); } catch(_){}
  }

  function cerrarPanel(){
    panelAbierto = "";
    panel.classList.remove("open");
    catButtons.forEach(b=>b.setAttribute("aria-expanded","false"));
    // ocultar después de la animación
    setTimeout(()=>{ if (!panel.classList.contains("open")) panel.hidden = true; }, 380);
  }

  if (panelClose) panelClose.addEventListener("click", cerrarPanel);

  // Click en tus cajitas PNG (botones .cat-card)
  catButtons.forEach(btn=>{
    btn.addEventListener("click", ()=> abrirPanel(btn.dataset.categoria));
    // Accesibilidad teclado
    btn.addEventListener("keydown", e=>{
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirPanel(btn.dataset.categoria); }
    });
  });

  // Delegación: click en un proyecto del panel → abrir overlay/carrusel
  panelList.addEventListener("click", e=>{
    const card = e.target.closest(".proj-card");
    if (!card) return;

    const cat = card.getAttribute("data-cat");
    const idx = parseInt(card.getAttribute("data-index"), 10);

    window.categoriaActual = cat;
    window.indiceActual = idx;

    if (typeof mostrarContenido === "function") {
      mostrarContenido();
      overlay.classList.add("activo");
    } else {
      console.warn("[Portfolio] mostrarContenido() no existe.");
    }
  });
});






(() => {
  // Mapeo de categorías → color y contenido
  const SECTIONS = {
  motion: {
    color: '#fcf7dd',
    title: '<span class="section-title">Motion Graphics</span>',
    html: `
      <div class="cat-grid">
        <img src="img/fondocaja.png" alt="" class="bg-frame">
        <div class="cat-card-row">

          <button class="cat-card-btn"
            data-title="Cubo"
            data-img="portfolio/motion/cubo.mp4"
            data-desc="Animación abstracta en 3D de un cubo en movimiento, con diversas geometrías simples."
            data-tools="After Effects, Blender">
            <img src="portfolio/motion/cubo.png" alt="Cubo" >
          </button>

          <button class="cat-card-btn"
            data-title="Grillo"
            data-img="portfolio/motion/grillo.mp4"
            data-desc="Un clip abstracto combinando un universo de geometría y animales."
            data-tools="After Effects">
            <img src="portfolio/motion/grillo.png" alt="Grillo">
          </button>

          <button class="cat-card-btn"
            data-title="Lápiz"
            data-img="portfolio/motion/lapiz.mp4"
            data-desc="Animación que da vida al lápiz como símbolo de la creatividad y la expresión gráfica."
            data-tools="After Effects, Illustrator">
            <img src="portfolio/motion/lapiz.png" alt="Lapiz">
          </button>

          <button class="cat-card-btn"
            data-title="Mercado Pago"
            data-img="portfolio/motion/mp.mp4"
            data-desc="Animación institucional del funcionamiento de la billetera virtual de Mercado Pago. "
            data-tools="After Effects">
            <img src="portfolio/motion/mp.png" alt="Mercado Pago">
          </button>

          <button class="cat-card-btn"
            data-title="Rain SFX"
            data-img="portfolio/motion/rain.mp4"
            data-desc="Animación con estilo atmosférico que combina imagen y sonido para recrear la sensación de una lluvia suave y envolvente."
            data-tools="After Effects, Blender">
            <img src="portfolio/motion/rain.png" alt="Rain SFX">
          </button>
        </div>
      </div>`
  },
    modelado: {
      color: '#EAF6FF',
      title: '<span class="section-title">Modelado 3D</span>',
      html: `
      <div class="cat-grid">
        <img src="img/fondocaja.png" alt="" class="bg-frame">
        <div class="cat-card-row">

          <button class="cat-card-btn"
            data-title="Blitz"
            data-img="portfolio/3d/blitz/Blitz_360.mp4"
            data-desc="Modelado 3D del personaje Blitzcrank de League of Legends"
            data-tools="Blender, Rizom UV, Substance Painter">
            <img src="portfolio/3d/blitz/blitz.png" alt="Cubo">
          </button>

          <button class="cat-card-btn"
            data-title="Bombero Avion y Tanque"
            data-img="portfolio/3d/bombero avion tanque/render final.mp4"
            data-desc="Modelados de distintos juguetes vintage"
            data-tools="Blender, Rizom UV, Substance Painter">
            <img src="portfolio/3d/bombero avion tanque/bom.png" alt="Grillo">
          </button>

          <button class="cat-card-btn"
            data-title="Hora de aventura"
            data-img="portfolio/3d/hora de aventura/Render.mp4"
            data-desc="Modelado 3D con efecto 2D del mundo de Hora de Aventura"
            data-tools="Blender, ZBrush, Rizom UV, Substance Painter">
            <img src="portfolio/3d/hora de aventura/hora.png" alt="Lapiz">
          </button>

          <button class="cat-card-btn"
            data-title="Rena Ryuugu"
            data-img="portfolio/3d/rena ryuugu/Loop.mp4"
            data-desc="Modelado de Rena Ryuugu de el anime Higurashi no Naku Koro ni"
            data-tools="Blender, ZBrush, Rizom UV, Substance Painter">
            <img src="portfolio/3d/rena ryuugu/rena.png" alt="Mercado Pago">
          </button>

          <button class="cat-card-btn"
            data-title="Reproductor NCT"
            data-img="portfolio/3d/reproductor/Reproductor-3600000.mp4"
            data-desc="Reproductor de música Vintage Pop inspirado en la banda de K-Pop NCT Wish"
            data-tools="Blender, Rizom UV, Substance Painter">
            <img src="portfolio/3d/reproductor/portadaana.png" alt="Rain SFX">
          </button>

        </div>
      </div>`
    },
    fotomontaje: {
      color: '#EAFCEF',
      title: '<span class="section-title">Diseño Gráfico</span>',
      html: `
      <div class="cat-grid">
        <img src="img/fondocaja.png" alt="" class="bg-frame">
        <div class="cat-card-row">

          <button class="cat-card-btn"
            data-title="Ultra Poster"
            data-img="portfolio/diseño grafico/ultra.jpg"
            data-desc="Rediseño de poster para el festival de electrónica Ultra"
            data-tools="Photoshop">
            <img src="portfolio/diseño grafico/ultra.png" alt="Cubo" >
          </button>

          <button class="cat-card-btn"
            data-title="Dua Lipa Poster"
            data-img="portfolio/diseño grafico/dua.jpg"
            data-desc="Rediseño de poster para la gira de Latinoamérica del tour Radical Optimism de Dua Lipa"
            data-tools="Photoshop">
            <img src="portfolio/diseño grafico/dua.png" alt="Grillo">
          </button>

          <button class="cat-card-btn"
            data-title="Lulu Portada de Revista"
            data-img="portfolio/diseño grafico/lulu.jpg"
            data-desc="Portada de revista del League of Legends sobre el personaje Lulu"
            data-tools="Illustrator">
            <img src="portfolio/diseño grafico/lulu.png" alt="Lapiz">
          </button>

          <button class="cat-card-btn"
            data-title="Miskota Identidad Visual"
            data-img="portfolio/diseño grafico/miskota_2.mp4"
            data-desc="Identidad visual de Miskota, un pet shop"
            data-tools="Illustrator, Photoshop">
            <img src="portfolio/diseño grafico/miskota.png" alt="Mercado Pago">
          </button>

          <button class="cat-card-btn"
            data-title="The Notebook Poster"
            data-img="portfolio/diseño grafico/motebook.jpg"
            data-desc="Poster inspirado en la famosa película The Notebook"
            data-tools="Photoshop">
            <img src="portfolio/diseño grafico/nootbok.png" alt="Rain SFX">
          </button>
        </div>
      </div>`
    },
    grafico: {
      color: '#FFF8E6',
      title: '<span class="section-title">Campañas Publicitarias</span>',
      html: `
        <div class="cat-grid">
            <img src="img/fondocaja.png" alt="" class="bg-frame">
                <div class="cat-card-row">
                  <button class="cat-card-btn"
                    data-title="Campaña para Swiss Medical"
                    data-img="portfolio/campana publicitaria/Videocaso_Swiss.mp4"
                    data-desc="Video representativo con Motion graphics representando que la salud no debe depender de un algoritmo"
                    data-tools="After Effects, Premiere Pro">
                    <img src="portfolio/campana publicitaria/swiss.png" alt="campana">
                  </button>
                </div>
            </div>`
    },
    web: {
      color: '#F0ECFF',
      title: '<span class="section-title">Diseño Web</span>',
      html: `
      <div class="cat-grid">
        <img src="img/fondocaja.png" alt="" class="bg-frame">
        <div class="cat-card-row">

          <button class="cat-card-btn"
            data-title="Miskota"
            data-img="portfolio/web/portada/miskota.jpg"
            data-desc="Animación experimental en 3D"
            data-tools="After Effects, Blender">
            <img src="portfolio/web/wikiloc.png" alt="Cubo">
          </button>

          <button class="cat-card-btn"
            data-title="CFMOTO"
            data-img="portfolio/web/portada/moto.jpg"
            data-desc="Exploración de animación de personajes"
            data-tools="After Effects">
            <img src="portfolio/web/miskota.png" alt="Grillo">
          </button>

          <button class="cat-card-btn"
            data-title="Wikiloc"
            data-img="Portfolio/web/portada/wikiloc.jpg"
            data-desc="Animación gráfica minimalista"
            data-tools="Illustrator, After Effects">
            <img src="portfolio/web/cfmoto.png" alt="Lapiz">
          </button>
        </div>
      </div>`
    }
  };

  const section = document.getElementById('cat-section');
  const cards = document.querySelectorAll('.grid-portfolio .cat-card');

  // Ayuda visual/ARIA de selección
  function setActiveCard(target) {
    cards.forEach(btn => {
      const active = btn === target;
      btn.setAttribute('aria-expanded', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
    });
  }

  function renderCategory(catKey) {
    const conf = SECTIONS[catKey];
    if (!conf) return;

    // Reemplaza contenido (se "borra" la anterior)
    section.innerHTML = `
      <video autoplay muted loop playsinline class="video-fondo" id="video-cat">
        <source src="" type="video/mp4">
      </video>

      <div class="cat-head">
        <h3 class="cat-title">${conf.title}</h3>
      </div>
      ${conf.html}
    `;

// asegura que el video de la sección dinámica coincida con el modo actual
function cambiarVideo(modo) {
  const videoInicio   = document.getElementById("video-fondo");
  const videoNosotros = document.getElementById("video-nosotros");
  const videoCat      = document.getElementById("video-cat"); // ⬅️ nuevo

  const cambiar = (videoEl, ruta) => {
    if (!videoEl) return;
    const source = videoEl.querySelector("source");
    if (!source) return;
    if (source.getAttribute("src") !== ruta) {
      videoEl.classList.add("fade-out");
      setTimeout(() => {
        source.setAttribute("src", ruta);
        videoEl.load();
        videoEl.oncanplay = () => {
          videoEl.classList.remove("fade-out");
          videoEl.play().catch(()=>{});
        };
      }, 500);
    }
  };

  // mismas rutas que usás en Inicio
  let inicioRuta   = "img/Miselanias Inicio 1.mp4";
  let nosotrosRuta = "img/Miselanias Nosotros 1.mp4";

  if (modo === "atardecer") {
    inicioRuta   = "img/Miselanias Inicio 2.mp4";
    nosotrosRuta = "img/Miselanias Nosotros 2.mp4";
  } else if (modo === "noche") {
    inicioRuta   = "img/Miselanias Inicio 3.mp4";
    nosotrosRuta = "img/Miselanias Nosotros 3.mp4";
  }

  // ⬇️ sincronizamos los tres
  cambiar(videoInicio, inicioRuta);
  cambiar(videoNosotros, nosotrosRuta);
  cambiar(videoCat, inicioRuta);        // ⬅️ la dinámica usa el mismo que Inicio
}



    // Aplica color
    section.style.setProperty('--sec-bg', conf.color);

    // Mostrar con animación
    section.hidden = false;
    // Forzar reflow para animar cuando se vuelve a pintar
    // eslint-disable-next-line no-unused-expressions
    section.offsetHeight;
    section.classList.add('show');

    // Scroll suave hasta el inicio de la sección (opcional)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Click handlers
  cards.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.categoria;
      setActiveCard(btn);

      // Reinicia animación si ya estaba visible
      section.classList.remove('show');
      // Espera el frame, renderiza y vuelve a mostrar
      requestAnimationFrame(() => renderCategory(cat));
    });
  });
})();



(() => {
  // ====== MODAL LOGIC ======
  const modal = document.getElementById('work-modal');
  const mTitle = modal.querySelector('.modal-title');
  const mediaBox = modal.querySelector('.modal-media');
  const mDesc  = modal.querySelector('.modal-desc');
  const btnClose = modal.querySelector('.modal-close');
  const btnPrev  = modal.querySelector('.modal-prev');
  const btnNext  = modal.querySelector('.modal-next');
  const toolsList = modal.querySelector('.modal-tools');


  let works = [];   // [{title, img, desc}]
  let idx = 0;

  function fillSlide(i){
    const w = works[i];
    if(!w) return;
    mTitle.textContent = w.title || 'Trabajo';
mediaBox.innerHTML = ''; // limpiamos antes

const isVideo = /\.mp4$/i.test(w.img);

if (isVideo) {
  const vid = document.createElement('video');
  vid.src = w.img;
  vid.controls = true;
  vid.autoplay = true;
  vid.loop = true;
  vid.muted = true;
  vid.playsInline = true;
  mediaBox.appendChild(vid);
} else {
  const img = document.createElement('img');
  img.src = w.img;
  img.alt = w.title || 'Trabajo';
  mediaBox.appendChild(img);
}

    mDesc.textContent = w.desc || '';

    if (toolsList) {
  toolsList.innerHTML = '';
  (w.tools || []).forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    toolsList.appendChild(li);
  });
}

  }
  function openModal(startIndex = 0, payload = []){
    works = payload;
    idx = startIndex;
    fillSlide(idx);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    // prevenir scroll del body si querés:
    document.documentElement.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow = '';
  }
  function go(delta){
    idx = (idx + delta + works.length) % works.length;
    fillSlide(idx);
  }

  // Cerrar con X, fondo u Esc
  btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=> {
    if(e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e)=>{
    if(modal.classList.contains('is-open')){
      if(e.key === 'Escape') closeModal();
      if(e.key === 'ArrowRight') go(1);
      if(e.key === 'ArrowLeft')  go(-1);
    }
  });
  btnPrev.addEventListener('click', ()=> go(-1));
  btnNext.addEventListener('click', ()=> go(1));

// ====== HOOK a tu sección dinámica ======
const section = document.getElementById('cat-section');
const observer = new MutationObserver(() => {
  const btns = section.querySelectorAll('.cat-card-btn');
  if (!btns.length) return;

  // Dataset de la categoría actual (incluye tools si las ponés en data-tools)
  const dataset = Array.from(btns).map((b, i) => {
    const imgEl = b.querySelector('img');
    return {
      title: b.dataset.title || imgEl?.alt || `Trabajo ${i+1}`,
      img:   b.dataset.img   || imgEl?.src || '',
      desc:  b.dataset.desc  || '',
      tools: (b.dataset.tools || '').split(',').map(s => s.trim()).filter(Boolean)
    };
  });

  // Abrir modal en el índice clickeado
  btns.forEach((b, i) => {
    b.addEventListener('click', () => openModal(i, dataset));
  });
});
observer.observe(section, { childList: true, subtree: true });

})();












document.addEventListener("DOMContentLoaded", () => {
  const btnEscritorio = document.getElementById("btn-escritorio");
  const escritorio = document.getElementById("escritorio-objetos");

  const objetos = ["img/lamparita.png", "img/lapicero.png", "img/cafe.png"];
  let index = 0;

  btnEscritorio.addEventListener("click", () => {
    index = (index + 1) % objetos.length;
    escritorio.innerHTML = `<img src="${objetos[index]}" alt="objeto escritorio">`;
  });

  // mostrar primero la lamparita
  escritorio.innerHTML = `<img src="${objetos[index]}" alt="objeto escritorio">`;
});



document.addEventListener("DOMContentLoaded", () => {
  const btnCostado = document.getElementById("btn-costado");
  const costado = document.getElementById("costado-objetos");

  const objetosCostado = ["img/planta.png", "img/sofa.png", "img/basurero.png"];
  let indexCostado = 0;

  btnCostado.addEventListener("click", () => {
    indexCostado = (indexCostado + 1) % objetosCostado.length;
    costado.innerHTML = `<img src="${objetosCostado[indexCostado]}" alt="objeto costado">`;
  });

  // Mostrar primero la planta
  costado.innerHTML = `<img src="${objetosCostado[indexCostado]}" alt="objeto costado">`;
});



document.addEventListener("DOMContentLoaded", () => {
  const btnLuz = document.querySelector(".btn-rincon:nth-child(3)"); // tercer botón
  const filtro = document.getElementById("filtro-luz");
  const degradadoFondo = document.getElementById("degradado-fondo");
  const degradado = document.getElementById("degradado");

  let estado = 0; // 0 = apagado, 1 = filtro, 2 = degradados

  btnLuz.addEventListener("click", () => {
    estado = (estado + 1) % 3; // va ciclando entre 0-1-2

    if (estado === 0) {
      filtro.classList.remove("activo");
      degradadoFondo.classList.remove("activo");
      degradado.classList.remove("activo");
    } else if (estado === 1) {
      filtro.classList.add("activo");
      degradadoFondo.classList.remove("activo");
      degradado.classList.remove("activo");
    } else if (estado === 2) {
      filtro.classList.add("activo");
      degradadoFondo.classList.add("activo");
      degradado.classList.add("activo");
    }
  });
});



// ====== REDIRIGIR SOLO LOS 3 BOTONES DE WEB ======
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const webSection = document.querySelector('#cat-section .section-title');
    if (!webSection || !/Diseño Web/i.test(webSection.textContent)) return;

    const btns = document.querySelectorAll('#cat-section .cat-card-btn');
    if (btns.length < 3) return;

    const urls = [
      "https://darkblue-sandpiper-854280.hostingersite.com/",
      "https://wheat-armadillo-936927.hostingersite.com/",
      "https://darkgreen-panther-376735.hostingersite.com/"
    ];

    btns.forEach((btn, i) => {
      btn.addEventListener("click", e => {
        e.stopImmediatePropagation(); // bloquea el listener del modal
        e.preventDefault();

        // 🔹 Cerrar modal si estuviera abierto
        const modal = document.getElementById("work-modal");
        if (modal) {
          modal.classList.remove("is-open");
          modal.setAttribute("aria-hidden", "true");
          document.documentElement.style.overflow = "";
        }

        // 🔹 Cerrar overlay si se hubiese abierto
        const overlay = document.getElementById("overlay");
        if (overlay) {
          overlay.classList.remove("activo");
        }

        // 🔹 Abrir el link en nueva pestaña
        if (urls[i]) window.open(urls[i], "_blank");
      });
    });
  });

  observer.observe(document.getElementById("cat-section"), { childList: true, subtree: true });
});

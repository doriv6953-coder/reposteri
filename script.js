/* =========================================================
   VELA SWEET - lógica de la página (script.js)
   Este archivo hace que la página "funcione":
   muestra los productos, filtra, arma el pedido y lo envía por WhatsApp.
   ========================================================= */


/* ---------- 1. DATOS DE LOS PRODUCTOS ----------
   Cada producto tiene:
     id           → número único (no se repite)
     foto         → nombre del archivo de la foto (debe estar junto a index.html)
     emoji        → dibujito que se ve en el pedido
     nombre       → nombre del producto
     precio       → precio en Bs
     categoria    → debe ser una de las categorías de abajo
     recomendado  → true = muestra la etiqueta "Recomendado"

   PARA AGREGAR UN PRODUCTO: copia una línea, cambia el id y los datos.
   PARA PONER SU FOTO: guarda la imagen con el mismo nombre que dice en "foto". */
const productos = [
  { id: 1,  foto: "foto1.jpg",  emoji: "🎂", nombre: "Torta de Chocolate",         precio: 120, categoria: "Tortas",             recomendado: true  },
  { id: 2,  foto: "foto2.jpg",  emoji: "🍰", nombre: "Torta de Fresa",             precio: 100, categoria: "Tortas",             recomendado: false },
  { id: 3,  foto: "foto3.jpg",  emoji: "🎂", nombre: "Torta Tres Leches",          precio: 90,  categoria: "Tortas",             recomendado: false },
  { id: 4,  foto: "foto4.jpg",  emoji: "🎂", nombre: "Torta Red Velvet",           precio: 120, categoria: "Tortas",             recomendado: true  },
  { id: 5,  foto: "foto5.jpg",  emoji: "🎂", nombre: "Torta de Zanahoria",         precio: 60, categoria: "Tortas",             recomendado: false },
  { id: 6,  foto: "foto6.jpg",  emoji: "🎂", nombre: "Torta de Vainilla",          precio: 90,  categoria: "Tortas",             recomendado: false },
  { id: 7,  foto: "foto7.jpg",  emoji: "🍰", nombre: "Cheesecake de Frutos Rojos", precio: 85,  categoria: "Tortas",             recomendado: false },

  { id: 8,  foto: "foto8.jpg",  emoji: "🧁", nombre: "Cupcake de Vainilla",        precio: 8,   categoria: "Cupcakes",           recomendado: false },
  { id: 9,  foto: "foto9.jpg",  emoji: "🧁", nombre: "Cupcake de Chocolate",       precio: 9,   categoria: "Cupcakes",           recomendado: false },
  { id: 10, foto: "foto10.jpg", emoji: "🧁", nombre: "Cupcake Red Velvet",         precio: 10,  categoria: "Cupcakes",           recomendado: false },
  { id: 11, foto: "foto11.jpg", emoji: "🧁", nombre: "Cupcake de Fresa",           precio: 9,   categoria: "Cupcakes",           recomendado: false },
  { id: 12, foto: "foto12.jpg", emoji: "🧁", nombre: "Cupcake Unicornio",          precio: 12,  categoria: "Cupcakes",           recomendado: true  },

  { id: 13, foto: "foto13.jpg", emoji: "🍩", nombre: "Dona Glaseada Rosa",         precio: 7,   categoria: "Donas y Masas",      recomendado: false },
  { id: 14, foto: "foto14.jpg", emoji: "🍩", nombre: "Dona de Chocolate",          precio: 7,   categoria: "Donas y Masas",      recomendado: false },
  { id: 15, foto: "foto15.jpg", emoji: "🥐", nombre: "Croissant de Mantequilla",   precio: 5,   categoria: "Donas y Masas",      recomendado: false },
  { id: 16, foto: "foto16.jpg", emoji: "🥯", nombre: "Rol de Canela",              precio: 8,   categoria: "Donas y Masas",      recomendado: false },
  { id: 17, foto: "foto17.jpg", emoji: "🧀", nombre: "Rollo de Queso",             precio: 5,   categoria: "Donas y Masas",      recomendado: false },
  { id: 18, foto: "foto18.jpg", emoji: "🧇", nombre: "Waffle con Frutas",          precio: 20,  categoria: "Donas y Masas",      recomendado: false },
  { id: 19, foto: "foto19.jpg", emoji: "🥞", nombre: "Panqueques con Miel",        precio: 10,  categoria: "Donas y Masas",      recomendado: false },

  { id: 20, foto: "foto20.jpg", emoji: "🍪", nombre: "Galletas con Chispas",       precio: 3,  categoria: "Galletas y Bocados", recomendado: false },
  { id: 21, foto: "foto21.jpg", emoji: "🍪", nombre: "Galletas Decoradas",         precio: 3,  categoria: "Galletas y Bocados", recomendado: false },
  { id: 22, foto: "foto22.jpg", emoji: "🍫", nombre: "Brownie con Nuez",           precio: 12,  categoria: "Galletas y Bocados", recomendado: true  },
  { id: 23, foto: "foto23.jpg", emoji: "🌈", nombre: "Macarons Surtidos",          precio: 15,  categoria: "Galletas y Bocados", recomendado: true  },
  { id: 24, foto: "foto24.jpg", emoji: "🍬", nombre: "Alfajores",                  precio: 5,  categoria: "Galletas y Bocados", recomendado: false },

  { id: 25, foto: "foto25.jpg", emoji: "🍮", nombre: "Flan de Caramelo",           precio: 10,  categoria: "Postres",            recomendado: false },
  { id: 26, foto: "foto26.jpg", emoji: "🥧", nombre: "Tarta de Limón",             precio: 20,  categoria: "Postres",            recomendado: false },
  { id: 27, foto: "foto27.jpg", emoji: "🥧", nombre: "Pie de Manzana",             precio: 30,  categoria: "Postres",            recomendado: false },
  { id: 28, foto: "foto28.jpg", emoji: "🍓", nombre: "Tarteleta de Frutas",        precio: 15,  categoria: "Postres",            recomendado: false },
  { id: 29, foto: "foto29.jpg", emoji: "🍨", nombre: "Mousse de Maracuyá",         precio: 12,  categoria: "Postres",            recomendado: false },
  { id: 30, foto: "foto30.jpg", emoji: "🍡", nombre: "Tiramisú en Vasito",         precio: 15,  categoria: "Postres",            recomendado: false },
  { id: 31, foto: "foto31.jpg", emoji: "🍒", nombre: "Fresas con Chocolate",       precio: 12,  categoria: "Postres",            recomendado: true  }
];

/* Color del puntito de cada categoría */
const coloresCategoria = {
  "Tortas": "#ff9db8",
  "Cupcakes": "#c9b2ff",
  "Donas y Masas": "#ffd86b",
  "Galletas y Bocados": "#ffb38a",
  "Postres": "#a9d99a"
};

/* Lista de categorías: "Todos" + las que existen en los productos */
const categorias = ["Todos", ...new Set(productos.map(p => p.categoria))];


/* ---------- 2. VARIABLES QUE CAMBIAN MIENTRAS SE USA LA PÁGINA ---------- */
let pedido = {};                    // el pedido: { id del producto: cantidad }
let categoriaActual = "Todos";      // categoría elegida
let textoBusqueda = "";             // lo que se escribió en el buscador


/* ---------- 3. FUNCIONES AYUDANTES ---------- */

// Atajo para buscar un elemento de la página:  $("#grid")
const $ = selector => document.querySelector(selector);

// Busca un producto por su id
function buscarProducto(id) {
  return productos.find(p => p.id === Number(id));
}

// Quita tildes y mayúsculas para que el buscador encuentre "tiramisu" y "Tiramisú"
function quitarTildes(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cuenta cuántos productos hay en el pedido y cuánto es el total
function calcularTotales() {
  let cantidad = 0;
  let total = 0;
  for (const id in pedido) {
    cantidad += pedido[id];
    total += pedido[id] * buscarProducto(id).precio;
  }
  return { cantidad, total };
}


/* ---------- 4. CINTA QUE SE MUEVE ---------- */
const palabras = ["Tortas", "Cupcakes", "Donas", "Galletas", "Macarons", "Postres", "Pedidos por WhatsApp"];
const cintaHTML = palabras.map(palabra => `<span>${palabra}</span>`).join("");
$("#cinta").innerHTML = cintaHTML + cintaHTML + cintaHTML + cintaHTML;   // se repite para que no se corte


/* ---------- 5. MENÚ: categorías y tarjetas ---------- */

// Dibuja los botones de categorías
function mostrarCategorias() {
  $("#chips").innerHTML = categorias.map(categoria => {
    const cantidad = categoria === "Todos"
      ? productos.length
      : productos.filter(p => p.categoria === categoria).length;
    return `<button class="chip" aria-pressed="${categoria === categoriaActual}" data-accion="categoria" data-valor="${categoria}">${categoria} <small>${cantidad}</small></button>`;
  }).join("");
}

// Devuelve el botón "Agregar" o el contador  −  1  +  de un producto
function botonAccion(id) {
  const cantidad = pedido[id] || 0;
  if (cantidad === 0) {
    return `<button class="btn mini" data-accion="mas" data-id="${id}">Agregar</button>`;
  }
  return `<div class="paso">
            <button data-accion="menos" data-id="${id}" aria-label="Quitar uno">−</button>
            <b>${cantidad}</b>
            <button data-accion="mas" data-id="${id}" aria-label="Agregar uno">+</button>
          </div>`;
}

// Crea el HTML de UNA tarjeta de producto
function crearTarjeta(p) {
  return `
    <article class="card" id="producto-${p.id}">
      <div class="foto">
        <!-- ESPACIO DE LA FOTO: se ve hasta que pongas la imagen -->
        <span class="espacio">📷 Aquí va la foto<small>${p.foto}</small></span>
        <img src="${p.foto}" alt="${p.nombre}" loading="lazy" onerror="this.style.display='none'">
        <span class="tag" style="--c:${coloresCategoria[p.categoria]}"><i></i>${p.categoria}</span>
        ${p.recomendado ? '<span class="rec">Recomendado</span>' : ''}
      </div>
      <div class="cuerpo">
        <h3>${p.nombre}</h3>
        <div class="fila">
          <span class="precio">Bs. ${p.precio}</span>
          <div class="accion">${botonAccion(p.id)}</div>
        </div>
      </div>
    </article>`;
}

// Dibuja todas las tarjetas (respetando la categoría y el buscador)
function mostrarProductos() {
  const lista = productos.filter(p => {
    const coincideCategoria = categoriaActual === "Todos" || p.categoria === categoriaActual;
    const coincideBusqueda = quitarTildes(p.nombre).includes(textoBusqueda);
    return coincideCategoria && coincideBusqueda;
  });

  if (lista.length === 0) {
    $("#grid").innerHTML = `<div class="nada"><p style="font-size:2.6rem">🧁</p><p><b>No encontramos ese dulce.</b><br>Prueba con otra palabra o pregúntanos por WhatsApp.</p></div>`;
  } else {
    $("#grid").innerHTML = lista.map(crearTarjeta).join("");
  }
}


/* ---------- 6. PEDIDO ---------- */

// Actualiza solo el botón de una tarjeta (Agregar / contador)
function actualizarBotonTarjeta(id) {
  const zona = document.querySelector(`#producto-${id} .accion`);
  if (zona) zona.innerHTML = botonAccion(id);
}

// Hace "saltar" el numerito del carrito
function animarContador() {
  const contador = $("#count");
  contador.classList.add("bump");
  setTimeout(() => contador.classList.remove("bump"), 450);
}

// Suma o resta una unidad (cambio = 1 o -1)
function cambiarCantidad(id, cambio) {
  pedido[id] = (pedido[id] || 0) + cambio;
  if (pedido[id] <= 0) delete pedido[id];     // si llega a 0, se quita del pedido
  actualizarBotonTarjeta(id);
  if (cambio > 0) animarContador();
  mostrarPedido();
}

// Quita un producto completo del pedido
function quitarProducto(id) {
  delete pedido[id];
  actualizarBotonTarjeta(id);
  mostrarPedido();
}

// Vacía todo el pedido
function vaciarPedido() {
  pedido = {};
  mostrarProductos();
  mostrarPedido();
  mostrarAviso("Pedido vaciado");
}

// Dibuja el panel "Tu pedido", el contador, el total y la barra inferior
function mostrarPedido() {
  const { cantidad, total } = calcularTotales();

  $("#count").textContent = cantidad;
  $("#barraN").textContent = cantidad ? `(${cantidad})` : "";
  $("#barraT").textContent = "Bs. " + total;
  $("#total").textContent = "Bs. " + total;
  $("#barra").classList.toggle("on", cantidad > 0);     // la barra aparece solo si hay productos

  const ids = Object.keys(pedido);

  if (ids.length === 0) {
    $("#items").innerHTML = `<div class="vacio"><span>🎀</span>Aún no hay dulces en tu pedido.<br>¡Elige algo rico!</div>`;
    return;
  }

  $("#items").innerHTML = ids.map(id => {
    const p = buscarProducto(id);
    const c = pedido[id];
    return `
      <div class="it">
        <div class="miniatura">
          <span>${p.emoji}</span>
          <img src="${p.foto}" alt="${p.nombre}" onerror="this.style.display='none'">
        </div>
        <div class="dat">
          <b>${p.emoji} ${p.nombre}</b>
          <small>Bs. ${p.precio} c/u = Bs. ${p.precio * c}</small>
        </div>
        <div class="paso">
          <button data-accion="menos" data-id="${id}" aria-label="Quitar uno">−</button>
          <b>${c}</b>
          <button data-accion="mas" data-id="${id}" aria-label="Agregar uno">+</button>
        </div>
        <button class="quitar" data-accion="quitar" data-id="${id}" aria-label="Quitar ${p.nombre}">🗑️</button>
      </div>`;
  }).join("");
}

// Abre y cierra el panel lateral
function abrirPedido() {
  $("#cajon").classList.add("on");
  $("#velo").classList.add("on");
  document.body.classList.add("abierto");
}
function cerrarPedido() {
  $("#cajon").classList.remove("on");
  $("#velo").classList.remove("on");
  document.body.classList.remove("abierto");
}


/* ---------- 7. ENVIAR POR WHATSAPP ---------- */
function enviarWhatsApp() {
  const ids = Object.keys(pedido);

  if (ids.length === 0) {
    mostrarAviso("Tu pedido está vacío 🎀");
    return;
  }

  const nombre = $("#nombre").value.trim();
  const nota = $("#nota").value.trim();
  let total = 0;

  // Armamos el mensaje línea por línea
  let mensaje = "🎀 *Pedido VELA SWEET* 🎀\n";
  if (nombre) mensaje += "Cliente: " + nombre + "\n";
  mensaje += "Entrega: " + $("#entrega").value + "\n";
  if (nota) mensaje += "Nota: " + nota + "\n";
  mensaje += "\n";

  ids.forEach(id => {
    const p = buscarProducto(id);
    const subtotal = pedido[id] * p.precio;
    total += subtotal;
    mensaje += `${p.emoji} ${pedido[id]} x ${p.nombre} (Bs. ${p.precio} c/u) = Bs. ${subtotal}\n`;
  });

  mensaje += `\n💰 *TOTAL: Bs. ${total}*\n\n¡Hola! Quisiera hacer este pedido, gracias 💖`;

  // Abrimos WhatsApp con el mensaje ya escrito
  const numero = $("#num").value;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
}


/* ---------- 8. AVISO CORTO ---------- */
let temporizador;
function mostrarAviso(texto) {
  const aviso = $("#toast");
  aviso.textContent = texto;
  aviso.classList.add("on");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => aviso.classList.remove("on"), 2400);
}


/* ---------- 9. EVENTOS (qué pasa cuando se toca algo) ----------
   Todos los botones tienen data-accion="..." en el HTML.
   Aquí escuchamos los clics y decidimos qué hacer según esa acción. */
document.addEventListener("click", evento => {
  const boton = evento.target.closest("[data-accion]");
  if (!boton) return;

  const accion = boton.dataset.accion;
  const id = boton.dataset.id;

  switch (accion) {
    case "mas":       cambiarCantidad(id, 1);  break;
    case "menos":     cambiarCantidad(id, -1); break;
    case "quitar":    quitarProducto(id);      break;
    case "abrir":     abrirPedido();           break;
    case "cerrar":    cerrarPedido();          break;
    case "enviar":    enviarWhatsApp();        break;
    case "vaciar":    vaciarPedido();          break;
    case "categoria":
      categoriaActual = boton.dataset.valor;
      mostrarCategorias();
      mostrarProductos();
      break;
  }
});

// Buscador: se actualiza mientras se escribe
$("#q").addEventListener("input", evento => {
  textoBusqueda = quitarTildes(evento.target.value.trim());
  mostrarProductos();
});

// Tecla Escape cierra el panel del pedido
document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") cerrarPedido();
});


/* ---------- 10. INICIO: se ejecuta al abrir la página ---------- */
mostrarCategorias();
mostrarProductos();
mostrarPedido();

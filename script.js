/* ===================================================
   NEURASCRIPT — script.js
   =================================================== */


/* ===================================================
   ⬇️  ZONA 1: ALIASES — VARIANTES Y ERRORES DE TIPEO
   ---------------------------------------------------
   Acá mapeás palabras clave alternativas a la key
   principal del diccionario. Sirve para:
     - Errores de tipeo comunes ("terr0r", "comedia")
     - Sinónimos ("película" → "guion")
     - Abreviaciones ("rom" → "romance")
     - Variantes con/sin tilde ("generos" → "géneros")

   Formato:
     "lo que escribe el usuario": "key del diccionario"
   =================================================== */

const ALIASES = {

    /* Saludos */
    "hola!":           "hola",
    "hola!!":          "hola",
    "ola":             "hola",
    "buenas":          "hola",
    "buenas!":         "hola",
    "buen dia":        "hola",
    "buenos dias":     "hola",
    "hey":             "hola",
    "holis":           "hola",
    "hi":              "hola",

    /* Ayuda */
    "help":            "ayuda",
    "ayudame":         "ayuda",
    "ayuda!":          "ayuda",
    "como funciona":   "ayuda",
    "que podes hacer": "ayuda",
    "que puedes hacer":"ayuda",
    "que sabes hacer": "ayuda",
    "comandos":        "ayuda",
    "menu":            "ayuda",
    "opciones":        "ayuda",

    /* Géneros (con y sin tilde, typos comunes) */
    "generos":         "géneros",
    "genero":          "géneros",
    "género":          "géneros",
    "que generos hay": "géneros",
    "lista":           "géneros",
    "tipos":           "géneros",

    /* Terror */
    "terror":                 "guion de terror",
    "guion terror":           "guion de terror",
    "guión de terror":        "guion de terror",
    "guion de miedo":         "guion de terror",
    "guion de suspenso":      "guion de terror",
    "suspenso":               "guion de terror",
    "miedo":                  "guion de terror",
    "horror":                 "guion de terror",
    "guion de horror":        "guion de terror",
    "terrorr":                "guion de terror",
    "terrror":                "guion de terror",

    /* Comedia */
    "comedia":                "guion de comedia",
    "guion comedia":          "guion de comedia",
    "guión de comedia":       "guion de comedia",
    "humor":                  "guion de comedia",
    "guion de humor":         "guion de comedia",
    "gracioso":               "guion de comedia",
    "comico":                 "guion de comedia",
    "comico":                 "guion de comedia",
    "cómico":                 "guion de comedia",

    /* Romance */
    "romance":                "guion de romance",
    "guion romance":          "guion de romance",
    "guión de romance":       "guion de romance",
    "amor":                   "guion de romance",
    "guion de amor":          "guion de romance",
    "romantico":              "guion de romance",
    "romántico":              "guion de romance",
    "rom":                    "guion de romance",

    /* Drama */
    "drama":                  "guion de drama",
    "guion drama":            "guion de drama",
    "guión de drama":         "guion de drama",
    "dramatico":              "guion de drama",
    "dramático":              "guion de drama",
    "emocionante":            "guion de drama",

    /* Thriller */
    "thriller":               "guion de thriller",
    "guion thriller":         "guion de thriller",
    "guion de accion":        "guion de thriller",
    "guion de acción":        "guion de thriller",
    "accion":                 "guion de thriller",
    "acción":                 "guion de thriller",
    "thriler":                "guion de thriller",
    "triller":                "guion de thriller",

    /* Ciencia ficción */
    "ciencia ficcion":        "guion de ciencia ficcion",
    "ciencia ficción":        "guion de ciencia ficcion",
    "guion de ciencia ficción":"guion de ciencia ficcion",
    "sci fi":                 "guion de ciencia ficcion",
    "sci-fi":                 "guion de ciencia ficcion",
    "scifi":                  "guion de ciencia ficcion",
    "ficcion":                "guion de ciencia ficcion",
    "ficción":                "guion de ciencia ficcion",
    "futurista":              "guion de ciencia ficcion",
    "futuro":                 "guion de ciencia ficcion",

    /* Personaje */
    "personaje":              "crear personaje",
    "personajes":             "crear personaje",
    "protagonista":           "crear personaje",
    "crear un personaje":     "crear personaje",
    "dame un personaje":      "crear personaje",
    "inventame un personaje": "crear personaje",
    "necesito un personaje":  "crear personaje",

    /* Escena */
    "escena":                 "crear escena",
    "dame una escena":        "crear escena",
    "inventame una escena":   "crear escena",
    "necesito una escena":    "crear escena",
    "una escena":             "crear escena",

    /* Dialogo */
    "dialogo":                "crear dialogo",
    "diálogo":                "crear dialogo",
    "dialogos":               "crear dialogo",
    "diálogos":               "crear dialogo",
    "dame un dialogo":        "crear dialogo",
    "conversacion":           "crear dialogo",
    "conversación":           "crear dialogo",

    /* QR — ⬇️  AGREGAR AQUÍ LOS PROMPTS QUE DISPARAN EL QR */
    "contacto":               "qr contacto",
    "mi qr":                  "qr contacto",
    "qr":                     "qr contacto",
    "codigo qr":              "qr contacto",
    "código qr":              "qr contacto",
    "link":                   "qr contacto",
    "enlace":                 "qr contacto"

};


/* ===================================================
   ⬇️  ZONA 2: DICCIONARIO PRINCIPAL DE RESPUESTAS
   ---------------------------------------------------
   Cada entrada puede tener:
     type:    "text" | "script" | "image" | "list" | "qr"
     content: string, array (para "list"), o URL (para "image")
     delay:   ms de espera antes de responder (default: BASE_TYPING_DELAY)
     multi:   true → elige aleatoriamente entre varias respuestas en "variants"
   =================================================== */

const BOT_RESPONSES = {

    /* ══════════════════════════════════════════
       SALUDOS
       ══════════════════════════════════════════ */
    "hola": {
        type: "text",
        multi: true,
        variants: [
            "Hola. Soy NeuraScript, tu asistente especializado en guiones. ¿Sobre qué querés escribir hoy?",
            "¡Hola! ¿Qué tipo de historia tenés en mente?",
            "Bienvenido de vuelta. ¿Arrancamos con un guion nuevo?",
            "Hola. Contame tu idea y la convertimos en escenas."
        ]
    },

    /* ══════════════════════════════════════════
       AYUDA
       ══════════════════════════════════════════ */
    "ayuda": {
        type: "list",
        content: [
            "📝 Pedime un guion por género: terror, comedia, romance, drama, thriller, ciencia ficción",
            "🎭 Creá un personaje nuevo escribiendo 'personaje'",
            "🎬 Pedí una escena suelta con 'escena'",
            "💬 Generá un diálogo escribiendo 'dialogo'",
            "📋 Escribí 'géneros' para ver todos los estilos",
            "🔗 Escribí 'contacto' para obtener un QR de acceso"
        ]
    },

    /* ══════════════════════════════════════════
       GÉNEROS DISPONIBLES
       ══════════════════════════════════════════ */
    "géneros": {
        type: "list",
        content: [
            "🔪 Terror — escribí 'terror' o 'guion de terror'",
            "😂 Comedia — escribí 'comedia' o 'guion de comedia'",
            "❤️ Romance — escribí 'romance' o 'guion de romance'",
            "😢 Drama — escribí 'drama' o 'guion de drama'",
            "💥 Thriller — escribí 'thriller' o 'guion de thriller'",
            "🚀 Ciencia ficción — escribí 'sci fi' o 'ciencia ficcion'"
        ]
    },

    /* ══════════════════════════════════════════
       GUIONES POR GÉNERO
       ══════════════════════════════════════════ */

    "guion de terror": {
        type: "script",
        delay: 2800,
        multi: true,
        variants: [
`GUION — EL ÚLTIMO CUARTO

ESCENA 1 — EXT. CASA ABANDONADA — NOCHE

Una casa decrépita al fondo de un camino de tierra.
El viento dobla los árboles. Ninguna luz.

ESCENA 2 — INT. PASILLO — NOCHE

MARCOS (30) avanza con una linterna.
El suelo cruje bajo sus pies.

MARCOS
(susurrando)
¿Hay alguien ahí?

Una puerta al fondo se abre sola.

FIN DE ESCENA`,

`GUION — LO QUE QUEDÓ

ESCENA 1 — INT. DEPARTAMENTO VACÍO — MADRUGADA

ELENA (25) revisa cajas. Acaba de mudarse.
Encuentra una foto. No la reconoce.
Hay una persona al fondo de cada imagen.
Siempre la misma. Siempre mirando.

ELENA
(para sí misma)
¿Quién sos?

El teléfono vibra. Un mensaje sin remitente:
"Yo te conozco a vos."

FIN DE ESCENA`
        ]
    },

    "guion de comedia": {
        type: "script",
        delay: 2500,
        multi: true,
        variants: [
`GUION — EL REGALO EQUIVOCADO

ESCENA 1 — INT. LIVING — DÍA

PEDRO (40) sostiene una caja enorme envuelta para regalo.

PEDRO
Gasté tres meses de sueldo en esto.

LAURA (38) lo mira con cara de preocupación.

LAURA
Pedro... hoy no es mi cumpleaños.

(pausa larga)

PEDRO
El regalo es mío entonces.`,

`GUION — CURRICULUM VITAE

ESCENA 1 — INT. OFICINA DE RRHH — DÍA

ENTREVISTADORA (45) lee el CV de TOMÁS (28).

ENTREVISTADORA
Dice acá que tiene "experiencia
liderando equipos internacionales".

TOMÁS
Sí. Jugaba al Counter-Strike
con gente de cinco países.

Silencio incómodo.

ENTREVISTADORA
¿Y "gestión de crisis bajo presión"?

TOMÁS
La final del mundial 2022.

FIN DE ESCENA`
        ]
    },

    "guion de romance": {
        type: "script",
        delay: 2200,
        multi: true,
        variants: [
`GUION — EN EL ANDÉN

ESCENA 1 — EXT. ESTACIÓN DE TREN — ATARDECER

ANA (28) mira el tablero de salidas.
LUCAS (30) llega corriendo.

LUCAS
Esperá. No te vayas todavía.

ANA
El tren sale en dos minutos.

LUCAS
Ya lo sé.
(pausa)
¿Es tiempo suficiente para decirte
que me equivoqué?`,

`GUION — TERCER PISO

ESCENA 1 — INT. ASCENSOR — DÍA

SOFÍA (26) y MATEO (29) suben en silencio.
Llevan semanas cruzándose en el edificio.

El ascensor se detiene. Apagón.

MATEO
Bueno.

SOFÍA
Bueno.

(pausa)

SOFÍA
¿Siempre viviste acá?

MATEO
Cuatro años. Nunca supe tu nombre.

SOFÍA
(sonríe en la oscuridad)
Sofía.

MATEO
Mateo. Con mucho gusto.

FIN DE ESCENA`
        ]
    },

    "guion de drama": {
        type: "script",
        delay: 2500,
        content:
`GUION — LA LLAMADA

ESCENA 1 — INT. COCINA — NOCHE

ROBERTO (55) espera junto al teléfono.
La mesa está puesta para dos personas.
Una silla vacía enfrente.

Suena el teléfono.

ROBERTO
(con voz cortada)
¿Llegaste bien?

VOZ (teléfono)
Sí, papá. Llegué bien.

Una pausa larga.

ROBERTO
Perfecto.

(cuelga)

Se sienta solo. Empieza a cenar.

FIN DE ESCENA`
    },

    "guion de thriller": {
        type: "script",
        delay: 2600,
        content:
`GUION — VEINTICUATRO HORAS

ESCENA 1 — INT. AUTO DETENIDO — NOCHE

CLAUDIA (35), detective, lee un mensaje anónimo.
"Sabés dónde está. Tenés hasta el amanecer."

Mira por el espejo retrovisor.
Un auto negro. Estacionado. Sin patente.

Saca el arma del guanterazo.

CLAUDIA
(al teléfono)
Necesito respaldo. Ahora.

El auto negro enciende las luces.
Arranca despacio hacia ella.

FIN DE ESCENA`
    },

    "guion de ciencia ficcion": {
        type: "script",
        delay: 2800,
        content:
`GUION — SEÑAL

ESCENA 1 — INT. ESTACIÓN ORBITAL — AÑO 2147

La pantalla parpadea. IARA (32), ingeniera,
se acerca al monitor de comunicaciones.

Una señal. Origen desconocido. No humana.

IARA
(a la tripulación)
Lleva 84 años viajando hacia nosotros.

COMANDANTE KAI (50)
¿Qué dice?

Iara lee la traducción procesada.

IARA
"No estén solos. Nosotros tampoco."

Silencio en la estación.

FIN DE ESCENA`
    },

    /* ══════════════════════════════════════════
       HERRAMIENTAS DE ESCRITURA
       ══════════════════════════════════════════ */

    "crear personaje": {
        type: "script",
        delay: 2000,
        multi: true,
        variants: [
`FICHA DE PERSONAJE

NOMBRE: Valentina Roca
EDAD: 34 años
PROFESIÓN: Traductora forense

DESCRIPCIÓN:
Habla seis idiomas pero no sabe
cómo decirle a su madre que la quiere.

MOTIVACIÓN:
Encuentra una carta en una valija perdida
que cambia todo lo que creía saber de su familia.

FRASE CARACTERÍSTICA:
"Las palabras exactas importan. Siempre."

DEFECTO:
Confía más en los documentos que en las personas.`,

`FICHA DE PERSONAJE

NOMBRE: Ezequiel "Zeke" Morán
EDAD: 22 años
PROFESIÓN: Estudiante de cine. Trabaja en una fotocopiadora.

DESCRIPCIÓN:
Quiere dirigir la película de su vida
pero no puede terminar ni el guion de tres páginas.

MOTIVACIÓN:
Su profesor le dice que no tiene talento.
Decide demostrarlo. O darle la razón.

FRASE CARACTERÍSTICA:
"La escena no funciona porque todavía
no sé qué quiero decir."

DEFECTO:
Perfeccionista. Nunca entrega nada.`
        ]
    },

    "crear escena": {
        type: "script",
        delay: 1800,
        multi: true,
        variants: [
`ESCENA SUELTA

INT. BAR VACÍO — MADRUGADA

El barman limpia vasos. El último cliente
no se va. Solo mira el fondo de su vaso.

BARMAN
¿Otro?

CLIENTE
¿A qué hora cerrás?

BARMAN
Cerré hace dos horas.

El cliente asiente. Deja un billete.
Sale sin decir nada más.
La puerta queda balanceándose.`,

`ESCENA SUELTA

EXT. AZOTEA — AMANECER

PAULA (29) y RODRIGO (31) ven salir el sol.
No durmieron. Hay tazas de café frías.

RODRIGO
¿Cuándo fue la última vez que hiciste algo
por primera vez?

Paula piensa. Tarda demasiado.

PAULA
Hoy.

Rodrigo la mira. Ella no le devuelve la mirada.
Pero sonríe.`
        ]
    },

    "crear dialogo": {
        type: "script",
        delay: 1800,
        multi: true,
        variants: [
`DIÁLOGO — VERDAD O MENTIRA

A: ¿Me mentiste?

B: Depende de qué entiendas por mentir.

A: ¡¿Qué clase de respuesta es esa?!

B: Una honesta.

(pausa)

A: Eso es lo más frustrante que dijiste en tu vida.

B: Lo sé. Lo siento.

A: ¿Y eso alcanza?

B: No. Pero es lo que tengo.`,

`DIÁLOGO — LA DESPEDIDA

A: Ya tengo todo listo.

B: Sí, se nota.

A: ¿Vas a decir algo o...?

B: ¿Qué querés que diga?

A: Algo. Cualquier cosa.

B: ...Vas a estar bien.

A: Eso no es lo que quería escuchar.

B: Ya lo sé.`
        ]
    },

    /* ══════════════════════════════════════════
       QR — RESPUESTA CON CÓDIGO QR
       ══════════════════════════════════════════
       El type "qr" muestra primero un mensaje de
       texto y después genera un QR al link indicado.

       ⬇️  CAMBIÁ "qrUrl" POR LA URL QUE QUIERAS
       ══════════════════════════════════════════ */

    "qr contacto": {
        type: "qr",
        delay: 3500,
        message: "Generando tu código QR de acceso...",
        qrUrl: "https://neurascript.com",  /* ← CAMBIÁ ESTA URL */
        caption: "Escaneá para acceder al portfolio de guiones."
    }

    /* ══════════════════════════════════════════
       ⬆️  FIN ZONA 2
       Para agregar respuestas nuevas, copiá uno
       de los bloques de arriba con su coma inicial.
       ══════════════════════════════════════════ */
};


/* ===================================================
   ⬇️  ZONA 3: CONFIGURACIÓN GLOBAL
   =================================================== */

const BASE_TYPING_DELAY = 1400;

const FALLBACK_MESSAGE = "No tengo una respuesta para eso todavía. Probá con 'ayuda' para ver qué puedo hacer, o usá 'géneros' para elegir un tipo de guion.";

const WELCOME_MESSAGE = "Bienvenido a NeuraScript. Soy tu asistente especializado en guiones. Escribí 'ayuda' para ver todo lo que puedo hacer, o contame directamente qué tipo de historia querés crear.";


/* ===================================================
   LÓGICA DEL CHAT — no hace falta tocar esto
   =================================================== */

const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

/* Resuelve aliases y devuelve la key final */
function resolveKey(raw) {
    const k = raw.toLowerCase().trim();
    return ALIASES[k] || k;
}

/* Elige variante aleatoria si el bloque tiene multi:true */
function resolveContent(response) {
    if (response.multi && response.variants && response.variants.length > 0) {
        const i = Math.floor(Math.random() * response.variants.length);
        return response.variants[i];
    }
    return response.content;
}

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.textContent = text;
    chat.appendChild(div);
    scrollToBottom();
    return div;
}

function addScript(text) {
    const div = document.createElement("div");
    div.className = "message bot script";
    div.textContent = text;
    chat.appendChild(div);
    scrollToBottom();
}

function addImage(url) {
    const div = document.createElement("div");
    div.className = "message bot";
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen generada";
    div.appendChild(img);
    chat.appendChild(div);
    scrollToBottom();
}

function addList(items) {
    const div = document.createElement("div");
    div.className = "message bot";
    const ul = document.createElement("ul");
    ul.className = "message-list";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    div.appendChild(ul);
    chat.appendChild(div);
    scrollToBottom();
}

/* Muestra QR usando imagen local en img/qr.png */
function addQR(response) {
    addMessage(response.message || "Generando código QR...", "bot");
    setInputLocked(true);
    showTyping();
    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();
        const div = document.createElement("div");
        div.className = "message bot qr-block";
        const img = document.createElement("img");
        img.src = "img/qr.png";   /* ← archivo /img/qr.png */
        img.alt = "Código QR";
        const caption = document.createElement("p");
        caption.className = "qr-caption";
        caption.textContent = response.caption || "";
        div.appendChild(img);
        div.appendChild(caption);
        chat.appendChild(div);
        scrollToBottom();
    }, 2400);
}

function showTyping() {
    const div = document.createElement("div");
    div.className = "message bot typing-indicator";
    div.id = "typing";
    div.innerHTML = `<span></span><span></span><span></span>`;
    chat.appendChild(div);
    scrollToBottom();
}

function removeTyping() {
    const el = document.getElementById("typing");
    if (el) el.remove();
}

function scrollToBottom() {
    chat.scrollTop = chat.scrollHeight;
}

function setInputLocked(locked) {
    input.disabled = locked;
    sendBtn.disabled = locked;
    sendBtn.style.opacity = locked ? "0.5" : "1";
}

function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage(userText, "user");
    input.value = "";

    const key = resolveKey(userText);
    const response = BOT_RESPONSES[key];
    const delay = (response && response.delay) ? response.delay : BASE_TYPING_DELAY;

    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();

        if (response) {
            if (response.type === "qr") {
                /* El QR maneja su propio ciclo de locked/typing */
                addQR(response);
            } else {
                setInputLocked(false);
                input.focus();

                const content = resolveContent(response);

                switch (response.type) {
                    case "text":   addMessage(content, "bot"); break;
                    case "script": addScript(content);         break;
                    case "image":  addImage(content);           break;
                    case "list":   addList(content);            break;
                    default:       addMessage(content, "bot");
                }
            }
        } else {
            setInputLocked(false);
            input.focus();
            addMessage(FALLBACK_MESSAGE, "bot");
        }
    }, delay);
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

/* ===================================================
   SIDEBAR — lógica de historial y drawer mobile
   =================================================== */

const sidebar       = document.getElementById("sidebar");
const sidebarOverlay= document.getElementById("sidebarOverlay");
const menuBtn       = document.getElementById("menuBtn");
const newChatBtn    = document.getElementById("newChatBtn");
const historyList   = document.getElementById("historyList");

/* Abre/cierra sidebar en mobile */
function openSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
}
function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
}

menuBtn.addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

/* Historial en memoria (se pierde al recargar — sin backend) */
let chatHistory = [];    /* [{ label, messages[] }] */
let currentMessages = [];/* mensajes del chat activo */

/* Agrega un ítem al panel de historial */
function addHistoryItem(label) {
    const empty = historyList.querySelector(".sidebar-empty");
    if (empty) empty.remove();

    const btn = document.createElement("button");
    btn.className = "history-item";
    btn.innerHTML = `<span class="hist-icon">💬</span><span>${label}</span>`;
    btn.title = label;
    btn.addEventListener("click", () => {
        closeSidebar();
        /* Solo cierra el sidebar; el historial completo
           requeriría backend — se puede extender */
    });
    historyList.insertBefore(btn, historyList.firstChild);
}

/* Intercepta sendMessage para guardar en historial */
const _origSend = sendMessage;
window.sendMessage = function() {
    const userText = document.getElementById("messageInput").value.trim();
    if (!userText) return;
    /* Si es el primer mensaje de este chat, agregarlo al historial */
    if (currentMessages.length === 0) {
        const label = userText.length > 32
            ? userText.slice(0, 32) + "…"
            : userText;
        addHistoryItem(label);
    }
    currentMessages.push(userText);
    _origSend();
};

/* Reemplazar los listeners con la versión interceptada */
sendBtn.removeEventListener("click", sendMessage);
sendBtn.addEventListener("click", window.sendMessage);
input.removeEventListener("keypress", e => {});
input.addEventListener("keypress", e => { if (e.key === "Enter") window.sendMessage(); });

/* Nuevo chat */
newChatBtn.addEventListener("click", () => {
    closeSidebar();
    /* Guardar el chat actual si tenía mensajes */
    if (currentMessages.length > 0) {
        chatHistory.push([...currentMessages]);
    }
    currentMessages = [];
    /* Limpiar el chat visual */
    const chatEl = document.getElementById("chat");
    chatEl.innerHTML = "";
    addMessage(WELCOME_MESSAGE, "bot");
});

/* Mensaje inicial */
addMessage(WELCOME_MESSAGE, "bot");
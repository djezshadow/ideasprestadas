/* ===================================================
   NEURASCRIPT — script.js
   =================================================== */


/* ===================================================
   ⬇️  ZONA DE CONFIGURACIÓN — AGREGA TUS RESPUESTAS ACÁ
   ---------------------------------------------------
   Cada entrada del objeto BOT_RESPONSES tiene:
     - key:     la frase que escribe el usuario (en minúsculas)
     - type:    "text" | "script" | "image" | "list"
     - content: la respuesta
     - delay:   (opcional) milisegundos extra de "typing" — por defecto 1500

   TIPOS:
     "text"   → mensaje normal de texto
     "script" → texto con fuente monospace y saltos de línea preservados
     "image"  → muestra una imagen (pon la URL)
     "list"   → array de strings, se muestra como lista con viñetas

   Para agregar una respuesta nueva: copiá un bloque existente,
   cambiá la key y el content, y listo.
   =================================================== */

const BOT_RESPONSES = {

    /* ---------- SALUDOS ---------- */
    "hola": {
        type: "text",
        content: "Hola. Soy NeuraScript, tu asistente para crear guiones. ¿Sobre qué querés escribir hoy?"
    },

    "hola!": {
        type: "text",
        content: "¡Hola! ¿Qué tipo de guion tenés en mente?"
    },

    "buenas": {
        type: "text",
        content: "Buenas. ¿En qué puedo ayudarte con tu guion?"
    },

    /* ---------- GÉNEROS ---------- */
    "guion de terror": {
        type: "script",
        delay: 2500,
        content: `GUION — EL ÚLTIMO CUARTO

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

FIN DE ESCENA`
    },

    "guion de comedia": {
        type: "script",
        delay: 2500,
        content: `GUION — EL REGALO EQUIVOCADO

ESCENA 1 — INT. LIVING — DÍA

PEDRO (40) sostiene una caja enorme envuelta para regalo.

PEDRO
Gasté tres meses de sueldo en esto.

LAURA (38) lo mira con cara de preocupación.

LAURA
Pedro... hoy no es mi cumpleaños.

PEDRO
...

(pausa larga)

PEDRO
El regalo es mío entonces.`
    },

    "guion de romance": {
        type: "script",
        delay: 2000,
        content: `GUION — EN EL ANDÉN

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
que me equivoqué?`
    },

    /* ---------- AYUDA GENERAL ---------- */
    "ayuda": {
        type: "list",
        content: [
            "Podés pedirme un guion por género: 'guion de terror', 'guion de comedia', etc.",
            "También podés pedirme ideas para una escena específica.",
            "Si tenés un personaje en mente, contame sobre él y armo algo.",
            "Escribí 'géneros' para ver todos los estilos disponibles."
        ]
    },

    "géneros": {
        type: "list",
        content: [
            "Terror",
            "Comedia",
            "Romance",
            "Thriller",
            "Drama",
            "Ciencia ficción",
            "Suspenso"
        ]
    },

    "logo": {
        type: "image",
        content: "https://picsum.photos/800/400"
    }

    /* ---------------------------------------------------
       ⬆️  FIN DE ZONA DE CONFIGURACIÓN
       Para agregar más respuestas, agregá una coma después
       de la última entrada y copiá este bloque:

    ,"tu frase aquí": {
        type: "text",
        content: "Tu respuesta aquí"
    }

       =================================================== */
};


/* ===================================================
   CONFIGURACIÓN GLOBAL DEL BOT
   =================================================== */

/* Delay base de "escritura" en ms (se suma al delay individual) */
const BASE_TYPING_DELAY = 1200;

/* Mensaje cuando no encuentra respuesta */
const FALLBACK_MESSAGE = "No tengo una respuesta configurada para eso. Probá con 'ayuda' para ver qué puedo hacer.";

/* Mensaje de bienvenida al iniciar */
const WELCOME_MESSAGE = "Bienvenido a NeuraScript. Contame tu idea de guion o escribí 'ayuda' para empezar.";


/* ===================================================
   LÓGICA DEL CHAT — no hace falta tocar esto
   =================================================== */

const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

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

    const key = userText.toLowerCase();
    const response = BOT_RESPONSES[key];
    const delay = (response && response.delay) ? response.delay : BASE_TYPING_DELAY;

    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        if (response) {
            switch (response.type) {
                case "text":
                    addMessage(response.content, "bot");
                    break;
                case "script":
                    addScript(response.content);
                    break;
                case "image":
                    addImage(response.content);
                    break;
                case "list":
                    addList(response.content);
                    break;
                default:
                    addMessage(response.content, "bot");
            }
        } else {
            addMessage(FALLBACK_MESSAGE, "bot");
        }
    }, delay);
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

/* Mensaje inicial */
addMessage(WELCOME_MESSAGE, "bot");
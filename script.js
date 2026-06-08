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

    /* QR */
    "contacto":                    "qr contacto",
    "mi qr":                       "qr contacto",
    "qr":                          "qr contacto",
    "codigo qr":                   "qr contacto",
    "código qr":                   "qr contacto",
    "link":                        "qr contacto",
    "enlace":                      "qr contacto",

    /* Película */
    "ficha técnica":               "ficha tecnica",
    "ficha":                       "ficha tecnica",
    "datos tecnicos":              "ficha tecnica",
    "datos técnicos":              "ficha tecnica",
    "logline":                     "logline",
    "log line":                    "logline",
    "storyline":                   "storyline",
    "story line":                  "storyline",
    "historia":                    "storyline",
    "sinopsis":                    "storyline",
    "presupuesto estimado":        "presupuesto",
    "presupuesto":                 "presupuesto",
    "budget":                      "presupuesto",
    "financiación":                "financiacion",
    "financiadores":               "financiacion",
    "financiamiento":              "financiacion",
    "moodboard":                   "moodboard",
    "mood board":                  "moodboard",
    "referencias visuales":        "moodboard",
    "paleta":                      "moodboard",
    "recorrido":                   "recorrido de mercados",
    "recorrido mercados":          "recorrido de mercados",
    "mercados":                    "recorrido de mercados",
    "elenco":                      "elenco tentativo",
    "actores":                     "elenco tentativo",
    "reparto":                     "elenco tentativo",
    "cast":                        "elenco tentativo",

    /* Teaser / Trailer */
    "trailer":                     "teaser",
    "teaser":                      "teaser",
    "avance":                      "teaser",
    "ver teaser":                  "teaser",
    "ver trailer":                 "teaser",
    "mostrar teaser":              "teaser",
    "mostrar trailer":             "teaser",

    /* Portada */
    "portada":             "portada",
    "poster":             "portada",
    "imagen":             "portada",
    "portada cine":             "portada",
    "portada pelicula":             "portada"

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
        qrUrl: "https://youtu.be/dQw4w9WgXcQ",  /* ← CAMBIÁ ESTA URL */
        caption: "Escaneá para acceder al portfolio de guiones."
    },

    /* ══════════════════════════════════════════
       PELÍCULA — IDEAS PRESTADAS
       ══════════════════════════════════════════ */

    "ficha tecnica": {
        type: "ficha",
        delay: 1800,
        content: {
            proyecto:   "Ideas Prestadas",
            formato:    "Largometraje",
            genero:     "Comedia Dramática",
            tono:       "Trágico, Satírico",
            duracion:   "120 min.",
            directora:  "Victoria Gariglio",
            productora: "5 Voces Producciones",
            guionista:  "Elias Betés",
            publico:    "25 a 34 años"
        }
    },

    "logline": {
        type: "text",
        delay: 1400,
        content: "📖 Logline — Ideas Prestadas\n\nMarcos, un profesor de teatro desesperado por reconocimiento, usa la inteligencia artificial para hacerse famoso."
    },

    "storyline": {
        type: "script",
        delay: 2000,
        content: `STORYLINE — IDEAS PRESTADAS

Marcos (34), un frustrado actor que sueña con triunfar como guionista, encuentra una innovadora IA llamada NeuraScript que lo lleva a la fama y lo acerca a ser invitado al programa de Freddy Castelli.

Para ello intenta concretar una película junto a una excéntrica actriz, pero enfrenta los constantes sabotajes de su ex amigo Ángel (34), un actor rival.

En el programa, cuando su secreto sale poco a poco a la luz, siente culpa y asume su mentira. Marcos pierde todo lo que había conseguido, y comprende que lo que de verdad necesitaba siempre estuvo en el humilde teatro donde comenzó.`
    },

    "presupuesto": {
        type: "presupuesto",
        delay: 1600,
        content: {
            ars: "$2.425.274.948 ARS",
            usd: "$1.695.997 USD"
        }
    },

    "financiacion": {
        type: "financiacion",
        delay: 1800,
        content: [
            { nombre: "Patagonik Film Group",   foto: "" },
            { nombre: "Programa Ibermedia",      foto: "" },
            { nombre: "Coproducción España",     foto: "" },
            { nombre: "Coproducción Uruguay",    foto: "" }
        ]
    },

    "moodboard": {
        type: "moodboard",
        delay: 2800,
        message: "Generando moodboard visual...",
        /* ── SLIDE 1: 15 imágenes (la última es la paleta de colores) ── */
        slide1: [
            /* ⬇️  Reemplazá cada "" con la ruta de tu imagen, ej: "img/mood/foto1.jpg" */
            "img/moodboard/01/001.webp", "img/moodboard/01/002.webp", "img/moodboard/01/paleta_noia.webp"  /* última = paleta */
        ],
        /* ── SLIDE 2: 11 imágenes (la última es la paleta de colores) ── */
        slide2: [
            "", "", "", "", "",
            "", "", "", "", "",
            "img/paleta2.jpg"  /* última = paleta */
        ]
    },

    "recorrido de mercados": {
        type: "recorrido",
        delay: 2200,
        message: "Cargando recorrido de mercados..."
        /* El contenido se edita directamente en la función addRecorrido()
           buscá el comentario ⬇️ EDITÁ EL RECORRIDO en script.js */
    },

    "elenco tentativo": {
        type: "elenco",
        delay: 2000,
        content: [
            /* ⬇️ Completá nombre, rol y foto para cada actor */
            { nombre: "NICOLAS FURTADO", rol: "Marcos", foto: "" },
            { nombre: "SANTIAGO TALLEDO", rol: "Ángel",  foto: "" },
            { nombre: "MARTIN SLIPAK", rol: "Felipe", foto: "" },
            { nombre: "CÉSAR TRONCOSO", rol: "EL GENIO", foto: "" },
            { nombre: "DIEGO MARTÍN", rol: "Mario (Productor)", foto: "" },
            { nombre: "MARIBEL VERDÚ", rol: "Luz de la Vega", foto: "" }
        ]
    },

    /* ══════════════════════════════════════════
       TEASER / TRAILER
       ══════════════════════════════════════════ */

    "teaser": {
        type: "youtube",
        delay: 1600,
        message: "Cargando el Teaser Oficial de Ideas Prestadas...",
        youtubeId: "QgG4actvdaU",
        caption: "IDEAS PRESTADAS — Teaser Oficial"
    },

    /* ══════════════════════════════════════════
       Portada
       ══════════════════════════════════════════ */
"portada": {
    type: "portada",
    delay: 2000,
    message: "Generando portada...",
    images: [
        "img/portada-vertical.png",
        "img/portada-horizontal.webp"
       ]
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

const WELCOME_MESSAGE = "Bienvenido a NeuraScript. Estoy acá para ayudarte a explorar contenido creativo, personajes, mundos e ideas. Escribí 'ayuda' para comenzar.";


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

/* Muestra QR como imagen local + link clickeable */
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

        /* Link que envuelve la imagen */
        const link = document.createElement("a");
        link.href   = response.qrUrl || "https://youtu.be/dQw4w9WgXcQ";
        link.target = "_blank";
        link.rel    = "noopener noreferrer";
        link.title  = "Abrir enlace";

        const img = document.createElement("img");
        img.src = "img/qr.png";
        img.alt = "Código QR — tocá para abrir";

        link.appendChild(img);

        const caption = document.createElement("p");
        caption.className = "qr-caption";
        caption.textContent = (response.caption || "") + " (tocá para abrir)";

        div.appendChild(link);
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
            if (["qr","moodboard","recorrido","youtube","portada"].includes(response.type)) {
                if (response.type === "qr")        addQR(response);
                if (response.type === "moodboard") addMoodboard(response);
                if (response.type === "recorrido") addRecorrido(response);
                if (response.type === "youtube")   addYoutube(response);
                if (response.type === "portada")   addPortada(response);
            } else {
                setInputLocked(false);
                input.focus();

                const content = resolveContent(response);

                switch (response.type) {
                    case "text":         addMessage(content, "bot");          break;
                    case "script":       addScript(content);                   break;
                    case "image":        addImage(content);                    break;
                    case "list":         addList(content);                     break;
                    case "ficha":        addFicha(response.content);           break;
                    case "presupuesto":  addPresupuesto(response.content);     break;
                    case "financiacion": addFinanciacion(response.content);    break;
                    case "elenco":       addElenco(response.content);          break;
                    case "moodboard":    addMoodboard(response);               break;
                    case "recorrido":    addRecorrido(response);               break;
                    default:             addMessage(content, "bot");
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
   LIGHTBOX — expandir imágenes
   =================================================== */

(function() {
    const overlay = document.createElement("div");
    overlay.id = "lightbox";
    overlay.style.cssText = `
        display:none;position:fixed;inset:0;z-index:9999;
        background:rgba(0,0,0,.88);backdrop-filter:blur(8px);
        align-items:center;justify-content:center;cursor:zoom-out;
        animation:fade .2s ease;
    `;
    const img = document.createElement("img");
    img.style.cssText = `
        max-width:92vw;max-height:88vh;border-radius:12px;
        box-shadow:0 8px 60px rgba(0,0,0,.6);object-fit:contain;
        cursor:default;
    `;
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.style.cssText = `
        position:absolute;top:20px;right:24px;background:rgba(255,255,255,.15);
        border:none;color:white;font-size:1.4rem;width:44px;height:44px;
        border-radius:50%;cursor:pointer;transition:background .15s;
    `;
    closeBtn.onmouseenter = () => closeBtn.style.background = "rgba(255,255,255,.3)";
    closeBtn.onmouseleave = () => closeBtn.style.background = "rgba(255,255,255,.15)";
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    function closeLightbox() {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }

    overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });
    closeBtn.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

    window.openLightbox = function(src) {
        img.src = src;
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
    };
})();

/* Hacer clickeables todas las imágenes que se agreguen al chat */
function makeChatImagesClickable(container) {
    container.querySelectorAll("img").forEach(img => {
        if (img.dataset.lightbox) return;
        img.dataset.lightbox = "1";
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => openLightbox(img.src));
    });
}

/* ===================================================
   RENDER — YOUTUBE EMBED
   =================================================== */

function addYoutube(response) {
    addMessage(response.message || "Cargando video...", "bot");
    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        const div = document.createElement("div");
        div.className = "message bot youtube-block";
        div.innerHTML = `
            <div class="ficha-title">🎬 ${response.caption || "Video"}</div>
            <div class="youtube-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/${response.youtubeId}?rel=0"
                    title="${response.caption || "Video"}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        `;
        chat.appendChild(div);
        scrollToBottom();

        if (!_loadingHistory) {
            trackMessage("bot", response.caption || "Video", "youtube",
                { youtubeId: response.youtubeId, caption: response.caption });
        }
    }, response.delay || 1600);
}

/* ===================================================
   RENDER — FICHA TÉCNICA
   =================================================== */

function addFicha(data) {
    const fields = [
        ["Nombre del Proyecto", data.proyecto],
        ["Formato",             data.formato],
        ["Género",              data.genero],
        ["Tono",                data.tono],
        ["Duración",            data.duracion],
        ["Directora",           data.directora],
        ["Productora",          data.productora],
        ["Guionista",           data.guionista],
        ["Público Objetivo",    data.publico]
    ];

    const div = document.createElement("div");
    div.className = "message bot ficha-card";
    div.innerHTML = `
        <div class="ficha-title">🎬 Ficha Técnica</div>
        <img
            src="img/ideasprestadas.webp"
            class="ficha-portada"
            alt="Portada — ${data.proyecto}"
            style="cursor:zoom-in"
            onerror="this.style.display='none'"
        >
        <div class="ficha-subtitle">${data.proyecto}</div>
        <table class="ficha-table">
            ${fields.map(([k, v]) => `
                <tr>
                    <td class="ficha-key">${k}</td>
                    <td class="ficha-val">${v}</td>
                </tr>
            `).join("")}
        </table>
    `;
    chat.appendChild(div);
    /* Lightbox en la portada */
    const portada = div.querySelector(".ficha-portada");
    if (portada) portada.addEventListener("click", () => openLightbox(portada.src));
    scrollToBottom();
}

/* ===================================================
   RENDER — PRESUPUESTO
   =================================================== */

function addPresupuesto(data) {
    const div = document.createElement("div");
    div.className = "message bot presupuesto-card";
    div.innerHTML = `
        <div class="ficha-title">💰 Presupuesto Estimado</div>
        <div class="presupuesto-row">
            <span class="presupuesto-label">En Pesos Argentinos</span>
            <span class="presupuesto-amount ars">${data.ars}</span>
        </div>
        <div class="presupuesto-divider"></div>
        <div class="presupuesto-row">
            <span class="presupuesto-label">En Dólares</span>
            <span class="presupuesto-amount usd">${data.usd}</span>
        </div>
    `;
    chat.appendChild(div);
    scrollToBottom();
}

/* ===================================================
   RENDER — FINANCIACIÓN
   =================================================== */

function addFinanciacion(items) {
    const div = document.createElement("div");
    div.className = "message bot financiacion-card";
    div.innerHTML = `
        <div class="ficha-title">🤝 Financiación</div>
        <div class="financiacion-grid">
            ${items.map(item => `
                <div class="financiacion-item">
                    <div class="financiacion-foto">
                        ${item.foto
                            ? `<img src="${item.foto}" alt="${item.nombre}">`
                            : `<span>🏢</span>`
                        }
                    </div>
                    <div class="financiacion-nombre">${item.nombre}</div>
                </div>
            `).join("")}
        </div>
    `;
    chat.appendChild(div);
    /* Hacer clickeables las fotos si las hay */
    makeChatImagesClickable(div);
    scrollToBottom();
}

/* ===================================================
   RENDER — ELENCO TENTATIVO
   =================================================== */

function addElenco(actores) {
    const div = document.createElement("div");
    div.className = "message bot elenco-card";
    div.innerHTML = `
        <div class="ficha-title">🎭 Elenco Tentativo</div>
        <div class="elenco-grid">
            ${actores.map(a => `
                <div class="elenco-item">
                    <div class="elenco-foto">
                        ${a.foto
                            ? `<img src="${a.foto}" alt="${a.nombre}" style="cursor:zoom-in">`
                            : `<span>👤</span>`
                        }
                    </div>
                    <div class="elenco-nombre">${a.nombre}</div>
                    <div class="elenco-rol">${a.rol}</div>
                </div>
            `).join("")}
        </div>
    `;
    chat.appendChild(div);
    makeChatImagesClickable(div);
    scrollToBottom();
}

/* ===================================================
   RENDER — MOODBOARD (2 slides)
   =================================================== */

function addMoodboard(response) {
    addMessage(response.message || "Generando moodboard...", "bot");
    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        [response.slide1, response.slide2].forEach((slide, si) => {
            const cols  = si === 0 ? 5 : 4;   /* slide1: 5 col, slide2: 4 col */
            const label = si === 0
                ? `Slide 1 — Moodboard (${slide.length} imágenes)`
                : `Slide 2 — Moodboard (${slide.length} imágenes)`;

            const div = document.createElement("div");
            div.className = "message bot moodboard-block";
            div.innerHTML = `
                <div class="ficha-title">${label}</div>
                <div class="moodboard-grid" style="--cols:${cols}">
                    ${slide.map((src, i) => {
                        const isPaleta = (i === slide.length - 1);
                        return `
                            <div class="moodboard-cell ${isPaleta ? "paleta-cell" : ""}">
                                ${src
                                    ? `<img src="${src}" alt="Imagen ${i+1}" style="cursor:zoom-in">`
                                    : `<div class="moodboard-placeholder">${isPaleta ? "🎨 Paleta" : (i+1)}</div>`
                                }
                            </div>
                        `;
                    }).join("")}
                </div>
            `;
            chat.appendChild(div);
            makeChatImagesClickable(div);
        });

        scrollToBottom();
    }, 2600);
}

/* ===================================================
   RENDER — 2 portadas
   =================================================== */

function addPortada(response) {
    addMessage(response.message || "Generando portada...", "bot");

    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);

        response.images.forEach((src, index) => {

            setTimeout(() => {

                const div = document.createElement("div");
                div.className = "message bot portada-block";

                div.innerHTML = `
                    <img
                        src="${src}"
                        alt="Portada ${index + 1}"
                        class="portada-img"
                        style="cursor:zoom-in"
                    >
                `;

                chat.appendChild(div);

                makeChatImagesClickable(div);
                scrollToBottom();

            }, index * 1200); // 1.2 segundos entre imágenes

        });

    }, 2000);
}

/* ===================================================
   RENDER — RECORRIDO DE MERCADOS (animado)
   ⬇️  EDITÁ EL RECORRIDO ACÁ
   =================================================== */

function addRecorrido(response) {
    addMessage(response.message || "Cargando recorrido de mercados...", "bot");
    setInputLocked(true);
    showTyping();

    /* ══════════════════════════════════════════════
       ⬇️  EDITÁ CADA PARADA DEL RECORRIDO:
         - nombre:  nombre del mercado / festival
         - lugar:   ciudad, país
         - fecha:   fecha o período
         - foto:    ruta a imagen (opcional, ej: "img/mercado1.jpg")
         - color:   color del punto en el mapa (hex)
       ══════════════════════════════════════════════ */
    const paradas = [
        { nombre: "Mercado 1",    lugar: "Ciudad, País",  fecha: "Fecha",  foto: "", color: "#fff" },
        { nombre: "Mercado 2",    lugar: "Ciudad, País",  fecha: "Fecha",  foto: "", color: "#fff" },
        { nombre: "Mercado 3",    lugar: "Ciudad, País",  fecha: "Fecha",  foto: "", color: "#fff" },
        { nombre: "Mercado 4",    lugar: "Ciudad, País",  fecha: "Fecha",  foto: "", color: "#fff" },
        { nombre: "Mercado 5",    lugar: "Ciudad, País",  fecha: "Fecha",  foto: "", color: "#fff" }
    ];

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        const div = document.createElement("div");
        div.className = "message bot recorrido-block";

        div.innerHTML = `
            <div class="ficha-title">🗺️ Recorrido de Mercados</div>
            <div class="recorrido-timeline">
                ${paradas.map((p, i) => `
                    <div class="recorrido-parada" style="animation-delay:${i * 0.18}s">
                        <div class="recorrido-dot" style="background:${p.color}"></div>
                        <div class="recorrido-line ${i === paradas.length-1 ? "last" : ""}"></div>
                        <div class="recorrido-info">
                            ${p.foto ? `<img src="${p.foto}" class="recorrido-foto" alt="${p.nombre}" style="cursor:zoom-in">` : ""}
                            <div class="recorrido-nombre">${p.nombre}</div>
                            <div class="recorrido-lugar">📍 ${p.lugar}</div>
                            <div class="recorrido-fecha">📅 ${p.fecha}</div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;

        chat.appendChild(div);
        makeChatImagesClickable(div);
        scrollToBottom();

        /* Animar paradas una por una */
        div.querySelectorAll(".recorrido-parada").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 180);
        });

    }, 2000);
}

/* ===================================================
   SIDEBAR + AUTH + HISTORIAL REAL
   =================================================== */

const sidebar        = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const menuBtn        = document.getElementById("menuBtn");
const newChatBtn     = document.getElementById("newChatBtn");
const historyList    = document.getElementById("historyList");
const logoutBtn      = document.getElementById("logoutBtn");

/* Token y username del usuario logueado */
const AUTH_TOKEN = localStorage.getItem("ns_token");
const AUTH_USER  = localStorage.getItem("ns_username") || "usuario";

/* Mostrar nombre en sidebar */
const sidebarUsernameEl = document.getElementById("sidebarUsername");
if (sidebarUsernameEl) sidebarUsernameEl.textContent = AUTH_USER;

/* Logout */
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("ns_token");
        localStorage.removeItem("ns_username");
        window.location.href = "auth.html";
    });
}

/* Drawer mobile */
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

/* ── Estado del chat actual ── */
let currentMessages = []; /* [{ role: "user"|"bot", text }] */
let currentLabel    = "";

/* ── Helpers de API ── */
async function apiSaveChat(label, messages) {
    if (!AUTH_TOKEN || messages.length === 0) return;
    try {
        await fetch("/api/history-save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + AUTH_TOKEN
            },
            body: JSON.stringify({ label, messages })
        });
    } catch (e) {
        console.warn("No se pudo guardar el historial:", e);
    }
}

async function apiLoadHistory() {
    if (!AUTH_TOKEN) return [];
    try {
        const res = await fetch("/api/history-get", {
            headers: { "Authorization": "Bearer " + AUTH_TOKEN }
        });
        if (!res.ok) return [];
        const data = await res.json();
        return data.chats || [];
    } catch {
        return [];
    }
}

async function apiDeleteChat(chatId) {
    if (!AUTH_TOKEN) return false;
    try {
        const res = await fetch("/api/history-delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + AUTH_TOKEN
            },
            body: JSON.stringify({ chatId })
        });
        return res.ok;
    } catch { return false; }
}

async function apiDeleteAllChats() {
    if (!AUTH_TOKEN) return false;
    try {
        const res = await fetch("/api/history-delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + AUTH_TOKEN
            },
            body: JSON.stringify({ deleteAll: true })
        });
        return res.ok;
    } catch { return false; }
}

/* ── Renderizar historial en sidebar ── */
function renderHistoryItem(chat) {
    const empty = historyList.querySelector(".sidebar-empty");
    if (empty) empty.remove();

    const btn = document.createElement("button");
    btn.className = "history-item";
    btn.dataset.chatId = String(chat.id);
    btn.innerHTML = `
        <span class="hist-icon">💬</span>
        <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${chat.label}</span>
        <span class="hist-delete" title="Borrar chat">🗑</span>
    `;
    btn.title = chat.label;

    /* Click en el texto → abrir chat */
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("hist-delete")) return;
        closeSidebar();
        loadChatMessages(chat.messages);
    });

    /* Click en el tacho → borrar */
    btn.querySelector(".hist-delete").addEventListener("click", async (e) => {
        e.stopPropagation();
        btn.style.opacity = "0.4";
        const ok = await apiDeleteChat(chat.id);
        if (ok) {
            btn.remove();
            /* Si no quedan items, mostrar placeholder */
            if (!historyList.querySelector(".history-item")) {
                historyList.innerHTML = `<p class="sidebar-empty">Tus conversaciones aparecerán acá.</p>`;
                /* Ocultar botón borrar todo */
                const clearBtn = document.getElementById("clearAllBtn");
                if (clearBtn) clearBtn.style.display = "none";
            }
        } else {
            btn.style.opacity = "1";
        }
    });

    historyList.appendChild(btn);

    /* Mostrar botón borrar todo cuando hay al menos un item */
    const clearBtn = document.getElementById("clearAllBtn");
    if (clearBtn) clearBtn.style.display = "flex";
}

function loadChatMessages(rawMessages) {
    const chatEl = document.getElementById("chat");
    chatEl.innerHTML = "";

    /* Parsear si viene como string JSON (JSONB de Neon a veces lo devuelve así) */
    let messages = rawMessages;
    if (typeof rawMessages === "string") {
        try { messages = JSON.parse(rawMessages); } catch { messages = []; }
    }
    if (!Array.isArray(messages)) messages = [];

    _loadingHistory = true;
    currentMessages = [...messages];
    currentLabel    = "";

    messages.forEach(m => {
        const role = m.role === "user" ? "user" : "bot";
        const text = m.text || "";
        if (!text) return;

        switch (m.type) {
            case "script":       _origAddScript(text);         break;
            case "ficha":        addFicha(m.data);             break;
            case "presupuesto":  addPresupuesto(m.data);       break;
            case "financiacion": addFinanciacion(m.data);      break;
            case "elenco":       addElenco(m.data);            break;
            case "moodboard":    _renderMoodboardStatic(m.data); break;
            case "recorrido":    _renderRecorridoStatic();     break;
            case "youtube":
                if (m.data) {
                    const yd = document.createElement("div");
                    yd.className = "message bot youtube-block";
                    yd.innerHTML = `<div class="ficha-title">🎬 ${m.data.caption||"Video"}</div>
                        <div class="youtube-wrapper">
                            <iframe src="https://www.youtube.com/embed/${m.data.youtubeId}?rel=0"
                                title="${m.data.caption||""}" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>`;
                    chat.appendChild(yd);
                    scrollToBottom();
                }
                break;
            default:             _origAddMessage(text, role);  break;
        }
    });

    _loadingHistory = false;
}

/* Versión estática del moodboard (sin delay ni typing) para historial */
function _renderMoodboardStatic(slides) {
    if (!slides) return;
    slides.forEach((slide, si) => {
        const cols  = si === 0 ? 5 : 4;
        const label = si === 0
            ? `Slide 1 — Moodboard (${slide.length} imágenes)`
            : `Slide 2 — Moodboard (${slide.length} imágenes)`;
        const div = document.createElement("div");
        div.className = "message bot moodboard-block";
        div.innerHTML = `
            <div class="ficha-title">${label}</div>
            <div class="moodboard-grid" style="--cols:${cols}">
                ${slide.map((src, i) => {
                    const isPaleta = (i === slide.length - 1);
                    return `<div class="moodboard-cell ${isPaleta ? "paleta-cell" : ""}">
                        ${src
                            ? `<img src="${src}" alt="Imagen ${i+1}" style="cursor:zoom-in">`
                            : `<div class="moodboard-placeholder">${isPaleta ? "🎨 Paleta" : (i+1)}</div>`
                        }
                    </div>`;
                }).join("")}
            </div>`;
        chat.appendChild(div);
        makeChatImagesClickable(div);
    });
    scrollToBottom();
}

/* Versión estática del recorrido para historial */
function _renderRecorridoStatic() {
    addRecorrido({ message: "" });
}

/* ── Cargar historial al iniciar ── */
async function loadHistory() {
    const chats = await apiLoadHistory();
    if (chats.length === 0) return;
    chats.forEach(renderHistoryItem);
}

/* ── Flag para suspender tracking al cargar historial ── */
let _loadingHistory = false;

/* ── trackMessage: guardá cada mensaje con su tipo ── */
function trackMessage(role, text, type = "text", data = null) {
    if (_loadingHistory) return;

    /* Primer mensaje del usuario → crear label y entrada en sidebar */
    if (role === "user" && currentMessages.length === 0) {
        currentLabel = text.length > 40 ? text.slice(0, 40) + "…" : text;
        renderHistoryItem({ id: "pending", label: currentLabel, messages: [] });
    }

    currentMessages.push({ role, text, type, data });

    /* Guardar automáticamente en DB cada vez que el bot responde */
    if (role === "bot" && currentLabel) {
        _debounceSave();
    }
}

/* Guardado con debounce — espera 1.5s después del último mensaje antes de guardar */
let _saveTimer = null;
function _debounceSave() {
    clearTimeout(_saveTimer);
    _saveTimer = setTimeout(() => {
        apiSaveChat(currentLabel, currentMessages);
    }, 1500);
}

/* ── Interceptar funciones de render para trackear todo ── */
const _origAddMessage = addMessage;
window.addMessage = function(text, sender) {
    const el = _origAddMessage(text, sender);
    if (!_loadingHistory && text !== WELCOME_MESSAGE) {
        trackMessage(sender === "user" ? "user" : "bot", text, "text");
    }
    return el;
};

const _origAddScript = addScript;
window.addScript = function(text) {
    _origAddScript(text);
    if (!_loadingHistory) trackMessage("bot", text, "script");
};

/* Wrappers para tipos especiales — llamalos DESPUÉS de renderizar */
function _trackSpecial(type, text, data) {
    if (!_loadingHistory) trackMessage("bot", text, type, data);
}

/* Parchear addFicha, addPresupuesto, etc. para que trackeen */
const _origAddFicha = addFicha;
window.addFicha = function(data) {
    _origAddFicha(data);
    _trackSpecial("ficha", "Ficha Técnica", data);
};

const _origAddPresupuesto = addPresupuesto;
window.addPresupuesto = function(data) {
    _origAddPresupuesto(data);
    _trackSpecial("presupuesto", "Presupuesto Estimado", data);
};

const _origAddFinanciacion = addFinanciacion;
window.addFinanciacion = function(items) {
    _origAddFinanciacion(items);
    _trackSpecial("financiacion", "Financiación", items);
};

const _origAddElenco = addElenco;
window.addElenco = function(actores) {
    _origAddElenco(actores);
    _trackSpecial("elenco", "Elenco Tentativo", actores);
};

const _origAddMoodboard = addMoodboard;
window.addMoodboard = function(response) {
    _origAddMoodboard(response);
    /* Guardamos los datos de slides para poder recargar */
    _trackSpecial("moodboard", "Moodboard", [response.slide1, response.slide2]);
};

const _origAddRecorrido = addRecorrido;
window.addRecorrido = function(response) {
    _origAddRecorrido(response);
    _trackSpecial("recorrido", "Recorrido de Mercados", null);
};

/* ── Nuevo chat ── */
newChatBtn.addEventListener("click", async () => {
    closeSidebar();
    /* Forzar guardado inmediato si hay mensajes pendientes */
    clearTimeout(_saveTimer);
    if (currentMessages.length > 0 && currentLabel) {
        await apiSaveChat(currentLabel, currentMessages);
    }
    currentMessages = [];
    currentLabel    = "";
    const chatEl = document.getElementById("chat");
    chatEl.innerHTML = "";
    addMessage(WELCOME_MESSAGE, "bot");
});

/* Guardar al cerrar/salir de la página */
window.addEventListener("beforeunload", () => {
    if (currentMessages.length > 0 && currentLabel) {
        /* Usar sendBeacon para garantizar el envío aunque se cierre */
        const payload = JSON.stringify({
            label:    currentLabel,
            messages: currentMessages
        });
        navigator.sendBeacon(
            "/api/history-save",
            new Blob([payload], { type: "application/json" })
        );
    }
});

/* ── CHIPS DE SUGERENCIAS ── */
const SUGGESTION_CHIPS = [
    { label: "🖼️ Portada",        key: "portada" },
    { label: "🎬 Ficha Técnica",  key: "ficha tecnica" },
    { label: "📖 Logline",         key: "logline" },
    { label: "📜 Storyline",       key: "storyline" },
    { label: "🎨 Moodboard",       key: "moodboard" },
    { label: "💰 Presupuesto",     key: "presupuesto" },
    { label: "🤝 Financiamiento",  key: "financiacion" },
    { label: "🎭 Elenco",          key: "elenco tentativo" },
    { label: "🗺️ Recorrido",       key: "recorrido de mercados" },
    { label: "🎞 Teaser",          key: "teaser" },
];

const chipsBar = document.getElementById("chipsBar");

function buildChips() {
    if (!chipsBar) return;
    chipsBar.innerHTML = "";
    SUGGESTION_CHIPS.forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className = "chip-btn";
        btn.textContent = label;
        btn.addEventListener("click", () => {
            /* Simular que el usuario escribió el comando */
            document.getElementById("messageInput").value = key;
            sendMessage();
            hideChips();
        });
        chipsBar.appendChild(btn);
    });
}

buildChips();
/* Chips siempre visibles — no se ocultan */

/* ── Init ── */
loadHistory();
addMessage(WELCOME_MESSAGE, "bot");

/* ── Borrar todo el historial ── */
const clearAllBtn = document.getElementById("clearAllBtn");
if (clearAllBtn) {
    clearAllBtn.addEventListener("click", async () => {
        if (!confirm("¿Borrar todo el historial? Esta acción no se puede deshacer.")) return;
        clearAllBtn.textContent = "Borrando...";
        clearAllBtn.disabled = true;
        const ok = await apiDeleteAllChats();
        if (ok) {
            historyList.innerHTML = `<p class="sidebar-empty">Tus conversaciones aparecerán acá.</p>`;
            clearAllBtn.style.display = "none";
        }
        clearAllBtn.disabled = false;
    });
}
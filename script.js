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

const ALIASES_ES = {

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
    "recorrido":                   "recorrido de laboratorios, mercados y festivales",
    "recorrido mercados":          "recorrido de laboratorios, mercados y festivales",
    "mercados":                    "recorrido de laboratorios, mercados y festivales",
    "laboratorios":                    "recorrido de laboratorios, mercados y festivales",
    "festivales":                    "recorrido de laboratorios, mercados y festivales",
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
    "portada pelicula":             "portada",

    /* Personajes */
    "personajes":          "__personajes__",
    "ver personajes":      "__personajes__",
    "lista de personajes": "__personajes__",
    "quienes son":         "__personajes__",
    "quiénes son":         "__personajes__",

    /* ¿Cómo estás? */
    "como estas": "como estas",
    "cómo estás": "como estas",
    "como estas?": "como estas",
    "cómo estás?": "como estas",
    "¿como estas?": "como estas",
    "¿cómo estás?": "como estas",
    
    "como te va": "como estas",
    "cómo te va": "como estas",
    "como te va?": "como estas",
    "cómo te va?": "como estas",
    "¿como te va?": "como estas",
    "¿cómo te va?": "como estas",
    
    "como andas": "como estas",
    "cómo andas": "como estas",
    "como andás": "como estas",
    "cómo andás": "como estas",
    "como andas?": "como estas",
    "como andás?": "como estas",
    "¿como andas?": "como estas",
    "¿cómo andás?": "como estas",
    
    "que tal": "como estas",
    "qué tal": "como estas",
    "que tal?": "como estas",
    "qué tal?": "como estas",
    "¿que tal?": "como estas",
    "¿qué tal?": "como estas",
    
    "todo bien": "como estas",
    "todo bien?": "como estas",
    "¿todo bien?": "como estas",
    
    "todo tranquilo": "como estas",
    "todo tranquilo?": "como estas",
    "¿todo tranquilo?": "como estas",
    
    "como va todo": "como estas",
    "cómo va todo": "como estas",
    "como va todo?": "como estas",
    "¿cómo va todo?": "como estas",
    
    "como viene la mano": "como estas",
    "cómo viene la mano": "como estas",
    "como viene la mano?": "como estas",
    
    "como te encuentras": "como estas",
    "cómo te encuentras": "como estas",
    "como te encuentras?": "como estas",
    "¿cómo te encuentras?": "como estas",
    
    "como te encontras": "como estas",
    "cómo te encontrás": "como estas",
    "como te encontras?": "como estas",
    "¿cómo te encontrás?": "como estas",
    
    "como andamos": "como estas",
    "cómo andamos": "como estas",
    "como andamos?": "como estas",
    
    "como va": "como estas",
    "cómo va": "como estas",
    "como va?": "como estas",
    "¿cómo va?": "como estas",
    
    "que onda": "como estas",
    "qué onda": "como estas",
    "que onda?": "como estas",
    "¿qué onda?": "como estas",
    
    "todo ok": "como estas",
    "todo ok?": "como estas",
    "¿todo ok?": "como estas",
    
    "todo joya": "como estas",
    "todo joya?": "como estas",
    "¿todo joya?": "como estas",
    
    "todo piola": "como estas",
    "todo piola?": "como estas",
    
    "como venis": "como estas",
    "cómo venís": "como estas",
    "como venis?": "como estas",
    "¿cómo venís?": "como estas",
    
    "como va tu dia": "como estas",
    "cómo va tu día": "como estas",
    "como va tu dia?": "como estas",
    "¿cómo va tu día?": "como estas",
    
    "que contas": "como estas",
    "qué contás": "como estas",
    "que contas?": "como estas",
    "¿qué contás?": "como estas",
    
    "que haces": "como estas",
    "qué hacés": "como estas",
    "que haces?": "como estas",
    "¿qué hacés?": "como estas",
    
    "como va la vida": "como estas",
    "cómo va la vida": "como estas",
    "como va la vida?": "como estas",
    "¿cómo va la vida?": "como estas",
    
    "como marcha todo": "como estas",
    "cómo marcha todo": "como estas",
    "como marcha todo?": "como estas",
    
    "como pinta": "como estas",
    "cómo pinta": "como estas",
    "como pinta?": "como estas",
    
    "que hay de nuevo": "como estas",
    "qué hay de nuevo": "como estas",
    "que hay de nuevo?": "como estas",
    "¿qué hay de nuevo?": "como estas",
    
    "como sigue todo": "como estas",
    "cómo sigue todo": "como estas",
    "como sigue todo?": "como estas",
    
    "todo en orden": "como estas",
    "todo en orden?": "como estas",
    "¿todo en orden?": "como estas",
    
    "que me contas": "como estas",
    "qué me contás": "como estas",
    "que me contas?": "como estas",
    "¿qué me contás?": "como estas"

    /* ══════════════════════════════════════════════════════
       ⬇️  ZONA DE PALABRAS PERSONALIZADAS — añadí las tuyas
       ──────────────────────────────────────────────────────
       Formato: "lo que escribe el usuario": "key del diccionario"
       La key del diccionario tiene que coincidir con una entrada
       que crees más abajo en BOT_RESPONSES.
       ══════════════════════════════════════════════════════ */

    /* Palabra 1 — descomentá y completá */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_1",

    /* Palabra 2 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_2",

    /* Palabra 3 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_3",

    /* Palabra 4 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_4",

    /* Palabra 5 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_5",

    /* Palabra 6 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_6",

    /* Palabra 7 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_7",

    /* Palabra 8 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_8",

    /* Palabra 9 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_9",

    /* Palabra 10 */
    // "ESCRIBÍ ACÁ LO QUE TIPEA EL USUARIO": "palabra_10"

};


/* ===================================================
   ⬇️  ZONA 1B: ALIASES (ENGLISH)
   ---------------------------------------------------
   Mismo formato que ALIASES_ES pero con disparadores
   en inglés. Las keys de destino son las mismas que
   en BOT_RESPONSES_EN (comparten nombres con las
   versiones en español — son sólo identificadores).
   =================================================== */

const ALIASES_EN = {

    /* Greetings */
    "hi":              "hola",
    "hi!":             "hola",
    "hello":           "hola",
    "hello!":          "hola",
    "hey":             "hola",
    "hey!":            "hola",
    "yo":              "hola",
    "good morning":    "hola",
    "good afternoon":  "hola",
    "good evening":    "hola",
    "morning":         "hola",
    "sup":             "hola",
    "whats up":        "hola",
    "what's up":       "hola",

    /* Help */
    "help":               "ayuda",
    "help!":              "ayuda",
    "help me":            "ayuda",
    "how does this work": "ayuda",
    "what can you do":    "ayuda",
    "what do you do":     "ayuda",
    "commands":           "ayuda",
    "menu":               "ayuda",
    "options":            "ayuda",

    /* Genres */
    "genres":          "géneros",
    "genre":           "géneros",
    "what genres":     "géneros",
    "genre list":      "géneros",
    "genres list":     "géneros",
    "list":            "géneros",
    "types":           "géneros",

    /* Horror */
    "horror":               "guion de terror",
    "horror script":        "guion de terror",
    "scary":                "guion de terror",
    "scary script":         "guion de terror",
    "creepy script":        "guion de terror",
    "fear":                 "guion de terror",
    "give me a horror script": "guion de terror",

    /* Comedy */
    "comedy":               "guion de comedia",
    "comedy script":        "guion de comedia",
    "funny":                "guion de comedia",
    "funny script":         "guion de comedia",
    "humor":                "guion de comedia",
    "humour":               "guion de comedia",

    /* Romance */
    "romance":              "guion de romance",
    "romance script":       "guion de romance",
    "love":                 "guion de romance",
    "love story":           "guion de romance",
    "romantic":             "guion de romance",
    "romantic script":      "guion de romance",

    /* Drama */
    "drama":                "guion de drama",
    "drama script":         "guion de drama",
    "dramatic":             "guion de drama",
    "emotional":            "guion de drama",
    "emotional script":     "guion de drama",

    /* Thriller */
    "thriller":             "guion de thriller",
    "thriller script":      "guion de thriller",
    "action":               "guion de thriller",
    "action script":        "guion de thriller",
    "suspense":             "guion de thriller",
    "suspense script":      "guion de thriller",

    /* Sci-fi */
    "sci fi":               "guion de ciencia ficcion",
    "sci-fi":               "guion de ciencia ficcion",
    "scifi":                "guion de ciencia ficcion",
    "science fiction":      "guion de ciencia ficcion",
    "science fiction script": "guion de ciencia ficcion",
    "futuristic":           "guion de ciencia ficcion",
    "future":               "guion de ciencia ficcion",

    /* Character */
    "character":            "crear personaje",
    "create character":     "crear personaje",
    "create a character":   "crear personaje",
    "give me a character":  "crear personaje",
    "make a character":     "crear personaje",
    "i need a character":   "crear personaje",
    "protagonist":          "crear personaje",
    "new character":        "crear personaje",

    /* Scene */
    "scene":                "crear escena",
    "create scene":         "crear escena",
    "create a scene":       "crear escena",
    "give me a scene":      "crear escena",
    "i need a scene":       "crear escena",
    "a scene":              "crear escena",

    /* Dialogue */
    "dialogue":             "crear dialogo",
    "dialog":               "crear dialogo",
    "dialogues":            "crear dialogo",
    "dialogs":              "crear dialogo",
    "create dialogue":      "crear dialogo",
    "give me a dialogue":   "crear dialogo",
    "conversation":         "crear dialogo",

    /* QR / Contact */
    "contact":              "qr contacto",
    "my qr":                "qr contacto",
    "qr":                   "qr contacto",
    "qr code":              "qr contacto",
    "link":                 "qr contacto",

    /* Movie — Ideas Prestadas */
    "fact sheet":           "ficha tecnica",
    "factsheet":            "ficha tecnica",
    "technical sheet":      "ficha tecnica",
    "tech specs":           "ficha tecnica",
    "details":              "ficha tecnica",
    "logline":              "logline",
    "log line":             "logline",
    "storyline":            "storyline",
    "story":                "storyline",
    "synopsis":             "storyline",
    "plot":                 "storyline",
    "estimated budget":     "presupuesto",
    "budget":               "presupuesto",
    "financing":            "financiacion",
    "funding":              "financiacion",
    "financiers":           "financiacion",
    "backers":              "financiacion",
    "moodboard":            "moodboard",
    "mood board":           "moodboard",
    "visual references":   "moodboard",
    "palette":              "moodboard",
    "tour":                 "recorrido de laboratorios, mercados y festivales",
    "market tour":          "recorrido de laboratorios, mercados y festivales",
    "markets":              "recorrido de laboratorios, mercados y festivales",
    "labs":                 "recorrido de laboratorios, mercados y festivales",
    "festivals":            "recorrido de laboratorios, mercados y festivales",
    "cast":                 "elenco tentativo",
    "actors":               "elenco tentativo",
    "casting":              "elenco tentativo",

    /* Teaser / Trailer */
    "trailer":              "teaser",
    "teaser":               "teaser",
    "preview":              "teaser",
    "watch teaser":         "teaser",
    "watch trailer":        "teaser",
    "show teaser":          "teaser",
    "show trailer":         "teaser",

    /* Cover */
    "cover":                "portada",
    "poster":               "portada",
    "image":                "portada",
    "movie poster":         "portada",
    "movie cover":          "portada",

    /* Characters list */
    "characters":           "__personajes__",
    "the characters":       "__personajes__",
    "character list":       "__personajes__",
    "show characters":      "__personajes__",
    "who are they":         "__personajes__",
    "who are the characters": "__personajes__",

    /* How are you? */
    "how are you":          "como estas",
    "how are you?":         "como estas",
    "how are you doing":    "como estas",
    "how are you doing?":   "como estas",
    "how's it going":       "como estas",
    "how is it going":      "como estas",
    "how's it going?":      "como estas",
    "whats new":            "como estas",
    "what's new":           "como estas",
    "what's new?":          "como estas",
    "all good":             "como estas",
    "all good?":            "como estas",
    "you good":             "como estas",
    "you good?":            "como estas",
    "how do you feel":      "como estas",
    "how do you feel?":     "como estas"

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

const BOT_RESPONSES_ES = {

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
       ¿CÓMO ESTÁS?
       ──────────────────────────────────────────
       Cambiá el texto dentro de las comillas.
       Si querés una sola respuesta fija: borrá
       el multi:true y los variants, y usá solo:
         type: "text",
         content: "Tu respuesta acá."
       ══════════════════════════════════════════ */
    "como estas": {
        type: "text",
        multi: true,
        variants: [
            // ↓ Respuesta 1 — cambiala
            "Funcionando a pleno. ¿Arrancamos con algo?",
            // ↓ Respuesta 2 — cambiala
            "Todo en orden por acá. ¿Qué historia tenés en mente?",
            // ↓ Respuesta 3 — cambiala
            "Lista para escribir. ¿Qué necesitás hoy?"
        ]
    },

    /* ══════════════════════════════════════════════════════════
       ⬇️  ZONA DE RESPUESTAS PERSONALIZADAS
       ────────────────────────────────────────────────────────
       Para activar cada entrada:
         1. Descomentá el bloque (quitá los  /* y  * /)
         2. Cambiá el texto de content por tu respuesta
         3. En ALIASES (arriba) descomentá la línea
            correspondiente y escribí el disparador
       ════════════════════════════════════════════════════════ */

    /* — Palabra 1 ─────────────────────────────────────────── */
    /*
    "palabra_1": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 1."
    },
    */

    /* — Palabra 2 ─────────────────────────────────────────── */
    /*
    "palabra_2": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 2."
    },
    */

    /* — Palabra 3 ─────────────────────────────────────────── */
    /*
    "palabra_3": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 3."
    },
    */

    /* — Palabra 4 ─────────────────────────────────────────── */
    /*
    "palabra_4": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 4."
    },
    */

    /* — Palabra 5 ─────────────────────────────────────────── */
    /*
    "palabra_5": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 5."
    },
    */

    /* — Palabra 6 ─────────────────────────────────────────── */
    /*
    "palabra_6": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 6."
    },
    */

    /* — Palabra 7 ─────────────────────────────────────────── */
    /*
    "palabra_7": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 7."
    },
    */

    /* — Palabra 8 ─────────────────────────────────────────── */
    /*
    "palabra_8": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 8."
    },
    */

    /* — Palabra 9 ─────────────────────────────────────────── */
    /*
    "palabra_9": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 9."
    },
    */

    /* — Palabra 10 ────────────────────────────────────────── */
    /*
    "palabra_10": {
        type: "text",
        content: "ESCRIBÍ ACÁ LA RESPUESTA PARA PALABRA 10."
    },
    */

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
            publico:    "25 a 35 años"
        }
    },

    "logline": {
        type: "text",
        delay: 1400,
        content: "📖 Logline — Ideas Prestadas. \n\nMarcos, un profesor de teatro desesperado por reconocimiento, usa la inteligencia artificial para hacerse famoso."
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
            { nombre: "Patagonik Film Group",   foto: "img/financiacion/PATAGONIK.jpg",  link: "https://www.patagonik.com.ar" },
            { nombre: "Coproducción España",     foto: "img/financiacion/ICAA.webp",      link: "" },
            { nombre: "Coproducción Uruguay",    foto: "img/financiacion/ACAU.webp",      link: "" },
            { nombre: "Programa Ibermedia",      foto: "img/financiacion/IBERMEDIA.webp", link: "https://www.programaibermedia.com/wp-content/uploads/2017/11/COP_Bases_2026_1_ESP.pdf" }
        ]
    },

    "moodboard": {
        type: "moodboard",
        delay: 2800,
        message: "Generando moodboard visual...",
        /* ── SLIDE 1: 15 imágenes (la última es la paleta de colores) ── */
        slide1: [
            /* ⬇️  Reemplazá cada "" con la ruta de tu imagen, ej: "img/mood/foto1.jpg" */
            "img/moodboard/01/001.webp", "img/moodboard/01/002.webp", "img/moodboard/01/003.webp", "img/moodboard/01/004.webp", "img/moodboard/01/005.webp", "img/moodboard/01/paleta_noia.webp"  /* última = paleta */
        ],
        /* ── SLIDE 2: 11 imágenes (la última es la paleta de colores) ── */
        slide2: [
            "img/moodboard/02/001.webp", "img/moodboard/02/002.webp", "img/moodboard/02/003.webp", "img/moodboard/02/004.webp", "img/moodboard/02/005.webp", "img/moodboard/02/paleta_siia.webp"  /* última = paleta */
        ]
    },

    "recorrido de laboratorios, mercados y festivales": {
        type: "recorrido",
        delay: 2200,
        message: "Cargando recorrido de laboratorios, mercados y festivales..."
        /* El contenido se edita directamente en la función addRecorrido()
           buscá el comentario ⬇️ EDITÁ EL RECORRIDO en script.js */
    },

    "elenco tentativo": {
        type: "elenco",
        delay: 2000,
        content: [
            /* ⬇️ Completá nombre, rol y foto para cada actor */
            { nombre: "NICOLAS FURTADO", rol: "Marcos", foto: "img/actores/FURTADO.webp" },
            { nombre: "SANTIAGO TALLEDO", rol: "Ángel",  foto: "img/actores/TALLEDO.webp" },
            { nombre: "DIEGO PERETTI", rol: "Freddy Castelli",  foto: "img/actores/PERETTI.webp" },
            { nombre: "MARTIN SLIPAK", rol: "Felipe", foto: "img/actores/SLIPAK.webp" },
            { nombre: "CÉSAR TRONCOSO", rol: "EL GENIO", foto: "img/actores/TRONCOSO.webp" },
            { nombre: "DIEGO MARTÍN", rol: "Mario (Productor)", foto: "img/actores/MARTIN.webp" },
            { nombre: "MARIBEL VERDÚ", rol: "Luz de la Vega", foto: "img/actores/VERDU.webp" }
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
   ⬇️  ZONA 2B: DICCIONARIO PRINCIPAL DE RESPUESTAS (ENGLISH)
   ---------------------------------------------------
   Misma estructura que BOT_RESPONSES_ES, traducido.
   =================================================== */

const BOT_RESPONSES_EN = {

    /* ══════════════════════════════════════════
       GREETINGS
       ══════════════════════════════════════════ */
    "hola": {
        type: "text",
        multi: true,
        variants: [
            "Hi. I'm NeuraScript, your screenwriting assistant. What do you want to write about today?",
            "Hello! What kind of story do you have in mind?",
            "Welcome back. Should we start a new script?",
            "Hi. Tell me your idea and we'll turn it into scenes."
        ]
    },

    /* ══════════════════════════════════════════
       HOW ARE YOU?
       ══════════════════════════════════════════ */
    "como estas": {
        type: "text",
        multi: true,
        variants: [
            "Running at full capacity. Want to get started with something?",
            "Everything's good on this end. What story do you have in mind?",
            "Ready to write. What do you need today?"
        ]
    },

    /* ══════════════════════════════════════════
       HELP
       ══════════════════════════════════════════ */
    "ayuda": {
        type: "list",
        content: [
            "📝 Ask me for a script by genre: horror, comedy, romance, drama, thriller, science fiction",
            "🎭 Create a new character by typing 'character'",
            "🎬 Ask for a standalone scene with 'scene'",
            "💬 Generate a dialogue by typing 'dialogue'",
            "📋 Type 'genres' to see all the styles",
            "🔗 Type 'contact' to get an access QR code"
        ]
    },

    /* ══════════════════════════════════════════
       AVAILABLE GENRES
       ══════════════════════════════════════════ */
    "géneros": {
        type: "list",
        content: [
            "🔪 Horror — type 'horror' or 'horror script'",
            "😂 Comedy — type 'comedy' or 'comedy script'",
            "❤️ Romance — type 'romance' or 'romance script'",
            "😢 Drama — type 'drama' or 'drama script'",
            "💥 Thriller — type 'thriller' or 'thriller script'",
            "🚀 Science fiction — type 'sci fi' or 'science fiction'"
        ]
    },

    /* ══════════════════════════════════════════
       SCRIPTS BY GENRE
       ══════════════════════════════════════════ */

    "guion de terror": {
        type: "script",
        delay: 2800,
        multi: true,
        variants: [
`SCRIPT — THE LAST ROOM

SCENE 1 — EXT. ABANDONED HOUSE — NIGHT

A decrepit house at the end of a dirt road.
The wind bends the trees. No lights on.

SCENE 2 — INT. HALLWAY — NIGHT

MARCOS (30) moves forward with a flashlight.
The floor creaks under his feet.

MARCOS
(whispering)
Is anyone there?

A door at the end opens by itself.

END OF SCENE`,

`SCRIPT — WHAT WAS LEFT

SCENE 1 — INT. EMPTY APARTMENT — EARLY MORNING

ELENA (25) goes through boxes. She just moved in.
She finds a photo. She doesn't recognize it.
There's a person in the background of every picture.
Always the same one. Always watching.

ELENA
(to herself)
Who are you?

Her phone buzzes. A message with no sender:
"I know you."

END OF SCENE`
        ]
    },

    "guion de comedia": {
        type: "script",
        delay: 2500,
        multi: true,
        variants: [
`SCRIPT — THE WRONG GIFT

SCENE 1 — INT. LIVING ROOM — DAY

PEDRO (40) holds a huge gift-wrapped box.

PEDRO
I spent three months' salary on this.

LAURA (38) looks at him, worried.

LAURA
Pedro... today isn't my birthday.

(long pause)

PEDRO
Then the gift is mine.`,

`SCRIPT — RESUME

SCENE 1 — INT. HR OFFICE — DAY

The INTERVIEWER (45) reads TOMÁS's (28) resume.

INTERVIEWER
It says here you have "experience
leading international teams."

TOMÁS
Yes. I played Counter-Strike
with people from five countries.

Awkward silence.

INTERVIEWER
And "crisis management under pressure"?

TOMÁS
The 2022 World Cup final.

END OF SCENE`
        ]
    },

    "guion de romance": {
        type: "script",
        delay: 2200,
        multi: true,
        variants: [
`SCRIPT — ON THE PLATFORM

SCENE 1 — EXT. TRAIN STATION — SUNSET

ANA (28) looks at the departures board.
LUCAS (30) arrives running.

LUCAS
Wait. Don't leave yet.

ANA
The train leaves in two minutes.

LUCAS
I know.
(pause)
Is that enough time to tell you
that I was wrong?`,

`SCRIPT — THIRD FLOOR

SCENE 1 — INT. ELEVATOR — DAY

SOFÍA (26) and MATEO (29) ride up in silence.
They've been crossing paths in the building for weeks.

The elevator stops. Power outage.

MATEO
Well.

SOFÍA
Well.

(pause)

SOFÍA
Have you always lived here?

MATEO
Four years. Never knew your name.

SOFÍA
(smiling in the dark)
Sofía.

MATEO
Mateo. Nice to meet you.

END OF SCENE`
        ]
    },

    "guion de drama": {
        type: "script",
        delay: 2500,
        content:
`SCRIPT — THE CALL

SCENE 1 — INT. KITCHEN — NIGHT

ROBERTO (55) waits by the phone.
The table is set for two.
An empty chair across from him.

The phone rings.

ROBERTO
(voice breaking)
Did you get there okay?

VOICE (phone)
Yes, dad. I got here okay.

A long pause.

ROBERTO
Good.

(hangs up)

He sits down alone. Starts eating.

END OF SCENE`
    },

    "guion de thriller": {
        type: "script",
        delay: 2600,
        content:
`SCRIPT — TWENTY-FOUR HOURS

SCENE 1 — INT. PARKED CAR — NIGHT

CLAUDIA (35), a detective, reads an anonymous message.
"You know where it is. You have until dawn."

She checks the rearview mirror.
A black car. Parked. No plates.

She pulls a gun from the glove compartment.

CLAUDIA
(on the phone)
I need backup. Now.

The black car turns on its lights.
It starts slowly moving toward her.

END OF SCENE`
    },

    "guion de ciencia ficcion": {
        type: "script",
        delay: 2800,
        content:
`SCRIPT — SIGNAL

SCENE 1 — INT. ORBITAL STATION — YEAR 2147

The screen flickers. IARA (32), an engineer,
approaches the communications monitor.

A signal. Unknown origin. Not human.

IARA
(to the crew)
It's been traveling toward us for 84 years.

COMMANDER KAI (50)
What does it say?

Iara reads the processed translation.

IARA
"Don't be alone. Neither are we."

Silence on the station.

END OF SCENE`
    },

    /* ══════════════════════════════════════════
       WRITING TOOLS
       ══════════════════════════════════════════ */

    "crear personaje": {
        type: "script",
        delay: 2000,
        multi: true,
        variants: [
`CHARACTER SHEET

NAME: Valentina Roca
AGE: 34
PROFESSION: Forensic translator

DESCRIPTION:
Speaks six languages but doesn't know
how to tell her mother she loves her.

MOTIVATION:
Finds a letter in a lost suitcase
that changes everything she thought she knew about her family.

SIGNATURE LINE:
"The exact words matter. Always."

FLAW:
Trusts documents more than people.`,

`CHARACTER SHEET

NAME: Ezequiel "Zeke" Morán
AGE: 22
PROFESSION: Film student. Works at a copy shop.

DESCRIPTION:
Wants to direct the movie of his life
but can't even finish a three-page script.

MOTIVATION:
His professor tells him he has no talent.
He decides to prove it wrong. Or prove it right.

SIGNATURE LINE:
"The scene doesn't work because I still
don't know what I want to say."

FLAW:
Perfectionist. Never finishes anything.`
        ]
    },

    "crear escena": {
        type: "script",
        delay: 1800,
        multi: true,
        variants: [
`STANDALONE SCENE

INT. EMPTY BAR — EARLY MORNING

The bartender wipes glasses. The last customer
won't leave. He just stares into his glass.

BARTENDER
Another one?

CUSTOMER
What time do you close?

BARTENDER
Closed two hours ago.

The customer nods. Leaves a bill.
Walks out without saying anything else.
The door swings behind him.`,

`STANDALONE SCENE

EXT. ROOFTOP — DAWN

PAULA (29) and RODRIGO (31) watch the sun rise.
They didn't sleep. Cold cups of coffee.

RODRIGO
When was the last time you did something
for the first time?

Paula thinks. Takes too long.

PAULA
Today.

Rodrigo looks at her. She doesn't look back.
But she smiles.`
        ]
    },

    "crear dialogo": {
        type: "script",
        delay: 1800,
        multi: true,
        variants: [
`DIALOGUE — TRUTH OR LIE

A: Did you lie to me?

B: Depends on what you mean by lying.

A: What kind of answer is that?!

B: An honest one.

(pause)

A: That's the most frustrating thing you've ever said.

B: I know. I'm sorry.

A: And is that enough?

B: No. But it's what I've got.`,

`DIALOGUE — THE GOODBYE

A: Everything's ready.

B: Yeah, I can tell.

A: Are you going to say something or...?

B: What do you want me to say?

A: Something. Anything.

B: ...You're going to be okay.

A: That's not what I wanted to hear.

B: I know.`
        ]
    },

    /* ══════════════════════════════════════════
       QR — RESPUESTA CON CÓDIGO QR
       ══════════════════════════════════════════ */

    "qr contacto": {
        type: "qr",
        delay: 3500,
        message: "Generating your access QR code...",
        qrUrl: "https://youtu.be/dQw4w9WgXcQ",
        caption: "Scan to access the screenplay portfolio."
    },

    /* ══════════════════════════════════════════
       MOVIE — IDEAS PRESTADAS
       ══════════════════════════════════════════ */

    "ficha tecnica": {
        type: "ficha",
        delay: 1800,
        content: {
            proyecto:   "Ideas Prestadas",
            formato:    "Feature Film",
            genero:     "Dramatic Comedy",
            tono:       "Tragic, Satirical",
            duracion:   "120 min.",
            directora:  "Victoria Gariglio",
            productora: "5 Voces Producciones",
            guionista:  "Elias Betés",
            publico:    "25 to 35 years old"
        }
    },

    "logline": {
        type: "text",
        delay: 1400,
        content: "📖 Logline — Ideas Prestadas. \\n\\nMarcos, a theater teacher desperate for recognition, uses artificial intelligence to become famous."
    },

    "storyline": {
        type: "script",
        delay: 2000,
        content: `STORYLINE — IDEAS PRESTADAS

Marcos (34), a frustrated actor who dreams of making it as a screenwriter, discovers an innovative AI called NeuraScript that brings him fame and gets him close to being invited onto Freddy Castelli's show.

To pull it off, he tries to get a film made with an eccentric actress, but faces constant sabotage from his former friend Ángel (34), a rival actor.

On the show, as his secret slowly comes to light, he feels guilty and admits to his lie. Marcos loses everything he had gained, and realizes that what he truly needed was always in the humble theater where he started.`
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
            { nombre: "Patagonik Film Group",  foto: "img/financiacion/PATAGONIK.jpg",  link: "https://www.patagonik.com.ar" },
            { nombre: "Spain Co-production",   foto: "img/financiacion/ICAA.webp",      link: "" },
            { nombre: "Uruguay Co-production", foto: "img/financiacion/ACAU.webp",      link: "" },
            { nombre: "Ibermedia Program",     foto: "img/financiacion/IBERMEDIA.webp", link: "https://www.programaibermedia.com/wp-content/uploads/2017/11/COP_Bases_2026_1_ESP.pdf" }
        ]
    },

    "moodboard": {
        type: "moodboard",
        delay: 2800,
        message: "Generating visual moodboard...",
        slide1: [
            "img/moodboard/01/001.webp", "img/moodboard/01/002.webp", "img/moodboard/01/003.webp", "img/moodboard/01/004.webp", "img/moodboard/01/005.webp", "img/moodboard/01/paleta_noia.webp"
        ],
        slide2: [
            "img/moodboard/02/001.webp", "img/moodboard/02/002.webp", "img/moodboard/02/003.webp", "img/moodboard/02/004.webp", "img/moodboard/02/005.webp", "img/moodboard/02/paleta_siia.webp"
        ]
    },

    "recorrido de laboratorios, mercados y festivales": {
        type: "recorrido",
        delay: 2200,
        message: "Loading the labs, markets & festivals tour..."
    },

    "elenco tentativo": {
        type: "elenco",
        delay: 2000,
        content: [
            { nombre: "NICOLAS FURTADO", rol: "Marcos", foto: "img/actores/FURTADO.webp" },
            { nombre: "SANTIAGO TALLEDO", rol: "Ángel",  foto: "img/actores/TALLEDO.webp" },
            { nombre: "DIEGO PERETTI", rol: "Freddy Castelli",  foto: "img/actores/PERETTI.webp" },
            { nombre: "MARTIN SLIPAK", rol: "Felipe", foto: "img/actores/SLIPAK.webp" },
            { nombre: "CÉSAR TRONCOSO", rol: "THE GENIE", foto: "img/actores/TRONCOSO.webp" },
            { nombre: "DIEGO MARTÍN", rol: "Mario (Producer)", foto: "img/actores/MARTIN.webp" },
            { nombre: "MARIBEL VERDÚ", rol: "Luz de la Vega", foto: "img/actores/VERDU.webp" }
        ]
    },

    /* ══════════════════════════════════════════
       TEASER / TRAILER
       ══════════════════════════════════════════ */

    "teaser": {
        type: "youtube",
        delay: 1600,
        message: "Loading the Official Teaser for Ideas Prestadas...",
        youtubeId: "QgG4actvdaU",
        caption: "IDEAS PRESTADAS — Official Teaser"
    },

    /* ══════════════════════════════════════════
       Cover
       ══════════════════════════════════════════ */
    "portada": {
        type: "portada",
        delay: 2000,
        message: "Generating cover art...",
        images: [
            "img/portada-vertical.png",
            "img/portada-horizontal.webp"
        ]
    }

    /* ══════════════════════════════════════════
       ⬆️  END BOT_RESPONSES_EN
       ══════════════════════════════════════════ */
};


/* ===================================================
   ⬇️  ZONA 3: CONFIGURACIÓN GLOBAL
   =================================================== */

const BASE_TYPING_DELAY = 1400;

const FALLBACK_MESSAGE_ES = "No tengo una respuesta para eso todavía. Probá con 'ayuda' para ver qué puedo hacer, o usá 'géneros' para elegir un tipo de guion.";
const FALLBACK_MESSAGE_EN = "I don't have an answer for that yet. Try 'help' to see what I can do, or use 'genres' to pick a script type.";

const WELCOME_MESSAGE_ES = "Bienvenido a NeuraScript. Estoy acá para ayudarte a explorar contenido creativo, personajes, mundos e ideas. Escribí 'ayuda' para comenzar.";
const WELCOME_MESSAGE_EN = "Welcome to NeuraScript. I'm here to help you explore creative content, characters, worlds, and ideas. Type 'help' to get started.";

/* ===================================================
   ⬇️  LÍMITE DE USO DE LA IA
   ---------------------------------------------------
   Cambiá AI_USE_LIMIT para ajustar cuántas veces
   puede enviar mensajes antes de ver el popup.
   El contador se reinicia al recargar la página.
   =================================================== */
const AI_USE_LIMIT = 5;   // ← CAMBIÁ ESTE NÚMERO
let   aiUseCount   = 0;   // contador en memoria (se resetea al recargar)

/* ===================================================
   ⬇️  PERSONAJES — editá las descripciones acá
   =================================================== */
const PERSONAJES_ES = [
    {
        nombre: "Marcos (34)",
        emoji:  "🎬",
        // ↓ Añadí la descripción de Marcos acá
        descripcion: "(interpretado por Nicolas Furtado) Es un profesor de teatro que trabaja en un teatro barrial de Boedo. Le gusta su trabajo y sus alumnos y la gente del barrio lo aprecian mucho pero no es lo que quiere hacer. Es una persona gentil pero ambicioso ante la búsqueda de la fama, quiere reiniciar su camino escribiendo, dirigiendo y actuando en sus películas. Encuentra la manera de triunfar con el “camino corto” usando NeuraScript."
    },
    {
        nombre: "Ángel (34)",
        emoji:  "😇",
        // ↓ Añadí la descripción de Ángel acá
        descripcion: "(interpretado por Santiago Talledo) Es un actor famoso y respetado ante la crítica y el público. Fue el mejor amigo de Marcos en el pasado pero se distanciaron cuando comenzó a volverse conocido. Es un egocéntrico y un ególatra, solo piensa en sus necesidades y necesita que todo el tiempo lo admiren. No quiere que Marcos opaque su imagen por lo que va a hacer todo lo posible para sacar a Marcos de “su lugar” en la industria cinematográfica."
    },
    {
        nombre: "El Genio (50)",
        emoji:  "🧞",
        // ↓ Añadí la descripción de El Genio acá
        descripcion: "(interpretado por César Troncoso) es un singular y misterioso empleado de Bügel, que desarrolla Apps de Inteligencia Artificial para \"las mentes artísticas\". Antes trabajaba con otros desarrolladores pero al tener una personalidad un poco extraña, lo desplazaron al área de \“Algoritmos No Autorizados\”. Él le da a Marcos una App llamada NeuraScript, especializada en la creación y corrección de la escritura cinematográfica."
    },
    {
        nombre: "Freddy Castelli (63)",
        emoji:  "📺",
        // ↓ Añadí la descripción de El Genio acá
        descripcion: "(interpretado por Diego Peretti) Comenzó como actor cómico de telenovelas hasta convertirse en el carismático conductor de tv histórico, famoso por llevar adelante el programa con su nombre “El show de Freddy Castelli” por más de 30 años. Tiene un fetiche con la actriz del cine español Luz de la Vega."
    },
    {
        nombre: "Luz de la Vega (50)",
        emoji:  "🎭",
        // ↓ Añadí la descripción de El Genio acá
        descripcion: "(interpretada por Maribel Verdú) Es una actriz consagrada del cine español, comenzando muy joven en los 80, se mantuvo brillante hasta la trágica muerte de su amado esposo, por lo que no ha vuelto a actuar en veinte años. Durante ese tiempo desarrolló profundas supersticiones de muerte y de mala suerte. Es la actriz fetiche de Freddy Castelli y por eso Marcos la convence de volver a actuar en su próxima película."
    },
    {
        nombre: "Felipe (28)",
        emoji:  "🕵️",
        // ↓ Añadí la descripción de El Genio acá
        descripcion: "(interpretado por Martín Slipak) Es el leal asistente de Ángel, y a pesar de que éste a veces lo menosprecia, Felipe siempre está dispuesto a sus peticiones. Es un aficionado del arte de los disfraces pero lo mantiene en secreto sin embargo, posteriormente esta habilidad es esencial para sabotear el rodaje de Marcos."
    },
    {
        nombre: "Mario (38)",
        emoji:  "📝",
        // ↓ Añadí la descripción de El Genio acá
        descripcion: "(interpretado por Diego Martin) Es un productor y guionista de una productora audiovisual importante de Buenos Aires. Mario rechaza la primera versión del guión de Marcos diciendo que su escritura es aburrida y poco creativa pero luego de leer la segunda versión del guión (hecha por NeuraScript) éste se sorprende por la rápida mejoría y acepta trabajar con Marcos."
    }
];

/* ===================================================
   ⬇️  PERSONAJES (ENGLISH)
   =================================================== */
const PERSONAJES_EN = [
    {
        nombre: "Marcos (34)",
        emoji:  "🎬",
        descripcion: "(played by Nicolas Furtado) He's a theater teacher who works at a neighborhood theater in Boedo. He likes his job, and his students and the local community appreciate him a lot, but it's not what he really wants to do. He's a kind but ambitious person in his pursuit of fame, wanting to restart his career as a writer, director, and actor in his own films. He finds a way to succeed via the \"shortcut\" by using NeuraScript."
    },
    {
        nombre: "Ángel (34)",
        emoji:  "😇",
        descripcion: "(played by Santiago Talledo) He's a famous actor, respected by both critics and audiences. He used to be Marcos's best friend, but they drifted apart when he started becoming well-known. He's egocentric and self-absorbed, only thinking about his own needs and constantly craving admiration. He doesn't want Marcos to overshadow his image, so he'll do everything possible to push Marcos out of \"his place\" in the film industry."
    },
    {
        nombre: "The Genie (50)",
        emoji:  "🧞",
        descripcion: "(played by César Troncoso) A singular and mysterious employee at Bügel, where he develops AI apps for \"artistic minds.\" He used to work with other developers, but because of his somewhat strange personality, he was moved to the \"Unauthorized Algorithms\" department. He gives Marcos an app called NeuraScript, specialized in creating and correcting screenwriting."
    },
    {
        nombre: "Freddy Castelli (63)",
        emoji:  "📺",
        descripcion: "(played by Diego Peretti) He started out as a comedic soap opera actor before becoming the charismatic host of a long-running TV show, famous for hosting his self-titled program \"The Freddy Castelli Show\" for over 30 years. He has a fixation on Spanish film actress Luz de la Vega."
    },
    {
        nombre: "Luz de la Vega (50)",
        emoji:  "🎭",
        descripcion: "(played by Maribel Verdú) An acclaimed Spanish film actress who started out very young in the '80s and remained brilliant until the tragic death of her beloved husband, after which she hasn't acted again in twenty years. During that time she developed deep superstitions about death and bad luck. She's Freddy Castelli's favorite actress, which is why Marcos convinces her to return to acting for his next film."
    },
    {
        nombre: "Felipe (28)",
        emoji:  "🕵️",
        descripcion: "(played by Martín Slipak) He's Ángel's loyal assistant, and even though Ángel sometimes belittles him, Felipe is always ready to do whatever he asks. He's a costume and disguise enthusiast but keeps it secret — though later, this skill becomes essential for sabotaging Marcos's shoot."
    },
    {
        nombre: "Mario (38)",
        emoji:  "📝",
        descripcion: "(played by Diego Martin) He's a producer and screenwriter at a major audiovisual production company in Buenos Aires. Mario rejects the first version of Marcos's script, calling his writing boring and uncreative, but after reading the second version (written by NeuraScript), he's surprised by the rapid improvement and agrees to work with Marcos."
    }
];


/* ===================================================
   ⬇️  RESOLUCIÓN DE IDIOMA
   ---------------------------------------------------
   Usa i18n.js (getLang) para elegir el diccionario
   activo entre las versiones _ES y _EN.
   =================================================== */
const LANG            = (typeof getLang === "function") ? getLang() : "es";
const ALIASES         = LANG === "en" ? ALIASES_EN         : ALIASES_ES;
const BOT_RESPONSES   = LANG === "en" ? BOT_RESPONSES_EN    : BOT_RESPONSES_ES;
const PERSONAJES      = LANG === "en" ? PERSONAJES_EN       : PERSONAJES_ES;
const WELCOME_MESSAGE = LANG === "en" ? WELCOME_MESSAGE_EN  : WELCOME_MESSAGE_ES;
const FALLBACK_MESSAGE= LANG === "en" ? FALLBACK_MESSAGE_EN : FALLBACK_MESSAGE_ES;


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
    img.alt = t("image.generatedAlt");
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
    addMessage(response.message || t("qr.generating"), "bot");
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
        link.title  = t("link.open");

        const img = document.createElement("img");
        img.src = "img/qr.png";
        img.alt = t("qr.alt");

        link.appendChild(img);

        const caption = document.createElement("p");
        caption.className = "qr-caption";
        caption.textContent = (response.caption || "") + t("qr.tapToOpen");

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

    /* ── Verificar límite de uso ── */
    if (aiUseCount >= AI_USE_LIMIT) {
        showLimitPopup();
        input.value = "";
        return;
    }
    aiUseCount++;

    addMessage(userText, "user");
    input.value = "";

    const key = resolveKey(userText);

    /* ── Caso especial: Personajes ── */
    if (key === "__personajes__") {
        setInputLocked(true);
        showTyping();
        setTimeout(() => {
            removeTyping();
            setInputLocked(false);
            input.focus();
            addPersonajes();
        }, 900);
        return;
    }

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

/* ===================================================
   RENDER — PERSONAJES
   =================================================== */
function addPersonajes() {
    const div = document.createElement("div");
    div.className = "message bot personajes-card";
    div.innerHTML = `
        <div class="ficha-title">${t("card.characters")}</div>
        <div class="personajes-list">
            ${PERSONAJES.map(p => `
                <div class="personaje-item">
                    <div class="personaje-emoji">${p.emoji}</div>
                    <div class="personaje-info">
                        <div class="personaje-nombre">${p.nombre}</div>
                        <div class="personaje-desc">${p.descripcion}</div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
    chat.appendChild(div);
    scrollToBottom();
    if (!_loadingHistory) trackMessage("bot", "Personajes", "text");
}

/* ===================================================
   POPUP — LÍMITE DE USO
   =================================================== */
function showLimitPopup() {
    /* Si ya existe, no crear otro */
    if (document.getElementById("limitPopupOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "limitPopupOverlay";

    overlay.innerHTML = `
        <div class="limit-popup">

            <!-- ↓ Zona para imagen opcional: reemplazá el src vacío con tu ruta -->
            <img
                src=""
                alt=""
                class="limit-popup-img"
                id="limitPopupImg"
            >

            <div class="limit-popup-body">
                <p class="limit-popup-msg">
                    ${t("limit.message")}
                </p>

                <!--
                ╔══════════════════════════════════════════╗
                ║  BOTÓN SUSCRIBIRSE                       ║
                ║  Cambiá el href para apuntar a tu página ║
                ╚══════════════════════════════════════════╝
                -->
                <a
                    href="#"
                    class="limit-popup-btn"
                    id="limitPopupBtn"
                >
                    ${t("limit.finish")}
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    /* Ocultar imagen si no tiene src */
    const img = document.getElementById("limitPopupImg");
    if (!img.src || img.src === window.location.href) img.style.display = "none";

    /* Al hacer click en "Finalizar" → mostrar popup de agradecimiento */
    document.getElementById("limitPopupBtn").addEventListener("click", (e) => {
        e.preventDefault();
        overlay.remove();
        showThanksPopup();
    });

    /* Animación de entrada */
    requestAnimationFrame(() => overlay.classList.add("visible"));
}

/* ===================================================
   POPUP — AGRADECIMIENTO (aparece tras "Finalizar")
   =================================================== */
function showThanksPopup() {
    const overlay = document.createElement("div");
    overlay.id = "thanksPopupOverlay";

    overlay.innerHTML = `
        <div class="limit-popup thanks-popup">
            <div class="limit-popup-body">
                <div class="thanks-icon">🎬</div>
                <p class="limit-popup-msg thanks-msg">
                    ${t("thanks.message")}
                </p>
                <a
                    href="#"
                    class="limit-popup-btn"
                    id="thanksPopupBtn"
                >
                    ${t("thanks.backHome")}
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("thanksPopupBtn").addEventListener("click", (e) => {
        e.preventDefault();
        overlay.remove();
        aiUseCount = -15;   /* ← Resetear el contador recién acá */
        if (typeof goHome === "function") goHome();
    });

    requestAnimationFrame(() => overlay.classList.add("visible"));
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
    addMessage(response.message || t("video.loading"), "bot");
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
        [t("ficha.proyecto"),  data.proyecto],
        [t("ficha.formato"),   data.formato],
        [t("ficha.genero"),    data.genero],
        [t("ficha.tono"),      data.tono],
        [t("ficha.duracion"),  data.duracion],
        [t("ficha.directora"), data.directora],
        [t("ficha.productora"), data.productora],
        [t("ficha.guionista"), data.guionista],
        [t("ficha.publico"),   data.publico]
    ];

    const div = document.createElement("div");
    div.className = "message bot ficha-card";
    div.innerHTML = `
        <div class="ficha-title">${t("card.factsheet")}</div>
        <img
            src="img/ideasprestadas.webp"
            class="ficha-portada"
            alt="${t("ficha.alt")}${data.proyecto}"
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
        <div class="ficha-title">${t("card.budget")}</div>
        <div class="presupuesto-row">
            <span class="presupuesto-label">${t("presupuesto.ars")}</span>
            <span class="presupuesto-amount ars">${data.ars}</span>
        </div>
        <div class="presupuesto-divider"></div>
        <div class="presupuesto-row">
            <span class="presupuesto-label">${t("presupuesto.usd")}</span>
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
        <div class="ficha-title">${t("card.financing")}</div>
        <div class="financiacion-grid">
            ${items.map(item => `
                <div class="financiacion-item">
                    <div class="financiacion-foto">
                        ${item.foto
                            ? `<img src="${item.foto}" alt="${item.nombre}">`
                            : `<span>🏢</span>`
                        }
                    </div>
                    <div class="financiacion-nombre">
                        ${item.link
                            ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="financiacion-link">${item.nombre}</a>`
                            : item.nombre
                        }
                    </div>
                </div>
            `).join("")}
        </div>
    `;
    chat.appendChild(div);
    makeChatImagesClickable(div);
    /* Nombre visible aunque la imagen falle */
    div.querySelectorAll(".financiacion-foto img").forEach(img => {
        img.onerror = function() { this.style.display = "none"; };
    });
    scrollToBottom();
}

/* ===================================================
   RENDER — ELENCO TENTATIVO
   =================================================== */

function addElenco(actores) {
    const div = document.createElement("div");
    div.className = "message bot elenco-card";
    div.innerHTML = `
        <div class="ficha-title">${t("card.cast")}</div>
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
    addMessage(response.message || t("moodboard.generating"), "bot");
    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        [response.slide1, response.slide2].forEach((slide, si) => {
            const cols  = si === 0 ? 4 : 4;   /* slide1: 5 col, slide2: 4 col */
            const label = si === 0
                ? `${t("moodboard.slide1")} (${slide.length} ${t("moodboard.images")})`
                : `${t("moodboard.slide2")} (${slide.length} ${t("moodboard.images")})`;

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
                                    : `<div class="moodboard-placeholder">${isPaleta ? t("moodboard.palette") : (i+1)}</div>`
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
    addMessage(response.message || t("portada.generating"), "bot");

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
                        alt="${t("portada.alt")} ${index + 1}"
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

/* ===================================================
   ⬇️  RECORRIDO — EDITÁ LAS PARADAS ACÁ
   ---------------------------------------------------
   Campos disponibles por parada:
     nombre, link, lugar, fecha, categoria,
     categoriaLink, foto, color
   =================================================== */
const RECORRIDO_PARADAS_ES = [
    { nombre: "Bolivia Lab",                                       link: "https://www.bolivialab.com.bo",                                          lugar: "La Paz, Bolivia",          fecha: "04/08/2027 - 22/08/2027", categoria: "Laboratorio de Análisis y Clínica de Proyectos en Desarrollo", categoriaLink: "https://www.bolivialab.com.bo/wp-content/uploads/2026/03/Laboratorio-2026.pdf?pid=187", foto: "img/recorrido/Bolivia.png",      color: "#fff" },
    { nombre: "ECM+Lab",                                           link: "https://www.famdetodos.com.br/ecm",                                      lugar: "Florianópolis, Brasil",    fecha: "03/06/2027 - 30/07/2027", categoria: "Laboratorio de Proyectos en Desarrollo",                        categoriaLink: "",                                                                                     foto: "img/recorrido/ecmlab.jpg",       color: "#fff" },
    { nombre: "ECM Mercado",                                       link: "https://www.famdetodos.com.br/ecm",                                      lugar: "Florianópolis, Brasil",    fecha: "04/09/2027 - 06/09/2027", categoria: "Mercado de Proyectos en Desarrollo",                            categoriaLink: "",                                                                                     foto: "img/recorrido/ECM.png",          color: "#fff" },
    { nombre: "Iber Series y Platino",                             link: "https://iberseriesplatinoindustria.com/",                                lugar: "Madrid, España",           fecha: "29/09/2027 - 02/10/2027", categoria: "Pitch de Plataformas y Productoras",                            categoriaLink: "https://iberseriesplatinoindustria.com/actividadespro/foro-de-coproduccion-y-financiacion/", foto: "img/recorrido/iberseries.png", color: "#fff" },
    { nombre: "Ventana Sur",                                       link: "https://ventana-sur.com/",                                              lugar: "Montevideo, Uruguay",      fecha: "01/12/2027 - 05/12/2027", categoria: "Ventana Sur Proyecta",                                          categoriaLink: "https://ventana-sur.com/proyecta/",                                                    foto: "img/recorrido/ventana-sur.png",  color: "#fff" },
    { nombre: "Festival Internacional de Cine de San Sebastián",  link: "https://www.sansebastianfestival.com/2025/festival_diary/2/in",          lugar: "San Sebastián, España",    fecha: "17/09/2028 - 25/09/2028", categoria: "Horizontes Latinos",                                            categoriaLink: "",                                                                                     foto: "img/recorrido/ssiff.png",        color: "#fff" },
    { nombre: "Festival Internacional de Cine de Mar del Plata",  link: "https://mardelplatafilmfest.com/41/es/",                                 lugar: "Mar del Plata, Argentina", fecha: "06/11/2028",              categoria: "Competencia Argentina de Largometrajes",                        categoriaLink: "",                                                                                     foto: "img/recorrido/mdq.webp",         color: "#fff" },
];

const RECORRIDO_PARADAS_EN = [
    { nombre: "Bolivia Lab",                                       link: "https://www.bolivialab.com.bo",                                          lugar: "La Paz, Bolivia",          fecha: "Aug 4–22, 2027",       categoria: "Development Project Analysis & Clinic Lab",      categoriaLink: "https://www.bolivialab.com.bo/wp-content/uploads/2026/03/Laboratorio-2026.pdf?pid=187", foto: "img/recorrido/Bolivia.png",      color: "#fff" },
    { nombre: "ECM+Lab",                                           link: "https://www.famdetodos.com.br/ecm",                                      lugar: "Florianópolis, Brazil",    fecha: "Jun 3 – Jul 30, 2027", categoria: "Development Projects Lab",                       categoriaLink: "",                                                                                     foto: "img/recorrido/ecmlab.jpg",       color: "#fff" },
    { nombre: "ECM Market",                                        link: "https://www.famdetodos.com.br/ecm",                                      lugar: "Florianópolis, Brazil",    fecha: "Sep 4–6, 2027",        categoria: "Development Projects Market",                    categoriaLink: "",                                                                                     foto: "img/recorrido/ECM.png",          color: "#fff" },
    { nombre: "Iber Series & Platino",                             link: "https://iberseriesplatinoindustria.com/",                                lugar: "Madrid, Spain",            fecha: "Sep 29 – Oct 2, 2027", categoria: "Platforms & Producers Pitch",                    categoriaLink: "https://iberseriesplatinoindustria.com/actividadespro/foro-de-coproduccion-y-financiacion/", foto: "img/recorrido/iberseries.png", color: "#fff" },
    { nombre: "Ventana Sur",                                       link: "https://ventana-sur.com/",                                              lugar: "Montevideo, Uruguay",      fecha: "Dec 1–5, 2027",        categoria: "Ventana Sur Proyecta",                           categoriaLink: "https://ventana-sur.com/proyecta/",                                                    foto: "img/recorrido/ventana-sur.png",  color: "#fff" },
    { nombre: "San Sebastián International Film Festival",         link: "https://www.sansebastianfestival.com/2025/festival_diary/2/in",          lugar: "San Sebastián, Spain",     fecha: "Sep 17–25, 2028",      categoria: "Horizontes Latinos",                             categoriaLink: "",                                                                                     foto: "img/recorrido/ssiff.png",        color: "#fff" },
    { nombre: "Mar del Plata International Film Festival",         link: "https://mardelplatafilmfest.com/41/es/",                                 lugar: "Mar del Plata, Argentina", fecha: "Nov 6, 2028",          categoria: "Argentine Feature Film Competition",             categoriaLink: "",                                                                                     foto: "img/recorrido/mdq.webp",         color: "#fff" },
];

const RECORRIDO_PARADAS = LANG === "en" ? RECORRIDO_PARADAS_EN : RECORRIDO_PARADAS_ES;

/* Construye el HTML del recorrido — compartido por chat y sandbox */
function _buildRecorridoHTML(paradas) {
    return `
        <div class="ficha-title">${t("card.tour")}</div>
        <div class="recorrido-timeline">
            ${paradas.map((p, i) => `
                <div class="recorrido-parada" style="animation-delay:${i * 0.18}s">
                    <div class="recorrido-left-col">
                        <div class="recorrido-dot" style="background:${p.color}"></div>
                        <div class="recorrido-line ${i === paradas.length - 1 ? "last" : ""}"></div>
                        ${p.foto
                            ? `<img src="${p.foto}" class="recorrido-foto" alt="${p.nombre}" style="cursor:zoom-in">`
                            : `<div class="recorrido-foto-placeholder"></div>`
                        }
                    </div>
                    <div class="recorrido-info">
                        <div class="recorrido-nombre">
                            ${p.link
                                ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="recorrido-link">${p.nombre}</a>`
                                : p.nombre
                            }
                        </div>
                        ${p.categoria ? `
                        <div class="recorrido-categoria">
                            🏷️ ${p.categoriaLink
                                ? `<a href="${p.categoriaLink}" target="_blank" rel="noopener noreferrer" class="recorrido-link">${p.categoria}</a>`
                                : p.categoria
                            }
                        </div>` : ""}
                        <div class="recorrido-lugar">📍 ${p.lugar}</div>
                        <div class="recorrido-fecha">📅 ${p.fecha}</div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

function addRecorrido(response) {
    addMessage(response.message || t("tour.loading"), "bot");
    setInputLocked(true);
    showTyping();

    setTimeout(() => {
        removeTyping();
        setInputLocked(false);
        input.focus();

        const div = document.createElement("div");
        div.className = "message bot recorrido-block";
        div.innerHTML = _buildRecorridoHTML(RECORRIDO_PARADAS);

        chat.appendChild(div);
        makeChatImagesClickable(div);
        scrollToBottom();

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

/* ── Swipe para abrir/cerrar el sidebar ── */
(function() {
    let touchStartX = 0;
    let touchStartY = 0;
    const EDGE_ZONE   = 80;  /* px desde el borde izquierdo para iniciar apertura */
    const MIN_SWIPE_X = 60;  /* desplazamiento horizontal mínimo para activar */
    const MAX_SWIPE_Y = 80;  /* desplazamiento vertical máximo (evita confusión con scroll) */

    document.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);

        /* Swipe derecha desde el borde → abrir */
        if (touchStartX <= EDGE_ZONE && dx >= MIN_SWIPE_X && dy <= MAX_SWIPE_Y) {
            openSidebar();
            return;
        }

        /* Swipe izquierda con sidebar abierto → cerrar */
        if (sidebar.classList.contains("open") && dx <= -MIN_SWIPE_X && dy <= MAX_SWIPE_Y) {
            closeSidebar();
        }
    }, { passive: true });
})();

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
        <span class="hist-delete" title="${t('history.delete')}">🗑</span>
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
                historyList.innerHTML = `<p class="sidebar-empty">${t("sidebar.empty")}</p>`;
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
        const cols  = si === 0 ? 4 : 4;
        const label = si === 0
            ? `${t("moodboard.slide1")} (${slide.length} ${t("moodboard.images")})`
            : `${t("moodboard.slide2")} (${slide.length} ${t("moodboard.images")})`;
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
                            : `<div class="moodboard-placeholder">${isPaleta ? t("moodboard.palette") : (i+1)}</div>`
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
    _trackSpecial("recorrido", "Recorrido de Laboratorios, Mercados y Festivales", null);
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
function getSuggestionChips() {
    return [
        { label: t("menu.characters"),  key: "__personajes__" },
        { label: t("menu.cover"),        key: "portada" },
        { label: t("menu.factsheet"),    key: "ficha tecnica" },
        { label: t("menu.logline"),      key: "logline" },
        { label: t("menu.storyline"),    key: "storyline" },
        { label: t("menu.moodboard"),    key: "moodboard" },
        { label: t("menu.budget"),       key: "presupuesto" },
        { label: t("menu.financing"),    key: "financiacion" },
        { label: t("menu.cast"),         key: "elenco tentativo" },
        { label: t("menu.tour"),         key: "recorrido de laboratorios, mercados y festivales" },
        { label: t("menu.teaser"),       key: "teaser" },
    ];
}

const chipsBar = document.getElementById("chipsBar");

function buildChips() {
    if (!chipsBar) return;
    chipsBar.innerHTML = "";
    getSuggestionChips().forEach(({ label, key }) => {
        const btn = document.createElement("button");
        btn.className = "chip-btn";
        btn.textContent = label;
        btn.addEventListener("click", () => {
            if (key === "__personajes__") {
                /* Personajes: no consume límite, abre directo */
                setInputLocked(true);
                showTyping();
                setTimeout(() => {
                    removeTyping();
                    setInputLocked(false);
                    input.focus();
                    addPersonajes();
                }, 900);
            } else {
                document.getElementById("messageInput").value = key;
                sendMessage();
            }
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
        if (!confirm(t("history.confirmClear"))) return;
        clearAllBtn.textContent = t("sidebar.clearing");
        clearAllBtn.disabled = true;
        const ok = await apiDeleteAllChats();
        if (ok) {
            historyList.innerHTML = `<p class="sidebar-empty">${t("sidebar.empty")}</p>`;
            clearAllBtn.style.display = "none";
        }
        clearAllBtn.disabled = false;
    });
}
/* =====================================================
   i18n.js — Idioma (Español / English)
   Diccionario compartido de textos de interfaz +
   helpers de idioma. Se carga ANTES que script.js
   y antes del <body> en todas las páginas estáticas.
   ===================================================== */

/* ── Helpers de idioma ── */
function getLang() {
    return localStorage.getItem("ns_lang") === "en" ? "en" : "es";
}
function setLang(lang) {
    localStorage.setItem("ns_lang", lang === "en" ? "en" : "es");
    document.documentElement.lang = (lang === "en") ? "en" : "es";
}

/* Aplica el lang al <html> apenas carga (evita parpadeos) */
document.documentElement.lang = getLang() === "en" ? "en" : "es";

/* =====================================================
   DICCIONARIO DE TEXTOS DE INTERFAZ
   ===================================================== */
const UI_STRINGS = {

    es: {
        /* ── Sidebar / navegación ── */
        "sidebar.newChat":      "Nuevo chat",
        "sidebar.recent":       "Recientes",
        "sidebar.empty":        "Tus conversaciones aparecerán acá.",
        "sidebar.clearAll":     "Borrar todo el historial",
        "sidebar.clearing":     "Borrando...",
        "sidebar.aboutUs":      "Sobre Nosotros",
        "sidebar.settings":     "Configuración",
        "sidebar.contact":      "Contacto",
        "sidebar.guest":        "👤 Invitado",
        "sidebar.login":        "Iniciar sesión →",
        "sidebar.logoutTitle":  "Cerrar sesión",
        "topbar.login":         "Iniciar sesión",
        "topbar.title":         "NeuraScript",

        /* ── Splash ── */
        "splash.start":         "✦ Empezar",
        "splash.tagline":       "Tu asistente de guion",

        /* ── Welcome overlay ── */
        "welcome.heading":      "¿Qué querés explorar?",
        "welcome.sub":          "Exploré el proyecto o entrá a la IA para escribir libremente.",
        "sandbox.back":         "← Volver al menú",

        /* ── Input ── */
        "input.placeholder":    "Escribe tu idea de guion...",
        "input.send":           "Enviar",

        /* ── Menú principal ── */
        "menu.aboutUs":         "📃 Sobre Nosotros",
        "menu.characters":      "🎭 Personajes",
        "menu.cover":           "🖼️ Portada",
        "menu.factsheet":       "🎬 Ficha Técnica",
        "menu.logline":         "📖 Logline",
        "menu.storyline":       "📜 Storyline",
        "menu.moodboard":       "🎨 Moodboard",
        "menu.budget":          "💰 Presupuesto",
        "menu.financing":       "🤝 Financiamiento",
        "menu.cast":            "🎭 Elenco",
        "menu.tour":            "🗺️ Recorrido",
        "menu.teaser":          "🎞 Teaser",
        "menu.useAI":           "🤖 Probar Simulador de NeuraScript",

        /* ── Chat: títulos de tarjetas ── */
        "card.characters":      "🎭 Personajes",
        "card.factsheet":       "🎬 Ficha Técnica",
        "card.budget":          "💰 Presupuesto Estimado",
        "card.financing":       "🤝 Financiación",
        "card.cast":            "🎭 Elenco Tentativo",
        "card.tour":            "🗺️ Recorrido de Laboratorios, Mercados y Festivales",
        "card.video":           "Video",

        /* ── Ficha técnica: campos ── */
        "ficha.proyecto":       "Nombre del Proyecto",
        "ficha.formato":        "Formato",
        "ficha.genero":         "Género",
        "ficha.tono":           "Tono",
        "ficha.duracion":       "Duración",
        "ficha.directora":      "Directora",
        "ficha.productora":     "Productora",
        "ficha.guionista":      "Guionista",
        "ficha.publico":        "Público Objetivo",
        "ficha.alt":            "Portada — ",
        "link.open":            "Abrir enlace",
        "qr.generating":        "Generando código QR...",
        "video.loading":        "Cargando video...",
        "moodboard.generating": "Generando moodboard...",
        "portada.generating":   "Generando portada...",
        "tour.loading":         "Cargando recorrido de Laboratorios, Mercados y Festivales...",

        /* ── Presupuesto ── */
        "presupuesto.ars":      "En Pesos Argentinos",
        "presupuesto.usd":      "En Dólares",

        /* ── Moodboard ── */
        "moodboard.slide1":     "Slide 1 — Moodboard",
        "moodboard.slide2":     "Slide 2 — Moodboard",
        "moodboard.images":     "imágenes",
        "moodboard.palette":    "🎨 Paleta",

        /* ── QR / imágenes ── */
        "qr.tapToOpen":         " (tocá para abrir)",
        "qr.alt":               "Código QR — tocá para abrir",
        "image.generatedAlt":   "Imagen generada",
        "portada.alt":          "Portada",

        /* ── Popups ── */
        "limit.message":        "Has delegado mucho tu creatividad a NeuraScript. Si deseas continuar, puedes seguir trabajando en ello con tu esfuerzo y dedicación",
        "limit.finish":         "Finalizar",
        "thanks.message":       "Gracias por probar el simulador de NeuraScript.<br>Esperamos que hayas disfrutado la experiencia.",
        "thanks.backHome":      "Volver al Menú Principal",

        /* ── Historial ── */
        "history.confirmClear": "¿Borrar todo el historial? Esta acción no se puede deshacer.",
        "history.delete":       "Borrar chat",

        /* ── Footer ── */
        "footer.rights":        "© 2026 NeuraScript — Todos los derechos reservados",

        /* ── Configuración ── */
        "config.heading":           "Configuración",
        "config.sub":                "Personalizá tu experiencia y gestioná tu cuenta.",
        "config.appearance.title":  "🎨 Apariencia",
        "config.appearance.sub":    "Elegí cómo se ve NeuraScript en tu dispositivo.",
        "config.darkmode.title":    "Modo azul oscuro",
        "config.darkmode.desc":     "Cambia el fondo a un tono de azul más oscuro, ideal para ambientes con poca luz.",
        "config.language.title":    "🌐 Idioma",
        "config.language.sub":      "Elegí el idioma de NeuraScript.",
        "config.language.label":    "Idioma de la interfaz",
        "config.language.desc":     "Cambia el idioma de todos los textos, menús y respuestas del asistente.",
        "config.account.active":    "Cuenta activa",
        "config.changePassword":    "🔑 Cambiar contraseña",
        "config.currentPassword":   "Contraseña actual",
        "config.newPassword":       "Nueva contraseña",
        "config.confirmPassword":   "Confirmar nueva contraseña",
        "config.savePassword":      "Guardar nueva contraseña",
        "config.saving":            "Guardando...",
        "config.deleteAccount":     "🗑 Eliminar cuenta",
        "config.deleteWarning":     "Esta acción es <strong>permanente</strong>. Se eliminará tu cuenta y todo tu historial de chats, y no podrá recuperarse.",
        "config.confirmYourPassword": "Confirmá tu contraseña",
        "config.deleteForever":     "Eliminar mi cuenta para siempre",
        "config.deleting":          "Eliminando...",
        "config.guestText":         "Iniciá sesión para cambiar tu contraseña o gestionar tu cuenta.",
        "config.loginCta":          "Iniciar sesión →",
        "config.back":              "← Volver",

        /* ── Mensajes del cliente (configuración) ── */
        "config.msg.fillAll":           "Completá todos los campos.",
        "config.msg.passwordMinLen":    "La nueva contraseña debe tener al menos 6 caracteres.",
        "config.msg.passwordMismatch":  "Las contraseñas no coinciden.",
        "config.msg.passwordChanged":   "¡Contraseña actualizada correctamente!",
        "config.msg.changeError":       "No se pudo cambiar la contraseña.",
        "config.msg.connectionError":   "Error de conexión. Intentá de nuevo.",
        "config.msg.enterPassword":     "Ingresá tu contraseña para confirmar.",
        "config.msg.confirmDelete":     "¿Estás seguro? Esta acción eliminará tu cuenta y todo tu historial de forma permanente.",
        "config.msg.accountDeleted":    "Cuenta eliminada. Hasta luego 👋",
        "config.msg.deleteError":       "No se pudo eliminar la cuenta.",

        /* ── Auth ── */
        "auth.tabLogin":        "Iniciar sesión",
        "auth.tabRegister":     "Registrarse",
        "auth.username":        "Usuario",
        "auth.email":           "Email",
        "auth.password":        "Contraseña",
        "auth.userPlaceholder": "tu_usuario",
        "auth.passwordPlaceholder": "••••••••",
        "auth.forgotLink":      "¿Olvidaste tu contraseña?",
        "auth.loginBtn":        "Entrar",
        "auth.registerBtn":     "Crear cuenta",
        "auth.skipBtn":         "Continuar sin cuenta →",
        "auth.hint":            "⚠️ Usá una contraseña genérica — no uses contraseñas de otros servicios.",
        "auth.forgotTitle":     "Recuperar contraseña",
        "auth.forgotSub":       "Ingresá el email de tu cuenta y te mandamos un enlace para restablecer tu contraseña.",
        "auth.forgotBtn":       "Enviar enlace",
        "auth.backBtn":         "← Volver",
        "auth.resetTitle":      "Nueva contraseña",
        "auth.resetSub":        "Ingresá tu nueva contraseña. Tiene que tener al menos 6 caracteres.",
        "auth.newPassword":     "Nueva contraseña",
        "auth.confirmPassword": "Confirmar contraseña",
        "auth.resetBtn":        "Guardar contraseña",
        "auth.resetOkTitle":    "¡Contraseña actualizada!",
        "auth.resetOkSub":      "Tu contraseña fue cambiada exitosamente. Ya podés iniciar sesión.",
        "auth.aboutLink":       "Sobre Nosotros ↗",
        "auth.fillAll":         "Completá todos los campos.",
        "auth.entering":        "Entrando...",
        "auth.connectionError": "Error de conexión. Intentá de nuevo.",
        "auth.creating":        "Creando cuenta...",
        "auth.accountCreated":  "¡Cuenta creada! Iniciando sesión...",
        "auth.enterEmail":      "Ingresá tu email.",
        "auth.sending":         "Enviando...",
        "auth.forgotSent":      "Si ese email tiene una cuenta, te mandamos el enlace. Revisá también la carpeta de spam.",
        "auth.fillBoth":        "Completá los dos campos.",
        "auth.passwordMismatch":"Las contraseñas no coinciden.",
        "auth.minChars":        "Mínimo 6 caracteres.",
        "auth.invalidToken":    "Token inválido. Pedí un nuevo enlace.",
        "auth.saving":          "Guardando...",

        /* ── Sobre Nosotros ── */
        "about.back":           "← Volver",
        "about.badge":          "PRESENTA",
        "about.tagline":        "Marcos (34), un frustrado actor que sueña con triunfar como guionista, encuentra una innovadora IA llamada NeuraScript que lo lleva a la fama y lo acerca a ser invitado al programa de Freddy Castelli. Para ello Intenta concretar una película junto a una excéntrica actriz, pero enfrenta los constantes sabotajes de su ex amigo Ángel (34), un actor rival. En el programa, cuando su secreto sale poco a poco a la luz, siente culpa y asume su mentira. Marcos pierde todo lo que había conseguido, y comprende que lo que de verdad necesitaba siempre estuvo en el humilde teatro donde comenzó.",
        "about.chip.year":      "📅 2028",
        "about.chip.genre":     "🎭 Comedia Dramática",
        "about.chip.runtime":   "⏱ 120min",
        "about.chip.country":   "📍 Argentina",
        "about.team":           "El Equipo",
        "about.role.victoria":  "Directora / Productora",
        "about.role.elias":     "Guionista / Productor",
        "about.role.serena":    "Recorrido de Laboratorios, Mercados y Festivales / Productora",
        "about.role.ezequiel":  "Presupuesto y Financiamiento / Productor",
        "about.role.isabel":    "Diseñadora Gráfica / Productora",
        "about.bio.victoria":   "Estudia Diseño de Imagen y Sonido en la UBA. Se desempeñó como asistente de dirección en un corto documental y directora en pequeños trabajos facultativos. Le apasiona crear historias conectadas a la realidad en la que vivimos.",
        "about.bio.elias":      "Estudia Diseño de imagen y sonido en la UBA. Participó de varios cortometrajes independientes que han sido parte de festivales regionales y ha participado en el Fin de Semana Sangriento del Festival Buenos Aires Rojo Sangre.",
        "about.bio.serena":     "Alumna avanzada de Diseño de Imagen y Sonido en la UBA, con experiencia en dirección, fotografía, montaje y dirección de arte en cortometrajes seleccionados para proyecciones académicas.",
        "about.bio.ezequiel":   "Estudia Diseño de Imagen y Sonido en la UBA. Cuenta con un amplio recorrido en el Diseño 3D y Freelancer como Camarografo para eventos.",
        "about.bio.isabel":     "Estudia Diseño de imagen y sonido en la UBA. Participó de varios video clips y cortos universitarios.",

        /* ── Contacto ── */
        "contact.email":        "Email",
        "contact.phone":        "Número",
        "contact.website":      "Website"
    },

    en: {
        /* ── Sidebar / navigation ── */
        "sidebar.newChat":      "New chat",
        "sidebar.recent":       "Recent",
        "sidebar.empty":        "Your conversations will appear here.",
        "sidebar.clearAll":     "Delete all history",
        "sidebar.clearing":     "Deleting...",
        "sidebar.aboutUs":      "About Us",
        "sidebar.settings":     "Settings",
        "sidebar.contact":      "Contact",
        "sidebar.guest":        "👤 Guest",
        "sidebar.login":        "Log in →",
        "sidebar.logoutTitle":  "Log out",
        "topbar.login":         "Log in",
        "topbar.title":         "NeuraScript",

        /* ── Splash ── */
        "splash.start":         "✦ Start",
        "splash.tagline":       "Your screenwriting assistant",

        /* ── Welcome overlay ── */
        "welcome.heading":      "What do you want to explore?",
        "welcome.sub":          "Explore the project or jump into the AI to write freely.",
        "sandbox.back":         "← Back to menu",

        /* ── Input ── */
        "input.placeholder":    "Type your script idea...",
        "input.send":           "Send",

        /* ── Main menu ── */
        "menu.aboutUs":         "📃 About Us",
        "menu.characters":      "🎭 Characters",
        "menu.cover":           "🖼️ Cover",
        "menu.factsheet":       "🎬 Fact Sheet",
        "menu.logline":         "📖 Logline",
        "menu.storyline":       "📜 Storyline",
        "menu.moodboard":       "🎨 Moodboard",
        "menu.budget":          "💰 Budget",
        "menu.financing":       "🤝 Financing",
        "menu.cast":            "🎭 Cast",
        "menu.tour":            "🗺️ Tour",
        "menu.teaser":          "🎞 Teaser",
        "menu.useAI":           "🤖 Try the NeuraScript Simulator",

        /* ── Chat: card titles ── */
        "card.characters":      "🎭 Characters",
        "card.factsheet":       "🎬 Fact Sheet",
        "card.budget":          "💰 Estimated Budget",
        "card.financing":       "🤝 Financing",
        "card.cast":            "🎭 Tentative Cast",
        "card.tour":            "🗺️ Labs, Markets & Festivals Tour",
        "card.video":           "Video",

        /* ── Fact sheet: fields ── */
        "ficha.proyecto":       "Project Name",
        "ficha.formato":        "Format",
        "ficha.genero":         "Genre",
        "ficha.tono":           "Tone",
        "ficha.duracion":       "Runtime",
        "ficha.directora":      "Director",
        "ficha.productora":     "Production Company",
        "ficha.guionista":      "Screenwriter",
        "ficha.publico":        "Target Audience",
        "ficha.alt":            "Cover — ",
        "link.open":            "Open link",
        "qr.generating":        "Generating QR code...",
        "video.loading":        "Loading video...",
        "moodboard.generating": "Generating moodboard...",
        "portada.generating":   "Generating cover art...",
        "tour.loading":         "Loading the Labs, Markets & Festivals tour...",

        /* ── Budget ── */
        "presupuesto.ars":      "In Argentine Pesos",
        "presupuesto.usd":      "In US Dollars",

        /* ── Moodboard ── */
        "moodboard.slide1":     "Slide 1 — Moodboard",
        "moodboard.slide2":     "Slide 2 — Moodboard",
        "moodboard.images":     "images",
        "moodboard.palette":    "🎨 Palette",

        /* ── QR / images ── */
        "qr.tapToOpen":         " (tap to open)",
        "qr.alt":               "QR Code — tap to open",
        "image.generatedAlt":   "Generated image",
        "portada.alt":          "Cover",

        /* ── Popups ── */
        "limit.message":        "You've delegated a lot of your creativity to NeuraScript. If you'd like to continue, you can keep working on it with your own effort and dedication",
        "limit.finish":         "Finish",
        "thanks.message":       "Thanks for trying the NeuraScript simulator.<br>We hope you enjoyed the experience.",
        "thanks.backHome":      "Back to Main Menu",

        /* ── History ── */
        "history.confirmClear": "Delete all history? This action cannot be undone.",
        "history.delete":       "Delete chat",

        /* ── Footer ── */
        "footer.rights":        "© 2026 NeuraScript — All rights reserved",

        /* ── Settings ── */
        "config.heading":           "Settings",
        "config.sub":                "Personalize your experience and manage your account.",
        "config.appearance.title":  "🎨 Appearance",
        "config.appearance.sub":    "Choose how NeuraScript looks on your device.",
        "config.darkmode.title":    "Dark blue mode",
        "config.darkmode.desc":     "Switches the background to a darker shade of blue, ideal for low-light environments.",
        "config.language.title":    "🌐 Language",
        "config.language.sub":      "Choose NeuraScript's language.",
        "config.language.label":    "Interface language",
        "config.language.desc":     "Changes the language of all the assistant's text, menus, and responses.",
        "config.account.active":    "Active account",
        "config.changePassword":    "🔑 Change password",
        "config.currentPassword":   "Current password",
        "config.newPassword":       "New password",
        "config.confirmPassword":   "Confirm new password",
        "config.savePassword":      "Save new password",
        "config.saving":            "Saving...",
        "config.deleteAccount":     "🗑 Delete account",
        "config.deleteWarning":     "This action is <strong>permanent</strong>. Your account and your entire chat history will be deleted and cannot be recovered.",
        "config.confirmYourPassword": "Confirm your password",
        "config.deleteForever":     "Delete my account forever",
        "config.deleting":          "Deleting...",
        "config.guestText":         "Log in to change your password or manage your account.",
        "config.loginCta":          "Log in →",
        "config.back":              "← Back",

        /* ── Client-side messages (settings) ── */
        "config.msg.fillAll":           "Please fill in all fields.",
        "config.msg.passwordMinLen":    "The new password must be at least 6 characters long.",
        "config.msg.passwordMismatch":  "Passwords don't match.",
        "config.msg.passwordChanged":   "Password updated successfully!",
        "config.msg.changeError":       "Couldn't change the password.",
        "config.msg.connectionError":   "Connection error. Please try again.",
        "config.msg.enterPassword":     "Enter your password to confirm.",
        "config.msg.confirmDelete":     "Are you sure? This will permanently delete your account and all your history.",
        "config.msg.accountDeleted":    "Account deleted. See you around 👋",
        "config.msg.deleteError":       "Couldn't delete the account.",

        /* ── Auth ── */
        "auth.tabLogin":        "Log in",
        "auth.tabRegister":     "Sign up",
        "auth.username":        "Username",
        "auth.email":           "Email",
        "auth.password":        "Password",
        "auth.userPlaceholder": "your_username",
        "auth.passwordPlaceholder": "••••••••",
        "auth.forgotLink":      "Forgot your password?",
        "auth.loginBtn":        "Log in",
        "auth.registerBtn":     "Create account",
        "auth.skipBtn":         "Continue without an account →",
        "auth.hint":            "⚠️ Use a generic password — don't reuse passwords from other services.",
        "auth.forgotTitle":     "Reset password",
        "auth.forgotSub":       "Enter your account email and we'll send you a link to reset your password.",
        "auth.forgotBtn":       "Send link",
        "auth.backBtn":         "← Back",
        "auth.resetTitle":      "New password",
        "auth.resetSub":        "Enter your new password. It must be at least 6 characters long.",
        "auth.newPassword":     "New password",
        "auth.confirmPassword": "Confirm password",
        "auth.resetBtn":        "Save password",
        "auth.resetOkTitle":    "Password updated!",
        "auth.resetOkSub":      "Your password was changed successfully. You can now log in.",
        "auth.aboutLink":       "About Us ↗",
        "auth.fillAll":         "Please fill in all fields.",
        "auth.entering":        "Logging in...",
        "auth.connectionError": "Connection error. Please try again.",
        "auth.creating":        "Creating account...",
        "auth.accountCreated":  "Account created! Logging in...",
        "auth.enterEmail":      "Please enter your email.",
        "auth.sending":         "Sending...",
        "auth.forgotSent":      "If that email has an account, we've sent the link. Also check your spam folder.",
        "auth.fillBoth":        "Please fill in both fields.",
        "auth.passwordMismatch":"Passwords don't match.",
        "auth.minChars":        "Minimum 6 characters.",
        "auth.invalidToken":    "Invalid token. Please request a new link.",
        "auth.saving":          "Saving...",

        /* ── About Us ── */
        "about.back":           "← Back",
        "about.badge":          "PRESENTS",
        "about.tagline":        "Marcos (34), a frustrated actor who dreams of making it as a screenwriter, discovers an innovative AI called NeuraScript that brings him fame and gets him close to being invited onto Freddy Castelli's show. To pull it off, he tries to make a film with an eccentric actress, but faces constant sabotage from his former friend Ángel (34), a rival actor. On the show, as his secret slowly comes to light, he feels guilty and admits to his lie. Marcos loses everything he had gained, and realizes that what he truly needed was always in the humble theater where he started.",
        "about.chip.year":      "📅 2028",
        "about.chip.genre":     "🎭 Dramatic Comedy",
        "about.chip.runtime":   "⏱ 120min",
        "about.chip.country":   "📍 Argentina",
        "about.team":           "The Team",
        "about.role.victoria":  "Director / Producer",
        "about.role.elias":     "Screenwriter / Producer",
        "about.role.serena":    "Labs, Markets & Festivals Tour / Producer",
        "about.role.ezequiel":  "Budget & Financing / Producer",
        "about.role.isabel":    "Graphic Designer / Producer",
        "about.bio.victoria":   "Studying Image and Sound Design at UBA. Served as assistant director on a short documentary and director on small academic projects. Passionate about creating stories connected to the reality we live in.",
        "about.bio.elias":      "Studying Image and Sound Design at UBA. Participated in several independent short films selected for regional festivals and in the Bloody Weekend at the Buenos Aires Rojo Sangre Festival.",
        "about.bio.serena":     "Advanced student of Image and Sound Design at UBA, with experience in directing, cinematography, editing, and production design on short films selected for academic screenings.",
        "about.bio.ezequiel":   "Studying Image and Sound Design at UBA. Has a broad background in 3D Design and works as a freelance camera operator for events.",
        "about.bio.isabel":     "Studying Image and Sound Design at UBA. Participated in music videos and university short films.",

        /* ── Contact ── */
        "contact.email":        "Email",
        "contact.phone":        "Phone",
        "contact.website":      "Website"
    }
};

/* Devuelve el string para la key en el idioma activo */
function t(key) {
    const lang = getLang();
    return (UI_STRINGS[lang] && UI_STRINGS[lang][key] !== undefined)
        ? UI_STRINGS[lang][key]
        : (UI_STRINGS.es[key] !== undefined ? UI_STRINGS.es[key] : key);
}

/* =====================================================
   APLICAR TRADUCCIONES A ELEMENTOS data-i18n
   ---------------------------------------------------
   data-i18n="key"             → textContent
   data-i18n-placeholder="key" → placeholder
   data-i18n-title="key"       → title
   data-i18n-html="key"        → innerHTML
   ===================================================== */
function applyI18n(root) {
    const scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    scope.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    scope.querySelectorAll("[data-i18n-title]").forEach(el => {
        el.title = t(el.getAttribute("data-i18n-title"));
    });
    scope.querySelectorAll("[data-i18n-html]").forEach(el => {
        el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
}

document.addEventListener("DOMContentLoaded", () => applyI18n());

/* =====================================================
   CAMBIO DE IDIOMA — sin recarga
   ===================================================== */
function changeLang(lang) {
    setLang(lang);                          /* guarda en localStorage */
    applyI18n();                            /* re-traduce data-i18n   */
    document.dispatchEvent(new CustomEvent("ns:langchange", { detail: { lang } }));
}

/* =====================================================
   TOGGLE MODO OSCURO — sin recarga
   ===================================================== */
function setDarkMode(on) {
    if (on) {
        localStorage.setItem("ns_darkmode", "1");
        document.documentElement.classList.add("dark-mode");
    } else {
        localStorage.setItem("ns_darkmode", "0");
        document.documentElement.classList.remove("dark-mode");
    }
    document.dispatchEvent(new CustomEvent("ns:darkmodechange", { detail: { on } }));
}
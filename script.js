/* ===================================================
   CONFIGURACIÓN DEL BOT
   =================================================== */

const BOT_RESPONSES = {

    "hola": {
        type: "text",
        content: "Hola. Soy NeuraScript."
    },

    "guion terror": {
        type: "script",
        content: `
ESCENA 1 - NOCHE

Una casa abandonada.

El viento golpea las ventanas.

ESCENA 2

La puerta comienza a abrirse sola.
`
    },

    "logo": {
        type: "image",
        content: "https://picsum.photos/800/400"
    }

};

/* ===================================================
   FUNCIONES
   =================================================== */

const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender){

    const div = document.createElement("div");

    div.className =
        `message ${sender}`;

    div.textContent = text;

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;
}

function addScript(script){

    const div =
        document.createElement("div");

    div.className =
        "message bot script";

    div.textContent = script;

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;
}

function addImage(url){

    const div =
        document.createElement("div");

    div.className =
        "message bot";

    const img =
        document.createElement("img");

    img.src = url;

    div.appendChild(img);

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;
}

function sendMessage(){

    const userText =
        input.value.trim();

    if(!userText) return;

    addMessage(userText,"user");

    input.value = "";

    const key =
        userText.toLowerCase();

    if(BOT_RESPONSES[key]){

        const response =
            BOT_RESPONSES[key];

        switch(response.type){

            case "text":

                addMessage(
                    response.content,
                    "bot"
                );

            break;

            case "script":

                addScript(
                    response.content
                );

            break;

            case "image":

                addImage(
                    response.content
                );

            break;
        }

    }else{

        addMessage(
            "No encontré una respuesta configurada para esa consulta.",
            "bot"
        );

    }
}

sendBtn.addEventListener(
    "click",
    sendMessage
);

input.addEventListener(
    "keypress",
    function(e){

        if(e.key==="Enter")
            sendMessage();

    }
);

/* ===================================================
   MENSAJE INICIAL
   =================================================== */

addMessage(
    "Bienvenido a NeuraScript. Escribe una idea o consulta.",
    "bot"
);
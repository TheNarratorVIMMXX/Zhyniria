/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Scripts para el Proyecto Zhyniria                                                                        */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Autor: Magallanes López Carlos Gabriel                                                                                                                                    */
/* Versión del Proyecto: 1.0                                                                                                                                                 */
/* Correo: cgmagallanes23@gmail.com                                                                                                                                          */
/* Ultima Modificación: 09/05/2026                                                                                                                                                                           */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Traducciones
const translations = {
    es: {
        // Nav
        navStory:       "Historia",
        navChapters:    "Capítulos",
        navDownload:    "Descargar",
        // Hero
        heroEyebrow:    "Una aventura de texto psicológica",
        heroSubtitle:   "Las Sombras del Abismo",
        heroQuote:      '"Hace millones de años, una enorme torre apareció... Ahora, debes descubrir sus secretos o ser consumido por la oscuridad que hay en su interior."',
        heroCta:        "Descubrir la historia",
        heroScroll:     "Explorar",
        // Lore
        loreLabel:      "El Mundo",
        loreTitle:      "La Torre de los Sueños",
        lorePara1:      "En el mundo de Zhyniria existe un lugar que los antiguos llamaban la Torre de los Sueños. Nadie sabe quién la construyó ni cuándo apareció, pero su presencia ha definido la historia de civilizaciones enteras. Una estructura colosal que desafía el tiempo, la lógica y el miedo.",
        lorePara2:      "Durante siglos, la torre fue un faro de poder arcano. Pero con el paso de los años, algo cambió. La barrera entre los sueños y las pesadillas comenzó a debilitarse desde adentro, y la oscuridad tomó el control.",
        lorePara3:      "Hoy, la torre no es solo un lugar físico. Es un reflejo del alma de quienes se atreven a entrar. Cada habitación, cada puzzle, cada decisión revela algo sobre el explorador que los enfrenta.",
        loreQuestion:   "¿Tienes lo que se necesita para descubrir sus secretos?",
        // Banner
        dangerBanner:   "Advertencia: cada decisión tiene consecuencias permanentes — no hay vuelta atrás",
        // Capítulo 1
        ch1Tag:         "Capítulo 1",
        ch1Title:       "La Cámara de Entrada",
        ch1Sub:         "La Incertidumbre",
        ch1Para1:       "Cruzas el umbral y la puerta se cierra detrás de ti con un golpe que resuena en toda la torre. La primera habitación parece ordinaria — un reloj, unos libros, un cofre — pero nada en Zhyniria es lo que parece.",
        ch1Para2:       "Cada objeto esconde un fragmento del código que abre la siguiente puerta. Tendrás que observar, analizar y decidir sabiamente. Un error puede significar el fin.",
        ch1Quote:       '"El tiempo no espera a los indecisos. Las manecillas del reloj son tu primera lección."',
        ch1Final:       "Tres intentos. Un código. La diferencia entre avanzar o convertirte en otra historia que la torre nunca contará.",
        // Capítulo 2
        ch2Tag:         "Capítulo 2",
        ch2Title:       "La Habitación de las Cenizas",
        ch2Sub:         "Los Fragmentos",
        ch2Para1:       "El aire se vuelve espeso. Las cenizas caen como una lluvia silenciosa que quema los pulmones de quienes no se protegen. Esta habitación no solo pone a prueba tu ingenio — pone a prueba tu resistencia.",
        ch2Para2:       "Tu objetivo: encontrar cinco fragmentos de espejo escondidos entre los muebles, mientras administras cuidadosamente tu salud. Cada movimiento incorrecto te debilita.",
        ch2Quote:       '"El espejo roto refleja la verdad que los ojos sanos se niegan a ver."',
        ch2Final:       "Dos vendajes. Cuatro lugares para buscar. Decisiones que pueden salvarte o hundirte antes de llegar a la siguiente habitación.",
        // Capítulo 3
        ch3Tag:         "Capítulo 3",
        ch3Title:       "El Desafío del Diario",
        ch3Sub:         "La Verdad Oculta",
        ch3Para1:       "En el centro de la habitación, un diario abierto. Sus páginas incompletas revelan la historia de alguien que estuvo aquí antes que tú — y que nunca salió. Las palabras faltantes son la llave.",
        ch3Para2:       "Este capítulo pone a prueba tu capacidad de observación y memoria. Los patrones están ahí, ocultos en las palabras que el diario sí tiene. Solo necesitas leer entre líneas.",
        ch3Quote:       '"Me miro al espejo y apenas reconozco al que devuelve la mirada; ¿seré yo o solo la sombra de quien quise ser?"',
        ch3Final:       "Tres intentos para descifrar el código. Una decisión final que definirá si la torre te libera o te consume para siempre.",
        // Capítulo 4
        ch4Tag:         "Capítulo 4",
        ch4Title:       "Las Cinco Estatuas",
        ch4Sub:         "El Juicio Final",
        ch4Para1:       "La última habitación es la más grande y la más oscura. Cinco estatuas de piedra te rodean, cada una representando a una de las hermanas que gobernaron la torre en tiempos antiguos.",
        ch4Para2:       "Cada estatua tiene su propio acertijo, su propio precio. Fallar no solo significa retroceder — en esta habitación, las consecuencias son definitivas. La linterna que encontraste es tu única fuente de luz.",
        ch4Quote:       '"Tu certeza es más afilada que cualquier cuchillo en esta torre; avanzas sin dudar, porque sabes que la victoria ya está atrapada entre tus manos."',
        ch4Final:       "Cuatro acertijos encadenados. Códigos, palabras, coordenadas y decisiones de vida o muerte. Este es el corazón de la torre — y solo los más agudos llegarán a ver lo que hay más allá.",
        // Deaths
        deathsLabel:    "Los Peligros de la Torre",
        deathsTitle:    "Formas de Morir",
        deathsDesc:     "La torre no perdona. Cada error tiene un precio. ¿Cuántos de estos destinos serás capaz de evitar?",
        death1Name:     "Asfixia",
        death1Desc:     "Las cenizas llenan tus pulmones si no te protejas a tiempo.",
        death2Name:     "Código Incorrecto",
        death2Desc:     "Tres intentos fallidos y la torre decide que no mereces continuar.",
        death3Name:     "Trampa Mortal",
        death3Desc:     "Algunos objetos fueron puestos ahí para los curiosos imprudentes.",
        death4Name:     "Aplastamiento",
        death4Desc:     "Los mecanismos de piedra no distinguen entre enemigos y exploradores.",
        death5Name:     "Ansiedad Fatal",
        death5Desc:     "Dudar demasiado en momentos críticos tiene consecuencias permanentes.",
        death6Name:     "Y más...",
        death6Desc:     "La torre guarda secretos que solo descubrirás al entrar.",
        // Ending
        endingLabel:    "El Destino Te Espera",
        endingTitle:    "¿Llegarás al Final?",
        endingPara1:    "Muy pocos llegan a ver lo que hay más allá de las cinco estatuas. La torre ha consumido a cientos de almas valientes que creyeron estar preparadas.",
        endingPara2:    "El final de Zhyniria no es solo una recompensa. Es una revelación sobre la naturaleza misma de los sueños, las pesadillas y el precio de la curiosidad.",
        endingQuote:    '"La torre te espera, valiente aventurero. La elección es tuya... si te atreves a entrar."',
        // Download
        downloadLabel:  "Disponible Ahora",
        downloadTitle:  "Comienza tu Aventura",
        downloadDesc:   "Descarga Zhyniria gratis y descubre si eres capaz de sobrevivir a las sombras del abismo. Solo necesitas Windows y el valor suficiente.",
        downloadBtn:    "⚔ Descargar Zhyniria.exe",
        downloadBadge:  "Versión 1.0 — Edición Completa — Gratuito",
        // Footer
        footerContact:  "Contacto",
        // Lang Button
        langBtn:        "🌐 English"
    },
    en: {
        // Nav
        navStory:       "Story",
        navChapters:    "Chapters",
        navDownload:    "Download",
        // Hero
        heroEyebrow:    "A psychological text adventure",
        heroSubtitle:   "Shadows of the Abyss",
        heroQuote:      '"Millions of years ago, an enormous tower appeared... Now, you must uncover its secrets or be consumed by the darkness within."',
        heroCta:        "Discover the story",
        heroScroll:     "Explore",
        // Lore
        loreLabel:      "The World",
        loreTitle:      "The Tower of Dreams",
        lorePara1:      "In the world of Zhyniria there is a place the ancients called the Tower of Dreams. No one knows who built it or when it appeared, but its presence has shaped the history of entire civilizations. A colossal structure that defies time, logic, and fear.",
        lorePara2:      "For centuries, the tower was a beacon of arcane power. But as the years passed, something changed. The barrier between dreams and nightmares began to weaken from within, and darkness took control.",
        lorePara3:      "Today, the tower is not merely a physical place. It is a reflection of the soul of those who dare to enter. Every room, every puzzle, every decision reveals something about the explorer who faces them.",
        loreQuestion:   "Do you have what it takes to uncover its secrets?",
        // Banner
        dangerBanner:   "Warning: every decision has permanent consequences — there is no going back",
        // Chapter 1
        ch1Tag:         "Chapter 1",
        ch1Title:       "The Entrance Chamber",
        ch1Sub:         "The Uncertainty",
        ch1Para1:       "You cross the threshold and the door slams shut behind you, the echo reverberating through the entire tower. The first room seems ordinary — a clock, some books, a chest — but nothing in Zhyniria is what it seems.",
        ch1Para2:       "Every object hides a fragment of the code that opens the next door. You will need to observe, analyze, and decide wisely. One mistake could mean the end.",
        ch1Quote:       '"Time does not wait for the indecisive. The clock hands are your first lesson."',
        ch1Final:       "Three attempts. One code. The difference between moving forward or becoming another story the tower will never tell.",
        // Chapter 2
        ch2Tag:         "Chapter 2",
        ch2Title:       "The Ash Room",
        ch2Sub:         "The Fragments",
        ch2Para1:       "The air grows thick. Ashes fall like a silent rain that burns the lungs of those who do not protect themselves. This room does not only test your wits — it tests your endurance.",
        ch2Para2:       "Your objective: find five mirror fragments hidden among the furniture, while carefully managing your health. Every wrong move weakens you.",
        ch2Quote:       '"The broken mirror reflects the truth that healthy eyes refuse to see."',
        ch2Final:       "Two bandages. Four places to search. Decisions that could save you or sink you before reaching the next room.",
        // Chapter 3
        ch3Tag:         "Chapter 3",
        ch3Title:       "The Diary Challenge",
        ch3Sub:         "The Hidden Truth",
        ch3Para1:       "In the center of the room, an open diary. Its incomplete pages reveal the story of someone who was here before you — and who never left. The missing words are the key.",
        ch3Para2:       "This chapter tests your ability to observe and remember. The patterns are there, hidden within the words the diary does contain. You just need to read between the lines.",
        ch3Quote:       '"I look in the mirror and barely recognize the one staring back; am I myself, or just the shadow of who I wanted to be?"',
        ch3Final:       "Three attempts to decipher the code. One final decision that will determine whether the tower sets you free or consumes you forever.",
        // Chapter 4
        ch4Tag:         "Chapter 4",
        ch4Title:       "The Five Statues",
        ch4Sub:         "The Final Judgment",
        ch4Para1:       "The last room is the largest and darkest of all. Five stone statues surround you, each representing one of the sisters who ruled the tower in ancient times.",
        ch4Para2:       "Each statue has its own riddle, its own price. Failing does not merely mean going back — in this room, the consequences are final. The lantern you found is your only source of light.",
        ch4Quote:       '"Your certainty is sharper than any blade in this tower; you advance without hesitation, knowing victory is already within your grasp."',
        ch4Final:       "Four chained riddles. Codes, words, coordinates, and life-or-death decisions. This is the heart of the tower — and only the sharpest minds will see what lies beyond.",
        // Deaths
        deathsLabel:    "The Dangers of the Tower",
        deathsTitle:    "Ways to Die",
        deathsDesc:     "The tower does not forgive. Every mistake has a price. How many of these fates will you manage to avoid?",
        death1Name:     "Suffocation",
        death1Desc:     "The ashes fill your lungs if you do not protect yourself in time.",
        death2Name:     "Wrong Code",
        death2Desc:     "Three failed attempts and the tower decides you do not deserve to continue.",
        death3Name:     "Deadly Trap",
        death3Desc:     "Some objects were placed there for the recklessly curious.",
        death4Name:     "Crushing Death",
        death4Desc:     "The stone mechanisms do not distinguish between enemies and explorers.",
        death5Name:     "Fatal Anxiety",
        death5Desc:     "Hesitating too long at critical moments has permanent consequences.",
        death6Name:     "And more...",
        death6Desc:     "The tower holds secrets you will only discover once you step inside.",
        // Ending
        endingLabel:    "Your Fate Awaits",
        endingTitle:    "Will You Reach the End?",
        endingPara1:    "Very few ever see what lies beyond the five statues. The tower has consumed hundreds of brave souls who believed they were ready.",
        endingPara2:    "The ending of Zhyniria is not just a reward. It is a revelation about the very nature of dreams, nightmares, and the price of curiosity.",
        endingQuote:    '"The tower awaits you, brave adventurer. The choice is yours... if you dare to enter."',
        // Download
        downloadLabel:  "Available Now",
        downloadTitle:  "Begin Your Adventure",
        downloadDesc:   "Download Zhyniria for free and find out if you can survive the shadows of the abyss. All you need is Windows and enough courage.",
        downloadBtn:    "⚔ Download Zhyniria.exe",
        downloadBadge:  "Version 1.0 — Complete Edition — Free",
        // Footer
        footerContact:  "Contact",
        // Lang Button
        langBtn:        "🌐 Español"
    }
};

// Detección y Aplicación de Idioma
function detectLanguage() {                                                                                                           
    const saved = localStorage.getItem('lang');                                                // Obtener el Lenguaje del Local Storage
    if (saved) return saved;                                                                   // Si se obtuvo el Lenguaje del Local Storage Retornar
    const browserLang = navigator.language || navigator.userLanguage;                          // Obtener el Lenguaje del Browser
    return browserLang.startsWith('es') ? 'es' : 'en';                                         // Español si es es-*, inglés para todo lo demás
}

// Aplicar traducciones al DOM
function applyLanguage(lang) {                         
    const translation = translations[lang];                                                     // Obtener Traducción según el Lenguaje
    document.querySelectorAll('[data-i18n]').forEach(element => {                               // Recorrer Elementos con Atributo data-i18n
        const key = element.getAttribute('data-i18n');                                          // Obtener Atributo data-i18n
        if (translation[key]) element.textContent = translation[key];                           // Reemplazar Texto con Traducción Correspondiente
    });
    document.documentElement.setAttribute('lang', lang);                                        // Actualizar Atributo lang del HTML para Accesibilidad
    const btn = document.getElementById('langToggleBtn');                                       // Obtener el Botón por su ID
    if (btn) btn.textContent = translation.langBtn;                                             // Actualizar Texto del Botón al Idioma Opuesto
    localStorage.setItem('lang', lang);                                                         // Guardar Idioma Seleccionado en localStorage
}

// Crear Botón Flotante de Cambio de Idioma
function createLangButton() {                                                                    
    const btn = document.createElement('button');                                                // Creamos el Elemento
    btn.id = 'langToggleBtn';                                                                    // ID para aplicar estilos desde CSS
    btn.addEventListener('click', () => {                                                        // Agregamos el Callback para el Botón
        const current = localStorage.getItem('lang') || detectLanguage();                        // Obtener Lenguaje Actual
        const next = current === 'es' ? 'en' : 'es';                                             // Alternar entre Español e Inglés
        applyLanguage(next);                                                                     // Aplicamos el Lenguaje
    });
    document.body.appendChild(btn);                                                              // Agregar Botón al Documento
}

// Efecto Fade In al hacer Scroll
const observer = new IntersectionObserver((entries) => {                                         // Instanciar Observador Intersección, Detección Elementos en Viewport 
    entries.forEach(entry => {                                                                   // Para Cada Elemento Detectado en el Viewport
        if (entry.isIntersecting){                                                               // Si esta en Viewport
            entry.target.classList.add('visible');                                               // Agregar Clase 'visible' para Efecto Fade In
            observer.unobserve(entry.target);                                                    // Dejar de Observar el Elemento para Mejorar Rendimiento
        }                         
    });
}, {threshold: 0.1});                                                                            // Configuración del Observador: Activar cuando el 10% del Elemento sea Visible

// Observar Elementos de la Clase 'Fade-In' para Activar Efecto al Entrar en el Viewport
const fadeElements = document.querySelectorAll('.fade-in');                                      // Seleccionar Todos los Elementos con Clase 'fade-in' 
fadeElements.forEach(element => observer.observe(element));                                      // Observar Cada Elemento para Activar Efecto Fade In al Entrar en el Viewport                         

// Efecto de Cambio de Fondo del Nav al Hacer Scroll
const nav = document.querySelector('nav');                                                       // Seleccionar el Elemento de Navegación para Modificar su Estilo al Hacer Scroll
window.addEventListener('scroll', () => {                                                        // Añadir Evento de Scroll para Detectar el Desplazamiento del Usuario
    if (window.scrollY > 80) {                                                                   // Si el Usuario se Desplaza Más de 80px desde la Parte Superior            
        nav.style.background = 'rgba(5,4,8,0.97)';                                             // Cambiar el Fondo del Nav a un Color Sólido para Mejorar la Legibilidad
        nav.style.borderBottomColor = 'rgba(201,168,76,0.2)';                                  // Cambiar el Color del Borde Inferior para Resaltar el Nav
    } else {                                                                                     // Si el Usuario se Encuentra Cerca de la Parte Superior
        nav.style.background = 'linear-gradient(to bottom, rgba(5,4,8,0.95), transparent)';    // Restaurar Fondo Nav a Gradiente Transparente 
        nav.style.borderBottomColor = 'rgba(201,168,76,0.1)';                                  // Restaurar Color Borde Inferior a Color Sutil 
    }
});

// Inicialización 
createLangButton();                                                                              // Creación del Botón del Lenguaje
applyLanguage(detectLanguage());                                                                 // Aplicación del Lenguaje

/*****************************************************************************************************************************************************************************/

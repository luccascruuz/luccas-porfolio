const translations = {
    pt: {
        avatarLabel: "Pixel art do Luccas. Clique pra dar oi",
        skillsLabel: "Habilidades:",
        educationLabel: "Educação:",
        education: "Bacharel em Sistemas de Informação",
        experiences: "Experiências",
        projects: "Projetos",
        close: "Fechar",

        projectDashboard: "Um painel exibindo informações sobre a COVID-19 na cidade de Lagarto-SE, utilizando uma API também criada por mim para coletar esses dados. Construído em Next.js, os dados são apresentados em gráficos e indicadores e são atualizados diariamente.",
        projectApi: "API com dados sobre casos de COVID-19 na cidade de Lagarto-SE, utilizando uma AWS Lambda para coletar os dados diariamente. Essa API alimenta o banco de dados MongoDB, e os dados necessários são filtrados para serem exibidos no painel.",
        projectArtistry: "Bot do Telegram que gera imagens a partir de qualquer texto que o usuário envia, utilizando a API da OpenAI para criar as imagens e enviá-las pelo Telegram.",
        projectCrud: "CRUD que gerencia dados de produtos em um banco de dados PostgreSQL, utilizando Java e Spring Boot, incluindo alguns exemplos de testes unitários nos controllers.",
        projectSpiderManTitle: "Portfólio do Homem-Aranha",
        projectSpiderMan: "Portfólio sobre o Homem-Aranha criado exclusivamente com HTML, CSS e JavaScript, demonstrando alguns efeitos que podemos criar usando apenas HTML e CSS, junto com algumas técnicas e padrões de JavaScript.",
        projectCsvTitle: "Criador de CSV com informações sobre restaurantes na região",
        projectCsv: "Este sistema gera um CSV com informações sobre restaurantes na região usando a API do Google Maps e cria uma mensagem utilizando a API da OpenAI para uma possível oportunidade de emprego.",

        gmtechDate: "Mar/2026 – Atual",
        gmtechDescription: "Desenvolvimento de produtos web e mobile; principal projeto: jogo educacional infantil usado em clínicas de psicologia e escolas.",
        gmtech1: "Levei um jogo educacional infantil da web para Android com Capacitor, hoje usado em 3–4 clínicas infantis de psicologia e 1 escola que trabalham com tablets.",
        gmtech2: "Implementei arquitetura offline-first, com armazenamento local no dispositivo e sincronização com o backend ao reconectar, garantindo uso em escolas com internet instável.",
        gmtech3: "Redesenhei a estratégia de carregamento de mídias e assets, reduzindo o build em ~55% e deixando o carregamento quase 3 minutos mais rápido.",
        gmtech4: "Criei testes E2E com Cypress e testes de componente com React Testing Library, executados no pipeline de CI no GitHub Actions.",
        gmtech5: "Desenvolvi componentes reutilizáveis em React, Next.js e TypeScript integrados às APIs do produto.",

        stoneDate: "Mar/2022 – Mar/2026",
        stoneDescription: "Fintech de pagamentos. Plataforma web para parceiros (lojistas) gerenciarem maquininhas e antecipação de recebíveis.",
        stone1: "Construí o fluxo web de antecipação de recebíveis nas modalidades diária, D+1 e D+0, usado por 10–15 mil parceiros e responsável por ~R$ 2 milhões/semana em transações via web.",
        stone2: "Levei a antecipação pontual do app para a web; o novo canal passou a responder por ~15% das antecipações pontuais.",
        stone3: "Elevei a cobertura de testes unitários (Jest) dos fluxos financeiros críticos de 15% para 100%, reduzindo o risco de regressões em produção.",
        stone4: "Desenvolvi os fluxos de gestão de maquininhas (solicitação de equipamentos, bobinas, suporte e acompanhamento de pedidos), reduzindo em 39% os chamados ao suporte.",
        stone5: "Trabalhei na arquitetura de micro-frontends com Module Federation (Webpack) e migrei todas as ~17 telas da área de maquininhas para o novo Design System da Stone.",
        stone6: "Instrumentei a jornada de antecipação com eventos de analytics (Amplitude), permitindo ao time de produto medir conversão por etapa do funil.",
        stone7: "Implementei a geração de boletos de pagamento da Conta Stone em Go, mantive o painel legado em Angular (~2% dos usuários web) e investiguei incidentes em produção com Datadog.",

        queroDate: "Set/2020 – Fev/2022",
        queroDescription: "Plataforma de delivery de comida. Painel de parceiros (restaurantes) e painel administrativo interno.",
        quero1: "Desenvolvi e mantive o painel de pedidos dos parceiros em React, Next.js e TypeScript, usado por ~5 mil estabelecimentos.",
        quero2: "Tornei o painel responsivo para a variedade de dispositivos dos estabelecimentos, mantendo ações críticas acessíveis em qualquer resolução.",
        quero3: "Construí o painel administrativo interno usado por áreas como operações e prevenção a fraudes para consultar dados de parceiros sem acessar suas contas.",
        quero4: "Mentorei um estagiário até a promoção a júnior, ensinando fundamentos de React, regras de negócio do produto e os padrões de code review da empresa.",
        quero5: "Estruturei gerenciamento de estado com Redux e Context API e componentes reutilizáveis com Styled Components, com testes unitários em Jest.",

        sergipetecTitle: "SergipeTec — Desenvolvedor de Software (Estágio)",
        sergipetecDate: "Jul/2020 – Set/2020",
        sergipetecDescription: "Modernização de sistemas da Secretaria de Estado da Fazenda de Sergipe (SEFAZ-SE).",
        sergipetec1: "Recriei funcionalidades de um sistema legado em .NET numa nova arquitetura com Java e Spring Boot, desenvolvendo serviços e endpoints REST.",
    },
}

const avatarMessages = {
    en: [
        "Hi! 👋",
        "1st place at the IFS Hackathon 🏆",
        "Master's student in Computer Science at UFS 🎓",
        "I took a kids' educational game from the web to Android 📱",
        "I built a flow that handles ~R$ 2 million a week 💸",
        "That's all for now. Let's talk on LinkedIn? 😉",
    ],
    pt: [
        "Oi! 👋",
        "1º lugar no Hackathon do IFS 🏆",
        "Mestrando em Ciência da Computação na UFS 🎓",
        "Levei um jogo educacional infantil da web pro Android 📱",
        "Construí um fluxo que movimenta ~R$ 2 milhões por semana 💸",
        "Por enquanto é isso. Bora conversar no LinkedIn? 😉",
    ],
}

const homeSection = document.querySelector(".home-section")
const buttonLanguage = document.querySelector("#buttonLanguage")
const flagLanguage = document.querySelector("#flagLanguage")
const speechBubble = document.querySelector("#speechBubble")
const textElements = document.querySelectorAll("[data-i18n]")
const ariaLabelElements = document.querySelectorAll("[data-i18n-aria-label]")

textElements.forEach((element) => (element.dataset.en = element.textContent))
ariaLabelElements.forEach((element) => (element.dataset.enAriaLabel = element.ariaLabel))

function setLanguage(language) {
    const texts = translations[language] || {}

    textElements.forEach((element) => {
        element.textContent = texts[element.dataset.i18n] || element.dataset.en
    })
    ariaLabelElements.forEach((element) => {
        element.ariaLabel = texts[element.dataset.i18nAriaLabel] || element.dataset.enAriaLabel
    })

    document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
    if (language === "pt") {
        flagLanguage.src = "src/image/Flag_of_the_United_States.svg.png"
        flagLanguage.alt = "Switch to English"
    } else {
        flagLanguage.src = "src/image/Flag_of_Brazil.svg.png"
        flagLanguage.alt = "Mudar para português"
    }

    speechBubble.hidden = true

    try {
        localStorage.setItem("language", language)
    } catch {}
}

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem("language")
        if (savedLanguage) return savedLanguage
    } catch {}

    return navigator.language.startsWith("pt") ? "pt" : "en"
}

let currentLanguage = getInitialLanguage()
setLanguage(currentLanguage)

let isSwitchingLanguage = false

const SWING_START_DELAY = 250

const swingCard = document.querySelector(".container-info")
const swingTextElements = swingCard.querySelectorAll("h1, .subtitle, .container-info > p")
const swingObjects = swingCard.querySelectorAll(".avatar, .container-button .button")
let stopSwingTimeout

function hangOnString(element, lightness) {
    const bounceDelay = SWING_START_DELAY + Math.random() * 150
    const bounceDuration = 1100 + Math.random() * 900
    element.style.setProperty("--swing-delay", `${bounceDelay}ms`)
    element.style.setProperty("--swing-duration", `${bounceDuration}ms`)
    element.style.setProperty("--swing-strength", (4 + Math.random() * 9) * lightness)

    const swayDelay = SWING_START_DELAY + Math.random() * 250
    const swayDuration = 1300 + Math.random() * 1000
    const swaySide = Math.random() < 0.5 ? -1 : 1
    element.style.setProperty("--sway-delay", `${swayDelay}ms`)
    element.style.setProperty("--sway-duration", `${swayDuration}ms`)
    element.style.setProperty("--sway-angle", swaySide * (3 + Math.random() * 5) * lightness)

    return Math.max(bounceDelay + bounceDuration, swayDelay + swayDuration)
}

function splitIntoLetters(element) {
    let lastEnd = 0
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
    const textNodes = []
    while (walker.nextNode()) textNodes.push(walker.currentNode)

    textNodes.forEach((textNode) => {
        const fragment = document.createDocumentFragment()
        textNode.textContent.split(/(\s+)/).forEach((part) => {
            if (!part.trim()) {
                fragment.append(part)
                return
            }

            const word = document.createElement("span")
            word.className = "swing-word"
            for (const character of part) {
                const letter = document.createElement("span")
                letter.className = "swing-letter"
                letter.textContent = character
                lastEnd = Math.max(lastEnd, hangOnString(letter, 1))
                word.append(letter)
            }
            fragment.append(word)
        })
        textNode.replaceWith(fragment)
    })

    return lastEnd
}

function stopSwing() {
    clearTimeout(stopSwingTimeout)
    swingCard.classList.remove("is-swinging")
    swingCard.querySelectorAll(".swing-word").forEach((word) => word.replaceWith(word.textContent))
    swingTextElements.forEach((element) => element.normalize())
}

function startSwing(direction) {
    stopSwing()

    let lastEnd = 0
    swingTextElements.forEach((element) => {
        lastEnd = Math.max(lastEnd, splitIntoLetters(element))
    })
    swingObjects.forEach((object) => {
        lastEnd = Math.max(lastEnd, hangOnString(object, 0.4))
    })

    swingCard.style.setProperty("--lift-delay", `${SWING_START_DELAY}ms`)
    swingCard.style.setProperty("--swing-direction", direction)
    swingCard.classList.add("is-swinging")
    stopSwingTimeout = setTimeout(stopSwing, lastEnd + 400)
}

buttonLanguage.addEventListener("click", async () => {
    if (isSwitchingLanguage) return

    stopSwing()
    currentLanguage = currentLanguage === "pt" ? "en" : "pt"

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setLanguage(currentLanguage)
        return
    }

    isSwitchingLanguage = true
    document.documentElement.classList.add("is-switching-language")

    const direction = currentLanguage === "pt" ? -1 : 1

    const slideOut = homeSection.animate(
        [{ transform: "translateY(0)" }, { transform: `translateY(${direction * 100}vh)` }],
        { duration: 400, easing: "ease-in", fill: "forwards" }
    )
    await slideOut.finished

    setLanguage(currentLanguage)
    startSwing(direction)

    const slideIn = homeSection.animate(
        [{ transform: `translateY(${-direction * 100}vh)` }, { transform: "translateY(0)" }],
        { duration: 400, easing: "ease-out" }
    )
    slideOut.cancel()
    await slideIn.finished

    document.documentElement.classList.remove("is-switching-language")
    isSwitchingLanguage = false
})

async function playEntrance() {
    if (!document.documentElement.classList.contains("is-entering")) return

    isSwitchingLanguage = true
    const entrance = homeSection.animate(
        [{ transform: "translateY(-100vh)" }, { transform: "translateY(0)" }],
        { duration: 400, easing: "ease-out" }
    )
    startSwing(1)

    await entrance.ready
    document.documentElement.classList.remove("is-entering")
    await entrance.finished
    isSwitchingLanguage = false
}
playEntrance()

const ZOOM_DURATION = 450
const ZOOM_TRAIL_SIZE = 3
const ZOOM_TRAIL_DELAY = 45

function prefersReducedMotion() {
    return matchMedia("(prefers-reduced-motion: reduce)").matches
}

function playWindowZoom(fromRect, toRect) {
    const toKeyframe = (rect) => ({
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
    })
    let leadAnimation

    for (let index = 0; index < ZOOM_TRAIL_SIZE; index++) {
        const opacity = 1 - index * 0.3
        const outline = document.createElement("div")
        outline.className = "zoom-outline"
        document.body.append(outline)

        const animation = outline.animate(
            [
                { ...toKeyframe(fromRect), opacity: 0 },
                { opacity, offset: 0.15 },
                { opacity, offset: 0.8 },
                { ...toKeyframe(toRect), opacity: 0 },
            ],
            {
                duration: ZOOM_DURATION,
                delay: index * ZOOM_TRAIL_DELAY,
                easing: "cubic-bezier(.65, 0, .35, 1)",
                fill: "backwards",
            }
        )
        animation.finished.then(() => outline.remove())

        if (index === 0) leadAnimation = animation
    }

    return leadAnimation.finished
}

function getOpenerButton(dialog) {
    return document.querySelector(`[data-open="${dialog.id}"]`)
}

document.querySelectorAll("[data-open]").forEach((button) => {
    const dialog = document.querySelector(`#${button.dataset.open}`)

    button.addEventListener("click", async () => {
        if (prefersReducedMotion()) {
            dialog.showModal()
            return
        }

        dialog.classList.add("is-zooming")
        dialog.showModal()
        await playWindowZoom(button.getBoundingClientRect(), dialog.getBoundingClientRect())
        dialog.classList.remove("is-zooming")
    })
})

async function closeDialog(dialog) {
    if (dialog.classList.contains("is-closing")) return

    if (prefersReducedMotion()) {
        dialog.close()
        return
    }

    const dialogRect = dialog.getBoundingClientRect()
    const buttonRect = getOpenerButton(dialog).getBoundingClientRect()
    const translateX = buttonRect.left + buttonRect.width / 2 - (dialogRect.left + dialogRect.width / 2)
    const translateY = buttonRect.top + buttonRect.height / 2 - (dialogRect.top + dialogRect.height / 2)
    const scaleX = buttonRect.width / dialogRect.width
    const scaleY = buttonRect.height / dialogRect.height

    dialog.classList.add("is-closing")
    await dialog.animate(
        [
            { transform: "none", opacity: 1 },
            { opacity: 1, offset: 0.4 },
            { transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`, opacity: 0 },
        ],
        { duration: ZOOM_DURATION, easing: "cubic-bezier(.65, 0, .35, 1)" }
    ).finished

    dialog.classList.remove("is-closing")
    dialog.close()
}

document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.querySelectorAll(".container-projects > a, .container-experience > div").forEach((item, index) => {
        item.style.setProperty("--index", index)
    })

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog(dialog)
    })

    dialog.querySelector("[data-close]").addEventListener("click", () => closeDialog(dialog))

    dialog.addEventListener("cancel", (event) => {
        event.preventDefault()
        closeDialog(dialog)
    })
})

const AVATAR_GRID_SIZE = 22
const avatar = document.querySelector("#avatar")

const avatarEyes = [
    { element: document.querySelector("#avatarEyeLeft"), column: 7, row: 10 },
    { element: document.querySelector("#avatarEyeRight"), column: 14, row: 10 },
]

function lookAt(pointerX, pointerY) {
    const avatarRect = avatar.getBoundingClientRect()
    const pixelSize = avatarRect.width / AVATAR_GRID_SIZE

    avatarEyes.forEach(({ element, column, row }) => {
        const distanceX = pointerX - (avatarRect.left + (column + 0.5) * pixelSize)
        const distanceY = pointerY - (avatarRect.top + (row + 0.5) * pixelSize)
        const distance = Math.hypot(distanceX, distanceY) || 1
        const strength = Math.min(1, distance / 150)

        element.style.setProperty("--x", column + Math.round((distanceX / distance) * 2 * strength))
        element.style.setProperty("--y", row + Math.round((distanceY / distance) * strength))
    })
}

let lookAtFrame
window.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(lookAtFrame)
    lookAtFrame = requestAnimationFrame(() => lookAt(event.clientX, event.clientY))
})

function scheduleBlink() {
    setTimeout(() => {
        avatar.classList.add("is-blinking")
        setTimeout(() => {
            avatar.classList.remove("is-blinking")
            scheduleBlink()
        }, 150)
    }, 3000 + Math.random() * 3000)
}
scheduleBlink()

let avatarMessageIndex = 0
let hideSpeechBubbleTimeout

avatar.addEventListener("click", () => {
    const messages = avatarMessages[currentLanguage] || avatarMessages.en
    speechBubble.textContent = messages[avatarMessageIndex]
    avatarMessageIndex = (avatarMessageIndex + 1) % messages.length

    speechBubble.hidden = true
    void speechBubble.offsetWidth
    speechBubble.hidden = false

    avatar.classList.remove("is-hopping")
    void avatar.offsetWidth
    avatar.classList.add("is-hopping")

    clearTimeout(hideSpeechBubbleTimeout)
    hideSpeechBubbleTimeout = setTimeout(() => (speechBubble.hidden = true), 4000)
})

avatar.addEventListener("animationend", () => avatar.classList.remove("is-hopping"))

function printConsoleGreeting() {
    const message = currentLanguage === "pt"
        ? "Curioso com o código? Bora conversar → https://www.linkedin.com/in/luccas-ribeiro-cruz/"
        : "Curious about the code? Let's talk → https://www.linkedin.com/in/luccas-ribeiro-cruz/"
    const image = new Image()

    image.addEventListener("load", () => {
        try {
            const canvas = document.createElement("canvas")
            canvas.width = image.naturalWidth
            canvas.height = image.naturalHeight
            const context = canvas.getContext("2d")
            context.drawImage(image, 0, 0)
            const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data

            let pixelArt = ""
            const styles = []
            for (let row = 0; row < AVATAR_GRID_SIZE; row++) {
                for (let column = 0; column < AVATAR_GRID_SIZE; column++) {
                    const x = Math.floor(((column + 0.5) * canvas.width) / AVATAR_GRID_SIZE)
                    const y = Math.floor(((row + 0.5) * canvas.height) / AVATAR_GRID_SIZE)
                    const index = (y * canvas.width + x) * 4
                    pixelArt += "%c  "
                    styles.push(`background: rgb(${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]}); line-height: 1`)
                }
                pixelArt += "\n"
            }
            console.log(pixelArt, ...styles)
        } catch {
        }

        console.log(`%c${message}`, "font: bold 14px monospace")
    })

    image.src = "src/image/pixelArtMe.png"
}
printConsoleGreeting()

const BALL_SPRITE_SIZE = 24
const BALL_SPEED = 220 

const ballCanvas = document.querySelector("#backgroundBall")
const ballContext = ballCanvas.getContext("2d")
const ballSprite = document.createElement("canvas")
ballSprite.width = ballSprite.height = BALL_SPRITE_SIZE
const ballSpriteContext = ballSprite.getContext("2d")
const ballSpriteImage = ballSpriteContext.createImageData(BALL_SPRITE_SIZE, BALL_SPRITE_SIZE)

const ballObstacles = [
    { element: document.querySelector(".container-info"), cornerRadius: 16 },
    { element: flagLanguage, cornerRadius: 0 },
]

const BALL_LIMIT = 50
const balls = []
let ballSize = 48

function getBallRadius() {
    return ballSize * 0.47
}

function resizeBallCanvas() {
    const ratio = window.devicePixelRatio || 1
    ballCanvas.width = Math.round(ballCanvas.clientWidth * ratio)
    ballCanvas.height = Math.round(ballCanvas.clientHeight * ratio)
    ballContext.setTransform(ratio, 0, 0, ratio, 0, 0)
    ballContext.imageSmoothingEnabled = false
    ballSize = ballCanvas.clientWidth < 600 ? 36 : 48
}

const BALL_COLORS = {
    outline: [17, 17, 17],
    white: [255, 255, 255],
    shadow: [200, 200, 200],
    patch: [17, 17, 17],
    seam: [150, 150, 150],
    leather: [139, 69, 19],
    leatherLight: [176, 98, 44],
    leatherDark: [98, 45, 12],
    leatherOutline: [52, 24, 6],
}

function isInsideRegularPolygon(x, y, centerX, centerY, radius, sides, rotation) {
    const sector = (Math.PI * 2) / sides
    const angle = Math.atan2(y - centerY, x - centerX) - rotation
    const angleInSector = ((angle % sector) + sector) % sector - sector / 2
    return Math.hypot(x - centerX, y - centerY) * Math.cos(angleInSector) <= radius * Math.cos(Math.PI / sides)
}

function distanceToSegment(x, y, startX, startY, endX, endY) {
    const lengthSquared = (endX - startX) ** 2 + (endY - startY) ** 2
    const progress = Math.max(0, Math.min(1, ((x - startX) * (endX - startX) + (y - startY) * (endY - startY)) / lengthSquared))
    return Math.hypot(x - (startX + progress * (endX - startX)), y - (startY + progress * (endY - startY)))
}

function getSoccerBallPixel(x, y, u, v) {
    const radius = BALL_SPRITE_SIZE / 2 - 0.5
    const distance = Math.hypot(x, y)

    if (distance > radius) return null
    if (distance > radius - 1.2) return BALL_COLORS.outline

    const patchRadius = radius * 0.3
    if (isInsideRegularPolygon(u, v, 0, 0, patchRadius, 5, -Math.PI / 2)) return BALL_COLORS.patch
    for (let patch = 0; patch < 5; patch++) {
        const angle = Math.PI / 2 + (patch * Math.PI * 2) / 5
        const patchX = Math.cos(angle) * radius * 0.88
        const patchY = Math.sin(angle) * radius * 0.88
        if (isInsideRegularPolygon(u, v, patchX, patchY, patchRadius, 5, angle)) return BALL_COLORS.patch

        const cornerAngle = -Math.PI / 2 + (patch * Math.PI * 2) / 5
        const cornerX = Math.cos(cornerAngle) * patchRadius
        const cornerY = Math.sin(cornerAngle) * patchRadius
        const seamEndX = Math.cos(cornerAngle) * radius * 0.62
        const seamEndY = Math.sin(cornerAngle) * radius * 0.62
        if (distanceToSegment(u, v, cornerX, cornerY, seamEndX, seamEndY) < 0.5) return BALL_COLORS.seam
    }

    if (Math.hypot(x + radius * 0.3, y + radius * 0.3) > radius * 1.05) return BALL_COLORS.shadow
    return BALL_COLORS.white
}

function getAmericanFootballPixel(x, y, u, v) {
    const radiusX = BALL_SPRITE_SIZE / 2 - 0.5
    const radiusY = radiusX * 0.6
    const ellipse = (u / radiusX) ** 2 + (v / radiusY) ** 2

    if (ellipse > 1) return null
    if (ellipse > ((radiusY - 1.2) / radiusY) ** 2) return BALL_COLORS.leatherOutline

    const tipDistance = Math.abs(u) / radiusX
    if (tipDistance > 0.6 && tipDistance < 0.7) return BALL_COLORS.white

    if (Math.abs(u) < radiusX * 0.32 && Math.abs(v + 0.5) < 0.6) return BALL_COLORS.white
    for (const stitch of [-0.22, 0, 0.22]) {
        if (Math.abs(u - stitch * radiusX) < 0.6 && v > -2.5 && v < 1.5) return BALL_COLORS.white
    }

    const light = (x + y) / (radiusX * 2)
    if (light < -0.25) return BALL_COLORS.leatherLight
    if (light > 0.2) return BALL_COLORS.leatherDark
    return BALL_COLORS.leather
}

function drawBall(ball) {
    const getPixel = currentLanguage === "pt" ? getSoccerBallPixel : getAmericanFootballPixel
    const cos = Math.cos(ball.angle)
    const sin = Math.sin(ball.angle)
    const pixels = ballSpriteImage.data

    for (let row = 0; row < BALL_SPRITE_SIZE; row++) {
        for (let column = 0; column < BALL_SPRITE_SIZE; column++) {
            const x = column + 0.5 - BALL_SPRITE_SIZE / 2
            const y = row + 0.5 - BALL_SPRITE_SIZE / 2
            const color = getPixel(x, y, x * cos + y * sin, y * cos - x * sin)
            const index = (row * BALL_SPRITE_SIZE + column) * 4

            if (color) {
                pixels[index] = color[0]
                pixels[index + 1] = color[1]
                pixels[index + 2] = color[2]
            }
            pixels[index + 3] = color ? 255 : 0
        }
    }
    ballSpriteContext.putImageData(ballSpriteImage, 0, 0)
    ballContext.drawImage(ballSprite, ball.x - ballSize / 2, ball.y - ballSize / 2, ballSize, ballSize)
}

function bounceOnScreenEdges(ball) {
    const radius = getBallRadius()
    const width = ballCanvas.clientWidth
    const height = ballCanvas.clientHeight

    if (ball.x < radius) {
        ball.x = radius
        ball.velocityX = Math.abs(ball.velocityX)
    } else if (ball.x > width - radius) {
        ball.x = width - radius
        ball.velocityX = -Math.abs(ball.velocityX)
    }

    if (ball.y < radius) {
        ball.y = radius
        ball.velocityY = Math.abs(ball.velocityY)
    } else if (ball.y > height - radius) {
        ball.y = height - radius
        ball.velocityY = -Math.abs(ball.velocityY)
    }
}

function bounceOnRectangle(ball, rect, cornerRadius) {
    const radius = getBallRadius()
    const left = rect.left + cornerRadius
    const right = rect.right - cornerRadius
    const top = rect.top + cornerRadius
    const bottom = rect.bottom - cornerRadius

    const closestX = Math.min(Math.max(ball.x, left), right)
    const closestY = Math.min(Math.max(ball.y, top), bottom)
    let normalX = ball.x - closestX
    let normalY = ball.y - closestY
    const distance = Math.hypot(normalX, normalY)

    if (distance >= radius + cornerRadius) return

    if (distance > 0) {
        normalX /= distance
        normalY /= distance
        ball.x = closestX + normalX * (radius + cornerRadius)
        ball.y = closestY + normalY * (radius + cornerRadius)
    } else {
        const sides = [
            { distance: ball.x - rect.left, normalX: -1, normalY: 0 },
            { distance: rect.right - ball.x, normalX: 1, normalY: 0 },
            { distance: ball.y - rect.top, normalX: 0, normalY: -1 },
            { distance: rect.bottom - ball.y, normalX: 0, normalY: 1 },
        ]
        const closestSide = sides.reduce((closest, side) => (side.distance < closest.distance ? side : closest))
        normalX = closestSide.normalX
        normalY = closestSide.normalY
        ball.x += normalX * (closestSide.distance + radius)
        ball.y += normalY * (closestSide.distance + radius)
    }

    const dot = ball.velocityX * normalX + ball.velocityY * normalY
    if (dot < 0) {
        ball.velocityX -= 2 * dot * normalX
        ball.velocityY -= 2 * dot * normalY
    }
}

function updateBallAngle(ball, deltaTime) {
    if (currentLanguage === "pt") {
        ball.angle += (ball.velocityX / getBallRadius()) * 0.5 * deltaTime
        return
    }

    const targetAngle = Math.atan2(ball.velocityY, ball.velocityX)
    const difference = Math.atan2(Math.sin(targetAngle - ball.angle), Math.cos(targetAngle - ball.angle))
    ball.angle += difference * Math.min(1, deltaTime * 8)
}

function hasRoomAround(rect) {
    return rect.left >= ballSize || ballCanvas.clientWidth - rect.right >= ballSize
}

function isOverlapping(ball, rect, cornerRadius) {
    const closestX = Math.min(Math.max(ball.x, rect.left + cornerRadius), rect.right - cornerRadius)
    const closestY = Math.min(Math.max(ball.y, rect.top + cornerRadius), rect.bottom - cornerRadius)
    return Math.hypot(ball.x - closestX, ball.y - closestY) < getBallRadius() + cornerRadius - 0.5
}

function escapeIfTrapped(ball, obstacles) {
    const trappedIn = obstacles
        .filter(({ rect, cornerRadius }) => isOverlapping(ball, rect, cornerRadius))
        .sort((first, second) => first.rect.width - second.rect.width)[0]
    if (!trappedIn) return

    const { rect } = trappedIn
    const goesLeft = ball.x < (rect.left + rect.right) / 2
    ball.x = goesLeft ? rect.left - getBallRadius() : rect.right + getBallRadius()
    ball.velocityX = goesLeft ? -Math.abs(ball.velocityX) : Math.abs(ball.velocityX)
}

let lastBallTime

function updateBalls(time) {
    const deltaTime = Math.min((time - (lastBallTime ?? time)) / 1000, 1 / 30)
    lastBallTime = time

    const obstacles = isSwitchingLanguage
        ? []
        : ballObstacles
            .map(({ element, cornerRadius }) => ({ rect: element.getBoundingClientRect(), cornerRadius }))
            .filter(({ rect }) => hasRoomAround(rect))

    ballContext.clearRect(0, 0, ballCanvas.clientWidth, ballCanvas.clientHeight)

    balls.forEach((ball) => {
        ball.x += ball.velocityX * deltaTime
        ball.y += ball.velocityY * deltaTime
        obstacles.forEach(({ rect, cornerRadius }) => bounceOnRectangle(ball, rect, cornerRadius))
        escapeIfTrapped(ball, obstacles)
        bounceOnScreenEdges(ball)
        updateBallAngle(ball, deltaTime)
        drawBall(ball)
    })

    if (balls.length > 0) {
        requestAnimationFrame(updateBalls)
    } else {
        lastBallTime = undefined
    }
}

function removeAllBalls() {
    balls.length = 0
}

function addBall(x, y) {
    if (balls.length >= BALL_LIMIT) return

    const angle = (Math.PI / 6 + Math.random() * (Math.PI / 6)) + Math.floor(Math.random() * 4) * (Math.PI / 2)
    balls.push({
        x,
        y,
        velocityX: Math.cos(angle) * BALL_SPEED,
        velocityY: Math.sin(angle) * BALL_SPEED,
        angle,
    })

    if (balls.length === 1) requestAnimationFrame(updateBalls)
}

if (prefersReducedMotion()) {
    ballCanvas.hidden = true
} else {
    resizeBallCanvas()
    new ResizeObserver(resizeBallCanvas).observe(ballCanvas)
    matchMedia("(orientation: portrait)").addEventListener("change", removeAllBalls)

    document.addEventListener("click", (event) => {
        if (event.detail === 0 || event.target.closest("dialog")) return
        addBall(event.clientX, event.clientY)
    })
}

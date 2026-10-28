# Luccas Ribeiro Cruz — Portfolio

🇺🇸 **English** · 🇧🇷 [Português](README.pt-BR.md)

**🔗 Live: [luccas-porfolio.vercel.app](https://luccas-porfolio.vercel.app/)**

A minimalist, retro-styled portfolio with a pixel art version of me, built with plain HTML, CSS and JavaScript. No frameworks, no dependencies and no build step.

![Portfolio home page](docs/home.png)

## Features

- **Bilingual (English / Portuguese):** click the flag to switch languages. The page slides out and back in like an elevator. The first visit uses the browser's language, and your choice is remembered.
- **Experiences and Projects windows:** an outline zooms out of the clicked button into a window, like on old operating systems, and shrinks back into the button when it closes.
- **Accessible motion:** every animation is turned off for people who enable *reduced motion* on their system. The windows close with Esc, a click outside or the ✖ button.
- **Responsive:** works on desktop, tablet and phone.

![Projects window](docs/projects.png)

## Easter eggs

The page hides a few surprises. Try finding them on the [live site](https://luccas-porfolio.vercel.app/) before opening the spoiler.

<details>
<summary>🥚 Spoiler</summary>

<br>

- 🐴 The flag does a little horse hop every few seconds and waves when you hover over it.
- 👀 The pixel art's eyes follow your mouse, moving pixel by pixel inside the sunglasses.
- 😉 Every few seconds it blinks.
- 💬 Click the pixel art and it says something, with a new message on each click.
- 🧑‍💻 Open the DevTools console and the pixel art is drawn there, pixel by pixel.

![Speech bubble easter egg](docs/easter-egg.png)

</details>

## Tech stack

| | |
|---|---|
| **Markup** | HTML5 with the native `<dialog>` element |
| **Styles** | CSS3: Grid, Flexbox, keyframe animations, `prefers-reduced-motion` |
| **Scripts** | Vanilla JavaScript with the Web Animations API, plus a small translation system written from scratch |
| **Deploy** | [Vercel](https://vercel.com/) |

## Running locally

```bash
git clone https://github.com/luccascruuz/luccas-porfolio.git
cd luccas-porfolio
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

> Opening `index.html` directly also works. The only thing missing is the pixel art in the console, because browsers block reading image pixels on `file://` pages.

## Project structure

```
├── index.html          # Page content, written in English
├── docs/               # Screenshots used in this README
└── src/
    ├── css/style.css   # Styles and animations
    ├── js/index.js     # Translations, language switch, windows and easter eggs
    └── image/          # Pixel art, favicon and flags
```

### Adding or editing a translation

The text in `index.html` is in English. To translate an element, give it a `data-i18n` key and add the Portuguese text under the same key in the `translations.pt` object in `src/js/index.js`:

```html
<p data-i18n="greeting">Hello!</p>
```

```js
const translations = {
    pt: {
        greeting: "Olá!",
    },
}
```

## Contact

- 💼 [LinkedIn](https://www.linkedin.com/in/luccas-ribeiro-cruz/)
- 🐙 [GitHub](https://github.com/luccascruuz)

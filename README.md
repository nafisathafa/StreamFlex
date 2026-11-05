# StreamFlex

StreamFlex is a Netflix-inspired streaming website front end built with plain HTML, CSS and JavaScript. It has no frameworks and no build step. It was made as a practice project for layout, CSS transitions and DOM scripting.

## Features

- **Featured banners** with muted, looping background trailers and a WATCH button that opens the full trailer in a modal (close it with the × button, by clicking outside it, or with Esc)
- **Scrolling movie rows** (Top Picks, Bollywood, K-Drama, Horror, Anime and more). The arrow button scrolls each row and loops back to the start
- **Hover cards** that fade in each title's name, description and Watch button
- **Dark / light mode** toggle that restyles the whole page
- **Login page** with animated floating labels, linked from the navbar
- **Responsive layout** with a sticky navbar, a fixed sidebar and a multi-column footer
- **Data-driven rows**: all movies are listed in one array in `app.js`, so adding a title takes one line

## Built with

HTML5, CSS3 (Flexbox, transitions, media queries), vanilla JavaScript, Font Awesome and Google Fonts (Roboto, Sen)

## Project structure

```
streamflex/
├── index.html        # home page
├── style.css         # home page styles
├── app.js            # rows, arrows, theme toggle, trailer modal
├── register.html     # login page
├── register.css      # login page styles
└── (images and trailer videos)
```

## Run locally

1. Clone the repo: `git clone `https://github.com/nafisathafa/StreamFlex.git
2. Open `index.html` in your browser, or serve the folder with VS Code Live Server.

## Notes

This is a front-end demo only. The login form does not authenticate anyone and there is no backend. StreamFlex is a learning project and is not affiliated with Netflix. All posters, trailers and show titles belong to their respective owners.
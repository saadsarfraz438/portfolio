# Saad Sarfraz — Portfolio

A portfolio About my Software Engineering Background, designed around an engineering-blueprint aesthetic (grid backgrounds, crop marks, a title block on every page) to fit a Software Engineering background.

## Structure
I Follow the Follwoing Structure for portfolio and updating it.

```
portfolio/
├── index.html        Sheet 01 — Dashboard: hero, quick stats, sheet index, featured 
├── education.html    Sheet 02 — Education: degree info, coursework, skill bars, tech 
├── projects.html      Sheet 03 — Projects: all 5 projects with Code / Live Demo 
├── goals.html         Sheet 04 — Goals: career timeline (present → next → future vision)
├── contact.html        Sheet 05 — Contact: email, LinkedIn, GitHub, X, résumé — all as buttons
│── style.css      Shared design system (colors, type, components)
│~main.js         Mobile nav toggle, active-link highlighting, copy-to-clipboard
└── README.md
```
## Running it

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser.

```
Clone git repositry
cd portfolio
python3 -m http.server 8000
```

## Deploying

i will Push the `portfolio/` folder to GitHub Pages, Vercel, or Netlify as a static
site.
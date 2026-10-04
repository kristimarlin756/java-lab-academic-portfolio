# Java Lab Academic Portfolio

**Student:** P. Kristi Marlin  
**Roll No.:** 25EU02109  
**Branch:** AI & ML  
**Faculty:** Ramesh Sir  
**Academic Year:** 2025–29  
**Subject:** Java Lab

## About

A static academic portfolio that documents my Java Lab programs, experiments and outputs, week by week. All content comes from my Java Lab Word records (Weeks 1, 2, 3, 6, 7, 8, 10 and 11). Nothing is added beyond what those documents contain; where a document has no aim, result or source code for an item, the site leaves that part out.

This is a **static website built only with HTML, CSS and JavaScript**. There is no backend, no build step and no server-side code, so it works directly on GitHub Pages.

## Features

- Home dashboard with statistics calculated from the lab data
- Student profile, lab week cards and a program/experiment viewer
- Search (week numbers, experiment names, topics, class names) and filters
- Syntax-highlighted Java code with a **Copy Code** button
- Documented-content progress view (not a completion percentage)
- Dark / light mode (saved in `localStorage`), sticky navigation, mobile menu, back-to-top button
- Responsive and keyboard accessible

## Technologies

HTML5, CSS3, vanilla JavaScript (no frameworks, no external libraries, no CDN).

## File structure

```text
index.html     Page structure
style.css      Styles (light and dark themes)
script.js      Lab data (labData) + site logic
assets/        Screenshots taken from the lab documents (JPEG)
README.md      This file
```

All paths are relative, so the site works from any folder or GitHub Pages URL.

## Updating the content

Open `script.js`. The `labData` array at the top holds every week and program. Add or edit an entry there and the site updates automatically.

## Run locally

Open `index.html` in a browser. Optionally, from the project folder run `python -m http.server 8000` and visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Push these files to the `main` branch of the repository, with `index.html` at the repository root.
2. On GitHub open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**, then click **Save**.
5. Wait one to two minutes. The site will be live at `https://<username>.github.io/<repository-name>/`.

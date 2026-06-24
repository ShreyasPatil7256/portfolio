# Rudra Mankar — Portfolio

A full stack web developer portfolio built with React + Vite, in a white & purple theme.

## Structure

```
src/
  components/
    Navbar.jsx / Navbar.css        -> name + left-side dropdown menu, links to all sections
    Hero.jsx / Hero.css
    About.jsx / About.css
    Work.jsx / Work.css
    Achievements.jsx / Achievements.css
    Certifications.jsx / Certifications.css
    Contact.jsx / Contact.css
    Footer.jsx / Footer.css        -> footer with link tags to sections + socials
  App.jsx / App.css
  index.css                        -> global design tokens, shared purple .btn styles
  main.jsx
index.html
```

Every component has its own `.jsx` file and its own external `.css` file (no inline styles,
no CSS-in-JS) — styling is done purely through plain CSS files imported per component.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To produce a production build:

```bash
npm run build
npm run preview
```

## Notes

- The navbar's dropdown button sits on the left, next to "Rudra Mankar", and opens a menu
  with About, Work, Achievements, Certifications and Contact — all real `<a>` link tags
  pointing to in-page section ids (`#about`, `#work`, etc).
- The footer repeats the same navigation plus social links, also as `<a>` tags.
- Update the placeholder email/social links in `Contact.jsx` and `Footer.jsx` with your own.

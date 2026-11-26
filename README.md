# Runok (practice rebuild)

A React rebuild of **Runok**, a web-agency website design sold on ThemeForest (item 52213654). I built it to practise turning a finished design into React components: layout, responsive styles, routing and scroll animations.

**This is not a real agency and not my design.** The layout, copy, photos and contact details come from the theme (the address, phone number and email are the theme's placeholders), and some text is still placeholder lorem ipsum. The code is mine.

## Pages

Home, About, Services, Service Details, Portfolio and Contact, plus a 404 page. All of them work at phone width.

## Built with

- React 18 and React Router 7
- Vite 6
- Sass for component styles
- Framer Motion for scroll-in animations
- react-icons

## Run it

```bash
npm ci
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run lint
```

## What I would do next

- Replace the theme's photos and placeholder text with my own content.
- Make the contact form send messages (it has no backend yet).
- Switch the Sass `@import`s and global functions to `@use`, which Dart Sass 3 requires.

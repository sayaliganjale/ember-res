# EMBER — Fire Kitchen, London

A premium, cinematic restaurant homepage built with React 18 + Vite. The name, chef, address, prices and reviews are placeholder content.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure

- `src/data/content.js` — all copy, prices, hours and image slots
- `src/components/` — one component per section (Navbar, Hero, Philosophy, Menu, Story, Experience, Gallery, Testimonials, Reservation, Visit, Footer)
- `src/components/ui.jsx` — shared pieces: Btn, Rv (scroll reveal), Split (masked headings), Art (image slot), Counter
- `src/hooks/useSiteFx.js` — reveal-on-scroll, progress bar, parallax
- `src/index.css` — design tokens and all styles

## Adding real photography

Every image is a gradient stand-in. Set the `img` field of any dish, experience or gallery item in `src/data/content.js` to a photo URL (or a file in `/public`) and it replaces the gradient.

## Notes

- Respects `prefers-reduced-motion`.
- The reservation form validates on the client and simulates a request; connect it to your backend in `src/components/Reservation.jsx` (`submit`).

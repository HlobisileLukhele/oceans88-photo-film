# Oceans88 Labs · Photo & Film portfolio

Static site with no build step: plain HTML, CSS and JavaScript.

## Pages
- `index.html`: landing page (black with orange and grey gradients, crew hero video, reels)
- `portfolio.html`: all projects, with category and Photo/Video filters (`portfolio.html#events` opens a category)
- `services.html`: What we do
- `process.html`: How we work
- `packages.html`: Packages hub, with one page per category: `packages-portraits.html`, `packages-weddings.html`, `packages-events.html`, `packages-commercial.html`, `packages-video.html`, `packages-social.html`
- `packages-addons.html`: Add-ons and extras
- `terms.html`: Booking terms
- `about.html`: About
- `contact.html`: Contact form (hands the enquiry off to WhatsApp or email)

## Shared files
- `styles.css`: all styles. Colour and font tokens are at the top. The landing page's dark theme is under `body.home`; the visitor's light/dark choice is under `html[data-theme="dark"]`.
- `site.js`: header, footer, Packages menu, light/dark toggle, project cards, reels, lightbox, filters, package and terms pages
- `data.js`: categories, projects and reels, plus `PRICING`, `ADDONS` and `TERMS`. Edit this file to change portfolio content or prices; the package pages and menu update from it.
- `media/work`: Oceans88 Labs' own photos, `media/vid`: video, `media/img`: stock placeholder photos (Unsplash), `media/logo.png`: logo

## Run it locally
Some browsers block video and script loading from `file://`, so serve the folder:

    python -m http.server 8080

Then open http://localhost:8080

## Placeholder content
Lifestyle projects, four of the reels and the testimonials are stock placeholders.
Contact details (WhatsApp, email, address, hours) come from oceans88labs.co.za.

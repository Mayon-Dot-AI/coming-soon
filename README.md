Mayon.ai — Coming Soon Page
===========================

Quick-start
-----------

1. Open `index.html` in any browser.
2. Customize copy in `index.html` and colors in `assets/css/styles.css`.
3. Replace the logo at `assets/img/mayon_ai_logo_transparent_cropped.png` if needed.

Features
--------

- Responsive layout centered on the mayon.ai logo
- Dark theme styled to match the brand
- Email "Notify me" form that opens your mail client
- Accessibility-friendly labels and live status messages

Deployment
----------

This is a static site—host anywhere (GitHub Pages, Netlify, Vercel, S3, etc.).

GitHub Pages quick steps:

1. Commit and push to the `main` branch.
2. Add a `.nojekyll` file (already present) so assets load as-is.
3. In repo settings, enable Pages for the `main` branch root.

Customization
-------------

- Update the tagline in `index.html` inside the element with class `tagline`.
- Change accent color by editing `--accent` in `assets/css/styles.css`.
- If you prefer a hosted form backend, replace the form `action` with a service endpoint and remove the `mailto:`.

License
-------

MIT


# CHOY DELIVERY

A mobile-first food delivery web app prototype for the customer, rider, store, and admin dashboards.

## Features included
- Customer dashboard with category buttons, store menu, cart, checkout modal, map view, Ask Choy chat, and games
- Store dashboard with menu board and availability toggles
- Rider dashboard with order actions and safety checks
- Admin dashboard with analytics and schedule panel
- JIEZ SPIN reward prototype and ticket logic

## Run locally
1. Open the repository root folder.
2. Double-click `index.html` in a browser, or serve the folder locally with:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment
To publish this static prototype, enable Pages in the repository settings:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

Then it should be available at `https://choyjiez-glitch.github.io/choy-delivery/` after Pages finishes building.

This prototype uses sample data. Real customer accounts, live maps, GCash payments, shared order updates, and secure admin/store/rider controls require a backend and provider configuration.

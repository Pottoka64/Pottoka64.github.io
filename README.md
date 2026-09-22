# OCHE

Application web française de **score de fléchettes pointe acier** (501, cricket, formats club, tournois, codes salon).

## Origine de ce dépôt

Ce projet a été **récupéré depuis le déploiement live** [oche180.grok.me](https://oche180.grok.me), construit avec **Grok Build Mode**. L’export / l’édition Build Mode étant cassés côté utilisateur, le HTML, le CSS et les bundles JS publiés ont été téléchargés et reformattés ici pour permettre une reprise locale (puis un push GitHub éventuel vers `Pottoka64/oche`).

Ce n’est **pas** le code source TypeScript/React d’origine : ce sont les **artefacts de build** (Vite / TanStack Start), pretty-printés. Voir `NOTES.md` pour localiser les libellés anglais à franciser.

## Stack détectée

- **React** (JSX runtime)
- **TanStack Start / TanStack Router** (SSR hydraté + `createServerFn` → `/_serverFn/<hash>`)
- **Zustand** (store persistant `localStorage`, clé `oche-steel-tip`)
- **Vite** (chunks hashés sous `assets/`)
- UI : Tailwind-like + polices Google (Barlow / Barlow Condensed / IBM Plex Mono)

## Lancer en local

```bash
cd oche
python3 serve.py
# → http://127.0.0.1:8080/
```

Ou, sans fallback SPA (seule `/` est fiable) :

```bash
python3 -m http.server 8080
```

Le script `serve.py` renvoie `index.html` pour les routes client (`/jouer`, `/tournois`, `/salle/…`, etc.).

## Mode hors-ligne vs backend

| Fonction | Hors-ligne (statique) | Backend Grok requis |
|---|---|---|
| Matchs locaux, joueurs, scores | Oui (`localStorage`) | Non |
| Formats / règles / checkouts | Oui | Non |
| **Publier un salon** (code partage) | Non | Oui — POST `/_serverFn/…` |
| **Rejoindre** un code salon | Non | Oui |
| Sync multi-appareils / fermer le salon | Non | Oui |

Sans le backend hébergé sur grok.me, les matchs et tournois **locaux** fonctionnent ; le partage temps réel par code ne fonctionne pas.

## Structure

```
oche/
├── index.html          # shell SSR récupéré + hydratation client
├── favicon.svg
├── og.jpg / x-banner.jpg
├── assets/             # JS/CSS Vite (chunks de routes + vendor)
├── __grok/icon-180.png
├── serve.py            # serveur SPA local
├── NOTES.md            # carte des strings EN → FR
└── README.md
```

## Licence / crédits

Contenu UI et logique récupérés depuis le déploiement public OCHE. À traiter comme reprise de projet pour maintenance personnelle.

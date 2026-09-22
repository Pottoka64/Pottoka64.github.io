# NOTES — localisation FR & points d’entrée

Projet récupéré depuis `https://oche180.grok.me` (bundles Vite / TanStack Start pretty-printés).  
Les numéros de ligne ci-dessous correspondent à l’état **après** Prettier.

## Stack (rappel)

- React + TanStack Router/Start + Zustand + Vite
- Persistance locale : `localStorage` clé `oche-steel-tip` (`assets/store-QFDO1GxK.js`)
- Partage salon : Supabase RPCs via `assets/share-backend.js` (ex-TanStack `/_serverFn/<hash>` ; voir section Share backend)

## English UI strings → où changer

### Badge « Live » (accueil)

| String | Fichier | Ligne (approx.) | Suggestion FR |
|---|---|---|---|
| `Live` | `assets/routes-CBx5FAnF.js` | ~154 | `En live` / `Direct` (déjà `En direct` plus bas ~294) |
| aussi présent dans le HTML SSR | `index.html` | chercher `stamp-red">Live` | aligner avec le JS |

### Manches / sets (écran Jouer + match)

| String | Fichier | Ligne | Suggestion FR |
|---|---|---|---|
| `Manches (best of)` | `assets/jouer-CGEhcuTd.js` | ~116 | `Manches (au meilleur de)` |
| `Best of ${n}` | `assets/jouer-CGEhcuTd.js` | ~125 | `Au meilleur de ${n}` |
| `First to ${e} set(s)` | `assets/jouer-CGEhcuTd.js` | ~151 | `Premier à ${e} set(s)` |
| `First to ` (scoreboard) | `assets/match._matchId-Do_d-xK5.js` | ~92 | `Premier à ` |
| `sets` / `manches` (unité) | `assets/store-QFDO1GxK.js` | ~4355 | déjà partiel FR ; `sets` → `sets` OK ou `manches de sets` |

### Checkouts

| String | Fichier | Ligne | Suggestion FR |
|---|---|---|---|
| `Double out` (stamp) | `assets/checkouts-Ct96LySl.js` | ~96 | `Double out` (terme usuel) ou `Sortie double` |
| `Checkouts` | `assets/checkouts-Ct96LySl.js` | ~99 | `Checkouts` / `Sorties` |
| `Score` | `assets/checkouts-Ct96LySl.js` | ~125 | `Score` (OK) |

### Noms de formats (catalogue)

Fichier principal : **`assets/formats-M2QI3UJX.js`** (données `name` / `short` / `summary` / `rules`).

Exemples EN à franciser (garder le jargon club si voulu) :

| Lignes ~ | String actuelle | Idée FR |
|---|---|---|
| 5+ | `501 double out`, `301 double out`, … | `501 double out` (souvent laissé EN) ou `501 sortie double` |
| 33 | `501 master out` | `501 master out` / `501 sortie master` |
| 46 | `501 straight out` | `501 sortie libre` |
| 405 | `Count-up 21` | `Count-up 21` / `Montée 21` |
| 406 | `High score` | `Plus haut score` |
| 418 | `Count-up 9 (first 9)` | `Count-up 9 (premiers 9)` |

Libellés dynamiques (store) — **`assets/store-QFDO1GxK.js`** ~4295–4351 :

- `double in` / `double out` / `master in` / `master out` / `entrée libre` / `sortie libre`
- `Count-up ${e.darts} fléchettes` (~4327)
- `Halve-it`, `Bob’s 27`, `Bermuda Triangle`, `Baseball`, `Knockout`, `Killer`, `Scram`, `Football`, `Dragon`…

### Règles (glossaire EN mélangé)

**`assets/regles-CmQFYbOL.js`**

| Ligne ~ | String |
|---|---|
| 71 | `Double out : le dart de 0 doit être un double…` |
| 72 | `Master out : …` |
| 73 | `Straight out / open out : …` |
| 156 | `Checkout / finish : la sortie.` |

### Autres anglicismes volontaires (noms de jeux)

Dans `formats-M2QI3UJX.js` / store : Cricket cut-throat, Killer, Knockout, Shanghai, Scram, Halve-it, Bob’s 27, Bermuda Triangle, Baseball, Football, Mickey Mouse — à trancher cas par cas (souvent laissés en EN en salle).

## Join-code — gestion d’erreurs

Deux chemins UI, tous deux appellent `joinTournament` du store (→ `Go` / `share_get` via `share-backend.js`) :

### 1. Formulaire accueil / tournois — `assets/join-form-plRLSa1H.js`

| Condition | Message actuel (déjà FR) | Ligne |
|---|---|---|
| code `< 4` car. | `Il manque le code du salon.` | ~17 |
| `joinTournament` → `null` | `Ce salon n’existe pas, ou il a été fermé.` | ~23 |
| bouton busy | `Connexion…` / `J’y vais` | ~52 |
| placeholder | `ex. Q2XMVY` | ~40 |

### 2. Deep-link `/salle/:code` — `assets/salle._code-C9D-378V.js`

| Condition | Message | Ligne |
|---|---|---|
| join échoue | `Salon introuvable ou fermé. Vérifiez le code.` | ~effect |
| en cours | `Connexion au tableau…` | corps |

### 3. Logique store — `assets/store-QFDO1GxK.js`

- `joinTournament` (~après `publishTournament`) : `Go({ data: { code } })` → snapshot ou `null` (catch silencieux).
- Validation code salon : `Fo(e)` → regex `/^[A-HJ-NP-Z2-9]{6}$/` (pas de I/O/0/1).
- Host secret : `Po` (normalise) + `claimHost` → message UI dans `use-share-sync-BgXH6cta.js` : `Rôle refusé. Vérifie le code marqueur.`

Sans backend grok.me, **tout join échoue** → les messages « salon introuvable » s’affichent même pour un code valide publié ailleurs.

## API / server functions (historique grok.me)

**Remplacé** par Supabase RPCs — voir section « Share backend » ci-dessous. Anciens hashes TanStack (référence) :

| Alias build | Endpoint | Rôle |
|---|---|---|
| `Wo` | `/_serverFn/7f4e3f032fcf7c4cb14e52351ae7c4a3f17bfd1ed3d3cf4e8872c7f52e8eed97` | Publier tournoi → `{ code, version }` |
| `Go` | `/_serverFn/6165e10729ac21b04395fdeea6b426080f0acf4aa4f7ef1d397ca7c0423db2cc` | Rejoindre par code |
| `Ko` | `/_serverFn/88b15306dc3db8589cf15518d959a5303188288ea251a93164702332256a27d6` | Push / sync snapshot |
| `qo` | `/_serverFn/938ab3d952db33a97db700439ad33d2d365f95de73ae5b0527a968fa1dcab1fd` | (lié sync — voir store) |
| `Jo` | `/_serverFn/5c173591e37e1805780b1845cc207a49da81ea00cd889d3759427be643a71ace` | Fermer salon |
| `Yo` | `/_serverFn/b82024bf3f48eb4564d0dca47bd0b9087bcad434a1fa44dbf53ab3e6fc0ef54f` | Claim host (code marqueur) |

Probe live sans contexte Build Mode → **403 Forbidden**. Remplacés localement par `assets/share-backend.js` + `supabase/share_rooms.sql`.


## Share backend (Supabase) — 2026-09-22

Replaces grok.me `/_serverFn/*` for the six salon ops (`Wo`/`Go`/`Ko`/`qo`/`Jo`/`Yo`).

| File | Role |
|---|---|
| `assets/share-config.js` | `SHARE.supabaseUrl` + `SHARE.supabaseAnonKey` (empty until filled) + `isShareConfigured()` |
| `assets/share-backend.js` | Adapters `{ data }` → Supabase RPC (`share_publish`, `share_get`, …) |
| `supabase/share_rooms.sql` | Table + SECURITY DEFINER RPCs + RLS (deny direct table access) |
| `assets/store-QFDO1GxK.js` | Imports adapters; no longer POSTs those six hashes to `/_serverFn` |

**Wiring:** store is already `type=module`; it imports `./share-backend.js`. `index.html` modulepreloads `share-config.js` + `share-backend.js` before the store. `use-share-sync` unchanged (still imports `Go`/`qo` via store re-exports).

**Fill config:** edit `assets/share-config.js`:

```js
export const SHARE = {
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'eyJ…',  // anon public key
};
```

Then paste `supabase/share_rooms.sql` into the Supabase SQL editor. When URL/key are empty, publish/join fail gracefully (`null` / `{ ok:false }`) so local play still works.

**Contract:** see `SHARE_API.md`.

## Routes client découvertes

`/`, `/jouer`, `/tournois`, `/joueurs`, `/regles`, `/checkouts`, `/match/$matchId`, `/salle/$code`, `/tournoi/$tournoiId`, `/tournoi_/$tournoiId/finale` (chunk `tournoi_._tournoiId.finale-*.js`).

## Limites de cette recovery

1. Pas de sources `.tsx` / config Vite — seulement les bundles.
2. `index.html` contient un snapshot SSR de la home + script d’hydratation TanStack (`$tsr`) ; deep-links OK via `serve.py`.
3. Script `grok.com/grok-app-builder/extensions.js` retiré pour le local.
4. Manifest `__grok/manifest.webmanifest` était en **404** sur le live — non récupéré.
5. Pour un vrai fork maintenable : réécrire au-dessus de ces bundles, ou re-générer un app TanStack Start + réimplémenter les 6 server functions (DB salon).

## Done — homogénéisation UI FR (2026-09-22)

Pass UI-facing applied on bundled assets (string literals only):

| Old | New | Files |
|---|---|---|
| `Live` (stamp accueil) | `En direct` | `routes-CBx5FAnF.js`, `index.html` |
| `Manches (best of)` | `Manches (au meilleur des)` | `jouer-CGEhcuTd.js`, `tournois-XnE5crA0.js` |
| `Best of N` (options) | `Au meilleur des N` | idem |
| `First to …` | `Premier à …` | `jouer`, `tournois`, `match._matchId` |
| `Sets (0 = manches seules)` | `Sets (0 = manches uniquement)` | `jouer-CGEhcuTd.js` |
| stamp `Double out` / h1 `Checkouts` / th `Route` | `Sortie en double` / `Sorties` / `Trajectoire` | `checkouts-Ct96LySl.js` |
| `Table de checkouts` | `Table des sorties` | `regles-CmQFYbOL.js` |
| `Soft-tip exclu.` | `Fléchettes soft-tip exclues.` | `regles-CmQFYbOL.js` |
| `byes` / `Byes` (FR prose) | `byes (exemptions)` / `Byes (exemptions)` | `formats-M2QI3UJX.js`, `regles` |
| join / salle error copy | `Ce salon n’existe pas ou a été fermé. Vérifie le code et réessaie.` (input not cleared) | `join-form-plRLSa1H.js`, `salle._code-C9D-378V.js` |

**Left intentional EN:** format card names (`501 double out`, Cricket, Shanghai, Killer…); règles glossaire (`Best of 5 = first to 3…`, `double out` in body copy); code prop `route` / CSS `live-dot`.

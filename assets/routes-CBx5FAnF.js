import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { S as t, g as n, t as r, x as i } from "./store-QFDO1GxK.js";
import { t as a } from "./link-BA5v6P_F.js";
import { t as o } from "./types-UrLSRqj_.js";
import { a as s } from "./index-oche-v2.js";
import { t as c } from "./button-DVevz7Ul.js";
import { t as l } from "./join-form-plRLSa1H.js";
import { n as u, t as d } from "./formats-M2QI3UJX.js";
var f = s(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  p = e(),
  m = {
    innerBull: 0.038,
    outerBull: 0.094,
    tripleInner: 0.57,
    tripleOuter: 0.628,
    doubleInner: 0.948,
    doubleOuter: 1,
    numbers: 1.16,
    wire: 1.28,
  };
function h(e) {
  return (Math.round(e * 1e3) / 1e3).toFixed(3);
}
function g(e, t, n, r) {
  return [h(e + n * Math.cos(r)), h(t + n * Math.sin(r))];
}
function _(e, t, n, r, i, a) {
  let o = g(e, t, r, i),
    s = g(e, t, r, a),
    c = g(e, t, n, a),
    l = g(e, t, n, i),
    u = +(a - i > Math.PI),
    d = h(n),
    f = h(r);
  return [
    `M ${o[0]} ${o[1]}`,
    `A ${f} ${f} 0 ${u} 1 ${s[0]} ${s[1]}`,
    `L ${c[0]} ${c[1]}`,
    `A ${d} ${d} 0 ${u} 0 ${l[0]} ${l[1]}`,
    `Z`,
  ].join(` `);
}
function v({ className: e }) {
  let n = 36.5,
    r = o.map((e, t) => {
      let n = -Math.PI / 2 + (Math.PI / 10) * t;
      return {
        n: e,
        a0: n - Math.PI / 20,
        a1: n + Math.PI / 20,
        aMid: n,
        red: t % 2 == 0,
      };
    });
  return (0, p.jsxs)(`svg`, {
    viewBox: `0 0 100 100`,
    className: t(`mx-auto aspect-square w-full max-w-[420px] select-none`, e),
    role: `img`,
    "aria-label": `Cible de fléchettes`,
    children: [
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.wire * n),
        className: `fill-inset`,
      }),
      r.map((e) => {
        let t = e.red ? `var(--color-inset)` : `var(--color-board-cream)`,
          r = e.red ? `var(--color-board-red)` : `var(--color-board-green)`,
          i = g(50, 50, m.numbers * n, e.aMid);
        return (0, p.jsxs)(
          `g`,
          {
            children: [
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.outerBull * n, m.tripleInner * n, e.a0, e.a1),
                fill: t,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.tripleInner * n, m.tripleOuter * n, e.a0, e.a1),
                fill: r,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.tripleOuter * n, m.doubleInner * n, e.a0, e.a1),
                fill: t,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.doubleInner * n, m.doubleOuter * n, e.a0, e.a1),
                fill: r,
              }),
              (0, p.jsx)(`text`, {
                x: i[0],
                y: i[1],
                textAnchor: `middle`,
                dominantBaseline: `middle`,
                className: `fill-fg font-display text-[4.2px] font-semibold tracking-wide`,
                pointerEvents: `none`,
                children: e.n,
              }),
            ],
          },
          e.n,
        );
      }),
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.outerBull * n),
        className: `fill-board-green`,
      }),
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.innerBull * n),
        className: `fill-board-red`,
      }),
    ],
  });
}
function y() {
  let e = r((e) => e.players),
    o = r((e) => e.matches),
    s = r((e) => e.tournaments),
    m = Object.fromEntries(e.map((e) => [e.id, e.name])),
    h = o.slice(0, 4),
    g = s.filter((e) => e.status === `running`).slice(0, 3),
    _ = s.filter((e) => e.status === `complete`).slice(0, 3);
  return (0, p.jsxs)(`main`, {
    className: `oche-home relative mx-auto max-w-6xl overflow-x-hidden px-4 pb-10 pt-8 sm:pt-12`,
    children: [
      (0, p.jsxs)(`div`, {
        className: `grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]`,
        children: [
          (0, p.jsxs)(`div`, {
            className: `relative`,
            children: [
              (0, p.jsx)(`div`, {
                className: `mb-5 flex justify-center lg:hidden`,
                children: (0, p.jsx)(v, { className: `w-32 max-w-none` }),
              }),
              (0, p.jsx)(`span`, {
                className: `pointer-events-none absolute -left-3 -top-10 hidden font-display text-[11rem] leading-none text-board-red/40 sm:block`,
                "aria-hidden": !0,
                children: `20`,
              }),
              (0, p.jsxs)(`div`, {
                className: `reveal relative flex flex-wrap items-center gap-3`,
                children: [
                  (0, p.jsx)(`span`, {
                    className: `stamp stamp-red`,
                    children: `En direct`,
                  }),
                  (0, p.jsx)(`span`, {
                    className: `stamp stamp-green`,
                    children: `Pointe acier`,
                  }),
                ],
              }),
              (0, p.jsx)(`h1`, {
                className: `reveal reveal-2 relative mt-3 max-w-xl font-display text-7xl font-semibold leading-[0.78] tracking-tight text-board-cream sm:text-8xl lg:text-9xl`,
                children: `OCHE`,
              }),
              (0, p.jsx)(`p`, {
                className: `reveal reveal-3 relative mt-5 max-w-lg text-lg text-muted`,
                children: `Marquez un 501, ouvrez un tableau, partagez le code. Toute la bande voit le même score — comme au club, sans le carnet graisseux.`,
              }),
              (0, p.jsxs)(`div`, {
                className: `oche-home__cta reveal reveal-4 relative mt-8 flex flex-wrap gap-3`,
                children: [
                  (0, p.jsx)(c, {
                    size: `lg`,
                    asChild: !0,
                    children: (0, p.jsxs)(a, {
                      to: `/jouer`,
                      children: [
                        `On joue`,
                        (0, p.jsx)(f, { className: `size-4` }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(c, {
                    size: `lg`,
                    variant: `secondary`,
                    asChild: !0,
                    children: (0, p.jsx)(a, {
                      to: `/tournois`,
                      children: `Ouvrir un tournoi`,
                    }),
                  }),
                ],
              }),
              (0, p.jsxs)(`div`, {
                className: `oche-home__join reveal reveal-4 relative mt-8 max-w-md p-4 surface-card card-cream oche-club-edge`,
                children: [
                  (0, p.jsx)(`p`, {
                    className: `stamp stamp-red`,
                    children: `T’as un code ?`,
                  }),
                  (0, p.jsx)(`p`, {
                    className: `mt-3 text-sm text-accent-fg/75`,
                    children: `Rejoins le tableau déjà lancé dans la salle.`,
                  }),
                  (0, p.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, p.jsx)(l, {}),
                  }),
                ],
              }),
            ],
          }),
          (0, p.jsx)(`div`, {
            className: `hidden lg:block`,
            children: (0, p.jsx)(`div`, {
              className: `rotate-2`,
              children: (0, p.jsx)(v, {}),
            }),
          }),
        ],
      }),
      (0, p.jsx)(`div`, {
        className: `oche-home__links mt-16 grid gap-5 sm:grid-cols-3`,
        children: [
          {
            to: `/regles`,
            kicker: `Le règlement`,
            title: `Oche, cork, bust`,
            body: `Les distances, le 501, le vocabulaire — tout ce qu’on se crie entre deux volées.`,
            tone: `red`,
          },
          {
            to: `/checkouts`,
            kicker: `Les sorties`,
            title: `De 170 au madhouse`,
            body: `Les routes propres en double out, les bogeys, le 9-darter du dimanche.`,
            tone: `green`,
          },
          {
            to: `/joueurs`,
            kicker: `La bande`,
            title: `${e.length} joueurs`,
            body: `Victoires, palmarès, surnoms de salle. Ajoutez qui passe ce soir.`,
            tone: `cream`,
          },
        ].map((e) =>
          (0, p.jsxs)(
            a,
            {
              to: e.to,
              className: t(
                `surface-card block p-5`,
                e.tone === `red` && `card-red`,
                e.tone === `green` && `card-green`,
                e.tone === `cream` && `card-cream`,
              ),
              children: [
                (0, p.jsx)(`p`, {
                  className: t(
                    `stamp`,
                    e.tone === `cream` ? `stamp-red` : `stamp-cream`,
                  ),
                  children: e.kicker,
                }),
                (0, p.jsx)(`p`, {
                  className: `mt-4 font-display text-3xl font-semibold leading-none`,
                  children: e.title,
                }),
                (0, p.jsx)(`p`, {
                  className: t(
                    `mt-3 text-sm`,
                    e.tone === `cream` ? `text-accent-fg/75` : `text-fg/85`,
                  ),
                  children: e.body,
                }),
              ],
            },
            e.to,
          ),
        ),
      }),
      g.length > 0 &&
        (0, p.jsxs)(`section`, {
          className: `oche-home__history mt-16`,
          children: [
            (0, p.jsxs)(`h2`, {
              className: `flex items-center gap-3 font-display text-3xl font-semibold text-board-cream`,
              children: [
                (0, p.jsx)(`span`, {
                  className: `live-dot`,
                  "aria-hidden": !0,
                }),
                `En direct`,
              ],
            }),
            (0, p.jsx)(`ul`, {
              className: `mt-4 grid gap-3`,
              children: g.map((e) =>
                (0, p.jsx)(
                  `li`,
                  {
                    children: (0, p.jsxs)(a, {
                      to: `/tournoi/$tournoiId`,
                      params: { tournoiId: e.id },
                      className: `surface-card card-green flex items-center justify-between px-4 py-3`,
                      children: [
                        (0, p.jsx)(`span`, {
                          className: `font-medium`,
                          children: e.name,
                        }),
                        (0, p.jsx)(`span`, {
                          className: `font-display text-lg tracking-[0.16em] text-board-cream`,
                          children: e.shareCode
                            ? e.shareCode
                            : `${e.playerIds.length} joueurs`,
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      _.length > 0 &&
        (0, p.jsxs)(`section`, {
          className: `oche-home__history mt-16`,
          children: [
            (0, p.jsx)(`h2`, {
              className: `font-display text-3xl font-semibold text-board-cream`,
              children: `Derniers podiums`,
            }),
            (0, p.jsx)(`ul`, {
              className: `mt-4 grid gap-3`,
              children: _.map((e) =>
                (0, p.jsx)(
                  `li`,
                  {
                    children: (0, p.jsxs)(a, {
                      to: `/tournoi/$tournoiId/finale`,
                      params: { tournoiId: e.id },
                      className: `surface-card card-red flex items-center justify-between px-4 py-3`,
                      children: [
                        (0, p.jsx)(`span`, {
                          className: `font-medium`,
                          children: e.name,
                        }),
                        (0, p.jsx)(`span`, {
                          className: `text-sm text-board-cream`,
                          children: e.winnerId
                            ? (m[e.winnerId] ?? `Champion`)
                            : `Podium`,
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      (0, p.jsxs)(`section`, {
        className: `oche-home__history mt-16`,
        children: [
          (0, p.jsxs)(`div`, {
            className: `flex items-baseline justify-between`,
            children: [
              (0, p.jsx)(`h2`, {
                className: `font-display text-3xl font-semibold text-board-cream`,
                children: `Derniers matchs`,
              }),
              (0, p.jsx)(a, {
                to: `/jouer`,
                className: `text-sm font-semibold uppercase tracking-[0.12em] text-board-red hover:text-fg`,
                children: `Saisir`,
              }),
            ],
          }),
          h.length === 0
            ? (0, p.jsx)(`p`, {
                className: `mt-4 text-muted`,
                children: `Personne n’a encore marqué. Un 501, deux joueurs — et la salle s’allume.`,
              })
            : (0, p.jsx)(`ul`, {
                className: `mt-4 divide-y-2 divide-line`,
                children: h.map((e) =>
                  (0, p.jsx)(
                    `li`,
                    {
                      children: (0, p.jsxs)(a, {
                        to: `/match/$matchId`,
                        params: { matchId: e.id },
                        className: `flex items-center justify-between py-3`,
                        children: [
                          (0, p.jsxs)(`div`, {
                            children: [
                              (0, p.jsx)(`p`, {
                                className: `font-medium`,
                                children: e.playerIds
                                  .map((e) => m[e] ?? `Joueur`)
                                  .join(`  ·  `),
                              }),
                              (0, p.jsx)(`p`, {
                                className: `text-sm text-muted`,
                                children: i(e.format),
                              }),
                            ],
                          }),
                          (0, p.jsx)(`span`, {
                            className: `font-display text-lg tabular-nums text-board-red`,
                            children:
                              e.status === `complete` ? n(e) : `À saisir`,
                          }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
        ],
      }),
      (0, p.jsxs)(`p`, {
        className: `mt-16 text-center font-display text-sm uppercase tracking-[0.22em] text-subtle`,
        children: [
          d.length,
          ` formats · `,
          u.length,
          ` tableaux · pointe acier`,
        ],
      }),
    ],
  });
}
export { y as component };

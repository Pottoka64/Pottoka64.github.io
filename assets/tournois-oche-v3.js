import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { S as r, f as i, p as a, s as o, t as s } from "./store-oche-v3.js";
import { t as c } from "./link-BA5v6P_F.js";
import { o as l } from "./index-oche-v3.js";
import { t as u } from "./button-oche-v3.js";
import { t as d } from "./join-form-oche-v3.js";
import { n as f, t as p } from "./formats-M2QI3UJX.js";
import { t as m } from "./format-picker-oche-v3.js";
var h = e(n()),
  g = t();
function _(e, t) {
  return e ? (t[e] ?? `Joueur`) : `À venir`;
}
function v({ fx: e, names: t }) {
  let n = !!(e.winnerId && !e.bye),
    i = !!(e.playerA && e.playerB && !e.winnerId && !e.bye),
    a = i
      ? {
          background: `#1f6b45`,
          border: `3px solid #f0d9a6`,
          boxShadow: `4px 4px 0 0 #f0d9a6`,
          color: `#f7f0e4`,
          opacity: 1,
          borderRadius: `12px`,
          padding: `12px 14px`,
          width: `100%`,
          textAlign: `left`,
        }
      : n
        ? {
            background: `#1a1614`,
            border: `2px solid #5a534c`,
            borderLeft: `5px solid #8a8178`,
            opacity: 0.55,
            color: `#9a9086`,
            borderRadius: `12px`,
            padding: `12px 14px`,
            width: `100%`,
            textAlign: `left`,
          }
        : {
            background: `#2a2438`,
            border: `3px dashed #e09a3a`,
            color: `#d8d0e8`,
            opacity: 1,
            borderRadius: `12px`,
            padding: `12px 14px`,
            width: `100%`,
            textAlign: `left`,
          },
    o = i
      ? {
          background: `#f0d9a6`,
          color: `#1a1614`,
          display: `inline-block`,
          marginTop: `8px`,
          padding: `2px 8px`,
          borderRadius: `999px`,
          fontSize: `11px`,
          fontWeight: 700,
          letterSpacing: `0.04em`,
          textTransform: `uppercase`,
        }
      : n
        ? {
            background: `#3a342e`,
            color: `#9a9086`,
            display: `inline-block`,
            marginTop: `8px`,
            padding: `2px 8px`,
            borderRadius: `999px`,
            fontSize: `11px`,
            fontWeight: 700,
            letterSpacing: `0.04em`,
            textTransform: `uppercase`,
          }
        : {
            background: `#e09a3a`,
            color: `#1a1614`,
            display: `inline-block`,
            marginTop: `8px`,
            padding: `2px 8px`,
            borderRadius: `999px`,
            fontSize: `11px`,
            fontWeight: 700,
            letterSpacing: `0.04em`,
            textTransform: `uppercase`,
          };
  return (0, g.jsxs)(`div`, {
    className: r(
      `oche-fx`,
      i && `oche-fx--play`,
      n && `oche-fx--done`,
      !i && !n && `oche-fx--wait`,
    ),
    style: a,
    children: [
      (0, g.jsxs)(`p`, {
        className: `truncate text-sm`,
        children: [_(e.playerA, t), e.bye && !e.playerB ? ` (exempt)` : ``],
      }),
      (0, g.jsx)(`p`, {
        className: r(
          `truncate text-sm`,
          e.playerB ? `text-muted` : `text-subtle`,
        ),
        children: _(e.playerB, t),
      }),
      i &&
        (0, g.jsx)(`p`, {
          className: `oche-fx__badge oche-fx__badge--play`,
          style: o,
          children: `À jouer`,
        }),
      n &&
        (0, g.jsx)(`p`, {
          className: `oche-fx__badge oche-fx__badge--done`,
          style: o,
          children: `Terminé`,
        }),
      !i &&
        !n &&
        (0, g.jsx)(`p`, {
          className: `oche-fx__badge oche-fx__badge--wait`,
          style: o,
          children: `En attente`,
        }),
    ],
  });
}
function y({ fixtures: e, names: t, type: n }) {
  let r = { type: n, fixtures: e, swissRounds: 4 },
    a = e.filter((e) => e.playerA || e.playerB || e.bye),
    o = new Map();
  for (let e of a.filter((e) => e.bracket === `group`)) {
    let t = e.groupIndex ?? 0;
    o.set(t, [...(o.get(t) ?? []), e]);
  }
  let s = a.filter((e) => e.bracket === `league`),
    c = (e) => {
      let t = a.filter((t) => t.bracket === e);
      return [...new Set(t.map((e) => e.round))]
        .sort((e, t) => e - t)
        .map((e) => ({ round: e, items: t.filter((t) => t.round === e) }));
    };
  return a.length === 0
    ? null
    : (0, g.jsxs)(`div`, {
        className: `space-y-6`,
        children: [
          o.size > 0 &&
            (0, g.jsx)(`div`, {
              className: `grid gap-3 sm:grid-cols-2`,
              children: [...o.entries()].map(([e, n]) =>
                (0, g.jsxs)(
                  `section`,
                  {
                    children: [
                      (0, g.jsxs)(`p`, {
                        className: `mb-2 text-xs uppercase tracking-[0.18em] text-subtle`,
                        children: [`Poule `, e + 1],
                      }),
                      (0, g.jsx)(`div`, {
                        className: `space-y-2`,
                        children: n.map((e) =>
                          (0, g.jsx)(v, { fx: e, names: t }, e.id),
                        ),
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          s.length > 0 &&
            (0, g.jsxs)(`section`, {
              children: [
                (0, g.jsx)(`p`, {
                  className: `mb-2 text-xs uppercase tracking-[0.18em] text-subtle`,
                  children: n === `swiss` ? `Ronde 1` : `Calendrier`,
                }),
                (0, g.jsx)(`div`, {
                  className: `space-y-2`,
                  children: s.map((e) =>
                    (0, g.jsx)(v, { fx: e, names: t }, e.id),
                  ),
                }),
              ],
            }),
          [`winners`, `losers`, `final`, `third`].map((e) => {
            let n = c(e);
            return n.length === 0
              ? null
              : (0, g.jsxs)(
                  `section`,
                  {
                    children: [
                      (0, g.jsx)(`p`, {
                        className: `mb-2 font-display text-lg font-semibold`,
                        children:
                          e === `winners`
                            ? `Tableau`
                            : e === `losers`
                              ? `Repêchage`
                              : e === `third`
                                ? `Petite finale`
                                : `Finale`,
                      }),
                      (0, g.jsx)(`div`, {
                        className: `flex gap-3 overflow-x-auto pb-1`,
                        children: n.map(({ round: n, items: a }) =>
                          (0, g.jsxs)(
                            `div`,
                            {
                              className: `min-w-[200px] flex-1 space-y-2`,
                              children: [
                                (0, g.jsx)(`p`, {
                                  className: `text-xs uppercase tracking-[0.18em] text-subtle`,
                                  children: i(r, n, e),
                                }),
                                a.map((e) =>
                                  (0, g.jsx)(v, { fx: e, names: t }, e.id),
                                ),
                              ],
                            },
                            n,
                          ),
                        ),
                      }),
                    ],
                  },
                  e,
                );
          }),
        ],
      });
}
function b() {
  let e = s((e) => e.players),
    t = s((e) => e.tournaments),
    n = s((e) => e.startTournament),
    i = s((e) => e.addPlayer),
    _ = l(),
    [v, b] = (0, h.useState)(`Open de la salle`),
    [x, S] = (0, h.useState)(`single`),
    [C, w] = (0, h.useState)(`501-do`),
    [T, E] = (0, h.useState)(() => e.slice(0, 4).map((e) => e.id)),
    [D, O] = (0, h.useState)(() => e.slice(0, 4).map((e) => e.id)),
    [k, A] = (0, h.useState)(3),
    [j, M] = (0, h.useState)(0),
    [N, P] = (0, h.useState)(2),
    [F, I] = (0, h.useState)(2),
    [L, R] = (0, h.useState)(4),
    [z, B] = (0, h.useState)(!0),
    [V, H] = (0, h.useState)(``),
    U = (0, h.useMemo)(() => p.find((e) => e.id === C), [C]),
    W = (0, h.useMemo)(
      () => Object.fromEntries(e.map((e) => [e.id, e.name])),
      [e],
    ),
    G = (0, h.useMemo)(() => {
      let e = D.filter((e) => T.includes(e)),
        t = T.filter((t) => !e.includes(t));
      return [...e, ...t];
    }, [D, T]),
    K = (0, h.useMemo)(
      () =>
        G.length < 2
          ? []
          : o({
              name: v,
              type: x,
              playerIds: G,
              format: U.format,
              legsToWin: Math.ceil(k / 2),
              setsToWin: j,
              groupCount: N,
              qualifyPerGroup: F,
              swissRounds: L,
              thirdPlace: z,
              cork: !1,
            }),
      [G, v, x, U.format, k, j, N, F, L, z],
    ),
    q = (e) => {
      E((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e])),
        O((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    };
  return (0, g.jsxs)(`main`, {
    className: `oche-page mx-auto max-w-3xl px-4 py-8`,
    children: [
      (0, g.jsx)(`h1`, {
        className: `font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: `On ouvre un tableau`,
      }),
      (0, g.jsx)(`p`, {
        className: `mt-2 text-muted`,
        children: `Élimination, poules, suisse ou championnat. Un code, et toute la salle suit le même score.`,
      }),
      (0, g.jsxs)(`section`, {
        className: `surface-card card-cream mt-6 p-4`,
        children: [
          (0, g.jsx)(`p`, { className: `stamp stamp-red`, children: `Salon` }),
          (0, g.jsx)(`h2`, {
            className: `mt-3 font-display text-xl font-semibold`,
            children: `T’as déjà un code ?`,
          }),
          (0, g.jsx)(`p`, {
            className: `mt-1 text-sm text-accent-fg/75`,
            children: `Tape le code collé sur le téléphone du marqueur.`,
          }),
          (0, g.jsx)(`div`, { className: `mt-3`, children: (0, g.jsx)(d, {}) }),
        ],
      }),
      t.length > 0 &&
        (0, g.jsx)(`ul`, {
          className: `mt-6 divide-y divide-line`,
          children: t.map((e) =>
            (0, g.jsx)(
              `li`,
              {
                children: (0, g.jsxs)(c, {
                  to:
                    e.status === `complete`
                      ? `/tournoi/$tournoiId/finale`
                      : `/tournoi/$tournoiId`,
                  params: { tournoiId: e.id },
                  className: `flex items-center justify-between py-3`,
                  children: [
                    (0, g.jsxs)(`div`, {
                      children: [
                        (0, g.jsx)(`p`, {
                          className: `font-medium`,
                          children: e.name,
                        }),
                        (0, g.jsxs)(`p`, {
                          className: `text-sm text-muted`,
                          children: [
                            f.find((t) => t.id === e.type)?.name,
                            ` · `,
                            e.playerIds.length,
                            ` joueurs`,
                            e.shareCode ? ` · ${e.shareCode}` : ``,
                          ],
                        }),
                      ],
                    }),
                    (0, g.jsx)(`span`, {
                      className: `text-sm text-subtle`,
                      children: e.status === `complete` ? `Clos` : `En cours`,
                    }),
                  ],
                }),
              },
              e.id,
            ),
          ),
        }),
      (0, g.jsx)(`h2`, {
        className: `mt-10 font-display text-2xl font-semibold`,
        children: `Créer`,
      }),
      (0, g.jsxs)(`label`, {
        className: `mt-4 flex flex-col gap-2`,
        children: [
          (0, g.jsx)(`span`, {
            className: `text-sm text-muted`,
            children: `Nom`,
          }),
          (0, g.jsx)(`input`, {
            value: v,
            onChange: (e) => b(e.target.value),
            className: `field`,
          }),
        ],
      }),
      (0, g.jsx)(`div`, {
        className: `mt-6 grid gap-2`,
        children: f.map((e) =>
          (0, g.jsxs)(
            `button`,
            {
              type: `button`,
              onClick: () => S(e.id),
              className: r(
                `rounded-[var(--radius-lg)] border-2 px-4 py-3 text-left`,
                x === e.id
                  ? `border-inset bg-board-green text-fg shadow-[var(--shadow-stamp-cream)]`
                  : `border-transparent bg-surface shadow-[var(--shadow-border)]`,
              ),
              children: [
                (0, g.jsx)(`p`, { className: `font-medium`, children: e.name }),
                (0, g.jsx)(`p`, {
                  className: r(
                    `mt-1 text-sm`,
                    x === e.id ? `text-board-cream` : `text-muted`,
                  ),
                  children: e.summary,
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      x === `groups` &&
        (0, g.jsxs)(`div`, {
          className: `mt-4 grid grid-cols-2 gap-3`,
          children: [
            (0, g.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm text-muted`,
              children: [
                `Poules`,
                (0, g.jsx)(`select`, {
                  value: N,
                  onChange: (e) => P(Number(e.target.value)),
                  className: `field`,
                  children: [2, 3, 4].map((e) =>
                    (0, g.jsx)(`option`, { value: e, children: e }, e),
                  ),
                }),
              ],
            }),
            (0, g.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm text-muted`,
              children: [
                `Qualifiés / poule`,
                (0, g.jsx)(`select`, {
                  value: F,
                  onChange: (e) => I(Number(e.target.value)),
                  className: `field`,
                  children: [1, 2, 3].map((e) =>
                    (0, g.jsx)(`option`, { value: e, children: e }, e),
                  ),
                }),
              ],
            }),
          ],
        }),
      x === `swiss` &&
        (0, g.jsxs)(`label`, {
          className: `mt-4 flex flex-col gap-2 text-sm text-muted`,
          children: [
            `Rondes`,
            (0, g.jsx)(`select`, {
              value: L,
              onChange: (e) => R(Number(e.target.value)),
              className: `field`,
              children: [3, 4, 5, 6, 7, 8].map((e) =>
                (0, g.jsx)(`option`, { value: e, children: e }, e),
              ),
            }),
          ],
        }),
      x === `single` &&
        (0, g.jsxs)(`label`, {
          className: `mt-4 flex min-h-11 cursor-pointer items-center gap-3 text-sm`,
          children: [
            (0, g.jsx)(`input`, {
              type: `checkbox`,
              checked: z,
              onChange: (e) => B(e.target.checked),
              className: `size-4 accent-fg`,
            }),
            `Petite finale pour la 3e place`,
          ],
        }),
      (0, g.jsx)(`h3`, {
        className: `mt-8 font-display text-xl font-semibold`,
        children: `Joueurs`,
      }),
      (0, g.jsx)(`div`, {
        className: `mt-3 flex flex-wrap gap-2`,
        children: e.map((e) => {
          let t = T.includes(e.id);
          return (0, g.jsx)(
            `button`,
            {
              type: `button`,
              onClick: () => q(e.id),
              className: r(
                `h-11 rounded-full border-2 px-4 text-sm font-medium`,
                t
                  ? `border-inset bg-board-red text-fg shadow-[var(--shadow-stamp-cream)]`
                  : `border-transparent bg-raised text-muted shadow-[var(--shadow-border)]`,
              ),
              children: e.name,
            },
            e.id,
          );
        }),
      }),
      (0, g.jsxs)(`form`, {
        className: `mt-3 flex gap-2`,
        onSubmit: (e) => {
          if ((e.preventDefault(), !V.trim())) return;
          let t = i(V);
          E((e) => [...e, t]), O((e) => [...e, t]), H(``);
        },
        children: [
          (0, g.jsx)(`input`, {
            value: V,
            onChange: (e) => H(e.target.value),
            placeholder: `Nouveau joueur`,
            className: `field`,
          }),
          (0, g.jsx)(u, {
            type: `submit`,
            variant: `secondary`,
            children: `Ajouter`,
          }),
        ],
      }),
      (0, g.jsx)(`h3`, {
        className: `mt-10 font-display text-xl font-semibold`,
        children: `Règlement des matchs`,
      }),
      (0, g.jsx)(`div`, {
        className: `mt-4`,
        children: (0, g.jsx)(m, { value: C, onChange: w }),
      }),
      (0, g.jsxs)(`div`, {
        className: `mt-6 grid gap-4 sm:grid-cols-2`,
        children: [
          (0, g.jsxs)(`label`, {
            className: `flex flex-col gap-2 text-sm text-muted`,
            children: [
              `Manches — BO3 = au meilleur des 3`,
              (0, g.jsx)(`select`, {
                value: k,
                onChange: (e) => A(Number(e.target.value)),
                className: `field`,
                children: [1, 3, 5, 7, 9, 11].map((e) =>
                  (0, g.jsxs)(
                    `option`,
                    {
                      value: e,
                      children:
                        e === 3
                          ? `BO3 — Au meilleur des 3`
                          : e === 1
                            ? `1 manche`
                            : [`Au meilleur des `, e],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, g.jsxs)(`label`, {
            className: `flex flex-col gap-2 text-sm text-muted`,
            children: [
              `Sets`,
              (0, g.jsx)(`select`, {
                value: j,
                onChange: (e) => M(Number(e.target.value)),
                className: `field`,
                children: [0, 1, 2, 3].map((e) =>
                  (0, g.jsx)(
                    `option`,
                    {
                      value: e,
                      children: e === 0 ? `Manches seules` : `Premier à ${e}`,
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, g.jsxs)(`section`, {
        className: `surface-card mt-10 p-4`,
        children: [
          (0, g.jsx)(`p`, { className: `stamp stamp-red`, children: `Aperçu` }),
          (0, g.jsx)(`h3`, {
            className: `mt-3 font-display text-2xl font-semibold`,
            children: `Le tableau`,
          }),
          G.length < 2
            ? (0, g.jsx)(`p`, {
                className: `mt-2 text-sm text-muted`,
                children: `Deux joueurs minimum pour voir les affiches.`,
              })
            : (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(`p`, {
                    className: `mt-2 text-sm text-muted`,
                    children: `Voici le tirage. Brasse jusqu’à ce que ça te convienne, puis lance.`,
                  }),
                  (0, g.jsx)(`div`, {
                    className: `mt-4`,
                    children: (0, g.jsx)(y, { fixtures: K, names: W, type: x }),
                  }),
                  (0, g.jsx)(u, {
                    className: `mt-4`,
                    variant: `secondary`,
                    type: `button`,
                    onClick: () => O(a(G)),
                    children: `Brasser le tableau`,
                  }),
                ],
              }),
        ],
      }),
      (0, g.jsx)(u, {
        className: `mt-8 w-full sm:w-auto`,
        size: `lg`,
        onClick: () => {
          if (G.length < 2) return;
          let e = n({
            name: v,
            type: x,
            playerIds: G,
            format: U.format,
            legsToWin: Math.ceil(k / 2),
            setsToWin: j,
            groupCount: N,
            qualifyPerGroup: F,
            swissRounds: L,
            thirdPlace: z,
          });
          _({ to: `/tournoi/$tournoiId`, params: { tournoiId: e } });
        },
        disabled: G.length < 2,
        children: `On lance`,
      }),
    ],
  });
}
export { b as component };

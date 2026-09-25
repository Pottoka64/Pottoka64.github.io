import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { S as t, d as n, l as r, t as i, x as a } from "./store-oche-v3.js";
import { t as o } from "./link-BA5v6P_F.js";
import { t as s } from "./index-oche-v3.js";
import { t as c } from "./button-oche-v3.js";
import { n as l } from "./formats-M2QI3UJX.js";
import { t as u } from "./score-table-oche-v3.js";
import { n as d, r as f, t as p } from "./use-share-sync-oche-v3.js";
var m = e();
function h({ place: e, names: n, tall: r, delay: i }) {
  let a = e === 1 ? `cream` : e === 2 ? `green` : `red`;
  return (0, m.jsxs)(`div`, {
    className: `podium-step flex min-w-0 flex-1 flex-col items-center`,
    style: { animationDelay: i },
    children: [
      (0, m.jsx)(`div`, {
        className: `mb-3 min-h-12 w-full text-center`,
        children: n.map((n) =>
          (0, m.jsx)(
            `p`,
            {
              className: t(
                `truncate font-display font-semibold leading-tight`,
                e === 1
                  ? `text-2xl text-board-cream sm:text-3xl`
                  : `text-base text-muted sm:text-lg`,
              ),
              children: n,
            },
            n,
          ),
        ),
      }),
      (0, m.jsx)(`div`, {
        className: t(
          `flex w-full items-end justify-center rounded-t-[var(--radius-lg)] border-2 border-inset`,
          r,
          a === `cream` && `bg-board-cream shadow-[var(--shadow-stamp)]`,
          a === `green` && `bg-board-green shadow-[var(--shadow-stamp-cream)]`,
          a === `red` && `bg-board-red shadow-[var(--shadow-stamp-cream)]`,
        ),
        children: (0, m.jsx)(`span`, {
          className: t(
            `mb-3 font-display font-semibold leading-none`,
            a === `cream` && `text-6xl text-accent-fg sm:text-7xl`,
            a === `green` && `text-4xl text-fg sm:text-5xl`,
            a === `red` && `text-4xl text-fg sm:text-5xl`,
          ),
          children: e,
        }),
      }),
    ],
  });
}
function g({ podium: e, names: t }) {
  let n = (e) => (e ? (t[e] ?? `Joueur`) : ``),
    r = e.first,
    i = e.second,
    a = e.third;
  return r
    ? (0, m.jsxs)(`div`, {
        className: `mx-auto flex w-full max-w-lg items-end gap-2 sm:gap-3`,
        children: [
          i
            ? (0, m.jsx)(h, {
                place: 2,
                names: [n(i.id)],
                tall: `h-32`,
                delay: `80ms`,
              })
            : (0, m.jsx)(`div`, { className: `flex-1` }),
          (0, m.jsx)(h, {
            place: 1,
            names: [n(r.id)],
            tall: `h-48`,
            delay: `0ms`,
          }),
          a.length > 0
            ? (0, m.jsx)(h, {
                place: 3,
                names: a.map((e) => n(e.id)),
                tall: `h-24`,
                delay: `160ms`,
              })
            : (0, m.jsx)(`div`, { className: `flex-1` }),
        ],
      })
    : null;
}
function _() {
  let { tournoiId: e } = s.useParams(),
    t = i((t) => t.tournaments.find((t) => t.id === e)),
    h = i((e) => e.players),
    _ = i((e) => e.hydrated),
    v = Object.fromEntries(h.map((e) => [e.id, e.name]));
  if ((p(t?.id), !_))
    return (0, m.jsx)(`div`, {
      className: `px-4 py-20 text-center text-muted`,
      children: `Chargement…`,
    });
  if (!t)
    return (0, m.jsxs)(`main`, {
      className: `mx-auto max-w-md px-4 py-20 text-center`,
      children: [
        (0, m.jsx)(`h1`, {
          className: `font-display text-3xl`,
          children: `Tournoi introuvable`,
        }),
        (0, m.jsx)(c, {
          className: `mt-6`,
          asChild: !0,
          children: (0, m.jsx)(o, { to: `/tournois`, children: `Retour` }),
        }),
      ],
    });
  let y = t.status === `complete`,
    b = r(t),
    x = n(t),
    S = l.find((e) => e.id === t.type)?.name;
  return (0, m.jsxs)(`main`, {
    className: `mx-auto max-w-3xl px-4 py-10`,
    children: [
      (0, m.jsx)(`p`, {
        className: `text-center`,
        children: (0, m.jsx)(`span`, {
          className: y ? `stamp stamp-red` : `stamp stamp-green`,
          children: y ? `Finale` : `Classement provisoire`,
        }),
      }),
      (0, m.jsx)(`h1`, {
        className: `mt-4 text-center font-display text-4xl font-semibold tracking-tight text-board-cream sm:text-5xl`,
        children: t.name,
      }),
      (0, m.jsxs)(`p`, {
        className: `mt-2 text-center text-muted`,
        children: [
          S,
          ` · `,
          a(t.format),
          y && b.first ? ` · Champion : ${v[b.first.id] ?? `Joueur`}` : ``,
        ],
      }),
      y &&
        (0, m.jsx)(`div`, {
          className: `mt-10`,
          children: (0, m.jsx)(g, { podium: b, names: v }),
        }),
      (0, m.jsx)(`div`, {
        className: `mt-10`,
        children: (0, m.jsx)(u, {
          rows: x,
          names: v,
          title: `Tableau des scores`,
        }),
      }),
      t.shareCode &&
        (0, m.jsx)(`div`, {
          className: `mx-auto mt-8 max-w-lg`,
          children: (0, m.jsx)(d, { tournament: t }),
        }),
      (0, m.jsxs)(`div`, {
        className: `mt-8 flex flex-wrap justify-center gap-3`,
        children: [
          (0, m.jsx)(c, {
            size: `lg`,
            variant: y ? `secondary` : `default`,
            asChild: !0,
            children: (0, m.jsx)(o, {
              to: `/tournoi/$tournoiId`,
              params: { tournoiId: t.id },
              children: `Tableau`,
            }),
          }),
          (0, m.jsx)(c, {
            size: `lg`,
            variant: `ghost`,
            asChild: !0,
            children: (0, m.jsx)(o, {
              to: `/tournois`,
              children: `Tous les tournois`,
            }),
          }),
        ],
      }),
      (0, m.jsx)(`div`, {
        className: `mx-auto max-w-lg`,
        children: (0, m.jsx)(f, { tournament: t }),
      }),
    ],
  });
}
export { _ as component };

import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import {
  S as r,
  _ as i,
  a,
  b as o,
  g as s,
  h as c,
  t as l,
  v as u,
  x as d,
  y as f,
} from "./store-QFDO1GxK.js";
import { t as p } from "./link-BA5v6P_F.js";
import { i as m, o as h } from "./index-vl6VoVn-.js";
import { t as g } from "./button-DVevz7Ul.js";
var _ = e(n(), 1),
  v = t();
function y(e, t) {
  return t[e] ?? `Joueur`;
}
function b() {
  let e = l((e) => e.players);
  return (0, _.useMemo)(
    () => Object.fromEntries(e.map((e) => [e.id, e.name])),
    [e],
  );
}
function x({ value: e, onChange: t, max: n, disabled: r }) {
  return (0, v.jsxs)(`div`, {
    className: `flex items-center gap-3`,
    children: [
      (0, v.jsx)(`button`, {
        type: `button`,
        disabled: r || e <= 0,
        onClick: () => t(e - 1),
        className: `inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-raised text-lg text-fg shadow-[var(--shadow-border)] disabled:opacity-40`,
        "aria-label": `Moins`,
        children: `−`,
      }),
      (0, v.jsx)(`span`, {
        className: `w-14 text-center font-display text-5xl font-semibold tabular-nums leading-none`,
        children: e,
      }),
      (0, v.jsx)(`button`, {
        type: `button`,
        disabled: r || e >= n,
        onClick: () => t(e + 1),
        className: `inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-raised text-lg text-fg shadow-[var(--shadow-border)] disabled:opacity-40`,
        "aria-label": `Plus`,
        children: `+`,
      }),
    ],
  });
}
function S({ match: e }) {
  let t = b(),
    n = l((e) => e.recordResult),
    m = l((t) =>
      e.tournamentId
        ? t.tournaments.find((t) => t.id === e.tournamentId)
        : void 0,
    ),
    S = h(),
    C = i(e),
    w = f(e),
    T = e.status === `complete`,
    E = !m || a(m),
    D = !(!m || E || T),
    O = u(e),
    [k, A] = (0, _.useState)(() =>
      Object.fromEntries(e.playerIds.map((e) => [e, O[e] ?? 0])),
    ),
    [j, M] = (0, _.useState)(null),
    N = c({ ...e, status: `playing`, winnerId: void 0 }, k),
    P = T ? null : o(e, k);
  return (0, v.jsxs)(`main`, {
    className: `mx-auto max-w-lg px-4 py-8`,
    children: [
      (0, v.jsx)(`p`, {
        className: `text-xs uppercase tracking-[0.18em] text-subtle`,
        children: d(e.format),
      }),
      (0, v.jsx)(`h1`, {
        className: `mt-1 font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: T ? `Bravo.` : D ? `En cours` : `On marque`,
      }),
      (0, v.jsxs)(`p`, {
        className: `mt-2 text-muted`,
        children: [
          `First to `,
          w,
          ` `,
          C,
          T && e.winnerId ? ` · ${y(e.winnerId, t)}` : ``,
          D ? ` · Seul le créateur saisit le score` : ``,
        ],
      }),
      (0, v.jsx)(`div`, {
        className: `mt-8 grid gap-4`,
        children: e.playerIds.map((n) => {
          let i = T && e.winnerId === n;
          return (0, v.jsxs)(
            `div`,
            {
              className: r(
                `flex items-center justify-between gap-4 rounded-[var(--radius-xl)] border-2 px-4 py-4`,
                i
                  ? `border-inset bg-board-red text-fg shadow-[var(--shadow-stamp-cream)]`
                  : `border-transparent bg-surface shadow-[var(--shadow-border)]`,
              ),
              children: [
                (0, v.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, v.jsx)(`p`, {
                      className: r(
                        `truncate font-medium`,
                        i ? `text-fg` : `text-muted`,
                      ),
                      children: y(n, t),
                    }),
                    i &&
                      (0, v.jsx)(`p`, {
                        className: `text-xs uppercase tracking-[0.16em] text-board-cream`,
                        children: `Vainqueur`,
                      }),
                  ],
                }),
                T
                  ? (0, v.jsx)(`p`, {
                      className: `font-display text-5xl font-semibold tabular-nums leading-none`,
                      children: u(e)[n] ?? 0,
                    })
                  : D
                    ? (0, v.jsx)(`p`, {
                        className: `font-display text-5xl font-semibold tabular-nums leading-none text-subtle`,
                        children: `—`,
                      })
                    : (0, v.jsx)(x, {
                        value: k[n] ?? 0,
                        max: w,
                        onChange: (e) => {
                          A((t) => ({ ...t, [n]: e })), M(null);
                        },
                      }),
              ],
            },
            n,
          );
        }),
      }),
      !T &&
        !D &&
        P &&
        (0, v.jsx)(`p`, { className: `mt-4 text-sm text-muted`, children: P }),
      j &&
        (0, v.jsx)(`p`, { className: `mt-4 text-sm text-danger`, children: j }),
      (0, v.jsxs)(`div`, {
        className: `mt-8 flex flex-wrap gap-3`,
        children: [
          !T &&
            !D &&
            (0, v.jsxs)(g, {
              size: `lg`,
              onClick: () => {
                let t = n(e.id, k);
                if (t) {
                  M(t);
                  return;
                }
                M(null),
                  e.tournamentId &&
                    (l
                      .getState()
                      .tournaments.find((t) => t.id === e.tournamentId)
                      ?.status === `complete`
                      ? S({
                          to: `/tournoi/$tournoiId/finale`,
                          params: { tournoiId: e.tournamentId },
                        })
                      : S({
                          to: `/tournoi/$tournoiId`,
                          params: { tournoiId: e.tournamentId },
                        }));
              },
              disabled: !!P,
              children: [
                `Enregistrer `,
                N.status === `complete` ? s(N) : `le score`,
              ],
            }),
          e.tournamentId
            ? (0, v.jsxs)(v.Fragment, {
                children: [
                  m?.status === `complete` &&
                    (0, v.jsx)(g, {
                      size: `lg`,
                      asChild: !0,
                      children: (0, v.jsx)(p, {
                        to: `/tournoi/$tournoiId/finale`,
                        params: { tournoiId: e.tournamentId },
                        children: `Podium`,
                      }),
                    }),
                  (0, v.jsx)(g, {
                    variant: `secondary`,
                    size: `lg`,
                    asChild: !0,
                    children: (0, v.jsx)(p, {
                      to: `/tournoi/$tournoiId`,
                      params: { tournoiId: e.tournamentId },
                      children: `Tableau`,
                    }),
                  }),
                ],
              })
            : (0, v.jsx)(g, {
                variant: T ? `default` : `secondary`,
                size: `lg`,
                asChild: !0,
                children: (0, v.jsx)(p, {
                  to: `/jouer`,
                  children: `Autre match`,
                }),
              }),
        ],
      }),
    ],
  });
}
function C() {
  let { matchId: e } = m.useParams(),
    t = l((t) => t.matches.find((t) => t.id === e));
  return l((e) => e.hydrated)
    ? t
      ? (0, v.jsx)(S, { match: t })
      : (0, v.jsxs)(`main`, {
          className: `mx-auto max-w-md px-4 py-20 text-center`,
          children: [
            (0, v.jsx)(`h1`, {
              className: `font-display text-3xl font-semibold`,
              children: `Match introuvable`,
            }),
            (0, v.jsx)(`p`, {
              className: `mt-2 text-muted`,
              children: `Il a peut-être été effacé de cette machine.`,
            }),
            (0, v.jsx)(g, {
              className: `mt-6`,
              asChild: !0,
              children: (0, v.jsx)(p, {
                to: `/jouer`,
                children: `Nouvelle partie`,
              }),
            }),
          ],
        })
    : (0, v.jsx)(`div`, {
        className: `flex min-h-dvh items-center justify-center text-muted`,
        children: `Chargement…`,
      });
}
export { C as component };

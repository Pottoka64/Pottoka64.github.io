import { t as e } from "./jsx-runtime-BkSabwWG.js";
import {
  S as t,
  a as n,
  c as r,
  d as i,
  f as a,
  m as o,
  t as s,
  u as c,
  x as l,
} from "./store-QFDO1GxK.js";
import { t as u } from "./link-BA5v6P_F.js";
import { n as d, o as f } from "./index-vl6VoVn-.js";
import { t as p } from "./button-DVevz7Ul.js";
import { n as m } from "./formats-M2QI3UJX.js";
import { t as h } from "./score-table-DYx8e5aU.js";
import { n as g, r as _, t as v } from "./use-share-sync-BgXH6cta.js";
var y = e();
function b() {
  let { tournoiId: e } = d.useParams(),
    t = s((t) => t.tournaments.find((t) => t.id === e)),
    b = s((e) => e.players),
    S = s((e) => e.playFixture),
    C = s((e) => e.reshuffleDraw),
    w = s((e) => e.hydrated),
    T = f();
  v(t?.id);
  let E = Object.fromEntries(b.map((e) => [e.id, e.name])),
    D = t ? n(t) : !1;
  if (!w)
    return (0, y.jsx)(`div`, {
      className: `px-4 py-20 text-center text-muted`,
      children: `Chargement…`,
    });
  if (!t)
    return (0, y.jsxs)(`main`, {
      className: `mx-auto max-w-md px-4 py-20 text-center`,
      children: [
        (0, y.jsx)(`h1`, {
          className: `font-display text-3xl`,
          children: `Tournoi introuvable`,
        }),
        (0, y.jsx)(p, {
          className: `mt-6`,
          asChild: !0,
          children: (0, y.jsx)(u, { to: `/tournois`, children: `Retour` }),
        }),
      ],
    });
  let O = (e) => (e ? (E[e] ?? `Joueur`) : `À venir`),
    k = (e) => {
      let n = S(t.id, e.id);
      n && T({ to: `/match/$matchId`, params: { matchId: n } });
    },
    A = new Map();
  for (let e of t.fixtures.filter((e) => e.bracket === `group`)) {
    let t = e.groupIndex ?? 0;
    A.set(t, [...(A.get(t) ?? []), e]);
  }
  let j = t.fixtures.filter((e) => e.bracket === `league`),
    M = (e) => {
      let n = t.fixtures.filter((t) => t.bracket === e);
      return [...new Set(n.map((e) => e.round))]
        .sort((e, t) => e - t)
        .map((e) => ({ round: e, items: n.filter((t) => t.round === e) }));
    };
  return (0, y.jsxs)(`main`, {
    className: `mx-auto max-w-5xl px-4 py-8`,
    children: [
      (0, y.jsx)(`p`, {
        className: `text-xs uppercase tracking-[0.22em] text-board-cream`,
        children: m.find((e) => e.id === t.type)?.name,
      }),
      (0, y.jsx)(`p`, {
        className: `mt-2`,
        children: (0, y.jsx)(`span`, {
          className: D ? `stamp stamp-red` : `stamp stamp-green`,
          children: D ? `Marqueur` : `Invité`,
        }),
      }),
      (0, y.jsx)(`h1`, {
        className: `mt-1 font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: t.name,
      }),
      (0, y.jsxs)(`p`, {
        className: `mt-2 text-muted`,
        children: [
          l(t.format),
          ` · `,
          t.playerIds.length,
          ` joueurs`,
          t.winnerId ? ` · Champion : ${O(t.winnerId)}` : ``,
        ],
      }),
      (0, y.jsxs)(`div`, {
        className: `mt-6 flex flex-wrap gap-3`,
        children: [
          (0, y.jsx)(p, {
            size: `lg`,
            variant: t.status === `complete` ? `default` : `secondary`,
            asChild: !0,
            children: (0, y.jsx)(u, {
              to: `/tournoi/$tournoiId/finale`,
              params: { tournoiId: t.id },
              children:
                t.status === `complete` ? `Podium` : `Tableau des scores`,
            }),
          }),
          D &&
            r(t) &&
            (0, y.jsx)(p, {
              size: `lg`,
              onClick: () => C(t.id),
              children: `Brasser le tableau`,
            }),
        ],
      }),
      D &&
        r(t) &&
        (0, y.jsx)(`p`, {
          className: `mt-3 text-sm text-muted`,
          children: `Brasse autant de fois que tu veux. Au premier match saisi, le tirage est figé — tout le salon voit le même tableau.`,
        }),
      !D &&
        t.status !== `complete` &&
        (0, y.jsx)(`p`, {
          className: `mt-3 text-sm text-muted`,
          children: `Lecture. Seul le créateur du salon peut brasser le tableau et saisir les scores.`,
        }),
      (0, y.jsx)(`div`, {
        className: `mt-6`,
        children: (0, y.jsx)(g, { tournament: t }),
      }),
      (0, y.jsx)(`div`, {
        className: `mt-8`,
        children: (0, y.jsx)(h, { rows: i(t), names: E, title: `Classement` }),
      }),
      A.size > 0 &&
        (0, y.jsx)(`div`, {
          className: `mt-8 grid gap-4 md:grid-cols-2`,
          children: [...A.entries()].map(([e, t]) => {
            let n = [
                ...new Set(
                  t.flatMap((e) => [e.playerA, e.playerB]).filter(Boolean),
                ),
              ],
              r = o(n, t);
            return (0, y.jsxs)(
              `section`,
              {
                className: `surface-card p-4`,
                children: [
                  (0, y.jsx)(h, {
                    rows: c(r),
                    names: E,
                    title: `Poule ${e + 1}`,
                    framed: !1,
                  }),
                  (0, y.jsx)(`ul`, {
                    className: `mt-4 space-y-2`,
                    children: t.map((e) =>
                      (0, y.jsx)(
                        x,
                        { fx: e, nameOf: O, onPlay: () => k(e), canPlay: D },
                        e.id,
                      ),
                    ),
                  }),
                ],
              },
              e,
            );
          }),
        }),
      j.length > 0 &&
        (0, y.jsxs)(`section`, {
          className: `mt-10`,
          children: [
            (0, y.jsx)(`h2`, {
              className: `font-display text-2xl font-semibold`,
              children: t.type === `swiss` ? `Rondes` : `Calendrier`,
            }),
            (0, y.jsx)(`div`, {
              className: `mt-4 flex gap-4 overflow-x-auto pb-2`,
              children: M(`league`).map(({ round: e, items: n }) =>
                (0, y.jsxs)(
                  `div`,
                  {
                    className: `min-w-[220px] flex-1 space-y-3`,
                    children: [
                      (0, y.jsx)(`p`, {
                        className: `text-xs uppercase tracking-[0.18em] text-subtle`,
                        children: a(t, e, `league`),
                      }),
                      n.map((e) =>
                        (0, y.jsx)(
                          x,
                          { fx: e, nameOf: O, onPlay: () => k(e), canPlay: D },
                          e.id,
                        ),
                      ),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      [`winners`, `losers`, `final`, `third`].map((e) => {
        let n = M(e);
        return n.length === 0
          ? null
          : (0, y.jsxs)(
              `section`,
              {
                className: `mt-10`,
                children: [
                  (0, y.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold`,
                    children:
                      e === `winners`
                        ? `Tableau`
                        : e === `losers`
                          ? `Repêchage`
                          : e === `third`
                            ? `Petite finale`
                            : `Finale`,
                  }),
                  (0, y.jsx)(`div`, {
                    className: `mt-4 flex gap-4 overflow-x-auto pb-2`,
                    children: n.map(({ round: n, items: r }) =>
                      (0, y.jsxs)(
                        `div`,
                        {
                          className: `min-w-[220px] flex-1 space-y-3`,
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs uppercase tracking-[0.18em] text-subtle`,
                              children: a(t, n, e),
                            }),
                            r.map((e) =>
                              (0, y.jsx)(
                                x,
                                {
                                  fx: e,
                                  nameOf: O,
                                  onPlay: () => k(e),
                                  canPlay: D,
                                },
                                e.id,
                              ),
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
      (0, y.jsx)(_, { tournament: t }),
    ],
  });
}
function x({ fx: e, nameOf: n, onPlay: r, canPlay: i }) {
  let a = !!(i && e.playerA && e.playerB && !e.winnerId && !e.bye),
    s = !!(e.winnerId && !e.bye),
    o = e.winnerId && e.scoreA != null && e.scoreB != null;
  return (0, y.jsxs)(`button`, {
    type: `button`,
    onClick: a ? r : void 0,
    disabled: !a,
    className: t(
      `oche-fx`,
      a && `oche-fx--play`,
      s && `oche-fx--done`,
      !a && !s && `oche-fx--wait`,
    ),
    children: [
      (0, y.jsxs)(`div`, {
        className: `flex items-baseline justify-between gap-3`,
        children: [
          (0, y.jsxs)(`p`, {
            className: t(
              `min-w-0 truncate text-sm`,
              e.winnerId === e.playerA ? `text-fg` : `text-muted`,
            ),
            children: [n(e.playerA), e.bye && !e.playerB ? ` (exempt)` : ``],
          }),
          o &&
            (0, y.jsx)(`span`, {
              className: `font-display text-base tabular-nums`,
              children: e.scoreA,
            }),
        ],
      }),
      (0, y.jsxs)(`div`, {
        className: `flex items-baseline justify-between gap-3`,
        children: [
          (0, y.jsx)(`p`, {
            className: t(
              `min-w-0 truncate text-sm`,
              e.winnerId === e.playerB ? `text-fg` : `text-muted`,
            ),
            children: n(e.playerB),
          }),
          o &&
            (0, y.jsx)(`span`, {
              className: `font-display text-base tabular-nums`,
              children: e.scoreB,
            }),
        ],
      }),
      a &&
        (0, y.jsx)(`p`, {
          className: `oche-fx__badge oche-fx__badge--play`,
          children: `À jouer · saisir le score`,
        }),
      s &&
        (0, y.jsx)(`p`, {
          className: `oche-fx__badge oche-fx__badge--done`,
          children: `Terminé`,
        }),
    ],
  });
}
export { b as component };

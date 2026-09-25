import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { S as t } from "./store-oche-v3.js";
var n = e();
function r({ rows: e, names: r, title: i, framed: a = !0 }) {
  if (e.length === 0) return null;
  let o = (0, n.jsxs)(n.Fragment, {
    children: [
      i &&
        (0, n.jsx)(`h2`, {
          className: `font-display text-xl font-semibold`,
          children: i,
        }),
      (0, n.jsx)(`div`, {
        className: t(`overflow-x-auto`, i && `mt-3`),
        children: (0, n.jsxs)(`table`, {
          className: `w-full min-w-[28rem] text-sm`,
          children: [
            (0, n.jsx)(`thead`, {
              className: `text-xs uppercase tracking-[0.14em] text-board-cream`,
              children: (0, n.jsxs)(`tr`, {
                children: [
                  (0, n.jsx)(`th`, {
                    className: `py-2 pr-2 text-left font-medium`,
                    children: `#`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `py-2 text-left font-medium`,
                    children: `Joueur`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `py-2 px-1 text-center font-medium`,
                    children: `J`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `py-2 px-1 text-center font-medium`,
                    children: `G`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `py-2 px-1 text-center font-medium`,
                    children: `P`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `hidden py-2 px-1 text-center font-medium sm:table-cell`,
                    children: `+`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `hidden py-2 px-1 text-center font-medium sm:table-cell`,
                    children: `−`,
                  }),
                  (0, n.jsx)(`th`, {
                    className: `py-2 pl-1 text-center font-medium`,
                    children: `Diff`,
                  }),
                ],
              }),
            }),
            (0, n.jsx)(`tbody`, {
              children: e.map((e) => {
                let i = e.rank === 1;
                return (0, n.jsxs)(
                  `tr`,
                  {
                    className: t(
                      `border-t border-line`,
                      i && `bg-board-cream/12`,
                      e.rank === 2 && `bg-board-green/10`,
                      e.rank === 3 && `bg-board-red/10`,
                    ),
                    children: [
                      (0, n.jsx)(`td`, {
                        className: t(
                          `py-2.5 pr-2 font-display text-base tabular-nums`,
                          e.rank === 1 && `text-board-cream`,
                          e.rank === 2 && `text-board-green`,
                          e.rank === 3 && `text-board-red`,
                          e.rank > 3 && `text-subtle`,
                        ),
                        children: e.rank,
                      }),
                      (0, n.jsx)(`td`, {
                        className: t(
                          `py-2.5 font-medium`,
                          i ? `text-fg` : `text-muted`,
                        ),
                        children: r[e.id] ?? `Joueur`,
                      }),
                      (0, n.jsx)(`td`, {
                        className: `py-2.5 px-1 text-center tabular-nums`,
                        children: e.played,
                      }),
                      (0, n.jsx)(`td`, {
                        className: `py-2.5 px-1 text-center tabular-nums`,
                        children: e.wins,
                      }),
                      (0, n.jsx)(`td`, {
                        className: `py-2.5 px-1 text-center tabular-nums`,
                        children: e.losses,
                      }),
                      (0, n.jsx)(`td`, {
                        className: `hidden py-2.5 px-1 text-center tabular-nums sm:table-cell`,
                        children: e.scored,
                      }),
                      (0, n.jsx)(`td`, {
                        className: `hidden py-2.5 px-1 text-center tabular-nums sm:table-cell`,
                        children: e.conceded,
                      }),
                      (0, n.jsx)(`td`, {
                        className: t(
                          `py-2.5 pl-1 text-center tabular-nums`,
                          e.diff > 0
                            ? `text-ok`
                            : e.diff < 0
                              ? `text-danger`
                              : `text-muted`,
                        ),
                        children: e.diff > 0 ? `+${e.diff}` : e.diff,
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
  return a
    ? (0, n.jsx)(`section`, { className: `surface-card p-4`, children: o })
    : (0, n.jsx)(`div`, { children: o });
}
export { r as t };

import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { S as t } from "./store-oche-v3.js";
import { t as n } from "./formats-M2QI3UJX.js";
var r = e(),
  i = [
    { id: `x01`, label: `x01` },
    { id: `cible`, label: `Tactique` },
    { id: `party`, label: `Club` },
    { id: `entrainement`, label: `Entraînement` },
  ];
function a({ value: e, onChange: a }) {
  return (0, r.jsx)(`div`, {
    className: `flex flex-col gap-6`,
    children: i.map((i) =>
      (0, r.jsxs)(
        `section`,
        {
          children: [
            (0, r.jsx)(`h3`, {
              className: `mb-2 font-display text-sm uppercase tracking-[0.18em] text-board-cream`,
              children: i.label,
            }),
            (0, r.jsx)(`div`, {
              className: `grid grid-cols-2 gap-2 sm:grid-cols-3`,
              children: n
                .filter((e) => e.category === i.id)
                .map((n) => {
                  let i = n.id === e;
                  return (0, r.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => a(n.id),
                      className: t(
                        `rounded-[var(--radius-md)] px-3 py-2.5 text-left transition-[box-shadow,background-color,color] duration-150`,
                        i
                          ? `bg-board-red text-fg shadow-[var(--shadow-stamp-cream)]`
                          : `bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]`,
                      ),
                      children: [
                        (0, r.jsx)(`p`, {
                          className: `font-medium leading-snug`,
                          children: n.name,
                        }),
                        (0, r.jsx)(`p`, {
                          className: t(
                            `mt-0.5 text-xs`,
                            i ? `text-board-cream` : `text-subtle`,
                          ),
                          children: n.short,
                        }),
                      ],
                    },
                    n.id,
                  );
                }),
            }),
          ],
        },
        i.id,
      ),
    ),
  });
}
export { a as t };

import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { S as r, t as i } from "./store-oche-v3.js";
import { o as a } from "./index-oche-v3.js";
import { t as o } from "./button-oche-v3.js";
import { t as s } from "./formats-M2QI3UJX.js";
import { t as c } from "./format-picker-oche-v3.js";
var l = e(n()),
  u = t();
function d() {
  let e = i((e) => e.players),
    t = i((e) => e.startMatch),
    n = i((e) => e.addPlayer),
    d = a(),
    [f, p] = (0, l.useState)(`501-do`),
    [m, h] = (0, l.useState)(() => e.slice(0, 2).map((e) => e.id)),
    [g, _] = (0, l.useState)(3),
    [v, y] = (0, l.useState)(0),
    [b, x] = (0, l.useState)(``),
    S = (0, l.useMemo)(() => s.find((e) => e.id === f), [f]),
    C = (e) => {
      h((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    };
  return (0, u.jsxs)(`main`, {
    className: `mx-auto max-w-3xl px-4 py-8`,
    children: [
      (0, u.jsx)(`h1`, {
        className: `font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: `Qui lance ?`,
      }),
      (0, u.jsx)(`p`, {
        className: `mt-2 text-muted`,
        children: `Deux joueurs, un format, un score. On n’a pas besoin de plus pour ouvrir la salle.`,
      }),
      (0, u.jsxs)(`section`, {
        className: `mt-8`,
        children: [
          (0, u.jsx)(`h2`, {
            className: `font-display text-xl font-semibold`,
            children: `Joueurs`,
          }),
          (0, u.jsx)(`div`, {
            className: `mt-3 flex flex-wrap gap-2`,
            children: e.map((e) => {
              let t = m.includes(e.id);
              return (0, u.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: () => C(e.id),
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
          (0, u.jsxs)(`form`, {
            className: `mt-3 flex gap-2`,
            onSubmit: (e) => {
              if ((e.preventDefault(), !b.trim())) return;
              let t = n(b);
              h((e) => [...e, t]), x(``);
            },
            children: [
              (0, u.jsx)(`input`, {
                value: b,
                onChange: (e) => x(e.target.value),
                placeholder: `Ajouter un joueur`,
                className: `field`,
              }),
              (0, u.jsx)(o, {
                type: `submit`,
                variant: `secondary`,
                children: `Ajouter`,
              }),
            ],
          }),
          m.length < 2 &&
            (0, u.jsx)(`p`, {
              className: `mt-2 text-sm text-danger`,
              children: `Deux joueurs minimum.`,
            }),
        ],
      }),
      (0, u.jsxs)(`section`, {
        className: `mt-10`,
        children: [
          (0, u.jsx)(`h2`, {
            className: `font-display text-xl font-semibold`,
            children: `Format`,
          }),
          (0, u.jsx)(`div`, {
            className: `mt-4`,
            children: (0, u.jsx)(c, { value: f, onChange: p }),
          }),
          (0, u.jsx)(`ul`, {
            className: `mt-4 list-disc space-y-1 pl-5 text-sm text-muted`,
            children: S.rules.map((e) => (0, u.jsx)(`li`, { children: e }, e)),
          }),
        ],
      }),
      (0, u.jsxs)(`section`, {
        className: `mt-10 grid gap-4 sm:grid-cols-2`,
        children: [
          (0, u.jsxs)(`label`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, u.jsx)(`span`, {
                className: `text-sm text-muted`,
                children: `Manches — BO3 = au meilleur des 3`,
              }),
              (0, u.jsx)(`select`, {
                value: g,
                onChange: (e) => _(Number(e.target.value)),
                className: `field`,
                children: [1, 3, 5, 7, 9, 11, 13].map((e) =>
                  (0, u.jsxs)(
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
          (0, u.jsxs)(`label`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, u.jsx)(`span`, {
                className: `text-sm text-muted`,
                children: `Sets (0 = manches uniquement)`,
              }),
              (0, u.jsx)(`select`, {
                value: v,
                onChange: (e) => y(Number(e.target.value)),
                className: `field`,
                children: [0, 1, 2, 3, 4, 5, 6, 7].map((e) =>
                  (0, u.jsx)(
                    `option`,
                    {
                      value: e,
                      children:
                        e === 0
                          ? `Pas de sets`
                          : `Premier à ${e} set${e > 1 ? `s` : ``}`,
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)(`div`, {
        className: `mt-10`,
        children: (0, u.jsx)(o, {
          size: `lg`,
          className: `w-full sm:w-auto`,
          onClick: () => {
            if (m.length < 2) return;
            let e = t({
              playerIds: m,
              format: S.format,
              legsToWin: Math.ceil(g / 2),
              setsToWin: v,
            });
            d({ to: `/match/$matchId`, params: { matchId: e } });
          },
          disabled: m.length < 2,
          children: `C’est parti`,
        }),
      }),
    ],
  });
}
export { d as component };

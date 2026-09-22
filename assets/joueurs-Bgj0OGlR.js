import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { t as r, u as i, v as a } from "./store-QFDO1GxK.js";
import { t as o } from "./link-BA5v6P_F.js";
import { t as s } from "./button-DVevz7Ul.js";
import { t as c } from "./score-table-DYx8e5aU.js";
var l = e(n()),
  u = t();
function d() {
  let e = r((e) => e.players),
    t = r((e) => e.matches),
    n = r((e) => e.addPlayer),
    d = r((e) => e.removePlayer),
    f = r((e) => e.renamePlayer),
    [p, m] = (0, l.useState)(``),
    h = (0, l.useMemo)(() => {
      let n = e.map((e) => {
        let n = t.filter(
            (t) => t.playerIds.includes(e.id) && t.status === `complete`,
          ),
          r = n.filter((t) => t.winnerId === e.id).length,
          i = 0,
          o = 0;
        for (let t of n) {
          let n = a(t);
          i += n[e.id] ?? 0;
          for (let r of t.playerIds) r !== e.id && (o += n[r] ?? 0);
        }
        return {
          id: e.id,
          played: n.length,
          wins: r,
          losses: n.length - r,
          scored: i,
          conceded: o,
          diff: i - o,
          rank: 0,
        };
      });
      return i(n);
    }, [e, t]),
    g = Object.fromEntries(e.map((e) => [e.id, e.name]));
  return (0, u.jsxs)(`main`, {
    className: `mx-auto max-w-3xl px-4 py-8`,
    children: [
      (0, u.jsx)(`h1`, {
        className: `font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: `La bande`,
      }),
      (0, u.jsx)(`p`, {
        className: `mt-2 text-muted`,
        children: `Ceux qui lancent ici — victoires et manches restent sur cet appareil.`,
      }),
      (0, u.jsxs)(`form`, {
        className: `mt-6 flex gap-2`,
        onSubmit: (e) => {
          e.preventDefault(), p.trim() && (n(p), m(``));
        },
        children: [
          (0, u.jsx)(`input`, {
            value: p,
            onChange: (e) => m(e.target.value),
            placeholder: `Nom du joueur`,
            className: `field`,
          }),
          (0, u.jsx)(s, { type: `submit`, children: `Ajouter` }),
        ],
      }),
      (0, u.jsx)(`div`, {
        className: `mt-8`,
        children: (0, u.jsx)(c, {
          rows: h,
          names: g,
          title: `Tableau des scores`,
        }),
      }),
      (0, u.jsx)(`ul`, {
        className: `mt-8 divide-y divide-line`,
        children: e.map((e) =>
          (0, u.jsxs)(
            `li`,
            {
              className: `flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between`,
              children: [
                (0, u.jsx)(`input`, {
                  defaultValue: e.name,
                  onBlur: (t) => f(e.id, t.target.value),
                  className: `bg-transparent font-medium text-fg`,
                }),
                (0, u.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, u.jsx)(s, {
                      variant: `secondary`,
                      size: `sm`,
                      asChild: !0,
                      children: (0, u.jsx)(o, {
                        to: `/jouer`,
                        children: `Saisir un match`,
                      }),
                    }),
                    (0, u.jsx)(s, {
                      variant: `ghost`,
                      size: `sm`,
                      onClick: () => d(e.id),
                      children: `Retirer`,
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
export { d as component };

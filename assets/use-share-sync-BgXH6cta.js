import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { a as r, i, n as a, o, r as s, t as c } from "./store-QFDO1GxK.js";
import { o as l } from "./index-vl6VoVn-.js";
import { t as u } from "./button-DVevz7Ul.js";
var d = e(n(), 1),
  f = t();
function p({ tournament: e }) {
  let t = c((e) => e.deleteTournament),
    n = c((e) => e.closeTournament),
    i = l(),
    [a, o] = (0, d.useState)(`idle`),
    [s, p] = (0, d.useState)(null),
    m = () => {
      t(e.id), i({ to: `/tournois` });
    },
    h = async () => {
      if ((o(`busy`), p(null), !(await n(e.id)))) {
        p(`Impossible de fermer le salon. Réessaie dans un instant.`),
          o(`confirm`);
        return;
      }
      i({ to: `/tournois` });
    },
    g = r(e);
  return e.shareCode
    ? (0, f.jsxs)(`div`, {
        className: `mt-10`,
        children: [
          (0, f.jsx)(u, {
            variant: `ghost`,
            onClick: m,
            children: `Retirer de cet appareil`,
          }),
          g && (a === `confirm` || a === `busy`)
            ? (0, f.jsxs)(`div`, {
                className: `surface-card card-cream mt-4 p-4`,
                children: [
                  (0, f.jsx)(`p`, {
                    className: `stamp stamp-red`,
                    children: `Attention`,
                  }),
                  (0, f.jsxs)(`p`, {
                    className: `mt-3 font-display text-xl`,
                    children: [`Fermer le salon `, e.shareCode, ` ?`],
                  }),
                  (0, f.jsx)(`p`, {
                    className: `mt-2 text-sm text-accent-fg/75`,
                    children: `Le tableau disparaît de tous les téléphones. Ce code ne marchera plus.`,
                  }),
                  s &&
                    (0, f.jsx)(`p`, {
                      className: `mt-2 text-sm text-danger`,
                      children: s,
                    }),
                  (0, f.jsxs)(`div`, {
                    className: `mt-4 flex flex-wrap gap-2`,
                    children: [
                      (0, f.jsx)(u, {
                        variant: `danger`,
                        disabled: a === `busy`,
                        onClick: () => void h(),
                        children:
                          a === `busy`
                            ? `Fermeture…`
                            : `Fermer pour tout le monde`,
                      }),
                      (0, f.jsx)(u, {
                        variant: `secondary`,
                        disabled: a === `busy`,
                        onClick: () => o(`idle`),
                        children: `Annuler`,
                      }),
                    ],
                  }),
                ],
              })
            : g
              ? (0, f.jsxs)(`div`, {
                  className: `mt-2`,
                  children: [
                    (0, f.jsx)(u, {
                      variant: `ghost`,
                      className: `text-danger`,
                      onClick: () => o(`confirm`),
                      children: `Fermer le salon pour tout le monde`,
                    }),
                    (0, f.jsx)(`p`, {
                      className: `mt-2 text-sm text-subtle`,
                      children: `Retirer ne touche que cet appareil. Fermer le salon l’efface partout.`,
                    }),
                  ],
                })
              : (0, f.jsx)(`p`, {
                  className: `mt-2 text-sm text-subtle`,
                  children: `Retirer ne touche que cet appareil. Le salon reste ouvert.`,
                }),
        ],
      })
    : g
      ? (0, f.jsx)(u, {
          variant: `ghost`,
          className: `mt-10 text-danger`,
          onClick: m,
          children: `Supprimer le tournoi`,
        })
      : null;
}
function m({ tournament: e }) {
  let t = c((e) => e.publishTournament),
    n = c((e) => e.claimHost),
    [a, o] = (0, d.useState)(!1),
    [s, l] = (0, d.useState)(!1),
    [p, m] = (0, d.useState)(``),
    [h, g] = (0, d.useState)(!1),
    [_, v] = (0, d.useState)(null),
    y = e.shareCode,
    b = r(e),
    x = b && e.hostSecret && i(e.hostSecret) ? e.hostSecret : null;
  (0, d.useEffect)(() => {
    !y && b && t(e.id);
  }, [y, b, e.id, t]);
  let S = (e) =>
      typeof window > `u`
        ? `/salle/${e}`
        : `${window.location.origin}/salle/${e}`,
    C = async (e) => {
      try {
        await navigator.clipboard.writeText(S(e)),
          l(!0),
          window.setTimeout(() => l(!1), 1600);
      } catch {
        l(!1);
      }
    },
    w = async () => {
      o(!0);
      let n = y ?? (await t(e.id));
      if ((o(!1), !n)) return;
      let r = S(n);
      if (typeof navigator.share == `function`)
        try {
          await navigator.share({
            title: e.name,
            text: `Salon OCHE ${n}`,
            url: r,
          });
          return;
        } catch {}
      await C(n);
    },
    T = async (t) => {
      t.preventDefault(), g(!0), v(null);
      let r = await n(e.id, p);
      g(!1), r ? m(``) : v(`Rôle refusé. Vérifie le code marqueur.`);
    };
  return (0, f.jsxs)(`div`, {
    className: `oche-club-edge surface-card card-cream relative overflow-hidden px-4 py-5`,
    children: [
      (0, f.jsx)(`div`, {
        className: `stripe-board pointer-events-none absolute inset-x-0 top-0`,
        "aria-hidden": !0,
      }),
      (0, f.jsx)(`p`, {
        className: `mt-3`,
        children: (0, f.jsx)(`span`, {
          className: b ? `stamp stamp-red` : `stamp stamp-green`,
          children: b ? `Marqueur` : `Invité`,
        }),
      }),
      y
        ? (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)(`p`, {
                className: `mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-fg/70`,
                children: [
                  y &&
                    (0, f.jsx)(`span`, {
                      className: `live-dot mr-2 inline-block align-middle`,
                      "aria-hidden": !0,
                    }),
                  `Salon`,
                ],
              }),
              (0, f.jsx)(`p`, {
                className: `oche-share-code`,
                children: y,
              }),
              (0, f.jsx)(`p`, {
                className: `mt-2 text-sm text-accent-fg/75`,
                children: b
                  ? `Dictez le code salon à la salle. Le code marqueur, tu le gardes.`
                  : `Tu suis le tableau en direct. Pour brasser ou saisir, vérifie le rôle marqueur.`,
              }),
            ],
          })
        : (0, f.jsx)(`p`, {
            className: `mt-2 text-sm text-accent-fg/75`,
            children: a
              ? `On ouvre le salon…`
              : `Publiez le tournoi pour que chaque téléphone suive le même score.`,
          }),
      x &&
        (0, f.jsxs)(`div`, {
          className: `mt-4 rounded-[var(--radius-md)] border-2 border-inset bg-board-red/15 px-3 py-3`,
          children: [
            (0, f.jsx)(`p`, {
              className: `text-xs font-semibold uppercase tracking-[0.18em] text-accent-fg/70`,
              children: `Code marqueur`,
            }),
            (0, f.jsx)(`p`, {
              className: `oche-share-host mt-1 font-display text-3xl font-semibold tracking-[0.2em] text-accent-fg`,
              children: x,
            }),
            (0, f.jsx)(`p`, {
              className: `mt-1 text-sm text-accent-fg/75`,
              children: `Pour reprendre le rôle sur un autre téléphone. Ne le montre pas à la salle.`,
            }),
          ],
        }),
      !b &&
        y &&
        (0, f.jsxs)(`form`, {
          className: `mt-4`,
          onSubmit: (e) => void T(e),
          children: [
            (0, f.jsxs)(`label`, {
              className: `flex flex-col gap-2 text-sm text-accent-fg/75`,
              children: [
                `Vérifier le rôle`,
                (0, f.jsx)(`input`, {
                  value: p,
                  onChange: (e) => {
                    m(e.target.value.toUpperCase()), v(null);
                  },
                  placeholder: `Code marqueur`,
                  autoComplete: `off`,
                  spellCheck: !1,
                  className: `field`,
                  maxLength: 12,
                }),
              ],
            }),
            _ &&
              (0, f.jsx)(`p`, {
                className: `mt-2 text-sm text-danger`,
                children: _,
              }),
            (0, f.jsx)(u, {
              className: `mt-3`,
              type: `submit`,
              variant: `secondary`,
              disabled: h || p.trim().length < 6,
              children: h ? `Vérification…` : `Vérifier le rôle`,
            }),
          ],
        }),
      (0, f.jsx)(u, {
        className: `mt-4`,
        variant: y ? `secondary` : `default`,
        onClick: () => void w(),
        disabled: a,
        children: a
          ? `Publication…`
          : s
            ? `Lien copié`
            : y
              ? `Copier le lien`
              : `Partager`,
      }),
    ],
  });
}
function h(e) {
  let t = c((t) => t.tournaments.find((t) => t.id === e)),
    n = c((e) => e.ingestSnapshot),
    r = c((e) => e.pushTournament),
    i = c((e) => e.snapshotOf),
    l = c((e) => e.deleteTournament);
  (0, d.useEffect)(() => {
    let u = t?.shareCode;
    if (!u || !e) return;
    let d = !1,
      f = async () => {
        try {
          let f = await s({ data: { code: u } });
          if (d) return;
          if (f?.closed || (f && !f.payload)) {
            l(e);
            return;
          }
          if (!f) {
            let r = i(e);
            if (
              !r ||
              !t?.hostSecret ||
              ((f = await a({
                data: { code: u, payload: r, hostSecret: t.hostSecret },
              })),
              d || !f)
            )
              return;
            if (f.closed || !f.payload) {
              l(e);
              return;
            }
            n(f.payload, f.version);
            return;
          }
          if (
            !f.payload ||
            (c.getState().tournaments.find((t) => t.id === e)?.shareVersion ??
              0) >= f.version
          )
            return;
          let p = i(e),
            m = p ? o(f.payload, p) : 0;
          n(f.payload, f.version), m > 0 && t?.hostSecret && r(e);
        } catch {}
      },
      p = window.setInterval(() => void f(), 2500);
    return (
      f(),
      () => {
        (d = !0), window.clearInterval(p);
      }
    );
  }, [t?.shareCode, e, n, r, i, l]);
}
export { m as n, p as r, h as t };

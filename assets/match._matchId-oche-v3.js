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
} from "./store-oche-v3.js";
import { t as p } from "./link-BA5v6P_F.js";
import { i as m, o as h } from "./index-oche-v3.js";
import { t as g } from "./button-oche-v3.js";
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
    className: `oche-stepper`,
    children: [
      (0, v.jsx)(`button`, {
        type: `button`,
        disabled: r || e <= 0,
        onClick: () => t(e - 1),
        className: `oche-stepper__btn`,
        "aria-label": `Moins`,
        children: `−`,
      }),
      (0, v.jsx)(`span`, {
        className: `oche-stepper__value`,
        children: e,
      }),
      (0, v.jsx)(`button`, {
        type: `button`,
        disabled: r || e >= n,
        onClick: () => t(e + 1),
        className: `oche-stepper__btn`,
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
    [F, I] = (0, _.useState)(``),
    [L, z] = (0, _.useState)(!1),
    [B, V] = (0, _.useState)(null),
    q = l((e) => e.claimHost),
    N = c({ ...e, status: `playing`, winnerId: void 0 }, k),
    P = T ? null : o(e, k),
    U = async (t) => {
      t.preventDefault(),
        V(null),
        z(!0);
      let n = m ? await q(m.id, F) : !1;
      z(!1),
        n
          ? I(``)
          : V(`Rôle refusé. Vérifie le code marqueur.`);
    };
  return (0, v.jsxs)(`main`, {
    className: `oche-match mx-auto max-w-lg px-4 py-8`,
    children: [
      (0, v.jsx)(`p`, {
        className: `oche-match__chrome text-xs uppercase tracking-[0.18em] text-subtle`,
        children: d(e.format),
      }),
      (0, v.jsx)(`h1`, {
        className: `oche-match__title mt-1 font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: T ? `Bravo.` : D ? `En cours` : `On marque`,
      }),
      (0, v.jsxs)(`p`, {
        className: `oche-match__meta mt-2 text-muted`,
        children: [
          `Premier à `,
          w,
          ` `,
          C,
          T && e.winnerId ? ` · ${y(e.winnerId, t)}` : ``,
          D ? ` · Lecture seule — code marqueur requis` : ``,
        ],
      }),
      (0, v.jsx)(`div`, {
        className: `oche-match__board mt-8 grid gap-4`,
        children: e.playerIds.map((n) => {
          let i = T && e.winnerId === n,
            R = T ? (u(e)[n] ?? 0) : (k[n] ?? 0),
            L =
              !T &&
              !D &&
              Math.max(...e.playerIds.map((id) => k[id] ?? 0)) > 0 &&
              R === Math.max(...e.playerIds.map((id) => k[id] ?? 0));
          return (0, v.jsxs)(
            `div`,
            {
              className: r(
                `oche-match__player`,
                i && `oche-match__player--winner`,
                !i && L && `oche-match__player--lead`,
              ),
              children: [
                (0, v.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, v.jsx)(`p`, {
                      className: r(
                        `oche-match__name truncate`,
                        i ? `text-fg` : `text-board-cream`,
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
                      className: `oche-match__score`,
                      children: u(e)[n] ?? 0,
                    })
                  : D
                    ? (0, v.jsx)(`p`, {
                        className: `oche-match__score text-subtle`,
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
      D &&
        m?.shareCode &&
        (0, v.jsxs)(`div`, {
          className: `mt-6 rounded-[var(--radius-md)] border-2 border-inset surface-card px-4 py-4`,
          children: [
            (0, v.jsx)(`p`, {
              className: `text-sm text-muted`,
              children: `Pour saisir le score, demande le code marqueur au créateur du salon (pas le code salon).`,
            }),
            (0, v.jsxs)(`form`, {
              className: `mt-3`,
              onSubmit: (e) => void U(e),
              children: [
                (0, v.jsxs)(`label`, {
                  className: `flex flex-col gap-2 text-sm text-muted`,
                  children: [
                    `Code marqueur`,
                    (0, v.jsx)(`input`, {
                      value: F,
                      onChange: (e) => {
                        I(e.target.value.toUpperCase()), V(null);
                      },
                      placeholder: `ex. K7M2PX`,
                      autoComplete: `off`,
                      spellCheck: !1,
                      className: `field`,
                      maxLength: 12,
                    }),
                  ],
                }),
                B &&
                  (0, v.jsx)(`p`, {
                    className: `mt-2 text-sm text-danger`,
                    children: B,
                  }),
                (0, v.jsxs)(`div`, {
                  className: `mt-3 flex flex-wrap gap-3`,
                  children: [
                    (0, v.jsx)(g, {
                      type: `submit`,
                      variant: `secondary`,
                      disabled: L || F.trim().length < 6,
                      children: L ? `Vérification…` : `Devenir marqueur`,
                    }),
                    e.tournamentId &&
                      (0, v.jsx)(g, {
                        variant: `ghost`,
                        type: `button`,
                        asChild: !0,
                        children: (0, v.jsx)(p, {
                          to: `/tournoi/$tournoiId`,
                          params: { tournoiId: e.tournamentId },
                          children: `Retour au tableau`,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      !T &&
        !D &&
        P &&
        (0, v.jsx)(`p`, { className: `mt-4 text-sm text-muted`, children: P }),
      j &&
        (0, v.jsx)(`p`, { className: `mt-4 text-sm text-danger`, children: j }),
      (0, v.jsxs)(`div`, {
        className: `oche-match__actions mt-8 flex flex-wrap gap-3`,
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

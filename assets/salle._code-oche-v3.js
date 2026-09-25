import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { t as r, normalizeSalonCode as N } from "./store-oche-v3.js";
import { t as i } from "./link-BA5v6P_F.js";
import { o as a, r as o } from "./index-oche-v3.js";
import { t as s } from "./button-oche-v3.js";
var c = e(n()),
  l = t();
function u() {
  let { code: e } = o.useParams(),
    t = r((e) => e.joinTournament),
    n = r((e) => e.hydrated),
    u = a(),
    [d, f] = (0, c.useState)(null);
  return (
    (0, c.useEffect)(() => {
      if (!n) return;
      let r = !1;
      return (
        (async () => {
          let n = await t(e);
          r ||
            (n?.ok
              ? u({ to: `/tournoi/$tournoiId`, params: { tournoiId: n.id } })
              : f(
                  n?.message ??
                    `Connexion impossible au serveur. Vérifie ta connexion et réessaie.`,
                ));
        })(),
        () => {
          r = !0;
        }
      );
    }, [e, n, t, u]),
    (0, l.jsxs)(`main`, {
      className: `mx-auto max-w-md px-4 py-20 text-center`,
      children: [
        (0, l.jsx)(`p`, { className: `stamp stamp-green`, children: `Salon` }),
        (0, l.jsx)(`h1`, {
          className: `mt-4 font-display text-4xl font-semibold tracking-[0.16em] text-board-cream`,
          children: N(e) || String(e ?? ``).toUpperCase(),
        }),
        (0, l.jsx)(`p`, {
          className: `mt-4 text-muted`,
          children: d ?? `Connexion au tableau…`,
        }),
        d &&
          (0, l.jsx)(s, {
            className: `mt-6`,
            asChild: !0,
            children: (0, l.jsx)(i, { to: `/tournois`, children: `Tournois` }),
          }),
      ],
    })
  );
}
export { u as component };

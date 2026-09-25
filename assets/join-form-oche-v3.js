import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { v as n } from "./useRouter-B1ejQzOU.js";
import { t as r, normalizeSalonCode as N } from "./store-oche-v3.js";
import { o as i } from "./index-oche-v3.js";
import { t as a } from "./button-oche-v3.js";
var o = e(n(), 1),
  s = t();
function c() {
  let e = r((e) => e.joinTournament),
    t = i(),
    [n, c] = (0, o.useState)(``),
    [l, u] = (0, o.useState)(null),
    [d, f] = (0, o.useState)(!1),
    p = async () => {
      let r = N(n);
      if (r.length < 4) {
        u(`Il manque le code du salon.`);
        return;
      }
      f(!0), u(null);
      let i = await e(r);
      if ((f(!1), !i?.ok)) {
        u(
          i?.message ??
            `Connexion impossible au serveur. Vérifie ta connexion et réessaie.`,
        );
        return;
      }
      t({ to: `/tournoi/$tournoiId`, params: { tournoiId: i.id } });
    };
  return (0, s.jsxs)(`div`, {
    children: [
      (0, s.jsxs)(`form`, {
        className: `flex gap-2`,
        onSubmit: (e) => {
          e.preventDefault(), p();
        },
        children: [
          (0, s.jsx)(`input`, {
            value: n,
            onChange: (e) => {
              c(e.target.value.toUpperCase()), u(null);
            },
            placeholder: `ex. Q2XMVY`,
            autoCapitalize: `characters`,
            autoCorrect: `off`,
            spellCheck: !1,
            suppressHydrationWarning: !0,
            className: `field tracking-[0.16em]`,
          }),
          (0, s.jsx)(a, {
            type: `submit`,
            variant: `secondary`,
            disabled: d,
            children: d ? `Connexion…` : `J’y vais`,
          }),
        ],
      }),
      l &&
        (0, s.jsx)(`p`, { className: `mt-2 text-sm text-danger`, children: l }),
    ],
  });
}
export { c as t };

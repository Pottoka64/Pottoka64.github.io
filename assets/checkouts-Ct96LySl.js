import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { a as t, i as n, o as r, s as i } from "./types-UrLSRqj_.js";
var a = Array.from({ length: 20 }, (e, t) => ({ value: t + 1, multiplier: 1 })),
  o = Array.from({ length: 20 }, (e, t) => ({ value: t + 1, multiplier: 2 })),
  s = Array.from({ length: 20 }, (e, t) => ({ value: t + 1, multiplier: 3 })),
  c = { value: 25, multiplier: 1 },
  l = { value: 25, multiplier: 2 },
  u = [...s, ...a, c, ...o, l],
  d = new Set([159, 162, 163, 165, 166, 168, 169]);
function f(e, n) {
  return n === `open` ? t(e) > 0 : n === `double` ? r(e) : i(e);
}
function p(e) {
  return e === `open` ? u : e === `double` ? [...o, l] : [...o, ...s, l];
}
function m(e) {
  let n = t(e);
  return e.value === 20 && e.multiplier === 3
    ? 1e3
    : e.value === 19 && e.multiplier === 3
      ? 900
      : e.value === 18 && e.multiplier === 3
        ? 800
        : e.value === 25 && e.multiplier === 2
          ? 700
          : e.multiplier === 3
            ? 400 + n
            : e.multiplier === 2
              ? 200 + n
              : n;
}
var h = [20, 16, 18, 10, 12, 8, 4, 19, 17, 15];
function g(e, t) {
  let n = 0;
  for (let t = 0; t < e.length; t++) n += m(e[t]) * (e.length - t);
  let r = e[e.length - 1];
  if (r && t !== `open`) {
    let e = h.indexOf(r.value);
    n += e === -1 ? 0 : (10 - e) * 50;
  }
  return (n += (3 - e.length) * 5e3), n;
}
function _(e, r, i, a = 4) {
  if (e <= 0 || r <= 0 || (i === `double` && e === 1)) return [];
  let o = p(i),
    s = [],
    c = new Set();
  function l(e) {
    let t = e.map(n).join(`-`);
    c.has(t) || (c.add(t), s.push(e));
  }
  if (r >= 1) for (let n of o) t(n) === e && f(n, i) && l([n]);
  if (r >= 2)
    for (let n of u) {
      let r = e - t(n);
      if (!(r <= 0)) for (let e of o) t(e) === r && f(e, i) && l([n, e]);
    }
  if (r >= 3)
    for (let n of u) {
      let r = e - t(n);
      if (!(r <= 0)) {
        for (let e of u) {
          let a = r - t(e);
          if (!(a <= 0)) {
            for (let r of o)
              if (t(r) === a && f(r, i) && (l([n, e, r]), s.length > 80)) break;
            if (s.length > 80) break;
          }
        }
        if (s.length > 80) break;
      }
    }
  return s.sort((e, t) => g(t, i) - g(e, i)), s.slice(0, a);
}
function v(e) {
  return e.map(n).join(`  `);
}
var y = [...d].sort((e, t) => t - e),
  b = null;
function x() {
  if (b) return b;
  let e = [];
  for (let t = 170; t >= 2; t--) {
    if (d.has(t)) continue;
    let n = _(t, 3, `double`, 1)[0];
    n && e.push({ score: t, route: v(n) });
  }
  return (b = e), e;
}
var S = e();
function C() {
  let e = x();
  return (0, S.jsxs)(`main`, {
    className: `mx-auto max-w-3xl px-4 py-8`,
    children: [
      (0, S.jsx)(`p`, { className: `stamp stamp-red`, children: `Double out` }),
      (0, S.jsx)(`h1`, {
        className: `mt-4 font-display text-4xl font-semibold tracking-tight text-board-cream`,
        children: `Checkouts`,
      }),
      (0, S.jsxs)(`p`, {
        className: `mt-3 text-muted`,
        children: [
          `Routes préférées en trois fléchettes, de 170 au double 1. Les nombres bogey —`,
          ` `,
          y.join(`, `),
          ` — ne se finissent pas en une visite.`,
        ],
      }),
      (0, S.jsx)(`p`, {
        className: `mt-2 text-sm text-subtle`,
        children: `Convention : T = triple, D = double, 50 = bull intérieur. Le 25 n’est pas un double.`,
      }),
      (0, S.jsx)(`div`, {
        className: `mt-8 overflow-hidden surface-card`,
        children: (0, S.jsxs)(`table`, {
          className: `w-full text-left`,
          children: [
            (0, S.jsx)(`thead`, {
              children: (0, S.jsxs)(`tr`, {
                className: `border-b border-line text-xs uppercase tracking-[0.16em] text-board-cream`,
                children: [
                  (0, S.jsx)(`th`, {
                    className: `px-4 py-3 font-medium`,
                    children: `Score`,
                  }),
                  (0, S.jsx)(`th`, {
                    className: `px-4 py-3 font-medium`,
                    children: `Route`,
                  }),
                ],
              }),
            }),
            (0, S.jsx)(`tbody`, {
              children: e.map((e) =>
                (0, S.jsxs)(
                  `tr`,
                  {
                    className:
                      e.score === 170
                        ? `border-b border-line/60 bg-board-red/20`
                        : `border-b border-line/60`,
                    children: [
                      (0, S.jsx)(`td`, {
                        className: `px-4 py-2.5 font-display text-xl tabular-nums text-board-cream`,
                        children: e.score,
                      }),
                      (0, S.jsx)(`td`, {
                        className: `px-4 py-2.5 font-display text-lg tracking-wide`,
                        children: e.route,
                      }),
                    ],
                  },
                  e.score,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
export { C as component };

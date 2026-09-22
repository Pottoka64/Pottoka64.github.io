import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { S as t, g as n, t as r, x as i } from "./store-QFDO1GxK.js";
import { t as a } from "./link-BA5v6P_F.js";
import { t as o } from "./types-UrLSRqj_.js";
import { a as s } from "./index-vl6VoVn-.js";
import { t as c } from "./button-DVevz7Ul.js";
import { t as l } from "./join-form-plRLSa1H.js";
import { n as u, t as d } from "./formats-M2QI3UJX.js";
var f = s(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  p = e(),
  m = {
    innerBull: 0.038,
    outerBull: 0.094,
    tripleInner: 0.57,
    tripleOuter: 0.628,
    doubleInner: 0.948,
    doubleOuter: 1,
    numbers: 1.16,
    wire: 1.28,
  };
function h(e) {
  return (Math.round(e * 1e3) / 1e3).toFixed(3);
}
function g(e, t, n, r) {
  return [h(e + n * Math.cos(r)), h(t + n * Math.sin(r))];
}
function _(e, t, n, r, i, a) {
  let o = g(e, t, r, i),
    s = g(e, t, r, a),
    c = g(e, t, n, a),
    l = g(e, t, n, i),
    u = +(a - i > Math.PI),
    d = h(n),
    f = h(r);
  return [
    `M ${o[0]} ${o[1]}`,
    `A ${f} ${f} 0 ${u} 1 ${s[0]} ${s[1]}`,
    `L ${c[0]} ${c[1]}`,
    `A ${d} ${d} 0 ${u} 0 ${l[0]} ${l[1]}`,
    `Z`,
  ].join(` `);
}
function v({ className: e }) {
  let n = 36.5,
    r = o.map((e, t) => {
      let n = -Math.PI / 2 + (Math.PI / 10) * t;
      return {
        n: e,
        a0: n - Math.PI / 20,
        a1: n + Math.PI / 20,
        aMid: n,
        red: t % 2 == 0,
      };
    });
  return (0, p.jsxs)(`svg`, {
    viewBox: `0 0 100 100`,
    className: t(`mx-auto aspect-square w-full max-w-[420px] select-none`, e),
    role: `img`,
    "aria-label": `Cible de fléchettes`,
    children: [
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.wire * n),
        className: `fill-inset`,
      }),
      r.map((e) => {
        let t = e.red ? `var(--color-inset)` : `var(--color-board-cream)`,
          r = e.red ? `var(--color-board-red)` : `var(--color-board-green)`,
          i = g(50, 50, m.numbers * n, e.aMid);
        return (0, p.jsxs)(
          `g`,
          {
            children: [
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.outerBull * n, m.tripleInner * n, e.a0, e.a1),
                fill: t,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.tripleInner * n, m.tripleOuter * n, e.a0, e.a1),
                fill: r,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.tripleOuter * n, m.doubleInner * n, e.a0, e.a1),
                fill: t,
              }),
              (0, p.jsx)(`path`, {
                d: _(50, 50, m.doubleInner * n, m.doubleOuter * n, e.a0, e.a1),
                fill: r,
              }),
              (0, p.jsx)(`text`, {
                x: i[0],
                y: i[1],
                textAnchor: `middle`,
                dominantBaseline: `middle`,
                className: `fill-fg font-display text-[4.2px] font-semibold tracking-wide`,
                pointerEvents: `none`,
                children: e.n,
              }),
            ],
          },
          e.n,
        );
      }),
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.outerBull * n),
        className: `fill-board-green`,
      }),
      (0, p.jsx)(`circle`, {
        cx: 50,
        cy: 50,
        r: h(m.innerBull * n),
        className: `fill-board-red`,
      }),
    ],
  });
}
function y() {
  let e = r((e) => e.players),
    o = r((e) => e.matches),
    s = r((e) => e.tournaments),
    m = Object.fromEntries(e.map((e) => [e.id, e.name])),
    h = o.slice(0, 4),
    g = s.filter((e) => e.status === `running`).slice(0, 3),
    _ = s.filter((e) => e.status === `complete`).slice(0, 3);
  return (0, p.jsxs)(`main`, {
    className: `relative mx-auto max-w-6xl overflow-x-hidden px-4 pb-10 pt-8 sm:pt-12`,
    children: [
      (0, p.jsxs)(`div`, {

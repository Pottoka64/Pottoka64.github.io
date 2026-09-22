import { r as e } from "./jsx-runtime-BkSabwWG.js";
import { f as t, r as n, v as r } from "./useRouter-B1ejQzOU.js";
import { n as i, r as a } from "./types-UrLSRqj_.js";
import {
  Wo as __ocheShareWo,
  Go as __ocheShareGo,
  Ko as __ocheShareKo,
  qo as __ocheShareQo,
  Jo as __ocheShareJo,
  Yo as __ocheShareYo,
} from "./share-backend.js";
var o = `__TSS_CONTEXT`,
  s = Symbol.for(`TSS_SERVER_FUNCTION`),
  c = Symbol.for(`TSS_SERVER_FUNCTION_FACTORY`),
  l = `application/x-tss-framed`,
  u = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${l}`;
var d = /;\s*v=(\d+)/;
function f(e) {
  let t = e.match(d);
  return t ? parseInt(t[1], 10) : void 0;
}
function p(e) {
  let t = f(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var m = () => window.__TSS_START_OPTIONS__;
function h(e) {
  return e?.isNotFound === !0;
}
function g(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function ee(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``;
}
function te(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = ee(r))
      : Array.isArray(t)
        ? t.push(ee(r))
        : (n[e] = [t, ee(r)]);
  }
  return n;
}
function ne(e) {
  (e.statusCode = e.statusCode || e.code || 307),
    !e.reloadDocument &&
      typeof e.href == `string` &&
      t(e.href) &&
      (e.reloadDocument = !0);
  let n = new Headers(e.headers);
  e.href && n.get(`Location`) === null && n.set(`Location`, e.href);
  let r = new Response(null, { status: e.statusCode, headers: n });
  if (((r.options = e), e.throw)) throw r;
  return r;
}
function _(e) {
  return e instanceof Response && !!e.options;
}
function re(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return ne(e);
}
var v = Symbol.asyncIterator,
  ie = Symbol.hasInstance,
  y = Symbol.isConcatSpreadable,
  b = Symbol.iterator,
  ae = Symbol.match,
  oe = Symbol.matchAll,
  se = Symbol.replace,
  ce = Symbol.search,
  le = Symbol.species,
  x = Symbol.split,
  S = Symbol.toPrimitive,
  C = Symbol.toStringTag,
  ue = Symbol.unscopables,
  de = {
    [v]: 0,
    [ie]: 1,
    [y]: 2,
    [b]: 3,
    [ae]: 4,
    [oe]: 5,
    [se]: 6,
    [ce]: 7,
    [le]: 8,
    [x]: 9,
    [S]: 10,
    [C]: 11,
    [ue]: 12,
  },
  w = {
    0: v,
    1: ie,
    2: y,
    3: b,
    4: ae,
    5: oe,
    6: se,
    7: ce,
    8: le,
    9: x,
    10: S,
    11: C,
    12: ue,
  },
  fe = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  pe = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  me = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function T(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function E(e) {
  return T(
    2,
    void 0,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
var D = E(2),
  he = E(3),
  ge = E(1),
  O = E(0),
  _e = E(4),
  ve = E(5),
  ye = E(6),
  be = E(7);
function xe(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function k(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    (r = xe(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1));
  return n === 0 ? (t = e) : (t += e.slice(n)), t;
}
function Se(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function A(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Se);
}
var { toString: Ce } = Object.prototype,
  we = { parsing: 1, serialization: 2, deserialization: 3 };
function Te(e) {
  return `Seroval Error (step: ${we[e]})`;
}
var Ee = (e, t) => Te(e),
  De = class extends Error {
    constructor(e, t) {
      super(Ee(e, t)), (this.cause = t);
    }
  },
  Oe = class extends De {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  ke = class extends De {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function j(e) {
  return `Seroval Error (specific: ${e})`;
}
var M = class extends Error {
    constructor(e) {
      super(j(1)), (this.value = e);
    }
  },
  Ae = class extends Error {
    constructor(e) {
      super(j(2));
    }
  },
  je = class extends Error {
    constructor(e) {
      super(j(3));
    }
  },
  Me = class extends Error {
    constructor(e) {
      super(j(4));
    }
  },
  Ne = class extends Error {
    constructor(e) {
      super(j(5)), (this.value = e);
    }
  },
  Pe = class extends Error {
    constructor(e) {
      super(j(6));
    }
  },
  Fe = class extends Error {
    constructor(e) {
      super(j(7));
    }
  },
  N = class extends Error {
    constructor(e) {
      super(j(8));
    }
  },
  Ie = class extends Error {
    constructor(e) {
      super(j(9));
    }
  },
  Le = `__SEROVAL_REFS__`,
  Re = new Map(),
  ze = new Map();
function Be(e) {
  return Re.has(e);
}
function Ve(e) {
  return ze.has(e);
}
function He(e) {
  if (Be(e)) return Re.get(e);
  throw new Ne(e);
}
function Ue(e) {
  if (Ve(e)) return ze.get(e);
  throw new Pe(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Le, {
      value: ze,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Le, {
        value: ze,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Le, {
          value: ze,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Le, {
          value: ze,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function We(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Ge(e) {
  let t = pe[We(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Ke(e, t) {
  let n = Ge(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    (o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o])));
  return n;
}
function qe(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e);
}
function Je(e) {
  switch (e) {
    case 1 / 0:
      return ve;
    case -1 / 0:
      return ye;
  }
  return e === e
    ? Object.is(e, -0)
      ? _e
      : T(
          0,
          void 0,
          e,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
        )
    : be;
}
function Ye(e) {
  return T(
    1,
    void 0,
    k(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Xe(e) {
  return T(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Ze(e) {
  return T(
    4,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Qe(e, t) {
  let n = t.valueOf();
  return T(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function P(e, t, n) {
  return T(
    36,
    e,
    n.toString(),
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function $e(e, t) {
  return T(
    6,
    e,
    void 0,
    k(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function et(e, t) {
  return T(
    17,
    e,
    de[t],
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function tt(e, t) {
  return T(
    18,
    e,
    k(He(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function nt(e, t, n) {
  return T(
    25,
    e,
    n,
    k(t),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function rt(e, t, n) {
  return T(
    9,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    void 0,
    void 0,
    qe(t),
    void 0,
  );
}
function it(e, t) {
  return T(
    21,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
var at = 1e6;
function ot(e, t, n) {
  if (t.length > at) throw new M(t);
  return T(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function st(e, t, n) {
  if (t.length > at) throw new M(t);
  return T(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function ct(e, t, n) {
  if (t.byteLength > at) throw new M(t);
  return T(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function lt(e, t, n) {
  return T(
    13,
    e,
    We(t),
    void 0,
    k(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ut(e, t, n) {
  return T(
    14,
    e,
    We(t),
    void 0,
    k(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function dt(e, t) {
  return T(
    7,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ft(e, t) {
  return T(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function pt(e, t) {
  return T(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function mt(e, t, n) {
  return T(
    31,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function ht(e, t) {
  return T(
    32,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function gt(e, t) {
  return T(
    33,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function _t(e, t) {
  return T(
    34,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function vt(e, t, n, r) {
  return T(
    35,
    e,
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    r,
  );
}
var yt = class {
    constructor(e, t) {
      (this.value = e), (this.replacement = t);
    }
  },
  bt = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        (e.s = t), (e.f = n);
      })),
      e
    );
  },
  xt = () => {
    let e = [],
      t = [],
      n = !0,
      r = !1,
      i = 0,
      a = {
        flush(e, n, r) {
          for (r = 0; r < i; r++) t[r] && t[r][n](e);
        },
        up(t, i, a, o) {
          for (i = 0, a = e.length; i < a; i++)
            (o = e[i]),
              !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o);
        },
        on(e, r) {
          return (
            n && ((r = i++), (t[r] = e)),
            a.up(e),
            () => {
              n && ((t[r] = t[i]), (t[i--] = void 0));
            }
          );
        },
      };
    return {
      __SEROVAL_STREAM__: !0,
      on(e) {
        return a.on(e);
      },
      next(t) {
        n && (e.push(t), a.flush(t, `next`));
      },
      throw(i) {
        n &&
          (e.push(i), a.flush(i, `throw`), (n = !1), (r = !1), (t.length = 0));
      },
      return(i) {
        n &&
          (e.push(i), a.flush(i, `return`), (n = !1), (r = !0), (t.length = 0));
      },
    };
  },
  St = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Ct = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        t && t.s({ done: !1, value: e }), o.push(e);
      },
      throw(e) {
        let t = s.shift();
        t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e);
      },
      return(e) {
        let t = s.shift();
        t && t.s({ done: !0, value: e }),
          c.finalize(),
          (i = o.length),
          o.push(e);
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return s.push(e), e.p;
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  wt = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  };
function Tt(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function Et(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function Dt(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[b]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      (n = t.length), t.push(e);
    }
  return Et(t, n, r);
}
var Ot = St(b);
function kt(e) {
  return Ot(e);
}
var At = {},
  jt = {},
  Mt = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function Nt(e) {
  return `__SEROVAL_STREAM__` in e;
}
function F() {
  return xt();
}
function Pt(e) {
  let t = F(),
    n = e[v]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return r().catch(() => {}), t;
}
var Ft = Ct(v, bt);
function It(e) {
  return Ft(e);
}
async function Lt(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Rt(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function zt(e, t) {
  e.marked.add(t);
}
function Bt(e, t) {
  let n = e.refs.size;
  return e.refs.set(t, n), n;
}
function Vt(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: Bt(e, t) }
    : (zt(e, n), { type: 1, value: Ze(n) });
}
function Ht(e, t) {
  let n = Vt(e, t);
  return n.type === 1 ? n : Be(t) ? { type: 2, value: tt(n.value, t) } : n;
}
function I(e, t) {
  let n = Ht(e, t);
  if (n.type !== 0) return n.value;
  if (t in de) return et(n.value, t);
  throw new M(t);
}
function Ut(e, t) {
  let n = Vt(e, Mt[t]);
  return n.type === 1
    ? n.value
    : T(
        26,
        n.value,
        t,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function Wt(e) {
  let t = Vt(e, At);
  return t.type === 1
    ? t.value
    : T(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        I(e, b),
        void 0,
        void 0,
        void 0,
      );
}
function Gt(e) {
  let t = Vt(e, jt);
  return t.type === 1
    ? t.value
    : T(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [Ut(e, 1), I(e, v)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function Kt(e, t, n, r) {
  return T(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    qe(t),
    void 0,
  );
}
function qt(e, t, n, r) {
  return T(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    Ut(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function Jt(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return T(
    19,
    t,
    k(btoa(i)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    Ut(e, 5),
    void 0,
    void 0,
    void 0,
  );
}
function Yt(e, t) {
  return { base: Rt(e, t), child: void 0 };
}
var Xt = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  parse(e) {
    return L(this._p, this.depth, e);
  }
};
async function Zt(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await L(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Qt(e, t, n, r) {
  return rt(n, r, await Zt(e, t, r));
}
async function $t(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    i.push(k(r[n][0])), a.push(await L(e, t, r[n][1]));
  return (
    b in n &&
      (i.push(I(e.base, b)), a.push(ft(Wt(e.base), await L(e, t, Dt(n))))),
    v in n &&
      (i.push(I(e.base, v)), a.push(pt(Gt(e.base), await L(e, t, Pt(n))))),
    C in n && (i.push(I(e.base, C)), a.push(Ye(n[C]))),
    y in n && (i.push(I(e.base, y)), a.push(n[y] ? D : he)),
    { k: i, v: a }
  );
}
async function en(e, t, n, r, i) {
  return Kt(n, r, i, await $t(e, t, r));
}
async function tn(e, t, n, r) {
  return it(n, await L(e, t, r.valueOf()));
}
async function nn(e, t, n, r) {
  return ot(n, r, await L(e, t, r.buffer));
}
async function rn(e, t, n, r) {
  return st(n, r, await L(e, t, r.buffer));
}
async function an(e, t, n, r) {
  return ct(n, r, await L(e, t, r.buffer));
}
async function on(e, t, n, r) {
  let i = Ke(r, e.base.features);
  return lt(n, r, i ? await $t(e, t, i) : void 0);
}
async function sn(e, t, n, r) {
  let i = Ke(r, e.base.features);
  return ut(n, r, i ? await $t(e, t, i) : void 0);
}
async function cn(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    i.push(await L(e, t, n)), a.push(await L(e, t, o));
  return qt(e.base, n, i, a);
}
async function ln(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await L(e, t, n));
  return dt(n, i);
}
async function un(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return nt(n, o.tag, await o.parse.async(r, new Xt(e, t), { id: n }));
    }
}
async function dn(e, t, n, r) {
  let [i, a] = await Lt(r);
  return T(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await L(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function fn(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        zt(this.base, t),
          L(this, e, n).then(
            (e) => {
              a.push(ht(t, e));
            },
            (e) => {
              i(e), o();
            },
          );
      },
      throw: (n) => {
        zt(this.base, t),
          L(this, e, n).then(
            (e) => {
              a.push(gt(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            },
          );
      },
      return: (n) => {
        zt(this.base, t),
          L(this, e, n).then(
            (e) => {
              a.push(_t(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            },
          );
      },
    });
}
async function pn(e, t, n, r) {
  return mt(n, Ut(e.base, 4), await new Promise(fn.bind(e, t, n, r)));
}
async function mn(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await L(e, t, r.v[n]);
  return vt(n, i, r.t, r.d);
}
async function hn(e, t, n, r) {
  if (Array.isArray(r)) return Qt(e, t, n, r);
  if (Nt(r)) return pn(e, t, n, r);
  if (Tt(r)) return mn(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === yt) return L(e, t, r.replacement);
  let a = await un(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return en(e, t, n, r, !1);
    case void 0:
      return en(e, t, n, r, !0);
    case Date:
      return Qe(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return on(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return tn(e, t, n, r);
    case ArrayBuffer:
      return Jt(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return nn(e, t, n, r);
    case DataView:
      return an(e, t, n, r);
    case Map:
      return cn(e, t, n, r);
    case Set:
      return ln(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return dn(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return $e(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return rn(e, t, n, r);
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return sn(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return P(n, 0, r);
      case Temporal.Duration:
        return P(n, 1, r);
      case Temporal.PlainDate:
        return P(n, 2, r);
      case Temporal.PlainDateTime:
        return P(n, 3, r);
      case Temporal.PlainMonthDay:
        return P(n, 4, r);
      case Temporal.PlainTime:
        return P(n, 5, r);
      case Temporal.PlainYearMonth:
        return P(n, 6, r);
      case Temporal.ZonedDateTime:
        return P(n, 7, r);
    }
  if (r instanceof Error) return on(e, t, n, r);
  if (b in r || v in r) return en(e, t, n, r, !!i);
  throw new M(r);
}
async function gn(e, t, n) {
  let r = Ht(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await un(e, t, r.value, n);
  if (i) return i;
  throw new M(n);
}
async function L(e, t, n) {
  if (t >= e.base.depthLimit) throw new Ie(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? D : he;
    case `undefined`:
      return ge;
    case `string`:
      return Ye(n);
    case `number`:
      return Je(n);
    case `bigint`:
      return Xe(n);
    case `object`:
      if (n) {
        let r = Ht(e.base, n);
        return r.type === 0 ? await hn(e, t + 1, r.value, n) : r.value;
      }
      return O;
    case `symbol`:
      return I(e.base, n);
    case `function`:
      return gn(e, t, n);
    default:
      throw new M(n);
  }
}
async function _n(e, t) {
  try {
    return await L(e, 0, t);
  } catch (e) {
    throw e instanceof Oe ? e : new Oe(e);
  }
}
function R(e) {
  return e;
}
function vn(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && vn(e, r.extends));
  }
}
function yn(e) {
  if (e) {
    let t = new Set();
    return vn(t, e), [...t];
  }
}
function bn(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new Fe(e);
  }
}
function xn(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Sn(e) {
  switch (e) {
    case v:
    case y:
    case C:
    case b:
      return !0;
    default:
      return !1;
  }
}
var Cn = 1e6,
  wn = 1e4,
  Tn = 2e4;
function En(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Dn = 1e3;
function On(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Dn,
    }
  );
}
function kn(e) {
  return { mode: 2, base: On(2, e), child: void 0 };
}
var An = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  deserialize(e) {
    return B(this._p, this.depth, e);
  }
};
function jn(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new N({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Mn(e) {
  return (
    !!e && typeof e == `object` && `then` in e && typeof e.then == `function`
  );
}
function Nn(e, t, n) {
  return jn(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n;
}
function Pn(e, t, n) {
  return jn(e.base, t), e.base.refs.set(t, n), n;
}
function z(e, t, n) {
  return e.mode === 1 ? Nn(e, t, n) : Pn(e, t, n);
}
function Fn(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new N(e);
}
function In(e, t) {
  return z(e, t.i, Ue(A(t.s)));
}
function Ln(e, t, n) {
  let r = n.a,
    i = r.length,
    a = z(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) (o = r[n]), o && (a[n] = B(e, t, o));
  return En(a, n.o), a;
}
function Rn(e, t, n) {
  xn(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function zn(e, t, n, r, i) {
  if (typeof r == `string`) Rn(n, A(r), B(e, t, i));
  else {
    let a = B(e, t, r);
    switch (typeof a) {
      case `string`:
        Rn(n, a, B(e, t, i));
        break;
      case `symbol`:
        Sn(a) && (n[a] = B(e, t, i));
        break;
      default:
        throw new N(r);
    }
  }
}
function Bn(e, t, n) {
  e.base.refs.types.set(t, n);
}
function Vn(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new N(t);
}
function Hn(e, t, n, r) {
  let i = n.k;
  if (i.length > 0)
    for (let a = 0, o = n.v, s = i.length; a < s; a++) zn(e, t, r, i[a], o[a]);
  return r;
}
function Un(e, t, n) {
  let r = z(e, n.i, n.t === 10 ? {} : Object.create(null));
  return Hn(e, t, n.p, r), En(r, n.o), r;
}
function Wn(e, t) {
  return z(e, t.i, new Date(t.s));
}
function Gn(e, t) {
  if (!(e.base.features & 64)) throw new Ae(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new N(t);
  }
  return z(e, t.i, n);
}
function Kn(e, t) {
  if (e.base.features & 32) {
    let n = A(t.c);
    if (n.length > Tn) throw new N(t);
    return z(e, t.i, new RegExp(n, t.m));
  }
  throw new Ae(t);
}
function qn(e, t, n) {
  let r = z(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(B(e, t, a[i]));
  return r;
}
function Jn(e, t, n) {
  let r = z(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(B(e, t, a[i]), B(e, t, o[i]));
  return r;
}
function Yn(e, t) {
  if (t.s.length > Cn) throw new N(t);
  return z(e, t.i, wt(A(t.s)));
}
function Xn(e, t, n) {
  let r = bn(n.c),
    i = B(e, t, n.f);
  if (!(i instanceof ArrayBuffer)) throw new N(n);
  let a = n.b ?? 0;
  if (a < 0 || a > i.byteLength || n.l > Cn) throw new N(n);
  return z(e, n.i, new r(i, a, n.l));
}
function Zn(e, t, n) {
  let r = B(e, t, n.f);
  if (!(r instanceof ArrayBuffer)) throw new N(n);
  let i = n.b ?? 0;
  if (i < 0 || i > r.byteLength || n.l > Cn) throw new N(n);
  return z(e, n.i, new DataView(r, i, n.l));
}
function Qn(e, t, n, r) {
  if (n.p) {
    let i = Hn(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function $n(e, t, n) {
  return Qn(e, t, n, z(e, n.i, AggregateError([], A(n.m))));
}
function er(e, t, n) {
  let r = Fn(n, me, n.s);
  return Qn(e, t, n, z(e, n.i, new r(A(n.m))));
}
function tr(e, t, n) {
  let r = bt(),
    i = z(e, n.i, r.p),
    a = B(e, t, n.f);
  if (Mn(a)) throw new N(n.f);
  return n.s ? r.s(a) : r.f(a), i;
}
function nr(e, t, n) {
  return z(e, n.i, Object(B(e, t, n.f)));
}
function rr(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = A(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return z(e, n.i, o.deserialize(n.s, new An(e, t), { id: n.i }));
    }
  }
  throw new je(n.c);
}
function ir(e, t) {
  let n = z(e, t.i, z(e, t.s, bt()).p);
  return Bn(e, t.s, 22), n;
}
function ar(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    Vn(e, n, n.i, 22);
    let i = B(e, t, n.a[1]);
    if (Mn(i)) throw new N(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new Me(`Promise`);
}
function or(e, t, n) {
  B(e, t, n.a[0]);
  let r = B(e, t, n.a[1]);
  if (!r || typeof r != `object` || !Tt(r)) throw new N(n.a[1]);
  return kt(r);
}
function sr(e, t, n) {
  B(e, t, n.a[0]);
  let r = B(e, t, n.a[1]);
  if (!r || typeof r != `object` || !Nt(r)) throw new N(n.a[1]);
  return It(r);
}
function cr(e, t, n) {
  let r = z(e, n.i, F());
  Bn(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) B(e, t, i[n]);
  return r;
}
function lr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    Vn(e, n, n.i, 31), r.next(B(e, t, n.f));
    return;
  }
  throw new Me(`Stream`);
}
function ur(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    Vn(e, n, n.i, 31), r.throw(B(e, t, n.f));
    return;
  }
  throw new Me(`Stream`);
}
function dr(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    Vn(e, n, n.i, 31), r.return(B(e, t, n.f));
    return;
  }
  throw new Me(`Stream`);
}
function fr(e, t, n) {
  B(e, t, n.f);
}
function pr(e, t, n) {
  B(e, t, n.a[1]);
}
function mr(e, t, n) {
  let r = z(e, n.i, Et([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = B(e, t, n.a[i]);
  return r;
}
function B(e, t, n) {
  if (t > e.base.depthLimit) throw new Ie(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return Fn(n, fe, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return A(String(n.s));
    case 3:
      if (String(n.s).length > wn) throw new N(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return In(e, n);
    case 9:
      return Ln(e, t, n);
    case 10:
    case 11:
      return Un(e, t, n);
    case 5:
      return Wn(e, n);
    case 6:
      return Kn(e, n);
    case 7:
      return qn(e, t, n);
    case 8:
      return Jn(e, t, n);
    case 19:
      return Yn(e, n);
    case 16:
    case 15:
      return Xn(e, t, n);
    case 20:
      return Zn(e, t, n);
    case 14:
      return $n(e, t, n);
    case 13:
      return er(e, t, n);
    case 12:
      return tr(e, t, n);
    case 17:
      return Fn(n, w, n.s);
    case 21:
      return nr(e, t, n);
    case 25:
      return rr(e, t, n);
    case 22:
      return ir(e, n);
    case 23:
    case 24:
      return ar(e, t, n);
    case 28:
      return or(e, t, n);
    case 30:
      return sr(e, t, n);
    case 31:
      return cr(e, t, n);
    case 32:
      return lr(e, t, n);
    case 33:
      return ur(e, t, n);
    case 34:
      return dr(e, t, n);
    case 27:
      return fr(e, t, n);
    case 29:
      return pr(e, t, n);
    case 35:
      return mr(e, t, n);
    case 36:
      return Gn(e, n);
    default:
      throw new Ae(n);
  }
}
function hr(e, t) {
  try {
    return B(e, 0, t);
  } catch (e) {
    throw new ke(e);
  }
}
function gr(e, t) {
  return hr(
    kn({
      plugins: yn(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function _r(e, t = {}) {
  let n = Yt(1, {
    plugins: yn(t.plugins),
    disabledFeatures: t.disabledFeatures,
  });
  return {
    t: await _n(n, e),
    f: n.base.features,
    m: Array.from(n.base.marked),
  };
}
function vr(e) {
  return e;
}
function yr(e) {
  return R({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var br = class {
    constructor(e, t) {
      (this.stream = e), (this.hint = t?.hint ?? `binary`);
    }
  },
  xr = globalThis.Buffer,
  Sr = !!xr && typeof xr.from == `function`;
function Cr(e) {
  if (e.length === 0) return ``;
  if (Sr) return xr.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function wr(e) {
  if (e.length === 0) return new Uint8Array();
  if (Sr) {
    let t = xr.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var Tr = Object.create(null),
  Er = Object.create(null),
  Dr = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(wr(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Or = new TextEncoder(),
  kr = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string`
                ? t.enqueue(Or.encode(e))
                : t.enqueue(wr(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ar = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  jr = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Mr(e) {
  let t = F(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Cr(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Nr(e) {
  let t = F(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Cr(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var Pr = R({
  tag: `tss/RawStream`,
  extends: [
    R({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === Tr;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ar;
      },
      deserialize(e, t, n) {
        return Tr;
      },
    }),
    R({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === Er;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return jr;
      },
      deserialize(e, t, n) {
        return Er;
      },
    }),
  ],
  test(e) {
    return e instanceof br;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? Er : Tr;
      return {
        hint: t.parse(e.hint),
        factory: t.parse(r),
        stream: t.parse(F()),
      };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? Er : Tr,
        i = e.hint === `text` ? Nr(e.stream) : Mr(e.stream);
      return {
        hint: await t.parse(e.hint),
        factory: await t.parse(r),
        stream: await t.parse(i),
      };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? Er : Tr,
        i = e.hint === `text` ? Nr(e.stream) : Mr(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? kr(r) : Dr(r);
  },
});
function Fr(e) {
  return R({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(
        typeof n?.deserialize == `function`
          ? n.deserialize(t.streamId)
          : t.streamId,
      );
    },
  });
}
var Ir = R({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  V = {},
  Lr = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Rr = R({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === V;
    },
    parse: {
      sync() {
        return V;
      },
      async async() {
        return await Promise.resolve(V);
      },
      stream() {
        return V;
      },
    },
    serialize() {
      return Lr.toString();
    },
    deserialize() {
      return V;
    },
  });
async function zr(e, t) {
  try {
    let n = await t.read();
    n.done
      ? (e.return(n.value), t.releaseLock())
      : (e.next(n.value), await zr(e, t));
  } catch (t) {
    e.throw(t);
  }
}
function Br(e) {
  e.cancel().catch(() => {}), e.releaseLock();
}
function Vr(e) {
  let t = F(),
    n = e.getReader(),
    r = Br.bind(null, n);
  return zr(t, n).catch(r), [t, r];
}
var Hr = [
  Ir,
  Pr,
  R({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [Rr],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(V), stream: t.parse(F()) };
      },
      async async(e, t) {
        return { factory: await t.parse(V), stream: await t.parse(Vr(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = Vr(e);
        return t.addCleanup(r), { factory: t.parse(V), stream: t.parse(n) };
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return Lr(t.deserialize(e.stream));
    },
  }),
];
function Ur() {
  return [...(m()?.serializationAdapters?.map(yr) ?? []), ...Hr];
}
var Wr = new TextDecoder(),
  Gr = new Uint8Array(),
  Kr = 16777216,
  qr = 33554432,
  Jr = 1024,
  Yr = 1e5;
function Xr(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear();
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= Jr)
      throw Error(`Too many raw streams in framed response (max ${Jr})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        r.add(e), t.delete(e), n.delete(e);
      },
    });
    return n.set(e, a), a;
  }
  function d(e) {
    return l(e), t.get(e);
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0,
        f = 0;
      function p() {
        (c[l++] = Gr),
          l === c.length
            ? ((c.length = 0), (l = 0))
            : l >= 32 && (c.splice(0, l), (l = 0));
      }
      function m() {
        if (f < 9) return null;
        let e = c[l];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = l; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          t.set(i.subarray(0, a), n), (n += a), (r -= a);
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function h(e) {
        if (e === 0) return Gr;
        let t = c[l];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return t.length === e ? p() : (c[l] = t.subarray(e)), (f -= e), n;
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && l < c.length; ) {
          let e = c[l],
            t = Math.min(e.length, i);
          n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? p() : (c[l] = e.subarray(t));
        }
        return (f -= e), n;
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (f + a.length > qr)
              throw Error(`Framed response buffer exceeded ${qr} bytes`);
            for (c.push(a), f += a.length; ; ) {
              let e = m();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== u.JSON && n !== u.CHUNK && n !== u.END && n !== u.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === u.JSON) {
                if (i !== 0)
                  throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0)
                throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > Kr)
                throw Error(`Frame payload too large: ${a} bytes (max ${Kr})`);
              let c = 9 + a;
              if (f < c) break;
              if (++o > Yr)
                throw Error(`Too many frames in framed response (max ${Yr})`);
              h(9);
              let l = h(a);
              switch (n) {
                case u.JSON:
                  try {
                    s.enqueue(Wr.decode(l));
                  } catch {}
                  break;
                case u.CHUNK: {
                  let e = d(i);
                  e && e.enqueue(l);
                  break;
                }
                case u.END: {
                  let e = d(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case u.ERROR: {
                  let e = d(i);
                  if ((r.add(i), e)) {
                    let n = Wr.decode(l);
                    e.error(Error(n)), t.delete(i);
                  }
                  break;
                }
              }
            }
          }
        }
        if (f !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear();
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear();
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getStream: l, chunks: c }
  );
}
var Zr = null;
async function Qr(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var $r = Object.prototype.hasOwnProperty;
function ei(e) {
  for (let t in e) if ($r.call(e, t)) return !0;
  return !1;
}
async function ti(e, t, n) {
  Zr ||= Ur();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` &&
      o.set(`accept`, `${l}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`)
      throw Error(`FormData is not supported with GET requests`);
    let t = await ni(r);
    if (t !== void 0) {
      let n = g({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  return (
    r.method === `POST` &&
      ((s = await ii(r)),
      typeof s == `string` && o.set(`content-type`, `application/json`)),
    await ai(async () =>
      i(e, { method: r.method, headers: o, signal: r.signal, body: s }),
    )
  );
}
async function ni(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && ei(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return ri(n);
}
async function ri(e) {
  return JSON.stringify(await Promise.resolve(_r(e, { plugins: Zr })));
}
async function ii(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && ei(e.context) && (t = await ri(e.context)),
      t !== void 0 && e.data.set(o, t),
      e.data
    );
  }
  let t = await ni(e);
  if (t) return t;
}
async function ai(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let r = t.headers.get(`content-type`);
  if ((r || n(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (r.includes(`application/x-tss-framed`)) {
      if ((p(r), !t.body)) throw Error(`No response body for framed response`);
      let { getStream: n, chunks: i } = Xr(t.body),
        a = [Fr(n), ...(Zr || [])],
        o = new Map();
      e = await oi({
        jsonStream: i,
        onMessage: (e) => gr(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (r.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = gr(n, { plugins: Zr });
      } finally {
      }
      await Qr(r);
    }
    if ((e || n(), e instanceof Error)) throw e;
    return e;
  }
  if (r.includes(`application/json`)) {
    let e = await t.json(),
      n = re(e);
    if (n) throw n;
    if (h(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function oi({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await Qr(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await Qr(u),
    Promise.resolve(l).catch(() => {
      (s = !0), r.cancel().catch(() => {});
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function H(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = m()?.serverFns?.fetch;
      return ti(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [s]: !0 },
  );
}
function si(e) {
  if (Array.isArray(e)) return e.flatMap((e) => si(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length; ) {
    for (r = n, s = !1; c(); )
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l(); ) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function ci(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function li(...e) {
  return e.reduce((e, t) => {
    let n = ci(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie`
        ? si(r).forEach((t) => e.append(`set-cookie`, t))
        : e.set(t, r);
    return e;
  }, new Headers());
}
var ui = e(r(), 1);
function di(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = di(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function fi() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = di(e)) && (r && (r += ` `), (r += t));
  return r;
}
var pi = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  mi = (e, t) => ({ classGroupId: e, validator: t }),
  hi = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  gi = `-`,
  _i = [],
  vi = `arbitrary..`,
  yi = (e) => {
    let t = Si(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return xi(e);
        let n = e.split(gi);
        return bi(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? pi(i, t) : t) : i || _i;
        }
        return n[e] || _i;
      },
    };
  },
  bi = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = bi(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(gi) : e.slice(t).join(gi),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  xi = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? vi + r : void 0;
        })(),
  Si = (e) => {
    let { theme: t, classGroups: n } = e;
    return Ci(n, t);
  },
  Ci = (e, t) => {
    let n = hi();
    for (let r in e) {
      let i = e[r];
      wi(i, n, r, t);
    }
    return n;
  },
  wi = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Ti(i, t, n, r);
    }
  },
  Ti = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ei(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Di(e, t, n, r);
      return;
    }
    Oi(e, t, n, r);
  },
  Ei = (e, t, n) => {
    let r = e === `` ? t : ki(t, e);
    r.classGroupId = n;
  },
  Di = (e, t, n, r) => {
    if (Ai(e)) {
      wi(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(mi(n, e));
  },
  Oi = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      wi(o, ki(t, a), n, r);
    }
  },
  ki = (e, t) => {
    let n = e,
      r = t.split(gi),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = hi()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  Ai = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  ji = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Mi = `!`,
  Ni = `:`,
  Pi = [],
  Fi = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Ii = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Ni) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Mi)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Mi) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Fi(t, l, c, u);
      };
    if (t) {
      let e = t + Ni,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Fi(Pi, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Li = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  Ri = (e) => ({
    cache: ji(e.cacheSize),
    parseClassName: Ii(e),
    sortModifiers: Li(e),
    postfixLookupClassGroupIds: zi(e),
    ...yi(e),
  }),
  zi = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Bi = /\s+/,
  Vi = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Bi),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let ee = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        te = f ? ee + Mi : ee,
        ne = te + g;
      if (s.indexOf(ne) > -1) continue;
      s.push(ne);
      let _ = i(g, h);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        s.push(te + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  Hi = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = Ui(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Ui = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Ui(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Wi = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Ri(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Vi(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(Hi(...e));
  },
  Gi = [],
  U = (e) => {
    let t = (t) => t[e] || Gi;
    return (t.isThemeGetter = !0), t;
  },
  Ki = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  qi = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ji = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Yi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Xi =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Zi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Qi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $i =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  W = (e) => Ji.test(e),
  G = (e) => !!e && !Number.isNaN(Number(e)),
  K = (e) => !!e && Number.isInteger(Number(e)),
  ea = (e) => e.endsWith(`%`) && G(e.slice(0, -1)),
  q = (e) => Yi.test(e),
  ta = () => !0,
  na = (e) => Xi.test(e) && !Zi.test(e),
  ra = () => !1,
  ia = (e) => Qi.test(e),
  aa = (e) => $i.test(e),
  oa = (e) => !J(e) && !Y(e),
  sa = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  ca = (e) => X(e, Ea, ra),
  J = (e) => Ki.test(e),
  la = (e) => X(e, Da, na),
  ua = (e) => X(e, Oa, G),
  da = (e) => X(e, Aa, ta),
  fa = (e) => X(e, ka, ra),
  pa = (e) => X(e, wa, ra),
  ma = (e) => X(e, Ta, aa),
  ha = (e) => X(e, ja, ia),
  Y = (e) => qi.test(e),
  ga = (e) => Ca(e, Da),
  _a = (e) => Ca(e, ka),
  va = (e) => Ca(e, wa),
  ya = (e) => Ca(e, Ea),
  ba = (e) => Ca(e, Ta),
  xa = (e) => Ca(e, ja, !0),
  Sa = (e) => Ca(e, Aa, !0),
  X = (e, t, n) => {
    let r = Ki.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Ca = (e, t, n = !1) => {
    let r = qi.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  wa = (e) => e === `position` || e === `percentage`,
  Ta = (e) => e === `image` || e === `url`,
  Ea = (e) => e === `length` || e === `size` || e === `bg-size`,
  Da = (e) => e === `length`,
  Oa = (e) => e === `number`,
  ka = (e) => e === `family-name`,
  Aa = (e) => e === `number` || e === `weight`,
  ja = (e) => e === `shadow`,
  Ma = Wi(() => {
    let e = U(`color`),
      t = U(`font`),
      n = U(`text`),
      r = U(`font-weight`),
      i = U(`tracking`),
      a = U(`leading`),
      o = U(`breakpoint`),
      s = U(`container`),
      c = U(`spacing`),
      l = U(`radius`),
      u = U(`shadow`),
      d = U(`inset-shadow`),
      f = U(`text-shadow`),
      p = U(`drop-shadow`),
      m = U(`blur`),
      h = U(`perspective`),
      g = U(`aspect`),
      ee = U(`ease`),
      te = U(`animate`),
      ne = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      _ = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      re = () => [..._(), Y, J],
      v = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ie = () => [`auto`, `contain`, `none`],
      y = () => [Y, J, c],
      b = () => [W, `full`, `auto`, ...y()],
      ae = () => [K, `none`, `subgrid`, Y, J],
      oe = () => [`auto`, { span: [`full`, K, Y, J] }, K, Y, J],
      se = () => [K, `auto`, Y, J],
      ce = () => [`auto`, `min`, `max`, `fr`, Y, J],
      le = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      x = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      S = () => [`auto`, ...y()],
      C = () => [
        W,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      ue = () => [
        W,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      de = () => [
        W,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      w = () => [e, Y, J],
      fe = () => [..._(), va, pa, { position: [Y, J] }],
      pe = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      me = () => [`auto`, `cover`, `contain`, ya, ca, { size: [Y, J] }],
      T = () => [ea, ga, la],
      E = () => [``, `none`, `full`, l, Y, J],
      D = () => [``, G, ga, la],
      he = () => [`solid`, `dashed`, `dotted`, `double`],
      ge = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      O = () => [G, ea, va, pa],
      _e = () => [``, `none`, m, Y, J],
      ve = () => [`none`, G, Y, J],
      ye = () => [`none`, G, Y, J],
      be = () => [G, Y, J],
      xe = () => [W, `full`, ...y()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [q],
        breakpoint: [q],
        color: [ta],
        container: [q],
        "drop-shadow": [q],
        ease: [`in`, `out`, `in-out`],
        font: [oa],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [q],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [q],
        shadow: [q],
        spacing: [`px`, G],
        text: [q],
        "text-shadow": [q],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, W, J, Y, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Y, J] }],
        "container-named": [sa],
        columns: [{ columns: [G, J, Y, s] }],
        "break-after": [{ "break-after": ne() }],
        "break-before": [{ "break-before": ne() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: re() }],
        overflow: [{ overflow: v() }],
        "overflow-x": [{ "overflow-x": v() }],
        "overflow-y": [{ "overflow-y": v() }],
        overscroll: [{ overscroll: ie() }],
        "overscroll-x": [{ "overscroll-x": ie() }],
        "overscroll-y": [{ "overscroll-y": ie() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: b() }],
        "inset-x": [{ "inset-x": b() }],
        "inset-y": [{ "inset-y": b() }],
        start: [{ "inset-s": b(), start: b() }],
        end: [{ "inset-e": b(), end: b() }],
        "inset-bs": [{ "inset-bs": b() }],
        "inset-be": [{ "inset-be": b() }],
        top: [{ top: b() }],
        right: [{ right: b() }],
        bottom: [{ bottom: b() }],
        left: [{ left: b() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [K, `auto`, Y, J] }],
        basis: [{ basis: [W, `full`, `auto`, s, ...y()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [G, W, `auto`, `initial`, `none`, J] }],
        grow: [{ grow: [``, G, Y, J] }],
        shrink: [{ shrink: [``, G, Y, J] }],
        order: [{ order: [K, `first`, `last`, `none`, Y, J] }],
        "grid-cols": [{ "grid-cols": ae() }],
        "col-start-end": [{ col: oe() }],
        "col-start": [{ "col-start": se() }],
        "col-end": [{ "col-end": se() }],
        "grid-rows": [{ "grid-rows": ae() }],
        "row-start-end": [{ row: oe() }],
        "row-start": [{ "row-start": se() }],
        "row-end": [{ "row-end": se() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ce() }],
        "auto-rows": [{ "auto-rows": ce() }],
        gap: [{ gap: y() }],
        "gap-x": [{ "gap-x": y() }],
        "gap-y": [{ "gap-y": y() }],
        "justify-content": [{ justify: [...le(), `normal`] }],
        "justify-items": [{ "justify-items": [...x(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...x()] }],
        "align-content": [{ content: [`normal`, ...le()] }],
        "align-items": [{ items: [...x(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...x(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": le() }],
        "place-items": [{ "place-items": [...x(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...x()] }],
        p: [{ p: y() }],
        px: [{ px: y() }],
        py: [{ py: y() }],
        ps: [{ ps: y() }],
        pe: [{ pe: y() }],
        pbs: [{ pbs: y() }],
        pbe: [{ pbe: y() }],
        pt: [{ pt: y() }],
        pr: [{ pr: y() }],
        pb: [{ pb: y() }],
        pl: [{ pl: y() }],
        m: [{ m: S() }],
        mx: [{ mx: S() }],
        my: [{ my: S() }],
        ms: [{ ms: S() }],
        me: [{ me: S() }],
        mbs: [{ mbs: S() }],
        mbe: [{ mbe: S() }],
        mt: [{ mt: S() }],
        mr: [{ mr: S() }],
        mb: [{ mb: S() }],
        ml: [{ ml: S() }],
        "space-x": [{ "space-x": y() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": y() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: C() }],
        "inline-size": [{ inline: [`auto`, ...ue()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ue()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ue()] }],
        "block-size": [{ block: [`auto`, ...de()] }],
        "min-block-size": [{ "min-block": [`auto`, ...de()] }],
        "max-block-size": [{ "max-block": [`none`, ...de()] }],
        w: [{ w: [s, `screen`, ...C()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...C()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...C()] },
        ],
        h: [{ h: [`screen`, `lh`, ...C()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...C()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...C()] }],
        "font-size": [{ text: [`base`, n, ga, la] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Sa, da] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              ea,
              J,
            ],
          },
        ],
        "font-family": [{ font: [_a, fa, t] }],
        "font-features": [{ "font-features": [J] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Y, J] }],
        "line-clamp": [{ "line-clamp": [G, `none`, Y, ua] }],
        leading: [{ leading: [a, ...y()] }],
        "list-image": [{ "list-image": [`none`, Y, J] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Y, J] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: w() }],
        "text-color": [{ text: w() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...he(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [G, `from-font`, `auto`, Y, la] },
        ],
        "text-decoration-color": [{ decoration: w() }],
        "underline-offset": [{ "underline-offset": [G, `auto`, Y, J] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: y() }],
        "tab-size": [{ tab: [K, Y, J] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Y,
              J,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Y, J] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: fe() }],
        "bg-repeat": [{ bg: pe() }],
        "bg-size": [{ bg: me() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  K,
                  Y,
                  J,
                ],
                radial: [``, Y, J],
                conic: [K, Y, J],
              },
              ba,
              ma,
            ],
          },
        ],
        "bg-color": [{ bg: w() }],
        "gradient-from-pos": [{ from: T() }],
        "gradient-via-pos": [{ via: T() }],
        "gradient-to-pos": [{ to: T() }],
        "gradient-from": [{ from: w() }],
        "gradient-via": [{ via: w() }],
        "gradient-to": [{ to: w() }],
        rounded: [{ rounded: E() }],
        "rounded-s": [{ "rounded-s": E() }],
        "rounded-e": [{ "rounded-e": E() }],
        "rounded-t": [{ "rounded-t": E() }],
        "rounded-r": [{ "rounded-r": E() }],
        "rounded-b": [{ "rounded-b": E() }],
        "rounded-l": [{ "rounded-l": E() }],
        "rounded-ss": [{ "rounded-ss": E() }],
        "rounded-se": [{ "rounded-se": E() }],
        "rounded-ee": [{ "rounded-ee": E() }],
        "rounded-es": [{ "rounded-es": E() }],
        "rounded-tl": [{ "rounded-tl": E() }],
        "rounded-tr": [{ "rounded-tr": E() }],
        "rounded-br": [{ "rounded-br": E() }],
        "rounded-bl": [{ "rounded-bl": E() }],
        "border-w": [{ border: D() }],
        "border-w-x": [{ "border-x": D() }],
        "border-w-y": [{ "border-y": D() }],
        "border-w-s": [{ "border-s": D() }],
        "border-w-e": [{ "border-e": D() }],
        "border-w-bs": [{ "border-bs": D() }],
        "border-w-be": [{ "border-be": D() }],
        "border-w-t": [{ "border-t": D() }],
        "border-w-r": [{ "border-r": D() }],
        "border-w-b": [{ "border-b": D() }],
        "border-w-l": [{ "border-l": D() }],
        "divide-x": [{ "divide-x": D() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": D() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...he(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...he(), `hidden`, `none`] }],
        "border-color": [{ border: w() }],
        "border-color-x": [{ "border-x": w() }],
        "border-color-y": [{ "border-y": w() }],
        "border-color-s": [{ "border-s": w() }],
        "border-color-e": [{ "border-e": w() }],
        "border-color-bs": [{ "border-bs": w() }],
        "border-color-be": [{ "border-be": w() }],
        "border-color-t": [{ "border-t": w() }],
        "border-color-r": [{ "border-r": w() }],
        "border-color-b": [{ "border-b": w() }],
        "border-color-l": [{ "border-l": w() }],
        "divide-color": [{ divide: w() }],
        "outline-style": [{ outline: [...he(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [G, Y, J] }],
        "outline-w": [{ outline: [``, G, ga, la] }],
        "outline-color": [{ outline: w() }],
        shadow: [{ shadow: [``, `none`, u, xa, ha] }],
        "shadow-color": [{ shadow: w() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, xa, ha] }],
        "inset-shadow-color": [{ "inset-shadow": w() }],
        "ring-w": [{ ring: D() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: w() }],
        "ring-offset-w": [{ "ring-offset": [G, la] }],
        "ring-offset-color": [{ "ring-offset": w() }],
        "inset-ring-w": [{ "inset-ring": D() }],
        "inset-ring-color": [{ "inset-ring": w() }],
        "text-shadow": [{ "text-shadow": [`none`, f, xa, ha] }],
        "text-shadow-color": [{ "text-shadow": w() }],
        opacity: [{ opacity: [G, Y, J] }],
        "mix-blend": [
          { "mix-blend": [...ge(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ge() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [G] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": O() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": O() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": w() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": w() }],
        "mask-image-t-from-pos": [{ "mask-t-from": O() }],
        "mask-image-t-to-pos": [{ "mask-t-to": O() }],
        "mask-image-t-from-color": [{ "mask-t-from": w() }],
        "mask-image-t-to-color": [{ "mask-t-to": w() }],
        "mask-image-r-from-pos": [{ "mask-r-from": O() }],
        "mask-image-r-to-pos": [{ "mask-r-to": O() }],
        "mask-image-r-from-color": [{ "mask-r-from": w() }],
        "mask-image-r-to-color": [{ "mask-r-to": w() }],
        "mask-image-b-from-pos": [{ "mask-b-from": O() }],
        "mask-image-b-to-pos": [{ "mask-b-to": O() }],
        "mask-image-b-from-color": [{ "mask-b-from": w() }],
        "mask-image-b-to-color": [{ "mask-b-to": w() }],
        "mask-image-l-from-pos": [{ "mask-l-from": O() }],
        "mask-image-l-to-pos": [{ "mask-l-to": O() }],
        "mask-image-l-from-color": [{ "mask-l-from": w() }],
        "mask-image-l-to-color": [{ "mask-l-to": w() }],
        "mask-image-x-from-pos": [{ "mask-x-from": O() }],
        "mask-image-x-to-pos": [{ "mask-x-to": O() }],
        "mask-image-x-from-color": [{ "mask-x-from": w() }],
        "mask-image-x-to-color": [{ "mask-x-to": w() }],
        "mask-image-y-from-pos": [{ "mask-y-from": O() }],
        "mask-image-y-to-pos": [{ "mask-y-to": O() }],
        "mask-image-y-from-color": [{ "mask-y-from": w() }],
        "mask-image-y-to-color": [{ "mask-y-to": w() }],
        "mask-image-radial": [{ "mask-radial": [Y, J] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": O() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": O() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": w() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": w() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": _() }],
        "mask-image-conic-pos": [{ "mask-conic": [G] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": O() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": O() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": w() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": w() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: fe() }],
        "mask-repeat": [{ mask: pe() }],
        "mask-size": [{ mask: me() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Y, J] }],
        filter: [{ filter: [``, `none`, Y, J] }],
        blur: [{ blur: _e() }],
        brightness: [{ brightness: [G, Y, J] }],
        contrast: [{ contrast: [G, Y, J] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, xa, ha] }],
        "drop-shadow-color": [{ "drop-shadow": w() }],
        grayscale: [{ grayscale: [``, G, Y, J] }],
        "hue-rotate": [{ "hue-rotate": [G, Y, J] }],
        invert: [{ invert: [``, G, Y, J] }],
        saturate: [{ saturate: [G, Y, J] }],
        sepia: [{ sepia: [``, G, Y, J] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Y, J] }],
        "backdrop-blur": [{ "backdrop-blur": _e() }],
        "backdrop-brightness": [{ "backdrop-brightness": [G, Y, J] }],
        "backdrop-contrast": [{ "backdrop-contrast": [G, Y, J] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, G, Y, J] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, Y, J] }],
        "backdrop-invert": [{ "backdrop-invert": [``, G, Y, J] }],
        "backdrop-opacity": [{ "backdrop-opacity": [G, Y, J] }],
        "backdrop-saturate": [{ "backdrop-saturate": [G, Y, J] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, G, Y, J] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": y() }],
        "border-spacing-x": [{ "border-spacing-x": y() }],
        "border-spacing-y": [{ "border-spacing-y": y() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              Y,
              J,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [G, `initial`, Y, J] }],
        ease: [{ ease: [`linear`, `initial`, ee, Y, J] }],
        delay: [{ delay: [G, Y, J] }],
        animate: [{ animate: [`none`, te, Y, J] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Y, J] }],
        "perspective-origin": [{ "perspective-origin": re() }],
        rotate: [{ rotate: ve() }],
        "rotate-x": [{ "rotate-x": ve() }],
        "rotate-y": [{ "rotate-y": ve() }],
        "rotate-z": [{ "rotate-z": ve() }],
        scale: [{ scale: ye() }],
        "scale-x": [{ "scale-x": ye() }],
        "scale-y": [{ "scale-y": ye() }],
        "scale-z": [{ "scale-z": ye() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: be() }],
        "skew-x": [{ "skew-x": be() }],
        "skew-y": [{ "skew-y": be() }],
        transform: [{ transform: [Y, J, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: re() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: xe() }],
        "translate-x": [{ "translate-x": xe() }],
        "translate-y": [{ "translate-y": xe() }],
        "translate-z": [{ "translate-z": xe() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [K, Y, J] }],
        accent: [{ accent: w() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: w() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Y,
              J,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": w() }],
        "scrollbar-track-color": [{ "scrollbar-track": w() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": y() }],
        "scroll-mx": [{ "scroll-mx": y() }],
        "scroll-my": [{ "scroll-my": y() }],
        "scroll-ms": [{ "scroll-ms": y() }],
        "scroll-me": [{ "scroll-me": y() }],
        "scroll-mbs": [{ "scroll-mbs": y() }],
        "scroll-mbe": [{ "scroll-mbe": y() }],
        "scroll-mt": [{ "scroll-mt": y() }],
        "scroll-mr": [{ "scroll-mr": y() }],
        "scroll-mb": [{ "scroll-mb": y() }],
        "scroll-ml": [{ "scroll-ml": y() }],
        "scroll-p": [{ "scroll-p": y() }],
        "scroll-px": [{ "scroll-px": y() }],
        "scroll-py": [{ "scroll-py": y() }],
        "scroll-ps": [{ "scroll-ps": y() }],
        "scroll-pe": [{ "scroll-pe": y() }],
        "scroll-pbs": [{ "scroll-pbs": y() }],
        "scroll-pbe": [{ "scroll-pbe": y() }],
        "scroll-pt": [{ "scroll-pt": y() }],
        "scroll-pr": [{ "scroll-pr": y() }],
        "scroll-pb": [{ "scroll-pb": y() }],
        "scroll-pl": [{ "scroll-pl": y() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, Y, J] },
        ],
        fill: [{ fill: [`none`, ...w()] }],
        "stroke-w": [{ stroke: [G, ga, la, ua] }],
        stroke: [{ stroke: [`none`, ...w()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Na(...e) {
  return Ma(fi(e));
}
function Pa() {
  return crypto.randomUUID();
}
var Fa = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          (t =
            (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  Ia = (e) => (e ? Fa(e) : Fa),
  La = (e) => e;
function Ra(e, t = La) {
  let n = ui.useSyncExternalStore(
    e.subscribe,
    ui.useCallback(() => t(e.getState()), [e, t]),
    ui.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return ui.useDebugValue(n), n;
}
var za = (e) => {
    let t = Ia(e),
      n = (e) => Ra(t, e);
    return Object.assign(n, t), n;
  },
  Ba = (e) => (e ? za(e) : za);
function Va(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (e) => {
      let r = (e) => (e === null ? null : JSON.parse(e, t?.reviver)),
        i = n.getItem(e) ?? null;
      return i instanceof Promise ? i.then(r) : r(i);
    },
    setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
    removeItem: (e) => n.removeItem(e),
  };
}
var Ha = (e) => (t) => {
    try {
      let n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(e) {
              return Ha(e)(n);
            },
            catch(e) {
              return this;
            },
          };
    } catch (e) {
      return {
        then(e) {
          return this;
        },
        catch(t) {
          return Ha(t)(e);
        },
      };
    }
  },
  Ua = (e, t) => (n, r, i) => {
    let a = {
        storage: Va(() => window.localStorage),
        partialize: (e) => e,
        version: 0,
        merge: (e, t) => ({ ...t, ...e }),
        ...t,
      },
      o = !1,
      s = 0,
      c = new Set(),
      l = new Set(),
      u = a.storage;
    if (!u)
      return e(
        (...e) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`,
          ),
            n(...e);
        },
        r,
        i,
      );
    let d = () => {
        let e = a.partialize({ ...r() });
        return u.setItem(a.name, { state: e, version: a.version });
      },
      f = i.setState;
    i.setState = (e, t) => (f(e, t), d());
    let p = e((...e) => (n(...e), d()), r, i);
    i.getInitialState = () => p;
    let m,
      h = () => {
        if (!u) return;
        let e = ++s;
        (o = !1), c.forEach((e) => e(r() ?? p));
        let t = a.onRehydrateStorage?.call(a, r() ?? p) || void 0;
        return Ha(u.getItem.bind(u))(a.name)
          .then((e) => {
            if (e) {
              if (typeof e.version == `number` && e.version !== a.version) {
                if (a.migrate) {
                  let t = a.migrate(e.state, e.version);
                  return t instanceof Promise
                    ? t.then((e) => [!0, e])
                    : [!0, t];
                }
                console.error(
                  `State loaded from storage couldn't be migrated since no migrate function was provided`,
                );
              } else return [!1, e.state];
            }
            return [!1, void 0];
          })
          .then((t) => {
            if (e !== s) return;
            let [i, o] = t;
            if (((m = a.merge(o, r() ?? p)), n(m, !0), i)) return d();
          })
          .then(() => {
            e === s &&
              (t?.(r(), void 0), (m = r()), (o = !0), l.forEach((e) => e(m)));
          })
          .catch((n) => {
            e === s && t?.(void 0, n);
          });
      };
    return (
      (i.persist = {
        setOptions: (e) => {
          (a = { ...a, ...e }), e.storage && (u = e.storage);
        },
        clearStorage: () => {
          ++s, u?.removeItem(a.name);
        },
        getOptions: () => a,
        rehydrate: () => h(),
        hasHydrated: () => o,
        onHydrate: (e) => (
          c.add(e),
          () => {
            c.delete(e);
          }
        ),
        onFinishHydration: (e) => (
          l.add(e),
          () => {
            l.delete(e);
          }
        ),
      }),
      a.skipHydration || h(),
      m || p
    );
  };
function Wa() {
  return crypto.randomUUID();
}
function Ga() {
  let e = {};
  for (let t of i) e[t] = 0;
  return e;
}
function Z(e, t) {
  let n = {};
  for (let r of e) n[r] = t;
  return n;
}
function Ka(e) {
  return e.kind === `x01`
    ? e.start
    : e.kind === `one21`
      ? 121
      : e.kind === `one70`
        ? 170
        : 0;
}
function qa(e) {
  return e.kind === `killer` || e.kind === `knockout` ? e.lives : 0;
}
function Ja(e, t, n, r) {
  let i = Ka(t),
    o = r ?? Object.fromEntries(e.map((e) => [e, e])),
    s = e[0] ?? ``;
  return {
    playerIds: e,
    side: o,
    currentPlayerIndex: ((n % e.length) + e.length) % e.length,
    currentVisit: [],
    visits: Object.fromEntries(e.map((e) => [e, []])),
    remaining: Z(e, i),
    opened: Z(e, t.kind !== `x01` || t.inRule === `open`),
    marks: Object.fromEntries(e.map((e) => [e, Ga()])),
    points: Z(e, 0),
    target: Z(e, t.kind === `dragon` ? 0 : 1),
    killerNumber: Z(e, null),
    lives: Z(e, qa(t)),
    isKiller: Z(e, !1),
    killerAssigning: t.kind === `killer`,
    roundIndex: 0,
    totals: Z(e, t.kind === `bobs27` ? 27 : 0),
    eliminated: [],
    golfStrokes: Object.fromEntries(e.map((e) => [e, []])),
    holeIndex: 1,
    dartsThrown: Z(e, 0),
    one21Cycle: Z(e, 0),
    visitAnchor: i,
    knockToBeat: 0,
    wickets: 0,
    battingId: s,
    inningsDone: 0,
    scramCloser: s,
    scramSwapped: !1,
    tttOwner: Object.fromEntries(a.map((e, t) => [t, null])),
    tttMarks: Object.fromEntries(
      e.map((e) => [e, Object.fromEntries(a.map((e) => [e, 0]))]),
    ),
    one70Hits: Z(e, 0),
  };
}
function Ya(e) {
  let t = Object.fromEntries(e.playerIds.map((e) => [e, e])),
    n = !!e.cork;
  return {
    id: Wa(),
    createdAt: Date.now(),
    tournamentId: e.tournamentId,
    fixtureId: e.fixtureId,
    playerIds: [...e.playerIds],
    side: t,
    format: e.format,
    legsToWin: Math.max(1, e.legsToWin),
    setsToWin: Math.max(0, e.setsToWin),
    starterIndex: 0,
    legsWon: Z(e.playerIds, 0),
    setsWon: Z(e.playerIds, 0),
    legsInSet: Z(e.playerIds, 0),
    finishedLegs: [],
    currentLeg: Ja(e.playerIds, e.format, 0, t),
    status: n ? `cork` : `playing`,
    corkEnabled: n,
    corkThrows: Z(e.playerIds, null),
    corkPending: n ? [...e.playerIds] : [],
  };
}
function Xa(e) {
  switch (e.kind) {
    case `x01`: {
      let t =
          e.inRule === `open`
            ? `entrée libre`
            : e.inRule === `double`
              ? `double in`
              : `master in`,
        n =
          e.outRule === `open`
            ? `sortie libre`
            : e.outRule === `double`
              ? `double out`
              : `master out`;
      return `${e.start} · ${t} · ${n}`;
    }
    case `cricket`:
      return e.variant === `standard`
        ? `Cricket`
        : e.variant === `cutthroat`
          ? `Cricket cut-throat`
          : `Cricket sans points`;
    case `around`:
      return `Tour de cadran · ${e.mode}${e.finishBull ? ` + bull` : ``}`;
    case `shanghai`:
      return `Shanghai 1–${e.lastNumber}`;
    case `killer`:
      return `Killer · ${e.lives} vies`;
    case `halveit`:
      return `Halve-it`;
    case `bobs27`:
      return `Bob’s 27`;
    case `countup`:
      return `Count-up ${e.darts} fléchettes`;
    case `golf`:
      return `Golf 18 trous`;
    case `one21`:
      return `121`;
    case `bermuda`:
      return `Bermuda Triangle`;
    case `baseball`:
      return `Baseball`;
    case `fives`:
      return `Fives · ${e.target}`;
    case `knockout`:
      return `Knockout · ${e.lives} vies`;
    case `dragon`:
      return `Dragon`;
    case `football`:
      return `Football · ${e.goals} buts`;
    case `scram`:
      return `Scram`;
    case `englishcricket`:
      return `Cricket anglais`;
    case `tictactoe`:
      return `Morpion`;
    case `one70`:
      return `170`;
  }
}
function Za(e) {
  return e.setsToWin > 0 ? `sets` : `manches`;
}
function Qa(e) {
  return e.setsToWin > 0 ? e.setsToWin : e.legsToWin;
}
function $a(e) {
  return Za(e) === `sets` ? e.setsWon : e.legsWon;
}
function eo(e) {
  let t = $a(e);
  return e.playerIds.map((e) => String(t[e] ?? 0)).join(`–`);
}
function to(e, t) {
  let n = e.playerIds;
  if (n.length < 2) return `Deux joueurs minimum.`;
  let r = n.map((e) => t[e] ?? 0);
  if (r.some((e) => !Number.isInteger(e) || e < 0))
    return `Entiers positifs uniquement.`;
  let i = Qa(e),
    a = Math.max(...r),
    o = n.filter((e) => (t[e] ?? 0) === a);
  return a === 0
    ? `Indiquez le score.`
    : o.length === 1
      ? a === i
        ? r.filter((e) => e >= i).length === 1
          ? null
          : `Un seul joueur atteint l’objectif.`
        : `Le vainqueur doit aller à ${i}.`
      : `Pas de match nul : un seul vainqueur.`;
}
function no(e, t) {
  if (to(e, t)) return e;
  let n = e.playerIds.reduce((e, n) => ((t[n] ?? 0) > (t[e] ?? 0) ? n : e)),
    r = structuredClone(e);
  return (
    (r.status = `complete`),
    (r.winnerId = n),
    r.setsToWin > 0
      ? (r.setsWon = { ...r.setsWon, ...t })
      : (r.legsWon = { ...r.legsWon, ...t }),
    r
  );
}
function Q() {
  return crypto.randomUUID();
}
var ro = `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`;
function io() {
  let e = crypto.getRandomValues(new Uint8Array(6)),
    t = ``;
  for (let n of e) t += ro[n % 32];
  return t;
}
function ao(e) {
  return e <= 1 ? 1 : 2 ** Math.ceil(Math.log2(e));
}
function oo(e) {
  let t = [...e];
  t.length % 2 == 1 && t.push(`__bye__`);
  let n = t.length,
    r = n - 1,
    i = n / 2,
    a = [],
    o = [...t];
  for (let e = 0; e < r; e++) {
    for (let t = 0; t < i; t++) {
      let r = o[t],
        i = o[n - 1 - t];
      r !== `__bye__` &&
        i !== `__bye__` &&
        a.push(e % 2 == 0 ? [r, i] : [i, r]);
    }
    let t = o.pop();
    o.splice(1, 0, t);
  }
  return a;
}
function so(e, t, n = 0) {
  let r = ao(Math.max(2, e.length)),
    i = [...e];
  for (; i.length < r; ) i.push(``);
  let a = [],
    o = [];
  for (let e = 0; e < r / 2; e++) {
    let s = i[e] || null,
      c = i[r - 1 - e] || null,
      l = (s && !c) || (!s && c),
      u = {
        id: Q(),
        round: n,
        index: e,
        bracket: t,
        playerA: s,
        playerB: c,
        bye: !!l,
        winnerId: (l && (s || c)) || void 0,
      };
    o.push(u), a.push(u);
  }
  let s = o,
    c = n + 1;
  for (; s.length > 1; ) {
    let e = [];
    for (let n = 0; n < s.length / 2; n++) {
      let r = s[n * 2],
        i = s[n * 2 + 1],
        o = {
          id: Q(),
          round: c,
          index: n,
          bracket: t,
          playerA: r.winnerId ?? null,
          playerB: i.winnerId ?? null,
        };
      e.push(o), a.push(o);
    }
    (s = e), (c += 1);
  }
  return a;
}
function co(e, t, n) {
  let r = e.find(
    (e) =>
      e.bracket === t.bracket &&
      e.round === t.round + 1 &&
      Math.floor(t.index / 2) === e.index,
  );
  r && (t.index % 2 == 0 ? (r.playerA = n) : (r.playerB = n));
}
function lo(e, t, n) {
  return e.some(
    (e) =>
      !!e.winnerId &&
      ((e.playerA === t && e.playerB === n) ||
        (e.playerA === n && e.playerB === t)),
  );
}
function uo(e, t, n) {
  let r = xo(e, t).map((e) => e.id),
    i = new Set(),
    a = [],
    o = 0;
  if (r.length % 2 == 1) {
    let e = [...r].reverse().find((e) => !i.has(e));
    e &&
      (i.add(e),
      a.push({
        id: Q(),
        round: n,
        index: o++,
        bracket: `league`,
        playerA: e,
        playerB: null,
        bye: !0,
        winnerId: e,
      }));
  }
  for (let e of r) {
    if (i.has(e)) continue;
    let s;
    for (let n of r)
      if (!(n === e || i.has(n)) && !lo(t, e, n)) {
        s = n;
        break;
      }
    (s ||= r.find((t) => t !== e && !i.has(t))),
      s &&
        (i.add(e),
        i.add(s),
        a.push({
          id: Q(),
          round: n,
          index: o++,
          bracket: `league`,
          playerA: e,
          playerB: s,
        }));
  }
  return a;
}
function fo(e) {
  if (e.type === `roundrobin` || e.type === `league`)
    return oo(e.playerIds).map((t, n) => ({
      id: Q(),
      round: 0,
      index: n,
      bracket: e.type === `league` ? `league` : `group`,
      playerA: t[0],
      playerB: t[1],
    }));
  if (e.type === `swiss`) return uo(e.playerIds, [], 0);
  if (e.type === `groups`) {
    let t = Math.max(
        2,
        Math.min(e.groupCount, Math.floor(e.playerIds.length / 2) || 2),
      ),
      n = Array.from({ length: t }, () => []);
    e.playerIds.forEach((e, r) => n[r % t].push(e));
    let r = [];
    return (
      n.forEach((e, t) => {
        oo(e).forEach((e, n) => {
          r.push({
            id: Q(),
            round: 0,
            index: n,
            bracket: `group`,
            groupIndex: t,
            playerA: e[0],
            playerB: e[1],
          });
        });
      }),
      r
    );
  }
  if (e.type === `double`) {
    // Double knockout bye rule (see NOTES.md):
    // - Winners: pad to next power of 2 via so(); bye recipients are already
    //   seeded into later rounds via winnerId. Drop bye fixtures so the board
    //   is not flooded with "(exempt)" cards.
    // - Losers: only allocate slots from real (non-bye) winners matches; never
    //   force a losers round when that winners round produced 0 losers.
    let t = so(e.playerIds, `winners`),
      n = Math.max(...t.map((e) => e.round)),
      r = [],
      i = n + 1;
    for (let e = 0; e < i; e++) {
      let n = t.filter((t) => t.round === e && !t.bye).length,
        i = n > 0 ? Math.ceil(n / 2) : 0;
      for (let t = 0; t < i; t++)
        r.push({
          id: Q(),
          round: e,
          index: t,
          bracket: `losers`,
          playerA: null,
          playerB: null,
        });
    }
    t = t.filter((e) => !e.bye);
    let a = {
      id: Q(),
      round: 0,
      index: 0,
      bracket: `final`,
      playerA: null,
      playerB: null,
    };
    return [...t, ...r, a];
  }
  let t = so(e.playerIds, `winners`);
  return (
    e.thirdPlace &&
      t.push({
        id: Q(),
        round: 0,
        index: 0,
        bracket: `third`,
        playerA: null,
        playerB: null,
      }),
    t
  );
}
function po(e) {
  let t =
      e.swissRounds ??
      Math.max(3, Math.ceil(Math.log2(Math.max(2, e.playerIds.length)))),
    n = {
      name: e.name.trim() || `Tournoi`,
      type: e.type,
      playerIds: e.playerIds,
      format: e.format,
      legsToWin: e.legsToWin,
      setsToWin: e.setsToWin,
      groupCount: e.groupCount ?? 2,
      qualifyPerGroup: e.qualifyPerGroup ?? 2,
      swissRounds: t,
      thirdPlace: !!e.thirdPlace,
      cork: !!e.cork,
    };
  return {
    ...n,
    id: Q(),
    createdAt: Date.now(),
    status: `running`,
    fixtures: fo(n),
    hostSecret: io(),
  };
}
function mo(e, t = Math.random) {
  let n = [...e];
  for (let e = n.length - 1; e > 0; e--) {
    let r = Math.floor(t() * (e + 1)),
      i = n[e];
    (n[e] = n[r]), (n[r] = i);
  }
  return n;
}
function ho(e) {
  return (
    e.status !== `complete` &&
    e.fixtures.every((e) => !e.matchId && (!e.winnerId || !!e.bye))
  );
}
function go(e) {
  return e
    .filter((e) => e.round === 0)
    .map((e) => {
      let t = [e.playerA ?? ``, e.playerB ?? ``].sort().join(`·`);
      return `${e.bracket}:${e.groupIndex ?? ``}:${e.index}:${t}`;
    })
    .sort()
    .join(`|`);
}
function _o(e, t = Math.random) {
  if (!ho(e)) return null;
  let n = go(e.fixtures),
    r = mo(e.playerIds, t),
    i = fo({ ...e, playerIds: r });
  for (let a = 0; a < 16 && go(i) === n && e.playerIds.length > 1; a++)
    (r = mo(e.playerIds, t)), (i = fo({ ...e, playerIds: r }));
  return { ...e, playerIds: r, fixtures: i };
}
function vo(e, t, n, r, i) {
  let a = e.fixtures.map((e) => ({ ...e })),
    o = a.find((e) => e.id === t);
  if (!o) return e;
  (o.winnerId = n), (o.matchId = r), i && ((o.scoreA = i.a), (o.scoreB = i.b));
  let s = o.playerA === n ? o.playerB : o.playerB === n ? o.playerA : null;
  if (
    ((o.loserId = s ?? void 0),
    (o.bracket === `winners` || o.bracket === `losers`) && co(a, o, n),
    e.thirdPlace && o.bracket === `winners` && s)
  ) {
    let e = a.filter((e) => e.bracket === `winners`),
      t = Math.max(...e.map((e) => e.round));
    if (o.round === t - 1) {
      let e = a.find((e) => e.bracket === `third`);
      e && (e.playerA ? (e.playerB ||= s) : (e.playerA = s));
    }
  }
  if (e.type === `double` && o.bracket === `winners` && s) {
    let e = a.find(
      (e) =>
        e.bracket === `losers` &&
        e.round === o.round &&
        (!e.playerA || !e.playerB),
    );
    e && (e.playerA ? (e.playerB ||= s) : (e.playerA = s));
    // After every real winners match in this round has a result, any losers
    // fixture left with a single player is a structural bye — advance quietly
    // (no extra exemption card was pre-created).
    let pendingW = a.some(
      (e) =>
        e.bracket === `winners` &&
        e.round === o.round &&
        !e.bye &&
        !e.winnerId,
    );
    if (!pendingW) {
      for (let e of a.filter(
        (e) => e.bracket === `losers` && e.round === o.round && !e.winnerId,
      )) {
        let t = (e.playerA && !e.playerB && e.playerA) || (!e.playerA && e.playerB && e.playerB);
        if (t) {
          (e.bye = !0), (e.winnerId = t), co(a, e, t);
        }
      }
    }
  }
  if (e.type === `double`) {
    let e = a.find(
        (e) =>
          e.bracket === `winners` &&
          e.round ===
            Math.max(
              ...a.filter((e) => e.bracket === `winners`).map((e) => e.round),
            ) &&
          e.winnerId,
      ),
      t = a.find(
        (e) =>
          e.bracket === `losers` &&
          e.round ===
            Math.max(
              ...a.filter((e) => e.bracket === `losers`).map((e) => e.round),
            ) &&
          e.winnerId,
      ),
      n = a.find((e) => e.bracket === `final`);
    n && e?.winnerId && (n.playerA = e.winnerId),
      n && t?.winnerId && (n.playerB = t.winnerId);
  }
  if (e.type === `groups`) {
    let t = yo(a),
      n = a.some((e) => e.bracket === `winners`);
    if (t && !n) {
      let t = so(bo(a, e), `winners`, 1);
      a.push(...t);
    }
  }
  if (e.type === `swiss`) {
    let t = Math.max(0, ...a.map((e) => e.round));
    a.filter((e) => e.round === t).every((e) => e.winnerId) &&
      t + 1 < e.swissRounds &&
      a.push(...uo(e.playerIds, a, t + 1));
  }
  let c = { ...e, fixtures: a },
    l = Oo(c);
  return l && ((c.status = `complete`), (c.winnerId = l)), c;
}
function yo(e) {
  let t = e.filter((e) => e.bracket === `group`);
  return t.length > 0 && t.every((e) => e.winnerId);
}
function bo(e, t) {
  let n = t.groupCount,
    r = [];
  for (let i = 0; i < n; i++) {
    let a = xo(
      t.playerIds.filter((e, t) => t % n === i),
      e.filter((e) => e.groupIndex === i),
    );
    r.push(...a.slice(0, t.qualifyPerGroup).map((e) => e.id));
  }
  return r;
}
function xo(e, t) {
  let n = new Map();
  for (let t of e)
    n.set(t, {
      id: t,
      played: 0,
      wins: 0,
      losses: 0,
      scored: 0,
      conceded: 0,
      diff: 0,
      rank: 0,
    });
  for (let e of t) {
    if (e.bye && e.winnerId) {
      let t = n.get(e.winnerId);
      t && ((t.played += 1), (t.wins += 1));
      continue;
    }
    if (!e.winnerId || !e.playerA || !e.playerB) continue;
    let t = n.get(e.playerA),
      r = n.get(e.playerB);
    t &&
      r &&
      ((t.played += 1),
      (r.played += 1),
      e.winnerId === e.playerA
        ? ((t.wins += 1), (r.losses += 1))
        : ((r.wins += 1), (t.losses += 1)),
      e.scoreA != null &&
        e.scoreB != null &&
        ((t.scored += e.scoreA),
        (t.conceded += e.scoreB),
        (r.scored += e.scoreB),
        (r.conceded += e.scoreA)));
  }
  for (let e of n.values()) e.diff = e.scored - e.conceded;
  return Co([...n.values()]);
}
function So(e) {
  return `${e.place ?? 999}-${String(999 - e.wins).padStart(3, `0`)}-${String(500 - e.diff).padStart(4, `0`)}-${String(500 - e.scored).padStart(4, `0`)}`;
}
function Co(e) {
  let t = [...e].sort((e, t) => {
      let n = e.place ?? 999,
        r = t.place ?? 999;
      return n === r
        ? t.wins === e.wins
          ? t.diff === e.diff
            ? t.scored === e.scored
              ? e.losses - t.losses
              : t.scored - e.scored
            : t.diff - e.diff
          : t.wins - e.wins
        : n - r;
    }),
    n = ``,
    r = 0;
  return t.map((e, t) => {
    let i = So(e);
    return i !== n && ((r = t + 1), (n = i)), { ...e, rank: r };
  });
}
function wo(e, t) {
  if (e.loserId) return e.loserId;
  if (e.playerA === t) return e.playerB ?? void 0;
  if (e.playerB === t) return e.playerA ?? void 0;
}
function To(e) {
  let t = new Map();
  if (e.type === `roundrobin` || e.type === `league` || e.type === `swiss`)
    return t;
  if (e.type === `double`) {
    let n = e.fixtures.find((e) => e.bracket === `final`);
    if (n?.winnerId) {
      t.set(n.winnerId, 1);
      let e = wo(n, n.winnerId);
      e && t.set(e, 2);
    }
    if (
      e.fixtures.filter((e) => e.bracket === `losers` && e.winnerId).length > 0
    ) {
      let n = Math.max(
          ...e.fixtures
            .filter((e) => e.bracket === `losers`)
            .map((e) => e.round),
        ),
        r = e.fixtures.find((e) => e.bracket === `losers` && e.round === n),
        i = r?.winnerId ? wo(r, r.winnerId) : void 0;
      i && !t.has(i) && t.set(i, 3);
    }
    return t;
  }
  let n = e.fixtures.filter((e) => e.bracket === `winners`);
  if (n.length === 0) return t;
  let r = Math.max(...n.map((e) => e.round)),
    i = n.find((e) => e.round === r);
  if (i?.winnerId) {
    t.set(i.winnerId, 1);
    let e = wo(i, i.winnerId);
    e && t.set(e, 2);
  }
  let a = e.fixtures.find((e) => e.bracket === `third`);
  if (a?.winnerId) {
    t.set(a.winnerId, 3);
    let e = wo(a, a.winnerId);
    e && !t.has(e) && t.set(e, 4);
  } else if (i?.winnerId) {
    let e = n.filter((e) => e.round === r - 1 && e.winnerId);
    for (let n of e) {
      let e = wo(n, n.winnerId);
      e && !t.has(e) && t.set(e, 3);
    }
  }
  return t;
}
function Eo(e) {
  let t = xo(e.playerIds, e.fixtures),
    n = To(e);
  return Co(t.map((e) => ({ ...e, place: n.get(e.id) })));
}
function Do(e) {
  let t = Eo(e);
  return {
    first: t.find((e) => e.rank === 1),
    second: t.find((e) => e.rank === 2),
    third: t.filter((e) => e.rank === 3),
  };
}
function Oo(e) {
  if (e.type === `roundrobin` || e.type === `league`)
    return e.fixtures.every((e) => e.winnerId)
      ? xo(e.playerIds, e.fixtures)[0]?.id
      : void 0;
  if (e.type === `swiss`) {
    let t = Math.max(0, ...e.fixtures.map((e) => e.round));
    if (t + 1 < e.swissRounds) return;
    let n = e.fixtures.filter((e) => e.round === t);
    return n.length === 0 || n.some((e) => !e.winnerId)
      ? void 0
      : xo(e.playerIds, e.fixtures)[0]?.id;
  }
  if (e.type === `single` || e.type === `groups`) {
    let t = e.fixtures.filter((e) => e.bracket === `winners`);
    if (t.length === 0) return;
    let n = Math.max(...t.map((e) => e.round)),
      r = t.find((e) => e.round === n);
    if (!r?.winnerId) return;
    if (e.thirdPlace) {
      let t = e.fixtures.find((e) => e.bracket === `third`);
      if (t && !t.winnerId && t.playerA && t.playerB) return;
    }
    return r.winnerId;
  }
  if (e.type === `double`)
    return e.fixtures.find((e) => e.bracket === `final`)?.winnerId;
}
function ko(e, t, n) {
  if (n === `group`) return `Poules`;
  if (n === `league`) return e.type === `swiss` ? `Ronde ${t + 1}` : `Journée`;
  if (n === `final`) return `Grande finale`;
  if (n === `third`) return `Petite finale`;
  if (n === `losers`) return `Repêchage ${t + 1}`;
  let r = e.fixtures.filter((e) => e.bracket === `winners`),
    i = Math.max(0, ...r.map((e) => e.round)) - t;
  return i === 0
    ? `Finale`
    : i === 1
      ? `Demi-finales`
      : i === 2
        ? `Quarts`
        : i === 3
          ? `Huitièmes`
          : `Tour ${t + 1}`;
}
function Ao(e, t) {
  let n = 0;
  for (let r of t.tournament.fixtures) {
    if (!r.winnerId) continue;
    let t = e.tournament.fixtures.find((e) => e.id === r.id);
    t && !t.winnerId && (n += 1);
  }
  return n;
}
function jo(e, t) {
  let n = structuredClone(e.tournament);
  t.tournament.shareCode && (n.shareCode = t.tournament.shareCode);
  for (let e of t.tournament.fixtures) {
    let t = n.fixtures.find((t) => t.id === e.id);
    e.winnerId &&
      t &&
      !t.winnerId &&
      (n = vo(n, e.id, e.winnerId, e.matchId ?? ``, {
        a: e.scoreA ?? 0,
        b: e.scoreB ?? 0,
      }));
  }
  let r = new Map(e.players.map((e) => [e.id, e]));
  for (let e of t.players) r.has(e.id) || r.set(e.id, e);
  let i = new Map(e.matches.map((e) => [e.id, e]));
  for (let e of t.matches) {
    let t = i.get(e.id);
    (!t || (e.status === `complete` && t.status !== `complete`)) &&
      i.set(e.id, e);
  }
  return { tournament: n, players: [...r.values()], matches: [...i.values()] };
}
function Mo(e) {
  return !!e.hostSecret;
}
function No(e) {
  if (!(`hostSecret` in e) || e.hostSecret === void 0) return e;
  let t = { ...e };
  return delete t.hostSecret, t;
}
function Po(e) {
  return e
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, ``)
    .slice(0, 80);
}
function Fo(e) {
  return /^[A-HJ-NP-Z2-9]{6}$/.test(e);
}
function Io(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function Lo(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) Io(t) && (n[t] = e[t]);
  if (t && typeof t == `object`)
    for (let e of Object.keys(t)) Io(e) && (n[e] = t[e]);
  return n;
}
function Ro(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) Io(n) && (t[n] = e[n]);
  return t;
}
var zo = () => {
    throw Error(
      `createServerOnlyFn() functions can only be called on the server!`,
    );
  },
  $ = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let r = (e) => $(void 0, { ...n, validator: e, inputValidator: e });
    return Object.assign((e) => $(void 0, { ...n, ...e }), {
      options: n,
      middleware: (e) => {
        let t = [...(n.middleware || [])];
        e.map((e) => {
          c in e
            ? e.options.middleware && t.push(...e.options.middleware)
            : t.push(e);
        });
        let r = $(void 0, { ...n, middleware: t });
        return (r[c] = !0), r;
      },
      validator: r,
      inputValidator: r,
      handler: (...e) => {
        let [t, r] = e,
          i = { ...n, extractedFn: t, serverFn: r },
          a = [...(i.middleware || []), Uo(i)];
        return (
          (t.method = n.method),
          Object.assign(
            async (e) => {
              let n = await Bo(a, `client`, {
                  ...t,
                  ...i,
                  data: e?.data,
                  headers: e?.headers,
                  signal: e?.signal,
                  fetch: e?.fetch,
                  context: Ro(),
                }),
                r = re(n.error);
              if (r) throw r;
              if (n.error) throw n.error;
              return n.result;
            },
            {
              ...t,
              method: n.method,
              __executeServer: async (e) => {
                let n = zo(),
                  r = n.contextAfterGlobalMiddlewares;
                return await Bo(a, `server`, {
                  ...t,
                  ...e,
                  serverFnMeta: t.serverFnMeta,
                  context: Lo(e.context, r),
                  request: n.request,
                }).then((e) => ({
                  result: e.result,
                  error: e.error,
                  context: e.sendContext,
                }));
              },
            },
          )
        );
      },
    });
  };
async function Bo(e, t, n) {
  let r = Vo([...(m()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = zo({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares &&
      (r = r.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let i = async (e) => {
    let n = r.shift();
    if (!n) return e;
    try {
      let r = `validator` in n.options ? n.options.validator : void 0;
      !r && `inputValidator` in n.options && (r = n.options.inputValidator),
        r && t === `server` && (e.data = await Ho(r, e.data));
      let a;
      if (
        (t === `client`
          ? `client` in n.options && (a = n.options.client)
          : `server` in n.options && (a = n.options.server),
        a)
      ) {
        let t = async (t = {}) => {
            let n = await i({
              ...e,
              ...t,
              context: Lo(e.context, t.context),
              sendContext: Lo(e.sendContext, t.sendContext),
              headers: li(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result:
                t.result === void 0
                  ? t instanceof Response
                    ? t
                    : e.result
                  : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          n = await a({ ...e, next: t });
        if (_(n)) return { ...e, error: n };
        if (n instanceof Response) return { ...e, result: n };
        if (!n)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return n;
      }
      return i(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return i({
    ...n,
    headers: n.headers || {},
    sendContext: n.sendContext || {},
    context: n.context || Ro(),
    _callSiteFetch: n.fetch,
  });
}
function Vo(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        e.options.middleware && i(e.options.middleware, a + 1),
          n.has(e) || (n.add(e), r.push(e));
      });
    };
  return i(e, 0), r;
}
async function Ho(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function Uo(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var Wo = __ocheShareWo,
  Go = __ocheShareGo,
  Ko = __ocheShareKo,
  qo = __ocheShareQo,
  Jo = __ocheShareJo,
  Yo = __ocheShareYo,
  Xo = [
    { id: `p-camille`, name: `Camille`, createdAt: 1 },
    { id: `p-julien`, name: `Julien`, createdAt: 2 },
    { id: `p-lea`, name: `Léa`, createdAt: 3 },
    { id: `p-marc`, name: `Marc`, createdAt: 4 },
    { id: `p-nina`, name: `Nina`, createdAt: 5 },
    { id: `p-hugo`, name: `Hugo`, createdAt: 6 },
  ];
function Zo(e, t) {
  return !t.tournamentId ||
    !t.fixtureId ||
    t.status !== `complete` ||
    !t.winnerId
    ? e
    : e.map((e) => {
        if (e.id !== t.tournamentId) return e;
        let n = e.fixtures.find((e) => e.id === t.fixtureId);
        if (n?.winnerId) return e;
        let r = t.setsToWin > 0 ? t.setsWon : t.legsWon,
          i = n?.playerA ? (r[n.playerA] ?? 0) : 0,
          a = n?.playerB ? (r[n.playerB] ?? 0) : 0;
        return vo(e, t.fixtureId, t.winnerId, t.id, { a: i, b: a });
      });
}
var Qo = new Map(),
  $o = new Map();
function es(e, t) {
  let n = ($o.get(e) ?? Promise.resolve()).then(t, t);
  return $o.set(e, n), n;
}
var ts = Ba()(
  Ua(
    (e, t) => ({
      hydrated: !1,
      players: Xo,
      matches: [],
      tournaments: [],
      setHydrated: (t) => e({ hydrated: t }),
      addPlayer: (n) => {
        let r = Pa(),
          i = n.trim() || `Joueur`;
        return (
          e({
            players: [
              ...t().players,
              { id: r, name: i.slice(0, 32), createdAt: Date.now() },
            ],
          }),
          r
        );
      },
      renamePlayer: (n, r) =>
        e({
          players: t().players.map((e) =>
            e.id === n ? { ...e, name: r.trim().slice(0, 32) || e.name } : e,
          ),
        }),
      removePlayer: (n) =>
        e({ players: t().players.filter((e) => e.id !== n) }),
      startMatch: (n) => {
        let r = Ya({ ...n, cork: !1 });
        return e({ matches: [r, ...t().matches] }), r.id;
      },
      recordResult: (n, r) => {
        let i = t().matches.find((e) => e.id === n);
        if (!i) return `Match introuvable.`;
        if (i.status === `complete`) return `Déjà enregistré.`;
        let a = to(i, r);
        if (a) return a;
        if (i.tournamentId) {
          let e = t().tournaments.find((e) => e.id === i.tournamentId);
          if (e && !Mo(e)) return `Seul le créateur peut saisir le score.`;
        }
        let o = no(i, r);
        return (
          e({
            matches: t().matches.map((e) => (e.id === n ? o : e)),
            tournaments: Zo(t().tournaments, o),
          }),
          o.tournamentId && t().pushTournament(o.tournamentId),
          null
        );
      },
      startTournament: (n) => {
        let r = po({ ...n, cork: !1 });
        return (
          e({ tournaments: [r, ...t().tournaments] }),
          t().publishTournament(r.id),
          r.id
        );
      },
      playFixture: (n, r) => {
        let i = t().tournaments.find((e) => e.id === n);
        if (!i) return null;
        let a = i.fixtures.find((e) => e.id === r);
        if (!a?.playerA || !a.playerB || a.winnerId || a.bye || !Mo(i))
          return null;
        if (a.matchId) {
          let e = t().matches.find((e) => e.id === a.matchId);
          if (e) return e.id;
        }
        let o = Ya({
          playerIds: [a.playerA, a.playerB],
          format: i.format,
          legsToWin: i.legsToWin,
          setsToWin: i.setsToWin,
          tournamentId: n,
          fixtureId: r,
          cork: !1,
        });
        return (
          e({
            matches: [o, ...t().matches],
            tournaments: t().tournaments.map((e) =>
              e.id === n
                ? {
                    ...e,
                    fixtures: e.fixtures.map((e) =>
                      e.id === r ? { ...e, matchId: o.id } : e,
                    ),
                  }
                : e,
            ),
          }),
          t().pushTournament(n),
          o.id
        );
      },
      reshuffleDraw: (n) => {
        let r = t().tournaments.find((e) => e.id === n);
        if (!r || !Mo(r)) return !1;
        let i = _o(r);
        return i
          ? (e({
              tournaments: t().tournaments.map((e) => (e.id === n ? i : e)),
              matches: t().matches.filter((e) => e.tournamentId !== n),
            }),
            t().pushTournament(n),
            !0)
          : !1;
      },
      deleteMatch: (n) => e({ matches: t().matches.filter((e) => e.id !== n) }),
      deleteTournament: (n) =>
        e({
          tournaments: t().tournaments.filter((e) => e.id !== n),
          matches: t().matches.filter((e) => e.tournamentId !== n),
        }),
      closeTournament: async (e) => {
        let n = t().tournaments.find((t) => t.id === e);
        if (!n) return !0;
        if (n.shareCode) {
          if (!Mo(n)) return !1;
          try {
            await Jo({ data: { code: n.shareCode, hostSecret: n.hostSecret } });
          } catch {
            return !1;
          }
        }
        return t().deleteTournament(e), !0;
      },
      snapshotOf: (e) => {
        let n = t().tournaments.find((t) => t.id === e);
        if (!n) return null;
        let r = new Set(n.playerIds);
        return {
          tournament: No(n),
          players: t().players.filter((e) => r.has(e.id)),
          matches: t().matches.filter((e) => e.tournamentId === n.id),
        };
      },
      ingestSnapshot: (n, r) => {
        let i = t().snapshotOf(n.tournament.id),
          a = i ? jo(n, i) : n,
          o = t().tournaments.find((e) => e.id === n.tournament.id),
          s = {
            ...a.tournament,
            shareVersion: r,
            shareCode: n.tournament.shareCode ?? a.tournament.shareCode,
            hostSecret: o?.hostSecret,
          },
          c = [...t().players];
        for (let e of a.players) c.some((t) => t.id === e.id) || c.push(e);
        let l = new Set(a.matches.map((e) => e.id)),
          u = t().matches.filter(
            (e) =>
              e.tournamentId === s.id &&
              e.status !== `complete` &&
              !l.has(e.id),
          );
        e({
          players: c,
          matches: [
            ...a.matches,
            ...u,
            ...t().matches.filter((e) => e.tournamentId !== s.id),
          ],
          tournaments: [s, ...t().tournaments.filter((e) => e.id !== s.id)],
        });
      },
      publishTournament: async (n) => {
        let r = t().tournaments.find((e) => e.id === n);
        if (!r) return null;
        if (r.shareCode) return r.shareCode;
        let i = Qo.get(n);
        if (i) return i;
        let a = (async () => {
          let r = t().tournaments.find((e) => e.id === n);
          if (!r) return null;
          if (r.shareCode) return r.shareCode;
          let i = t().snapshotOf(n);
          if (!i) return null;
          try {
            let a = await Wo({
              data: { payload: i, hostSecret: r.hostSecret },
            });
            return (
              e({
                tournaments: t().tournaments.map((e) =>
                  e.id === n
                    ? { ...e, shareCode: a.code, shareVersion: a.version }
                    : e,
                ),
              }),
              a.code
            );
          } catch {
            return null;
          }
        })();
        Qo.set(n, a);
        try {
          return await a;
        } finally {
          Qo.delete(n);
        }
      },
      pushTournament: (n) =>
        es(n, async () => {
          let r = t().tournaments.find((e) => e.id === n);
          if (!r?.shareCode) return;
          let i = t().snapshotOf(n);
          if (i)
            try {
              let a = await Ko({
                data: {
                  code: r.shareCode,
                  version: r.shareVersion ?? 0,
                  payload: i,
                  hostSecret: r.hostSecret,
                },
              });
              if (a.ok) {
                if (!a.row.payload) return;
                e({
                  tournaments: t().tournaments.map((e) =>
                    e.id === n ? { ...e, shareVersion: a.row.version } : e,
                  ),
                });
                return;
              }
              if (a.reason === `forbidden`) return;
              if (a.row.closed || !a.row.payload) {
                t().deleteTournament(n);
                return;
              }
              let o = jo(a.row.payload, i);
              t().ingestSnapshot(o, a.row.version);
              let s = t().snapshotOf(n);
              if (!s) return;
              let c = await Ko({
                data: {
                  code: r.shareCode,
                  version: a.row.version,
                  payload: s,
                  hostSecret: r.hostSecret,
                },
              });
              if (!c.ok && c.reason === `forbidden`) return;
              if (c.row.closed || !c.row.payload) {
                t().deleteTournament(n);
                return;
              }
              c.ok &&
                e({
                  tournaments: t().tournaments.map((e) =>
                    e.id === n ? { ...e, shareVersion: c.row.version } : e,
                  ),
                });
            } catch {}
        }),
      joinTournament: async (e) => {
        try {
          let n = await Go({ data: { code: e } });
          return !n || n.closed || !n.payload
            ? null
            : (t().ingestSnapshot(n.payload, n.version),
              n.payload.tournament.id);
        } catch {
          return null;
        }
      },
      claimHost: async (n, r) => {
        let i = t().tournaments.find((e) => e.id === n);
        if (!i?.shareCode) return !1;
        let a = Po(r);
        if (a.length < 6) return !1;
        try {
          if (!(await Yo({ data: { code: i.shareCode, hostSecret: a } })).ok)
            return !1;
        } catch {
          return !1;
        }
        return (
          e({
            tournaments: t().tournaments.map((e) =>
              e.id === n ? { ...e, hostSecret: a } : e,
            ),
          }),
          !0
        );
      },
    }),
    {
      name: `oche-steel-tip`,
      skipHydration: !0,
      partialize: (e) => ({
        players: e.players,
        matches: e.matches,
        tournaments: e.tournaments,
      }),
    },
  ),
);
export {
  h as A,
  fi as C,
  ne as D,
  _ as E,
  te as O,
  Na as S,
  vr as T,
  Za as _,
  Mo as a,
  to as b,
  ho as c,
  Eo as d,
  ko as f,
  eo as g,
  no as h,
  Fo as i,
  s as j,
  g as k,
  Do as l,
  xo as m,
  qo as n,
  Ao as o,
  mo as p,
  Go as r,
  fo as s,
  ts as t,
  Co as u,
  $a as v,
  H as w,
  Xa as x,
  Qa as y,
};

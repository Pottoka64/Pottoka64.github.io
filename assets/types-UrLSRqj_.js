var e = [20, 19, 18, 17, 16, 15, 25],
  t = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
Array.from({ length: 20 }, (e, t) => {
  let n = t + 1;
  return {
    label: `D${n}`,
    value: n * 2,
    match: (e) => e.value === n && e.multiplier === 2,
  };
}).concat([
  {
    label: `Bull`,
    value: 50,
    match: (e) => e.value === 25 && e.multiplier === 2,
  },
]);
var n = [20, 19, 18, 17, 25, 16, 15, 14, 13];
function r(e) {
  return e.value <= 0 || (e.value === 25 && e.multiplier === 3)
    ? 0
    : e.value * e.multiplier;
}
function i(e) {
  return e.value <= 0
    ? `M`
    : e.value === 25
      ? e.multiplier === 2
        ? `50`
        : `25`
      : e.multiplier === 2
        ? `D${e.value}`
        : e.multiplier === 3
          ? `T${e.value}`
          : String(e.value);
}
function a(e) {
  return e.multiplier === 2 && e.value > 0;
}
function o(e) {
  return (e.multiplier === 2 || e.multiplier === 3) && e.value > 0;
}
export { r as a, i, e as n, a as o, n as r, o as s, t };

import { defineComponent as d, openBlock as c, createElementBlock as l, renderSlot as i } from "vue";
const u = /* @__PURE__ */ d({
  __name: "index",
  emits: ["click"],
  setup(t) {
    return (e, n) => (c(), l("button", {
      class: "ku-button",
      onClick: n[0] || (n[0] = (o) => e.$emit("click", o))
    }, [
      i(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const a = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
}, p = /* @__PURE__ */ a(u, [["__scopeId", "data-v-2dc4e423"]]), s = {
  install(t) {
    t.component("ku-button", p);
  }
};
const k = {}, m = { class: "ku-tag" };
function f(t, e) {
  return c(), l("div", m, " \u6211\u662F\u7EC4\u4EF6 ");
}
const v = /* @__PURE__ */ a(k, [["render", f], ["__scopeId", "data-v-97e311e6"]]), _ = {
  install(t) {
    t.component("ku-tag", v);
  }
}, y = {
  install(t) {
    var e, n;
    (e = s.install) == null || e.call(s, t), (n = _.install) == null || n.call(_, t);
  }
};
export {
  p as Button,
  s as ButtonPlugin,
  v as Tag,
  _ as TagPlugin,
  y as default
};

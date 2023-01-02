import { defineComponent as i, createVNode as e, createTextVNode as r } from "vue";
import "./index2.js";
const s = i({
  name: "KuFooter",
  props: {
    footer: {
      type: Object,
      required: !0
    }
  },
  methods: {},
  setup(t, {
    emit: l,
    slots: a
  }) {
    const n = new Date().getFullYear();
    return () => e("footer", {
      class: "ku-footer"
    }, [e("div", {
      class: "ku-footer-left"
    }, [e("p", null, [r("\xA9 "), t.footer.startTime, r("-"), t.footer.endTime || n, r(", Content By "), t.footer.copyrihgt, r(". All Rights Reserved.")]), e("p", null, [r("Theme By "), t.footer.theme || t.footer.copyrihgt])]), e("div", {
      class: "ku-footer-right"
    }, [t.footer.list.map((o) => e("a", {
      href: o.link,
      class: "link"
    }, [o.icon && e("img", {
      src: o.icon
    }, null), o.name && o.name]))])]);
  }
});
export {
  s as default
};

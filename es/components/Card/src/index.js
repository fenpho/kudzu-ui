import { defineComponent as i, createVNode as e, resolveComponent as r, createTextVNode as n } from "vue";
import "./index2.js";
import c from "../../Tag/src/index.js";
const f = i({
  name: "KuCard",
  components: {
    [c.name]: c
  },
  props: {
    card: {
      type: Object,
      default: () => ({
        readmore: !0
      }),
      required: !0
    }
  },
  setup(t, {
    emit: d,
    slots: s
  }) {
    const l = (a) => {
      d("toDetail", a);
    };
    return () => e("div", {
      class: "ku-card"
    }, [e("div", {
      class: "ku-card-left"
    }, [e("h3", {
      class: "ku-card-left-title"
    }, [t.card.link ? e("a", {
      href: t.card.link
    }, [t.card.title]) : t.card.title]), t.card.time && e("span", {
      class: "ku-card-left-time"
    }, [t.card.time]), t.card.tag.map((a, u) => u === t.card.tag.length - 1 ? e(r("ku-tag"), {
      tag: a
    }, null) : [e(r("ku-tag"), {
      tag: a
    }, null), ", "])]), e("div", {
      class: "ku-card-right"
    }, [e("p", {
      class: "ku-card-right-desc"
    }, [t.card.desc]), e(r("ku-button"), {
      onClick: () => l(t.card)
    }, {
      default: () => [n("\u66F4\u591A...")]
    })])]);
  }
});
export {
  f as default
};

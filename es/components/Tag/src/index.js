import { defineComponent as a, createVNode as t } from "vue";
import "./index2.js";
const o = a({
  name: "KuTag",
  props: {
    tag: {
      type: Object,
      required: !0
    }
  },
  methods: {},
  setup(e, {
    emit: n,
    slots: m
  }) {
    return () => t("span", {
      class: "ku-tag"
    }, [e.tag.link ? t("a", {
      href: e.tag.link
    }, [e.tag.name]) : e.tag.name]);
  }
});
export {
  o as default
};

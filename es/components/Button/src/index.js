import { defineComponent as r, createVNode as c } from "vue";
import "./index2.js";
const a = r({
  name: "KuButton",
  props: {},
  emits: {
    click(t) {
      return t.event;
    }
  },
  setup(t, {
    emit: n,
    slots: e
  }) {
    const o = (u) => {
      n("click", {
        event: u
      });
    };
    return () => c("button", {
      class: "ku-button",
      onClick: o
    }, [e.default ? e.default() : null]);
  }
});
export {
  a as default
};

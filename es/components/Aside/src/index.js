import { defineComponent as h, createVNode as s } from "vue";
import { getImageUrl as f } from "../../../utils/util.js";
import "./index2.js";
const b = h({
  name: "KuAside",
  props: {
    aside: {
      type: Object,
      required: !0
    }
  },
  setup(t, {
    emit: u,
    slots: g
  }) {
    t.aside.close === void 0 && (t.aside.close = !0), t.aside.list.forEach((l) => {
      l.id = l.name + new Date().getTime();
    });
    const m = f("../assets/close.png"), c = (l, n, i) => s("ul", {
      class: "ku-aside-list",
      id: i,
      style: {
        height: i ? "0" : "auto"
      }
    }, [l.map((e) => e.children ? s("li", {
      class: "ku-aside-list-item",
      onClick: () => d(e, "sub")
    }, [s("a", null, [e.icon && s("img", {
      src: e.icon,
      alt: ""
    }, null), s("span", null, [e.name]), s("span", {
      class: "ku-aside-list-item-down"
    }, null)]), e.children && c(e.children, "sub", e.id)]) : s("li", {
      class: "ku-aside-list-item",
      onClick: () => d(e)
    }, [s("a", {
      href: e.link,
      class: n
    }, [e.icon && s("img", {
      src: e.icon,
      alt: ""
    }, null), s("span", null, [e.name])])]))]), d = (l, n) => {
      if (n === "sub") {
        const i = document.querySelector(`#${l.id}`);
        if (i) {
          const e = i.parentNode.querySelector(".ku-aside-list-item-down");
          let o = 0, r = 0;
          if (i.style.height === "0px") {
            for (let a = 0; a < i.children.length; a++)
              o += i.children[a].offsetHeight;
            r = 90;
          }
          i.style.height = o + "px", e.style.rotate = r + "deg";
        }
      } else
        u("item-click", l);
    };
    return () => s("aside", {
      class: "ku-aside"
    }, [t.aside.close && s("div", {
      class: "ku-aside-close"
    }, [s("img", {
      src: m,
      alt: ""
    }, null)]), s("nav", {
      class: "ku-aside-list-nav"
    }, [c(t.aside.list)])]);
  }
});
export {
  b as default
};

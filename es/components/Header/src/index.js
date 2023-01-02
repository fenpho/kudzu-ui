import { defineComponent as t, createVNode as l } from "vue";
import "./index2.js";
const c = t({
  name: "KuHeader",
  props: {
    header: {
      type: Object,
      default: () => ({
        logo: "",
        more: {
          name: "\u66F4\u591A",
          icon: ""
        }
      }),
      required: !0
    }
  },
  data() {
    return {
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      const e = this.$refs.KuHeader;
      if (e) {
        const n = window.pageYOffset, s = n - this.scrollTop > 0 ? "down" : "up";
        this.scrollTop = n, e.style.transition = "all 200ms linear", s === "down" ? (e.style.top = "-60px", e.style.backgroundColor = "transparent", e.style.animation = "navHide 400ms", e.style.boxShadow = "0 1px 3px #eff0f0") : (e.style.top = "0", e.style.backgroundColor = "rgba(255, 255, 255, 0.9)", e.style.animation = "navShow 400ms", e.style.boxShadow = "0 1px 3px #eff0f0"), n === 0 && (e.style.transition = "all 400ms linear", e.style.backgroundColor = "transparent", e.style.boxShadow = "none");
      }
    }
  },
  setup(e, {
    emit: n,
    slots: s
  }) {
    const o = (a) => {
      n("item-click", a);
    };
    return () => l("header", {
      class: "ku-header",
      ref: "KuHeader"
    }, [l("span", {
      class: "logo"
    }, [l("a", {
      href: ""
    }, [l("img", {
      src: e.header.logo,
      alt: "logo"
    }, null)])]), l("nav", null, [l("ul", null, [e.header.list.map((a) => a.link ? l("li", {
      onClick: () => o(a)
    }, [l("a", {
      href: a.link
    }, [l("img", {
      class: "icon",
      src: a.icon
    }, null), a.italic ? l("i", {
      class: "italic"
    }, [a.italic]) : null, l("span", null, [a.name])])]) : l("li", {
      onClick: () => o(a)
    }, [l("span", null, [l("img", {
      class: "icon",
      src: a.icon
    }, null), a.italic ? l("i", {
      class: "italic"
    }, [a.italic]) : null, a.name])]))])]), l("span", {
      class: "more"
    }, [l("span", {
      class: "more-name"
    }, [e.header.more.name]), l("button", {
      class: "menu-icon",
      title: "More"
    }, [l("span", {
      class: "icon-bar before"
    }, null), l("span", {
      class: "icon-bar main"
    }, null), l("span", {
      class: "icon-bar after"
    }, null)])])]);
  }
});
export {
  c as default
};

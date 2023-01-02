import { KuButtonPlugin as d } from "./components/Button/index.js";
import { KuButtonPlugin as j } from "./components/Button/index.js";
import { KuTagPlugin as g } from "./components/Tag/index.js";
import { KuTagPlugin as v } from "./components/Tag/index.js";
import { KuHeaderPlugin as x } from "./components/Header/index.js";
import { KuHeaderPlugin as y } from "./components/Header/index.js";
import { KuCardPlugin as P } from "./components/Card/index.js";
import { KuCardPlugin as D } from "./components/Card/index.js";
import { KuFooterPlugin as p } from "./components/Footer/index.js";
import { KuFooterPlugin as G } from "./components/Footer/index.js";
import { KuAsidePlugin as A } from "./components/Aside/index.js";
import { KuAsidePlugin as J } from "./components/Aside/index.js";
import { default as M } from "./components/Button/src/index.js";
import { default as O } from "./components/Tag/src/index.js";
import { default as R } from "./components/Header/src/index.js";
import { default as U } from "./components/Card/src/index.js";
import { default as W } from "./components/Footer/src/index.js";
import { default as Y } from "./components/Aside/src/index.js";
const k = {
  install(o) {
    var r, t, u, l, e, i, a, f, m, n, s, K;
    (t = (r = d).install) == null || t.call(r, o), (l = (u = g).install) == null || l.call(u, o), (i = (e = x).install) == null || i.call(e, o), (f = (a = P).install) == null || f.call(a, o), (n = (m = p).install) == null || n.call(m, o), (K = (s = A).install) == null || K.call(s, o);
  }
};
export {
  Y as KuAside,
  J as KuAsidePlugin,
  M as KuButton,
  j as KuButtonPlugin,
  U as KuCard,
  D as KuCardPlugin,
  W as KuFooter,
  G as KuFooterPlugin,
  R as KuHeader,
  y as KuHeaderPlugin,
  O as KuTag,
  v as KuTagPlugin,
  k as default
};

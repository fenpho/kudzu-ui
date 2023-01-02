const l = (t) => ({
  install(n) {
    n.component(t.name, t);
  }
});
export {
  l as withInstall
};

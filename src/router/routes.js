const _viewModules = import.meta.glob(`/src/views/**/*.vue`);
const views = {};
const prefixLen = `/src/views/`.length;
const suffixLen = `.vue`.length;
for (const path in _viewModules) {
  if (_viewModules.hasOwnProperty(path)) {
    // path like /src/views/a/../b.vue, we need key [a/...].
    views[path.substring(prefixLen, path.length - suffixLen)] = _viewModules[path];
  }
}
const routes = [
  {
    path: `/`,
    redirect: `/world`,
  },
  {
    path: `/world`,
    name: `hello world`,
    component: views[`World`],
  },
];

export default routes;

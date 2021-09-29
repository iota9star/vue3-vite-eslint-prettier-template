import { createRouter, createWebHistory } from "vue-router";

const routes = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.debug(`<${from.name || ``}:${from.fullPath}> => <${to.name}:${to.fullPath}>`);
  next();
});
export default router;

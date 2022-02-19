import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DataMethod from "../views/Data-Method.vue";
import DataBinding from "@/views/Data-Binding.vue";
import TwoWayDataBinding from "@/views/Two-Way-Data-Binding.vue";
import ConditionalLoop from "@/views/Conditional-Loop.vue";
import LifecycleHooks from "@/views/Life-Cycle-Hooks.vue";
import computedProperties from "@/views/Computed-Properties.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/data-method",
    name: "Data - Method",
    component: DataMethod,
  },

  {
    path: "/data-binding",
    name: "Data - Method",
    component: DataBinding,
  },

  {
    path: "/two-way-data-binding",
    name: "Two Way Data Binding",
    component: TwoWayDataBinding,
  },

  {
    path: "/conditionals-loop",
    name: "Conditional & Loop",
    component: ConditionalLoop,
  },

  {
    path: "/lifecycle-hooks",
    name: "Life Cycle Hooks",
    component: LifecycleHooks,
  },

  {
    path: "/computed-properties",
    name: "Computed Properties",
    component: computedProperties,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

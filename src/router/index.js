import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/install",
    name: "install",
    component: () => import("@/views/install.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/chat.vue"),
  },
  {
    path: "/Discord",
    name: "Discord",
    component: () => import("@/views/Discord.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

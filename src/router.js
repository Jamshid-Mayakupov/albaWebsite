import { createRouter, createWebHistory } from "vue-router";

// Asosiy sahifa uchun oddiy import
import Home from "@/views/Home.vue";

// Qolgan sahifalar uchun dinamik (lazy) import
const About = () => import("@/views/About.vue");
const Contact = () => import("@/views/Contact.vue");
const Blog = () => import("@/views/Blog.vue");
const Products = () => import("@/views/Products.vue");

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/contacts", name: "contacts", component: Contact },
  { path: "/products", name: "products", component: Products },
  { path: "/blog", name: "blog", component: Blog },
  {
    path: "/blog/:id",
    name: "blog-detail",
    component: () => import("@/views/BlogDetail.vue"),
  },
  {
    path: "/admin/gallery",
    name: "admin-gallery",
    component: () => import("@/views/Gallery/Gallery.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("@/views/Gallery/Galleryview.vue"),
  },
];

const router = createRouter({
  // import.meta.env.BASE_URL vite.config.js ichidagi base: '/albaWebsite/' manzilini avtomatik oladi
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
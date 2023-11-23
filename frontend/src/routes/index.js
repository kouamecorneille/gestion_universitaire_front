//define the list of all routes of this app
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: () => import("../screens/pages/HomeView.vue"),
      name: "Home",
      meta: {
        title: "Accueil | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/contact-us",
      component: () => import("../screens/pages/ConcatView.vue"),
      name: "Contact",
      meta: {
        title: "Contact | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/formations",
      component: () => import("../screens/pages/FormationsView.vue"),
      name: "Formations",
      meta: {
        title: "Nos Formations | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/evenements",
      component: () => import("../screens/pages/EventsView.vue"),
      name: "Events",
      meta: {
        title: "Nos Evènements | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/admission-uta",
      component: () => import("../screens/pages/AdmissionView.vue"),
      name: "Admission",
      meta: {
        title: "Admission | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/about-us",
      component: () => import("../screens/pages/AboutView.vue"),
      name: "About",
      meta: {
        title: "A propos de nous | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/faq-uta",
      component: () => import("../screens/pages/FaqView.vue"),
      name: "FAQ",
      meta: {
        title: "FAQ | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/gallery-uta",
      component: () => import("../screens/pages/GalleryView.vue"),
      name: "Gallery",
      meta: {
        title: "Gallerie | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/auth/login",
      component: () => import("../screens/auth/LoginView.vue"),
      name: "Login",
      meta: {
        title: "Espace de connexion | UTA",
        requiresAuth: false,
      },
    },
    {
      path: "/auth/forgot-password",
      component: () => import("../screens/auth/ForgotPasswordView.vue"),
      name: "ForgotPassword",
      meta: {
        title: "Espace de connexion | UTA",
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  }

  const isAuthenticated = localStorage.getItem("token");

  // if (to.path === "/") {
  //   if (isAuthenticated) {
  //     next("/dashbord");
  //   }
  //   return next("/auth/login");
  // }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      return next("/auth/login");
    }
  }

  next();
});

export default router;
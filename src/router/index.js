import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "../stores/authStore"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sigin',
      component: () => import('../views/SignIn.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: ()=> import("../components/UserManagement/Users.vue"),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/users/:id',
      name: 'userDetails',
      component: ()=> import("../components/UserManagement/UserDetails.vue"),
      props: true,
      meta:{
        requiresAuth:true
      }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../components/Resuables/NotFound.vue') }
   
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const authApiKey = sessionStorage.getItem("authApiKey")
  // when someone try to manually change route and try to access /login after being authenticated bcz state will be reset so authstore will be false
  console.log(to.path , authApiKey);
  if (to.path == '/' && authApiKey) {
    next('/users'); // Redirect to the dashboard or any other default route
  }
  if (to.name == 'NotFound' && authApiKey) {
    next('/users'); // Redirect to the dashboard or any other default route
  }
  // Check if the route requires authentication and if the user is not authenticated
  else if (to.meta.requiresAuth && (!authApiKey && !authStore.isAuthenticated)) {
    // Redirect to the login page
    next('/');
  } else {
    // Proceed to the intended route
    next();
  }
});

export default router

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Resuables/Header.vue';
import Sidebar from './components/Resuables/Sidebar.vue';
import Footer from './components/Resuables/Footer.vue';
import { onMounted, ref , computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {useAuthStore} from "./stores/authStore"
const auth = useAuthStore();

const route = useRoute();

const authentication = sessionStorage.getItem("authApiKey");
</script>

<template>
  <v-app id="inspire">
    <Header v-if="route.path !=='/' && authentication || auth.isAuthenticated "/>
    <hr>
    <div class="flex h-screen"> 
      <Sidebar v-if="route.path !=='/' && authentication || auth.isAuthenticated "/>
      <router-view class="flex-1"> </router-view>
  </div>
    
    <Footer v-if="route.path !=='/' && authentication || auth.isAuthenticated"/>
  </v-app>

  
</template>
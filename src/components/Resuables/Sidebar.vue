<template>
  <aside class="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">

  <div class=" flex flex-1 flex-col justify-between">
    <nav class="-mx-3 space-y-6 ">
      <div class="space-y-3 ">
        <label class="px-3 text-xs font-semibold uppercase text-gray-900">
          analytics
        </label>
        <router-link
          class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-sky-500 hover:text-white"
          to="/users"
          exact
          :class="{ 'active': route.path === '/users' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
          <span class="mx-2 text-sm font-medium">Users</span>
        </router-link>

      </div>

    </nav>
  </div>
</aside>

</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>
.router-link-active {
  background-color: rgb(14 165 233);
  color: #fff;
}
</style>
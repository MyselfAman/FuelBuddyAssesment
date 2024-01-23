<template>
  <section class="mx-auto w-full px-4 py-4">
    <div
      class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
    >
      <p class="font-bold">User Details</p>
    </div>
    <div class="flex">
      <div>
        <div>
          Full Name : {{ getUserInfo.firstName }} {{ getUserInfo.maidenName }}
          {{ getUserInfo.lastName }}
        </div>
        <div>Email : {{ getUserInfo.email }}</div>
        <div>
          <p>DOB : {{ getUserInfo.birthDate }}</p>
        </div>
        <div class="flex flex-row-reverse">
          <img :src="getUserInfo.image" alt="user pic" />
        </div>
        
      </div>
     
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../../stores/userStore";

const router = useRouter();
const store = useUserStore();

const getUserInfo = computed(() => {
  return store.getUserDetails();
});

onMounted(() => {
  store.fetchUserDetails(route.params.id);
});

const route = useRoute();
</script>

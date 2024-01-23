<template>
  <section class="mx-auto w-full px-4 py-4">

    <div
      class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
    >
      <div>
        <h2 class="text-lg font-semibold">
          Total Users [ {{ userList.length }} ]
        </h2>
        <p class="mt-1 text-sm text-gray-700">
          This is a list of all users. 
        </p>
      </div>
     
    </div>
    <div class="mt-6 flex flex-col" >
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 md:rounded-lg">
            <Table
              :headers="headers"
              :items="userList"
              table-class-name="customize-table"
              header-text-direction="center"
              body-text-direction="center"
              :rows-per-page="5"
            >
              <template  #item-firstName="{ firstName , lastName , id }">
                <div>
                  <p
                    @click="router.push(`/users/${id}`)"
                    style="
                      cursor: pointer;
                      color: rgb(14 165 233);
                      font-weight: 600;
                    "
                    class="ml-2"
                  >
                    {{ firstName  }} {{  lastName }}
                  </p>
                </div>
              </template>
              <template #item-operation="{ firstName , lastName, id }">
                <div class="flex justify-center">
                  <span
                    class="mdi mdi-delete-circle text-lg cursor-pointer hover:text-red-600 text-gray-500"
                  >
                  <svg class="w-4 h-4 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                  </span>
                 
                </div>
              </template>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Table from "vue3-easy-data-table";
import { useUserStore } from "../../stores/userStore";
// import createModals from '../Modals/createModals.vue';
// import InfoModel from "../Modals/InfoModel.vue"
import router from "../../router";

const store = useUserStore();
const dialog = ref(false);
const deleteDialog = ref(false);
const dialogInfo = ref("");
const loading = ref(true);
let userList = computed(() => {
  return store.getallUser();
});

const headers = ref([
  { text: "ID", value: "id" },
  { text: "Firstname", value: "firstName" },
  { text: "Lastname", value: "lastName" },
  { text: "Email", value: "email" },
  { text: "Company", value: "company.name" },
  { text: "DOB", value: "birthDate" },
  { text: "Address", value: "address.address" },
  { text: "Actions", value: "operation" },
]);

function closeModal() {
  dialog.value = false;
  deleteDialog.value = false;
}

function deleteUser() {
  deleteDialog.value = false;
}

function createUser(data) {
  dialog.value = false;
}

onMounted(() => {
  store.fetchUsers();
});
</script>

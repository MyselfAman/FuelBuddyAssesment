import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from '../utils/axiosInterceptor'

export const useUserStore = defineStore('userStore', () => {
  const userList = ref([])
  const userDetails = ref({})

  const errorMessage = ref("")


  // computed are same as getters it's just we have to return it using another function
  const allUser = computed(() => userList.value);
  const userInfo = computed(() => userDetails.value);

  function getallUser(){
    return allUser.value
  }
  function getUserDetails(){
    console.log("hi");
    return userInfo.value
  }




  async function fetchUsers() {
    try {
      const response = await axios.get('/users');
      console.log(response);
      userList.value = response.data.users
    } catch (error) {
      errorMessage.value = error.message;
    }
  }

  async function fetchUserDetails(id) {
    try {
      const response = await axios.get(`/users/${id}`);
      console.log(response);
      userDetails.value = response.data
      return userDetails.value;
    } catch (error) {
      errorMessage.value = error.message;
    }
  }

  return { userList, fetchUsers , errorMessage, getallUser , getUserDetails , fetchUserDetails}
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'


export const useAuthStore = defineStore('authStore', () => {

    const isAuthenticated = ref(false);
    const errorMessage = ref('')
    const checkAuthentication = computed(()=>{
        return isAuthenticated.value;
    })
    const userEmail = ref("");
    const router = useRouter();

    
    async function authenticate(email,password){
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              if(user.email !== ""){
                console.log("inside");
                userEmail.value = user.email;
                sessionStorage.setItem("logedInUser" , userEmail.value);
                sessionStorage.setItem('authApiKey', true);
                router.push("/users");
                isAuthenticated.value =true;

              }
              else{
                router.push("/")

              }
            })
            .catch((error) => {
              errorMessage.value = "Invalid credential. Please Check !";
              setTimeout(()=>{
                errorMessage.value = ""
              },2000)
            });
    }
    
    function logout(value){
        isAuthenticated.value = value
    }

  return {authenticate , isAuthenticated , checkAuthentication , logout , userEmail , errorMessage}
})

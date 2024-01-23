import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {initializeApp} from 'firebase/app'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
const firebaseConfig = {
  apiKey: "AIzaSyB91dORU0Fbq_oj45D39fjXKpop_1w_NbU",
  authDomain: "fir-app-ca694.firebaseapp.com",
  projectId: "fir-app-ca694",
  storageBucket: "fir-app-ca694.appspot.com",
  messagingSenderId: "384130950760",
  appId: "1:384130950760:web:4e5ffca202bfa65a443ddd"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3EasyDataTable)


app.mount('#app')

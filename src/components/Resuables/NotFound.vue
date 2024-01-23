<template>
    <div class="d-flex  align-center justify-center bg-indigo " style="height:calc(100vh)">
            <div class="d-flex flex-column">
                <h1>Oops ! Page Not Found</h1>
                <div class="d-flex justify-center">
                    <v-btn class="mt-6" @click="router.push('/users')">Go Home</v-btn>
                </div>
            </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"

const router = useRouter();
</script>
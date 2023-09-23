<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar bg-dark  navbar-dark">
        <div class="container">
            <router-link class="navbar-brand text-withe" to="/">
                <img src="@/assets/letra-v.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">

            </router-link>
            <div>
                <RouterLink class="navbar-brand" to="/clients">Clientes</RouterLink>
                <RouterLink class="navbar-brand" to="/received">F.Recibidas</RouterLink>
            </div>
        </div>
    </nav>
    <div class="container text-center">
        <RouterView />
    </div>
</template>

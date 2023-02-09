<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>


<template>
    <header class="header">
        <img src="@/assets/logo.svg" alt="logo"/>

        <nav>
            <RouterLink to="/">Home</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        width:100%;
        display: flex;
        height:100px;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top:0;
        left:0;
        z-index: 1000;
        background-color: #FFFFFF;
    }

    .header img {
        width:100px;
    }

    a{
        color: #AD5504;
        text-decoration: none;
        font-weight:600;
        transition: 0.3s ease;
        padding:4px 8px;
        border-radius: 4px;
    }

    a:hover{
        background-color: #AD5504;
        color: #FFFFFF;
    }
</style>
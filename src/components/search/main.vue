<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const breed = ref("")
    const store = useStore()

    const submit = computed(()=>{
        store.dispatch("clearDogs")
        store.dispatch("fetchDogs", breed.value)
    })

    const reset = ()=>{
        store.dispatch("clearDogs")
        breed.value = ""
        store.dispatch("fetchDogs")
    }

</script>


<template>
    <form class="search_cont" @submit.prevent="submit">
        <input v-model="breed" class="input"/>
        <button type="submit" class="search">Search</button>
        <button @click="reset" class="search">Reset</button>
    </form>
</template>

<style scoped>
    .search_cont {
        display: flex;
        gap:24px;
        position: sticky;
        top:100px;
        left:0;
        z-index: 1000;
        background-color: #FFFFFF;
        padding-bottom:12px;
        flex-wrap: wrap;
    }
    .input {
        height:40px;
        border-radius: 8px;
        outline: none;
        border:1px solid #CECECE;
        width:300px;
        padding-left: 12px;
        font-size: 18px;
    }
    .search{
        padding:0px 16px;
        border-radius: 8px;
        background-color: #AD5504;
        color:#FFFFFF;
        font-weight:600;
        border:none;
        height:40px;
    }

    .search:hover{
        background-color: #ed7a0e;
        transition: 0.2s ease-in;
    }
</style>
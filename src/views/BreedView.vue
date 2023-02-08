<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()
    const route = useRoute()


    onMounted(()=>{
        let currBreed = route.params.breed
        let subBreed;

        if(currBreed.includes("-")){
            let breedArr = currBreed.split("-")
            subBreed = `${breedArr[0]}/${breedArr[1]}`
            currBreed = breedArr[0]
        }
        else {
            currBreed = currBreed
            subBreed = currBreed
        }

        store.dispatch("fetchDogImage", subBreed)
        store.dispatch("fetchDogSubBreed", currBreed)
    })

</script>

<template>
    <div v-if="store.state.dog.loadingImage">
        <p>Loading Image</p>
    </div>
    <div v-else-if="!store.state.dog.image">
        <p>There are no images available for this breed</p>
    </div>
    <div v-else="store.state.dog.image">
        <img :src="store.state.dog.image"/>
    </div>

    <div>
        <p v-if="store.state.dog.loadingSubBreed">
            Loading
        </p>
        <div v-else-if="store.state.dog.subBreed.length === 0">
            <p>There are no subbreeds for this breed</p>
        </div>
        <ul v-else="store.state.dog.subBreed">
            <li v-for="subBreed in store.state.dog.subBreed">
                {{ subBreed }}
            </li>
        </ul>
    </div>
</template>
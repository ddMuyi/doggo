<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import { useStore } from 'vuex';
    import DogLoader from '../components/dogLoader/main.vue'

    const store = useStore()
    const route = useRoute()


    onMounted(()=>{
        let currBreed = route.params.breed
        
        let subBreed;

        if(currBreed.includes("-")){
            let breedArr = currBreed.toString().split("-")
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
    <div class="title">{{ route.params.breed }}</div>
    <div class="cont">
        <div class="details_cont">
            <div class="img">
                <div v-if="store.state.dog.loadingImage">
                    <DogLoader/>
                </div>
                <div v-else-if="!store.state.dog.image">
                    <p>There are no images available for {{ route.params.breed }}</p>
                </div>
                <div v-else="store.state.dog.image">
                    <img :src="store.state.dog.image"/>
                </div>
            </div>

            <div>
                <p v-if="store.state.dog.loadingSubBreed">
                    Loading
                </p>
                <div v-else-if="store.state.dog.subBreed.length === 0">
                    <p>There are no sub-breeds for {{ route.params.breed }}</p>
                </div>
                <div class="sub-breeds" v-else="store.state.dog.subBreed">
                    <p class="description">These are the sub-breeds of {{ route.params.breed }}</p>
                    <ul>
                        <li v-for="subBreed in store.state.dog.subBreed">
                            {{ subBreed }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .title {
        font-weight: 600;
        font-size: 24px;
        text-transform: uppercase;
        text-align: center;
    }

    .cont {
        display: flex;
        justify-content: center;
    }
    .details_cont {
        display: inline-block;
        max-width: 500px;
    }
    p{
        text-align: center;
    }

    ul {
        list-style-position: inside;
    }

    li{
        font-size: 18px;
    }

    img {
        width:100%;
    }

    @media (min-width:678px) {
        img{width:500px}
    }

    .img {
        min-height:100px;
        transition: 0.3s all;
        margin-top:24px;
    }

    .subBreeds {
        padding-bottom:40px;
    }

    .description {
        font-size:18px;
        font-weight: 500;
        text-align: left;
        margin-top:24px;
    }
</style>
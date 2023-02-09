<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import DogImage from '../components/dogImage/main.vue'
import SearchComponent from '../components/search/main.vue'
import DogLoader from '../components/dogLoader/main.vue'

const store = useStore()

onMounted(()=>{
  store.dispatch("fetchDogs")
  store.dispatch("fetchDogs")
})

    window.addEventListener("scroll", ()=> {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !store.state.searchDog) {
      store.dispatch("fetchDogs")
    }
    }, {passive:true})

  

</script>

<template>
    <SearchComponent/>

    <div class="images_cont">
        <p v-if="store.state.dogs.length == 0 && !store.state.loadingDogs">
            The breed you searched doesn't exist on our Database
        </p>
        
      <DogImage v-else v-for="(dog, index) in store.state.dogs" :key="dog" :src="dog" :index="index"/>

        
    </div>

    <div v-if="store.state.loadingDogs">
        <DogLoader/>
    </div>
</template>

<style scoped>


.images_cont {
  display: grid;
  margin:0px auto;
  gap:24px;
  width:100%;
  margin-top:24px;
}
@media (min-width: 640px) {
    .images_cont {
        grid-template-columns: 1fr 1fr;
    }
}
@media (min-width: 1024px) {
    .images_cont {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media (min-width: 1280px) {
    .images_cont {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
@media (min-width: 1536px) {
    .images_cont {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>

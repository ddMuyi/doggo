<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import DogImage from '../components/dogImage/main.vue'

const store = useStore()

onMounted(()=>{
  store.dispatch("fetchDogs")
  store.dispatch("fetchDogs")

  window.onscroll = () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

    if (bottomOfWindow) {
      store.dispatch("fetchDogs")
    }
  };
})

</script>

<template>
    <div class="images_cont">
      <DogImage v-for="(dog, index) in store.state.dogs" :key="dog" :src="dog" :index="index"/>
    </div>
    <div v-if="store.state.loadingDogs">Loading Images</div>
</template>

<style scoped>


.images_cont {
  display: grid;
  margin:0px auto;
  gap:24px;
  width:100%;
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

<script setup lang="ts">
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()

defineProps<{src:string}>()

const showBreed = (url:string) =>{
  let breed =url.split("/")[4]
  router.push(`/breed/${breed}`)
}

</script>

<template>
    <div v-for="dog in store.state.dogs" class="image_cont">
        <img @click="showBreed(dog)" :src="dog" class="img" lazyload/>
    </div>
</template>


<style scoped>
    .image_cont {
  width: 100%;
  border-radius: 12px;
  background-color: white;
  transition: 0.2s ease;
}

@media (min-width: 640px) {
    .image_cont {
        width:100%;
    }
}

@media (min-width: 1024px) {
    .image_cont {
        width:100%;
    }
}
@media (min-width: 1280px) {
    .image_cont {
        width:100%;
    }
}
@media (min-width: 1536px) {
    .image_cont {
        width:100%;
    }
}

.image_cont:hover{
  transform: scale(1.04);
  filter:drop-shadow(0px 4px 4px #cecece);
}


.img{
  display: block;
  width: 100%;
  height:300px;
  border-radius: 12px;
  object-fit: cover;
}
</style>
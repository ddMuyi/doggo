<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()

const loading = ref(false)

onMounted(()=>{
  store.dispatch("fetchDogs")
  store.dispatch("fetchDogs")
})

const showBreed = (url:string) =>{
  let breed =url.split("/")[4]
  router.push(`/breed/${breed}`)
  
}

</script>

<template>

    <div class="images_cont">
      <div v-for="dog in store.state.dogs" class="image_cont">
        <img @click="showBreed(dog)" :src="dog" class="img" lazyload/>
      </div>
    </div>

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
/* @media (min-width: 768px) {
    .images_cont {
        max-width: 768px;
    }
} */
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

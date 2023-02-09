<script setup lang="ts">
// import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { computed, onMounted } from 'vue';
import useIntersectonObserver from '../../composables/useIntersectionObserver'


const router = useRouter()

const props = defineProps<{src:string, index:number}>()

const showBreed = (url:string) =>{
  let breedArr =url.split("/")
  let breed = breedArr[4]
  router.push(`/breed/${breed}`)
}

const intersected = ref(false)
const target = ref<HTMLElement | null>(null)

const srcImage = computed(()=>intersected.value ? props.src : "")

function intersectCallback(entry: IntersectionObserverEntry) {

      const image = entry;
      if (image.isIntersecting) {
        intersected.value = true;
      }
}

onMounted(()=>{
    if(target.value !== null) {
        useIntersectonObserver.observeElemement(target.value, intersectCallback)
    }
})

</script>

<template>
    <div class="image_cont" ref="target" id="cont">
        <img @click="showBreed(src)" 
            :src="srcImage" 
            class="img" 
            lazy="loading"
            
        />
        <div class="index">{{ props.index + 1 }}</div>
        
        <p class="name">{{ src.split("/")[4] }}</p>
    </div>
</template>


<style scoped>
    .image_cont {
  width: 100%;
  border-radius: 12px;
  background-color: white;
  transition: 0.2s ease;
  position: relative;
  border:1px solid #CECECE;
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
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  object-fit: cover;
}

.index {
    position:absolute;
    top:0px;
    left:0px;
    z-index:999;
    font-weight: 700;
    font-size: 24px;
}

.name {
    padding:4px 0px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}
</style>
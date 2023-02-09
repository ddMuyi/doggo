<template> 
    <div class="loader_cont">
        <div class="loader">
            <lottie-player 
            src="https://assets7.lottiefiles.com/packages/lf20_2ixzdfvy.json"  background="transparent"  
            speed="1"  
            style="width: 250px; 
            height: 250px;"  
            loop  
            autoplay>
            </lottie-player>
        </div>
    </div>
</template>

<style scoped>
    .loader_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .loader {
        display: block;
        margin:0px auto;
    }
</style>
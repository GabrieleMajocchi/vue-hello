const { createApp } = Vue

createApp({
    data(){
        return {
            message: 'Hello Vue!',
            randomimg: 'https://unsplash.it/600/300?image'
        }
    }
}).mount('#app')
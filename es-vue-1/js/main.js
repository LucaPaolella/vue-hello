"use strict";

const { createApp } = Vue 
const vm = createApp({
    data() {
        return {
            message: 'Vue Hello',
            //terracotta: URL(img/vaso.jpg)
            terracotta: 'img/vaso.jpg'
        }
          

    }
}).mount("#app")
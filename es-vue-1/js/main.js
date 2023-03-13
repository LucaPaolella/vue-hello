"use strict";

const { createApp } = Vue 
const vm = createApp({
    data() {
        return {
            message: 'Vue Hello'
        }
    }
}).mount("#app")
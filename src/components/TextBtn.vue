<template>
  <button @click="store.state.modal = !store.state.modal; console.log(store.state.modal )">{{ title }}</button>
</template>

<script setup> 
defineProps(['title']);    
import { useStore } from 'vuex';

const store = useStore();
</script>

<style scoped>
button { 
font-size: 16px;
font-weight: 700;
line-height: 16px;
letter-spacing: 0.01em;  
padding: 16px 24px 17px 24px;
border-radius: 90px; 
background: rgba(90, 204, 3, 1); 
color: rgba(252, 252, 253, 1); 
}
</style> 
<template>
  <Modal />
  <div :class="'wrapper' + ' ' + store.state.currentSlide.className">
    <Header />
    <Hero />
  </div>
  <About />
  <Our />
  <Services />
  <Team />
  <How />
  <Trevael />
  <Reviews />
  <Enjoy />
  <Footer />
</template>

<script setup>
import Header from './components/home/header/Header.vue';
import About from './components/home/About.vue';
import Our from './components/home/Our.vue';
import Services from './components/home/Services.vue';
import Team from './components/home/Team.vue';
import Footer from './components/home/Footer.vue';
import How from './components/home/How.vue';
import Trevael from './components/home/Travael.vue';
import Reviews from './components/home/Reviews.vue';
import Enjoy from './components/home/Enjoy.vue';
import Hero from './components/home/hero/Hero.vue';
import Modal from './components/Modal.vue';
import { useStore } from 'vuex';
import { watchEffect } from 'vue';

const store = useStore() 

watchEffect(() => { 
  const body = document.body;
  if (store.state.modal) {
    body.classList.add('hidan');
  } else {
    body.classList.remove('hidan');
  } 
});

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter';
  overflow: unset;

  &.hidan {
    overflow: hidden;
  }
}



a[href^="#"] {
  transition: all 0.3s ease-in-out;
}

a[href^="#"]:hover {
  opacity: 0.7;
}

.wrapper {
  transition: .3s;

  &.bish {
    background: url('./assets/img/global/Bish.png') center no-repeat;
    background-color: #ccc;
    background-size: cover;
  }

  &.ik {
    background: url('./assets/img/global/IK.png') center no-repeat;
    background-color: #ccc;
    background-size: cover;
  }

  &.naryn {
    background: url('./assets/img/global/Naryn.png') center no-repeat;
    background-color: #ccc;
    background-size: cover;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}

.title {
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: rgba(35, 38, 47, 1);
  margin-bottom: 13px;
}

.text {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(119, 126, 144, 1);
}

button {
  border: none;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

input {
  border: none;
  outline: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media screen and (max-width:1140px) {
  .container {
    padding: 0 10px;
  }
}
</style>
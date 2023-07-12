<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <ul class="header-list">
          <li class="header-logo">
            <Logo />
          </li>
          <li class="header-line"></li>
          <li class="header-item"><a href="#about">About us</a></li>
          <li class="header-item"><a href="#our">Advantages</a></li>
          <li class="header-item"><a href="#services">Services</a></li>
          <li class="header-item"><a href="#team">Team</a></li>
          <li class="header-item"><a href="#">Feedback</a></li>
        </ul>
        <div class="header-cocial">
          <div class="header-info">
            <a href="tel:+996708221198" target="_blank" class="header-item another">+996 (708) 221 198</a>
            <a href="mailto:info@cometobishkek.com" target="_blank" class="header-item another">info@cometobishkek.com</a>
          </div>
          <a href="#" target="_blank" class="header-item">
            <Facebook />
          </a>
          <a href="#" target="_blank" class="header-item">
            <Instagram />
          </a>
          <div v-if="isActive" class="header-item" @click="isActive = !isActive">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.99935 16.6667C13.6812 16.6667 16.666 13.6819 16.666 9.99999C16.666 6.31809 13.6812 3.33332 9.99935 3.33332C6.31745 3.33332 3.33268 6.31809 3.33268 9.99999C3.33268 13.6819 6.31745 16.6667 9.99935 16.6667ZM9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.4562 15.1472C12.0718 13.916 12.5007 12.0985 12.5007 9.99999C12.5007 7.90144 12.0718 6.08396 11.4562 4.85279C10.7908 3.52193 10.1799 3.33332 10.0007 3.33332C9.82144 3.33332 9.21052 3.52193 8.54508 4.85279C7.9295 6.08396 7.50065 7.90144 7.50065 9.99999C7.50065 12.0985 7.9295 13.916 8.54508 15.1472C9.21052 16.4781 9.82144 16.6667 10.0007 16.6667C10.1799 16.6667 10.7908 16.4781 11.4562 15.1472ZM10.0007 18.3333C12.3018 18.3333 14.1673 14.6024 14.1673 9.99999C14.1673 5.39762 12.3018 1.66666 10.0007 1.66666C7.69946 1.66666 5.83398 5.39762 5.83398 9.99999C5.83398 14.6024 7.69946 18.3333 10.0007 18.3333Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.2915 10.8333C18.3188 10.5592 18.3327 10.2812 18.3327 9.99999C18.3327 9.71874 18.3188 9.44075 18.2915 9.16666H1.70716C1.67995 9.44075 1.66602 9.71874 1.66602 9.99999C1.66602 10.2812 1.67995 10.5592 1.70716 10.8333H18.2915Z"
                fill="white" />
            </svg>
            EN
          </div>
          <div v-else class="header-item" @click="isActive = !isActive">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.99935 16.6667C13.6812 16.6667 16.666 13.6819 16.666 9.99999C16.666 6.31809 13.6812 3.33332 9.99935 3.33332C6.31745 3.33332 3.33268 6.31809 3.33268 9.99999C3.33268 13.6819 6.31745 16.6667 9.99935 16.6667ZM9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.4562 15.1472C12.0718 13.916 12.5007 12.0985 12.5007 9.99999C12.5007 7.90144 12.0718 6.08396 11.4562 4.85279C10.7908 3.52193 10.1799 3.33332 10.0007 3.33332C9.82144 3.33332 9.21052 3.52193 8.54508 4.85279C7.9295 6.08396 7.50065 7.90144 7.50065 9.99999C7.50065 12.0985 7.9295 13.916 8.54508 15.1472C9.21052 16.4781 9.82144 16.6667 10.0007 16.6667C10.1799 16.6667 10.7908 16.4781 11.4562 15.1472ZM10.0007 18.3333C12.3018 18.3333 14.1673 14.6024 14.1673 9.99999C14.1673 5.39762 12.3018 1.66666 10.0007 1.66666C7.69946 1.66666 5.83398 5.39762 5.83398 9.99999C5.83398 14.6024 7.69946 18.3333 10.0007 18.3333Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.2915 10.8333C18.3188 10.5592 18.3327 10.2812 18.3327 9.99999C18.3327 9.71874 18.3188 9.44075 18.2915 9.16666H1.70716C1.67995 9.44075 1.66602 9.71874 1.66602 9.99999C1.66602 10.2812 1.67995 10.5592 1.70716 10.8333H18.2915Z"
                fill="white" />
            </svg>
            RU
          </div>
        </div>
        <Burger />
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '../../../assets/icons/header/Logo.vue';
import Facebook from '../../../assets/icons/header/Facebook.vue';
import Instagram from '../../../assets/icons/header/Instagram.vue';
import Burger from '../../../components/home/header/Burger.vue';
import { ref } from 'vue'; 

const isActive = ref(true)


</script>

<style lang="scss">
.header {
  padding: 18px 0;

  &-list {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  &-wrapper {
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &-item {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &.another {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0.01em;
      text-align: right;

    }
  }

  &-info {
    display: flex;
    flex-direction: column;
  }

  &-cocial {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media screen and (max-width:1155px) {
    &-item {
      display: none;
    }

    &-cocial {
      display: none;
    }
  }
}</style>
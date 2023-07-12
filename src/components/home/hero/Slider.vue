<template>
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :coverflowEffect="{
        rotate: 30,
        stretch: 0,
        depth: 10,
        modifier: 2,
    }" :modules="modules" :breakpoints="{
    '300': {
        slidesPerView: 1.7,
        spaceBetween: 0,
    },
    '350': {
        slidesPerView: 1.9,
        spaceBetween: 0,
    },
    '400': {
        slidesPerView: 2.2,
        spaceBetween: 0,
    },
    '550': {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    '730': {
        slidesPerView: 2.5,
        spaceBetween: 0,
    },
    '810': {
        slidesPerView: 3,
        spaceBetween: 0,
    },
}" :initialSlide="1" class="hero-swiper">
        <swiper-slide v-for="(item) in enList" :key="item.id">
            <img :src="item.img" class="hero-img" />
            <span class="hero-name">{{ item.name }}</span>
            <div class="hero-slider_line" :class="item.name"></div>
        </swiper-slide>
    </swiper>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import { ref } from 'vue';

import IK from "../../../assets/img/hero/IK.png"
import Bish from "../../../assets/img/hero/Bish.png"
import Naryn from "../../../assets/img/hero/Naryn.png"

const enList = [
    {
        id: 0,
        img: IK,
        name: "Issyk kul"
    },
    {
        id: 1,
        img: Bish,
        name: "Bishkek"
    },
    {
        id: 2,
        img: Naryn,
        name: "Naryn"
    },
]

const modules = [EffectCoverflow];


</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    border-radius: 8.576px;
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
    height: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0);
}

.swiper-slide img {
    display: block;
    width: 100%;
    position: absolute;
    z-index: 11;
    left: 50%;
    transform: translate(-50%, 0px);
}

.swiper-slide.swiper-slide-visible.swiper-slide-active {
    width: 321.6px;
    height: 536px;
    flex-shrink: 0;


    span {
        color: #FFF;
        font-size: 42.88px;
        font-weight: 700;
        line-height: 69.68px;
        letter-spacing: 0.429px;
        text-transform: uppercase;
        left: -13px;
        top: 400px;
    }

    div {
        position: absolute;
        width: 134px;
        left: -13px;
        top: 460px;
    }
}

@media screen and (max-width:1110px) {
    .swiper-slide.swiper-slide-visible.swiper-slide-active {


        span {
            left: -13px;
            top: 360px;
        }

        div {
            top: 420px;
        }
    }
}

@media screen and (max-width:1020px) {
    .swiper-slide.swiper-slide-visible.swiper-slide-active {


        span {
            left: -13px;
            top: 310px;
        }

        div {
            top: 370px;
        }
    }

    .swiper {
        padding: 0;
    }
}

@media screen and (max-width:910px) {
    .swiper-slide.swiper-slide-visible.swiper-slide-active {


        span {
            left: -13px;
            top: 255px;
        }

        div {
            top: 310px;
        }
    }

    .swiper {
        padding: 0;
    }
}

@media screen and (max-width:810px) {
    .swiper-slide.swiper-slide-visible.swiper-slide-active {


        span {
            left: -13px;
            top: 290px;
        }

        div {
            top: 355px;
        }
    }

    .swiper {
        padding-bottom: 20px;
    }
}

@media screen and (max-width:730px) {
    .swiper-slide.swiper-slide-visible.swiper-slide-active {

        height: 300px;

        span {
            left: 50%;
            top: 200px; 
            font-size: 24px; 
            font-weight: 600;
            line-height: 52px; 
            transform: translate(-50%, 0px);
            border-bottom: 2px solid #fff;
            width: max-content;

        }

        div {
            display: none;
        }
    }

    .swiper-slide img {
        width: 240px;
        height: 300px;
    }

    .swiper {
        padding: 00px;
    }
}
</style>
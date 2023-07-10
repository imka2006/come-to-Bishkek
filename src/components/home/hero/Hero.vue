<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h2 class="hero-title">Book the Tours</h2>
                <div class="hero-info">
                    <div class="hero-line"></div>
                    selected
                    <div class="hero-line"></div>
                </div>
                <div class="hero-wrapper">
                    <Slider />
                </div>
                <TextBtn class="hero-btn" title="Book my trip" />
            </div>
        </div>
    </section>
</template>

<script setup>
import Slider from './Slider.vue';
import TextBtn from '../../TextBtn.vue';

</script>

<style lang="scss">
.hero {
    padding: 82px 0 62px;

    &-title {
        color: #FFF;
        text-align: center;
        font-size: 54px;
        font-weight: 600;
        letter-spacing: -1px;
        text-transform: capitalize;
        margin-bottom: 32px;
    }

    &-info {
        color: #FFF;
        text-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.80);
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    &-line {
        width: 100px;
        height: 1px;
        background: #FFF;
    }

    &-name {
        color: #FFF;
        font-size: 26.8px;
        font-weight: 700;
        line-height: 42.88px;
        letter-spacing: 0.268px;
        position: absolute;
        left: 55px;
        top: 455px;
        transition: .3s;
        z-index: 12;
    }

    &-slider_line {
        position: absolute;
        background: #fff;
        left: 55px;
        top: 490px;
        transition: .3s;
        width: 0;
        height: 2.68px;
        z-index: 12;
        transition: .3s;
    }

    &-btn {
         margin: 55px auto 0; 
         display: flex;
         justify-content: center;
    }
}
</style>
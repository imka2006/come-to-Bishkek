<template>
    <section class="about">
        <div class="container">
            <div class="about-wrapper">
                <img :src="img" alt="img">
                <div class="about-content">
                    <h2 class="about-title">About us</h2>
                    <p class="about-description">We offer individual tours in Kyrgyzstan, which allow foreigners to get
                        acquainted with the Kyrgyz culture, history and nature. Our team of experts will take care of every
                        detail so that our guests can have an unforgettable experience and get to know the real Kyrgyz
                        Republic.</p>
                </div>
            </div>
            <!-- <Bg class="about-bg" /> -->
        </div>
    </section>
</template>

<script setup>
import img from '../../assets/img/about/img.png';
// import Bg from '../../assets/img/about/bg.png';
</script>

<style lang="scss">
.about {
    padding: 100px 0;

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-bg {
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 0;
    }

    &-content {
        position: relative;
        max-width: 528px;
    }

    &-title {
        color: #23262F;
        font-size: 54px;
        font-weight: 600;
        letter-spacing: 0.54px;
        margin-bottom: 28px;
    }

    &-description {
        color: #23262F;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.18px;
        line-height: 30px;
    }

}
</style>
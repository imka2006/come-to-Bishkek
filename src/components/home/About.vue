<template>
    <section id="about" class="about">
        <div class="container">
            <div class="about-wrapper">
                <img :src="img" alt="img">
                <div class="about-content">
                    <h2 class="about-title">{{$t('aboutTitle')}}</h2>
                    <p class="about-description">{{ $t("aboutText") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import img from '../../assets/img/about/img.png'; 
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

    @media screen and (max-width:1160px) {
        &-wrapper {
            flex-direction: column;
            gap: 40px;
        }
    }

    @media screen and (max-width:575px) {
        & {
            padding: 80px 0;
        }

        h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            margin-bottom: 12px;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 30px;
        }

        img {
            max-width: 100%;
        }
    }

}
</style>
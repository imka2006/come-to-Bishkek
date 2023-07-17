<template>
    <section class="travel">
        <div class="container">
            <div class="travel-wrapper">
                <div class="travel-info">
                    <span class="travel-text">{{$t('travaelText')}}</span>
                    <h2 class="title travel-title">{{$t('travaelTitle')}}</h2>
                    <Send class="travel-send" />
                </div>
                <img v-if="$i18n.locale == 'en'" :src="img" alt="img">
                <img v-else :src="imgru" alt="img">
            </div>
        </div>
    </section>
</template>

<script setup>
import Send from '../Send.vue';
import img from "../../assets/img/travel/img.png";
import imgru from "../../assets/img/travel/imgru.png";
</script>

<style lang="scss">
.travel {
    padding: 56px 0 100px;

    &-wrapper {
        display: flex;
        align-items: center;
    }

    &-info {
        max-width: 448px;
    }

    &-text {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.01em;
        color: rgba(119, 126, 144, 1);
    }

    &-title {
        margin: 15px 0 40px;
        text-align: left !important;
    }

    @media screen and (max-width:1110px) {
        &-wrapper {
            flex-wrap: wrap-reverse;
            justify-content: center;
            text-align: center;

        }

        h2 {
            text-align: center !important;
        }

        &-send {
            margin: 0 auto;
        }

        &-info {
            max-width: 590px;
            margin-top: 32px;
        }
    }

    @media screen and (max-width:685px) {
        & {
            padding: 60px 0;
        }
        h2 {
            font-size: 24px;
            font-weight: 600;
            line-height: 36px;
            margin:12px 0 40px;
        }
        img{
            max-width: 100%;
        }
    }
}
</style>
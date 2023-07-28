<template>
    <section class="enjoy" id="video">
        <div class="container">
            <div class="enjoy-head">
                <h2 class="ttile" v-if="$i18n.locale == 'en'">Book a tour <br />
                    and just enjoy</h2>
                <h2 class="ttile" v-else>Забронировать тур <br />
                    и просто наслаждайся</h2>
                <TextBtn class="enjoy-btn" :title="$t('enjoyBtn')" />
            </div>
            <div class="enjoy-wrapper">
                <!-- <img :src="img" alt="img"> -->
            </div>
                <TextBtn class="enjoy-btn another" :title="$t('enjoyBtn')" />
        </div>
    </section>
</template>

<script setup>
import TextBtn from '../TextBtn.vue';
import img from "../../assets/img/enjoy/img.png";
</script>

<style lang="scss">
.enjoy {
    padding: 70px 0 135px;

    &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-wrapper {
        margin-top: 80px;
        height: 300px;
    }

    &-btn {
        &.another {
            display: none;
        }
    }

    img {
        max-width: 100%;
    }

    @media screen and (max-width:600px) {
        &-btn.another {
            display: block;
            margin: 25px auto 0;
        }
        &-btn {
            display: none;
        }
        &-head {
            justify-content: center;
        }
        h2 {
            text-align: center;
        }
        &-wrapper {
            margin-top: 35px;
        }
    }
    @media screen and (max-width:400px) {
        &-btn.another {
            width: 100%;
            text-align: center;
        }
      
    }

}
</style>
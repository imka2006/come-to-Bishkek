<template>
    <section class="enjoy">
        <div class="container">
            <div class="enjoy-head">
                <h2 class="ttile" v-if="$i18n.locale == 'en'">Book a tour <br />
                    and just enjoy</h2>
                <h2 class="ttile" v-else>Забронировать тур <br />
                    и просто наслаждайся</h2>
                <TextBtn :title="$t('enjoyBtn')" />
            </div>
            <div class="enjoy-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IWDY2nLohIY"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
import TextBtn from '../TextBtn.vue';
// import { useI18n } from 'vue-i18n';

// Используем `useI18n`, чтобы получить объект `$t`
// const { t } = useI18n();
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
    }

    iframe {
        width: 100%;
        height: 500px;
        border-radius: 15px;
    }

}
</style>
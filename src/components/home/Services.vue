<template>
    <section id="services" class="services">
        <div class="container">
            <h2 class="title">{{$t("servicesTitle")}}</h2>
            <p class="services-descr text">{{$t("servicesText")}}</p>
            <div class="services-wrapper">
                <img class="services-bg services-left" :src="Left" alt="img">
                <img class="services-bg services-right" :src="Right" alt="img">
                <template v-if="$i18n.locale == 'en'">
                    <div class="services-block" v-for="item in enList" :key="item.id">
                        <span class="services-number">0{{ item.id }}</span>
                        <h4 class="services-name">{{ item.name }}</h4>
                        <p class="services-description">{{ item.description }}</p>
                    </div>
                </template>
                <template v-else>
                    <div class="services-block" v-for="item in ruList" :key="item.id">
                        <span class="services-number">0{{ item.id }}</span>
                        <h4 class="services-name">{{ item.name }}</h4>
                        <p class="services-description">{{ item.description }}</p>
                    </div>
                </template>

                <TextBtn :title="$t('servicesBtn')" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import Right from '../../assets/img/services/right.png';
import Left from '../../assets/img/services/left.png';
import TextBtn from "../TextBtn.vue";

const enList = [
    {
        id: 1,
        name: 'Cultural tours:',
        description: 'We organize consumption of food and cultural attractions in Bishkek and other regions of Kyrgyzstan. Our guides talk about the rich history and traditions of Kyrgyzstan.',
    },
    {
        id: 2,
        name: 'Nature tours:',
        description: 'We offer hikes and excursions to the picturesque mountain gorges, lakes and national parks of Kyrgyzstan. Guests can enjoy stunning scenery, majestic mountains and learn about local flora and fauna.',
    },
    {
        id: 3,
        name: 'Culinary Tours: ',
        description: 'We organize visits to traditional markets where guests can taste national Kyrgyz dishes and learn about local culinary traditions.',
    },
    {
        id: 4,
        name: 'Workshops:',
        description: 'We conduct exciting workshops on Kyrgyz culture, such as making traditional felt products or cooking national dishes.  Our advantages:',
    }
]
const ruList = [
    {
        id: 1,
        name: '24/7 онлайн:',
        description: 'Мы гибко адаптируем наши туры к потребностям и интересам каждого гостя. 24/7 онлайн, чтобы связаться с вами.',
    },
    {
        id: 2,
        name: 'Качество и безопасность:',
        description: 'Мы придерживаемся высоких стандартов качества обслуживания и гарантируем безопасность наших гостей во время всех экскурсий и поездок.',
    },
    {
        id: 3,
        name: 'Подлинный опыт:',
        description: 'Мы стремимся показать гостям настоящий Кыргызстан, включая посещение местных деревень, общение с местными жителями и участие в традиционных мероприятиях.',
    },
    {
        id: 4,
        name: 'Подлинный опыт:',
        description: 'Мы стремимся показать гостям настоящий Кыргызстан, включая посещение местных деревень, общение с местными жителями и участие в традиционных мероприятиях.',
    }
]
const lang = ref('en')
const list = ref(null)

if (lang.value === 'en') {
    list.value = enList
} else if (lang.value = 'ru') {
    list.value = ruList
} 
</script>

<style lang="scss">
.services {
    padding: 70px 0 135px;

    &-wrapper {
        margin-top: 64px;
        position: relative;
    }

    &-block {
        max-width: 352px;
        margin-bottom: 40px;
    }

    &-bg {
        position: absolute;
    }

    &-right {
        right: 0;
        top: 50px;
        z-index: -1;
    }

    &-left {
        top: 155px;
        right: 135px;
    }

    &-number {
        width: 42px;
        height: 24px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(252, 187, 61, 1);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.01em;
        color: rgba(252, 252, 253, 1);

    }

    &-name {
        margin: 16px 0 8px;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: rgba(35, 38, 47, 1);
    }

    &-description {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.01em;
        color: rgba(119, 126, 144, 1);
        line-height: 24px;
    }

    @media screen and (max-width:1000px) {
        &-left {
            width: 35%;
            right: 55px;
        }

        &-right {
            width: 20%;
        }
    }

    @media screen and (max-width:650px) {
        & {
            padding: 60px 0;
        }

        &-wrapper {
            display: flex;
            flex-direction: column;
        }

        &-right {
            width: 40%;
            position: unset;
            margin-left: auto;
            margin-right: 10%;
            margin-bottom: 32px;
        }

        &-left {
            top: 0px;
            right: 30%;
            width: 65%;
        }

        h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            margin-bottom: 12px;
        }

        &-descr {
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
        }

        &-block {
            margin: 0 auto 28px;
        }
    }

}
</style>
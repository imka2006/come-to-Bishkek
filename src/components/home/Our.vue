<template>
    <section id="our" class="our">
        <div class="container">
            <div class="our-wrapper">
                <h2 class="title">{{ $t('ourTitle')}}</h2>
                <p class="our-descr text">{{ $t('ourText')}}</p>
            </div>
            <div class="our-content">
                <template v-if="$i18n.locale == 'en'">
                    <div class="our-block" v-for="item in enList" :key="item.id">
                        <component :is="item.icon"></component>
                        <h4 class="our-name">{{ item.name }}</h4>
                        <p class="our-description">{{ item.description }}</p>
                    </div>
                </template>
                <template v-else>
                    <div class="our-block" v-for="item in ruList" :key="item.id">
                        <component :is="item.icon"></component>
                        <h4 class="our-name">{{ item.name }}</h4>
                        <p class="our-description">{{ item.description }}</p>
                    </div>
                </template> 
            </div>
        </div>
    </section>
</template>

<script setup>
import Third from '../../assets/icons/our/Third.vue';
import First from '../../assets/icons/our/First.vue';
import Second from '../../assets/icons/our/Second.vue';
import { ref } from 'vue';

const enList = [
    {
        id: 0,
        icon: First,
        name: '24/7 online:',
        description: 'We flexibly adapt our tours to the needs and interests of each guest. 24/7 online to contact you.',
    },
    {
        id: 1,
        icon: Second,
        name: 'Quality and safety:',
        description: 'We adhere to high standards of service quality and guarantee the safety of our guests during all excursions and trips.',
    },
    {
        id: 2,
        icon: Third,
        name: 'Authentic experience:',
        description: 'We aim to show guests the real Kyrgyzstan, including visiting local villages, interacting with locals and participating in traditional activities.',
    }
]
const ruList = [
    {
        id: 0,
        icon: First,
        name: '24/7 онлайн:',
        description: 'Мы гибко адаптируем наши туры к потребностям и интересам каждого гостя. 24/7 онлайн, чтобы связаться с вами.',
    },
    {
        id: 1,
        icon: Second,
        name: 'Качество и безопасность:',
        description: 'Мы придерживаемся высоких стандартов качества обслуживания и гарантируем безопасность наших гостей во время всех экскурсий и поездок.',
    },
    {
        id: 2,
        icon: Third,
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
.our {
    padding: 120px 0;

    &-title {
        color: #23262F;
        text-align: center;
        font-size: 48px;
        font-weight: 600;
        letter-spacing: -0.48px;
    }

    &-text {
        color: #777E90;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        display: block;
    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;

    }

    &-block {
        max-width: 275px;
        text-align: center;
    }

    &-name {
        color: #23262F;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.24px;
        margin: 32px 0 8px;
    }

    &-description {
        color: #777E90;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.14px;
    }

    @media screen and (max-width:930px) {
        &-content {
            flex-wrap: wrap;
            gap: 50px;
            justify-content: center;
        }
    }

    @media screen and (max-width:620px) {
        h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            margin-bottom: 8px;
        }

        &-descr {
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
        }

        &-name {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
        }

        &-text {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }

        &-content {
            gap: 32px;
        }

        & {
            padding: 60px 0;
        }
    }
}
</style>
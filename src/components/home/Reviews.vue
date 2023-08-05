<template>
    <section id="Feedback" class="reviews">
        <div class="container">
            <h2 class="title">{{$t('reviewsTitle')}}</h2>
            <p class="text reviews-head_text">{{$t('reviewsText')}}</p>
            <template v-if="$i18n.locale == 'en'">
                <div class="reviews-wrapper">
                    <p class="reviews-text">{{ text }}</p>
                    <img :src="Img" class="reviews-map" alt="img">
                    <div v-for="(item, i) in enList" :key="item.id" class='reviews-circle'
                        :class="isActive == i ? 'active ' + item.class : item.class" @click="isActive = i; getData(item)">
                    </div>
                    <div class="reviews-info">
                        <h4 class="reviews-name">{{ name }}</h4>
                        <span class="reviews-from">{{ from }}</span>
                    </div>
                </div>
                <div class="reviews-wrapper another">
                    <img :src="Img" class="reviews-map another" alt="img">
                    <swiper :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="item in enList" :key="item.id">
                            <p class="reviews-reviews">{{ item.text }}</p>
                            <div class="reviews-more">
                                <h4 class="reviews-name">{{ item.name }}</h4>
                                <span class="reviews-from">{{ item.from }}</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </template> 
            <template v-else>
                <div class="reviews-wrapper">
                    <p class="reviews-text">{{ text }}</p>
                    <img :src="Img" class="reviews-map" alt="img">
                    <div v-for="(item, i) in ruList" :key="item.id" class='reviews-circle'
                        :class="isActive == i ? 'active ' + item.class : item.class" @click="isActive = i; getData(item)">
                    </div>
                    <div class="reviews-info">
                        <h4 class="reviews-name">{{ name }}</h4>
                        <span class="reviews-from">{{ from }}</span>
                    </div>
                </div>
                <div class="reviews-wrapper another">
                    <img :src="Img" class="reviews-map another" alt="img">
                    <swiper :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="item in ruList" :key="item.id">
                            <p class="reviews-reviews">{{ item.text }}</p>
                            <div class="reviews-more">
                                <h4 class="reviews-name">{{ item.name }}</h4>
                                <span class="reviews-from">{{ item.from }}</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Img from '../../assets/img/reviews/img.png';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const modules = [Navigation];

const isActive = ref(null)
const list = ref(null)
const text = ref("")
const name = ref("")
const from = ref("")

const getData = (item) => {
    text.value = item.text
    name.value = item.name
    from.value = item.from
}

const enList = [
    {
        id: 0,
        class: 'one',
        name: 'Phillip Smith',
        text: "I enjoyed the excursion! It is good that in one day you can visit the main museums and sights of the city, important architectural objects, walk around - it allows you to create an impression (albeit superficial) about the history of the city and the country. At the market you can also touch the life of ordinary people; and there are more opportunities to buy or choose something to remember. The cuisine and food is tasty and unusual for Russia.",
        from: 'Client from U.S.A'
    },
    {
        id: 1,
        class: 'two',
        name: 'Emma Johnson',
        text: "I've had amazing journeys with Come to Bishkek. The team is professional, attentive, and ensures that every detail is taken care of. The experiences they offer are extraordinary, allowing me to explore the beauty of Bishkek in the best possible way. I highly recommend their services to all travel enthusiasts!",
        from: 'Client from Colombia'
    },
    {
        id: 2,
        class: 'three',
        name: 'Michael Davis',
        text: "Come to Bishkek made my trips unforgettable. Their expertise in organizing tours and their attention to every aspect of the journey is remarkable. The team is friendly, accommodating, and truly goes above and beyond to create memorable experiences. I can't recommend them enough for anyone looking for exceptional travel experiences!",
        from: 'Client from Morocco'
    },
    {
        id: 3,
        class: 'four',
        name: 'Artem Gorbunov',
        text: "I've had incredible adventures with Come to Bishkek. Their commitment to providing top-notch services and personalized itineraries is impressive. The team ensures that every moment of the trip is filled with joy and discovery. If you want to explore the wonders of Bishkek with ease and comfort, I highly recommend choosing Come to Bishkek!",
        from: 'Client from Russia'
    },
    {
        id: 4,
        class: 'five',
        name: 'Ashton Luke',
        text: "Come to Bishkek offers exceptional travel experiences. From the moment I contacted them, their team has been attentive and responsive to my needs. They provide well-planned itineraries, knowledgeable guides, and excellent customer service. Traveling with Come to Bishkek guarantees unforgettable memories and a smooth journey throughout. I highly endorse their services!",
        from: 'Client from Australia'
    }
];

const ruList = [
{
        id: 0,
        class: 'one',
        name: 'Филипп Смит',
        text: "Мне понравилась экскурсия! Здорово, что за один день можно посетить основные музеи и достопримечательности города, важные архитектурные объекты, погулять - это позволяет создать впечатление (хоть и поверхностное) о истории города и страны. На рынке также можно окунуться в жизнь обычных людей; и есть больше возможностей купить или выбрать что-то на память. Кухня и еда вкусные и необычные для России.",
        from: 'Клиент из США'
    },
    {
        id: 1,
        class: 'two',
        name: 'Эмма Джонсон',
        text: "У меня были удивительные путешествия с Come to Bishkek. Команда профессиональна, внимательна и следит за каждой деталью. Предлагаемые ими впечатления — необычайны, позволяют исследовать красоту Бишкека наилучшим образом. Я настоятельно рекомендую их услуги всем любителям путешествий!",
        from: 'Клиент из Колумбия'
    },
    {
        id: 2,
        class: 'three',
        name: 'Майкл Дэвис',
        text: "Come to Bishkek сделал мои поездки незабываемыми. Их экспертиза в организации туров и внимание к каждому аспекту путешествия — впечатляют. Команда дружелюбна, готова помочь и действительно идет на все ухищрения, чтобы создать запоминающиеся впечатления. Я не могу достаточно рекомендовать их всем, кто ищет исключительные путешествия!",
        from: 'Клиент из Марокко'
    },
    {
        id: 3,
        class: 'four',
        name: 'Артем Горбунов',
        text: "У меня были невероятные приключения с Come to Bishkek. Их приверженность предоставлению первоклассных услуг и индивидуальных маршрутов впечатляет. Команда обеспечивает, чтобы каждый момент поездки был полон радости и открытий. Если вы хотите исследовать чудеса Бишкека с комфортом и удовольствием, настоятельно рекомендую выбрать Come to Bishkek!",
        from: 'Клиент из России'
    },
    {
        id: 4,
        class: 'five',
        name: 'Эштон Люк',
        text: "Come to Bishkek предлагает исключительные впечатления от путешествий. С того момента, как я связался с ними, их команда была внимательна и реагировала на мои потребности. Они предлагают хорошо спланированные маршруты, знающих гидов и отличное обслуживание клиентов. Путешествие с Come to Bishkek гарантирует незабываемые воспоминания и приятное путешествие. Я очень одобряю их услуги!",
        from: 'Клиент из Австралии'
    }
];


</script>

<style lang="scss">
.mySwiper {
    padding: 155px 0px;
}

.swiper-button-next {
    background: url("../../assets/icons/reviews/next.svg"); 
    width: 32px;
    height: 32px;
    top: auto;

    &::after {
        content: "";
    }
}

.swiper-button-prev {
    background: url("../../assets/icons/reviews/prev.svg");
    width: 32px;
    height: 32px;
    bottom: 180px;
    top: auto;

    &::after {
        content: "";
    }
}

.reviews {
    padding: 70px 0 60px;

    &-wrapper {
        margin-top: 85px;
        position: relative;
        width: 100%;
        height: 100%;

        &.another {
            display: none;
        }
    }

    &-more {
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-reviews {
        color: #23262F;
        text-align: center;
        font-size: 18px;
        letter-spacing: 0.14px;
        margin: 0 auto;
        max-width: 800px;
    }

    &-map {
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: -1;
        max-width: 100%;

        &.another {
            position: absolute;
        }
    }

    &-circle {
        width: 52px;
        height: 52px;
        border: 7px solid #fff;
        border-radius: 50%;
        background: linear-gradient(0deg, #CDF0B3, #CDF0B3),
            linear-gradient(0deg, #FFFFFF, #FFFFFF);
        position: absolute;
        transition: .3s;
        cursor: pointer;
        z-index: 1;

        &.active {
            width: 76px;
            height: 76px;
            border-radius: 76px;
            background: #5ACC03;
        }

        &.one {
            top: 25px;
            left: 165px;
        }

        &.two {
            bottom: 178px;
            left: 255px;
        }

        &.three {
            bottom: 210px;
            left: 50%;
            transform: translate(-50%, 0);
        }

        &.four {
            top: 80px;
            right: 230px;
        }

        &.five {
            bottom: 80px;
            right: 80px;
        }

    }

    &-text {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.01em;
        text-align: center;
        color: rgba(35, 38, 47, 1);
        width: 1040px;
    }

    &-info {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 20px;
    }

    &-name {
        color: #23262F;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.32px;
    }

    &-from {
        color: #23262F;
        text-align: center;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.16px;
        display: block;
    }

    @media screen and (max-width:1070px) {
        &-wrapper {
            display: none;

            &.another {
                display: block;
            }
        }
    }

    @media screen and (max-width:630px) {
        h2 {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.24px;
        }

        &-head_text {
            font-size: 18px !important;
            font-weight: 400 !important;
        }

        &-reviews {
            font-size: 14px;
            font-weight: 500;
        }

        .mySwiper {
            padding: 30px 0;
        }

        &-name {
            font-size: 16px;
            font-weight: 600;
        }

        &-from {
            font-size: 14px;
            font-weight: 400;
        }

        .swiper-button-next,
        .swiper-button-prev {
            bottom: 50px;
        }

    }

    @media screen and (max-width:420px) {


        .mySwiper {
            padding: 0;
        }

        .swiper-button-next,
        .swiper-button-prev {
            bottom: 5px;
        }

    }

}
</style>
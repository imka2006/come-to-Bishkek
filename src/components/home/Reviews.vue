<template>
    <section class="reviews">
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
        name: 'John Smith',
        text: "I've traveled with Come to Bishkek several times, and each time has been a unique and unforgettable experience. Their team of travel specialists are knowledgeable, friendly, and always go the extra mile to make sure that everything and everyone is taken care of. I highly recommend Come to Bishkek to anyone looking for a truly special travel experience!",
        from: 'Client from Africa'
    },
    {
        id: 1,
        class: 'two',
        name: 'Emma Johnson',
        text: "I've had amazing journeys with Come to Bishkek. The team is professional, attentive, and ensures that every detail is taken care of. The experiences they offer are extraordinary, allowing me to explore the beauty of Bishkek in the best possible way. I highly recommend their services to all travel enthusiasts!",
        from: 'Client from Africa'
    },
    {
        id: 2,
        class: 'three',
        name: 'Michael Davis',
        text: "Come to Bishkek made my trips unforgettable. Their expertise in organizing tours and their attention to every aspect of the journey is remarkable. The team is friendly, accommodating, and truly goes above and beyond to create memorable experiences. I can't recommend them enough for anyone looking for exceptional travel experiences!",
        from: 'Client from Africa'
    },
    {
        id: 3,
        class: 'four',
        name: 'Sophia Anderson',
        text: "I've had incredible adventures with Come to Bishkek. Their commitment to providing top-notch services and personalized itineraries is impressive. The team ensures that every moment of the trip is filled with joy and discovery. If you want to explore the wonders of Bishkek with ease and comfort, I highly recommend choosing Come to Bishkek!",
        from: 'Client from Africa'
    },
    {
        id: 4,
        class: 'five',
        name: 'William Thompson',
        text: "Come to Bishkek offers exceptional travel experiences. From the moment I contacted them, their team has been attentive and responsive to my needs. They provide well-planned itineraries, knowledgeable guides, and excellent customer service. Traveling with Come to Bishkek guarantees unforgettable memories and a smooth journey throughout. I highly endorse their services!",
        from: 'Client from Africa'
    }
];

const ruList = [
    {
        id: 0,
        class: 'one',
        name: 'Сара Джонсон',
        text: "Я несколько раз путешествовала с Come to Bishkek, и каждый раз это был уникальный и незабываемый опыт. Их команда специалистов по путешествиям обладает знаниями, дружелюбием и всегда делает все возможное, чтобы все и каждый были в хороших руках. Я настоятельно рекомендую Come to Bishkek всем, кто ищет по-настоящему особенный опыт путешествия!",
        from: 'Клиент из Африки'
    },
    {
        id: 1,
        class: 'two',
        name: 'Сара Джонсон',
        text: "Я несколько раз путешествовала с Come to Bishkek, и каждый раз это был уникальный и незабываемый опыт. Их команда специалистов по путешествиям обладает знаниями, дружелюбием и всегда делает все возможное, чтобы все и каждый были в хороших руках. Я настоятельно рекомендую Come to Bishkek всем, кто ищет по-настоящему особенный опыт путешествия!",
        from: 'Клиент из Африки'
    },
    {
        id: 2,
        class: 'three',
        name: 'Сара Джонсон',
        text: "Я несколько раз путешествовала с Come to Bishkek, и каждый раз это был уникальный и незабываемый опыт. Их команда специалистов по путешествиям обладает знаниями, дружелюбием и всегда делает все возможное, чтобы все и каждый были в хороших руках. Я настоятельно рекомендую Come to Bishkek всем, кто ищет по-настоящему особенный опыт путешествия!",
        from: 'Клиент из Африки'
    },
    {
        id: 3,
        class: 'four',
        name: 'Сара Джонсон',
        text: "Я несколько раз путешествовала с Come to Bishkek, и каждый раз это был уникальный и незабываемый опыт. Их команда специалистов по путешествиям обладает знаниями, дружелюбием и всегда делает все возможное, чтобы все и каждый были в хороших руках. Я настоятельно рекомендую Come to Bishkek всем, кто ищет по-настоящему особенный опыт путешествия!",
        from: 'Клиент из Африки'
    },
    {
        id: 4,
        class: 'five',
        name: 'Сара Джонсон',
        text: "Я несколько раз путешествовала с Come to Bishkek, и каждый раз это был уникальный и незабываемый опыт. Их команда специалистов по путешествиям обладает знаниями, дружелюбием и всегда делает все возможное, чтобы все и каждый были в хороших руках. Я настоятельно рекомендую Come to Bishkek всем, кто ищет по-настоящему особенный опыт путешествия!",
        from: 'Клиент из Африки'
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
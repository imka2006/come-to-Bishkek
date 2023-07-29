<template>
    <section id="team" class="team">
        <div class="container">
            <h2 class="title">{{$t('teamTitle')}}</h2>
            <p style="max-width: 760px;  margin: 0 auto;" class="team-text text">{{ $t('teamText') }}</p>
            <div class="team-wrapper">
                <template v-if="$i18n.locale == 'en'">
                    <div v-for="item in enList" :key="item.id" class="team-block">
                        <img :src="item.img" alt="">
                        <h4 class="team-name">{{ item.name }}</h4>
                        <span class="team-description">{{ item.text }}</span>
                        <div class="team-line"></div>
                        <div class="team-cocial">
                            <a :href="item.instagram" target="_blank">
                                <Instagram />
                            </a>
                            <a :href="item.facebook" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div v-for="item in ruList" :key="item.id" class="team-block">
                        <img :src="item.img" alt="">
                        <h4 class="team-name">{{ item.name }}</h4>
                        <span class="team-description">{{ item.text }}</span>
                        <div class="team-line"></div>
                        <div class="team-cocial">
                            <a :href="item.instagram" target="_blank">
                                <Instagram />
                            </a>
                            <a href="#" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </section>
</template>

<script setup>
import Instagram from "../../assets/icons/team/Instagram.vue";
import Facebook from "../../assets/icons/team/Facebook.vue";

import Meerim from "../../assets/img/team/meerim.png";
import Darian from "../../assets/img/team/darian.png";
import Aisana from "../../assets/img/team/aisana.png";
import Kanat from "../../assets/img/team/kanat.png";
import Aigerim from "../../assets/img/team/aigerim.png";
import Murat from "../../assets/img/team/murat.png";



const enList = [
    {
        id: 0,
        img: Meerim,
        name: "Meerim",
        text: "Co-Founder",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441",
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2Nfacebook:"
    },
    {
        id: 1,
        img: Darian,
        name: "Daniyar",
        text: "Owner & Founder",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441", 
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    },
    {
        id: 2,
        img: Aisana,
        name: "Eliza",
        text: "Manager",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441",
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    },
    // {
    //     id: 3,
    //     img: Kanat,
    //     name: "Kanat",
    //     text: "Guide",
    //     facebook: "https://www.facebook.com/profile.php?id=100095160225441",
    //     instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    // },
    // {
    //     id: 4,
    //     img: Aigerim,
    //     name: "Aigerim",
    //     text: "Guide",
    //     facebook: "https://www.facebook.com/profile.php?id=100095160225441",
    //     instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    // },
    // {
    //     id: 5,
    //     img: Murat,
    //     name: "Murat",
    //     text: "Guide",
    //     facebook: "https://www.facebook.com/profile.php?id=100095160225441",
    //     instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    // },
]
const ruList = [
    {
        id: 0,
        img: Meerim,
        name: "Меерим",
        text: "Соучредитель",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441",
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    },
    {
        id: 1,
        img: Darian,
        name: "Данияр",
        text: "Владелец и основатель",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441",
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    },
    {
        id: 2,
        img: Aisana,
        name: "Элиза",
        text: "Менеджер",
        facebook: "https://www.facebook.com/profile.php?id=100095160225441",
        instagram: "https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA==",
    },
];
</script>

<style lang="scss">
.team {
    padding: 70px 0;

    &-wrapper {
        margin-top: 30px;
        display: flex;
        gap: 35px;
        flex-wrap: wrap;
    }

    &-block {
        border: 2px solid rgba(231, 229, 234, 1);
        max-width: 350px;
        border-radius: 32px;
        padding: 45px 40px 32px;
        box-sizing: border-box;
    }

    &-name {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.6000000238418579px;
        text-align: center;
        margin: 40px 0 12px;
        color: rgba(35, 38, 47, 1);
    }

    &-description {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.6000000238418579px;
        text-align: center;
        color: rgba(89, 77, 109, 1);
        display: block;
    }

    &-line {
        width: 270px;
        height: 1px;
        background: rgba(231, 229, 234, 1);
        margin: 28px 0;
    }

    &-cocial {
        display: flex;
        align-items: center;
        gap: 25px;
        justify-content: center;
    }

    img {
        margin: 0 auto;
        display: flex;
    }

    @media screen and (max-width:1140px) {
        &-wrapper {
            justify-content: center;
        }
    }

    @media screen and (max-width:755px) {
        h2 {
            font-size: 28px;
            font-weight: 600;
        }

        &-text {
            font-size: 18px !important;
            font-weight: 400 !important;
        }

        &-block {
            padding: 20px;
        }

        &-line {
            width: 125px;
            margin: 15px 0;
        }

        img {
            width: 100px;
        }

        &-name {
            font-size: 18px;
            font-weight: 700;
            margin: 20px 0 8px;
        }

        &-description {
            font-size: 14px;
            font-weight: 400;
            max-width: 125px;
        }


    }
}</style>
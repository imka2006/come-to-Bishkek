<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <Logo />
                <div v-if="$i18n.locale == 'en'" class="footer-another">
                    <ul class="footer-list">
                        <li v-for="item in enList" :key="item.id" class="footer-item"><a    
                                href="#about">{{ item.name }}</a></li>
                    </ul>
                    <ul class="footer-list">
                        <li v-for="item in enListSec" :key="item.id" @click="item.name == 'Feedback' ? store.state.modal = true : ''" class="footer-item"><a :href="item.link">{{item.name}}</a></li> 
                    </ul>
                </div>
                <div v-else class="footer-another">
                    <ul class="footer-list">
                        <li v-for="item in ruList" :key="item.id" class="footer-item"><a    
                                :href="item.link">{{ item.name }}</a></li>
                    </ul>
                    <ul class="footer-list">
                        <li v-for="item in ruListSec" :key="item.id" @click="item.name == 'Связаться' ? store.state.modal = true : ''" class="footer-item"><a :href="item.link">{{item.name}}</a></li> 
                    </ul>
                </div>
                <ul class="footer-list_another">
                    <li class="footer-item litle"><a href="#" target="_blank">{{$t('footerText')}}</a></li>
                    <li class="footer-item">
                        <Send />
                    </li>
                    <li class="footer-item cocial"><a href="tel:+996708221198" target="_blank">+996 (708) 221 198</a></li>
                    <li class="footer-item cocial"><a href="mailto:info@cometobishkek.com"
                            target="_blank">info@cometobishkek.com</a></li>
                </ul>


            </div>

            <div class="footer-line container"></div>
            <p class="footer-descr">{{ $t('footerBottom') }}</p>
        </div>
    </footer>
</template>

<script setup>
import { useStore } from 'vuex';
import Logo from '../../assets/icons/footer/Logo.vue';
import Send from '../Send.vue';

const store = useStore()

const enList = [
    {
        id: 1,
        name: "About us",
        link: "#about"
    },
    {
        id: 2,
        name: "Our advantages",
        link: "#our"
    },
    {
        id: 3,
        name: "Our Services",
        link: "#services"
    }, 
]
const ruList = [
  {
    id: 1,
    name: "О нас",
    link: "#about"
  },
  {
    id: 2,
    name: "Наши преимущества",
    link: "#our"
  },
  {
    id: 3,
    name: "Наши услуги",
    link: "#services"
  }
];
const enListSec = [
    {
        id: 1,
        name: "Awesome Team",
        link: "#team"
    },
    {
        id: 2,
        name: "Feedback",
        link: "#"
    },
    {
        id: 3,
        name: "Our Services",
        link: "#video"
    }, 
]
const ruListSec = [
  {
    id: 1,
    name: "Отличная команда",
    link: "#team"
  },
  {
    id: 2,
    name: "Связаться",
    link: "#"
  },
  {
    id: 3,
    name: "Наши услуги",
    link: "#video"
  }
];







</script>

<style lang="scss">
.footer {
    padding: 80px 0 24px;
    border-top: 1px solid rgba(230, 232, 236, 1);

    &-wrapper {
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &-item {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.01em;

        &.litle {
            font-size: 12px;
            line-height: 12px;
            margin-bottom: 12px;
        }

        &.cocial {
            margin-top: 20px;

        }
    }

    &-descr {
        margin-top: 25px;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.01em;
    }

    &-another {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 87px;
    }

    &-line {
        width: 100%;
        height: 1px;
        background: rgba(228, 228, 231, 1);
        margin-top: 32px !important;
        padding: 0 !important;
    }

    @media screen and (max-width:890px) {
        & {
            padding-top: 40px;
        }

        &-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 48px;
        }

        &-item {
            &.cocial {
                text-align: center;
            }
        }

        &-another {
            gap: 30px;
        }

        &-descr {
            text-align: center;
        }
    }

}
</style>
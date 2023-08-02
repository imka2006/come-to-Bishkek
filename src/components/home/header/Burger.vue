<template>
    <div class="burger">
        <div class="burger-menu" @click="store.state.burger = !store.state.burger">
            <div class="burger-line one"></div>
            <div class="burger-line two"></div>
            <div class="burger-line three"></div>
        </div>
        <div class="burger-wrapper" :class="{ active: store.state.burger }">
            <div class="burger-head">
                <Logo />
                <div class="burger-info">
                    <div v-if="store.state.lang" class="burger-lang"
                        @click="store.state.lang = !store.state.lang; $i18n.locale = 'ru'">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.99935 16.6667C13.6812 16.6667 16.666 13.6819 16.666 9.99999C16.666 6.31809 13.6812 3.33332 9.99935 3.33332C6.31745 3.33332 3.33268 6.31809 3.33268 9.99999C3.33268 13.6819 6.31745 16.6667 9.99935 16.6667ZM9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
                                fill="#23262F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.4562 15.1472C12.0718 13.916 12.5007 12.0985 12.5007 9.99999C12.5007 7.90144 12.0718 6.08396 11.4562 4.85279C10.7908 3.52193 10.1799 3.33332 10.0007 3.33332C9.82144 3.33332 9.21052 3.52193 8.54508 4.85279C7.9295 6.08396 7.50065 7.90144 7.50065 9.99999C7.50065 12.0985 7.9295 13.916 8.54508 15.1472C9.21052 16.4781 9.82144 16.6667 10.0007 16.6667C10.1799 16.6667 10.7908 16.4781 11.4562 15.1472ZM10.0007 18.3333C12.3018 18.3333 14.1673 14.6024 14.1673 9.99999C14.1673 5.39762 12.3018 1.66666 10.0007 1.66666C7.69946 1.66666 5.83398 5.39762 5.83398 9.99999C5.83398 14.6024 7.69946 18.3333 10.0007 18.3333Z"
                                fill="#23262F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.2915 10.8333C18.3187 10.5592 18.3327 10.2812 18.3327 9.99999C18.3327 9.71874 18.3187 9.44075 18.2915 9.16666H1.70716C1.67995 9.44075 1.66602 9.71874 1.66602 9.99999C1.66602 10.2812 1.67995 10.5592 1.70716 10.8333H18.2915Z"
                                fill="#23262F" />
                        </svg>
                        EN
                    </div>
                    <div v-else class="burger-lang" @click="store.state.lang = !store.state.lang; $i18n.locale = 'en'">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.99935 16.6667C13.6812 16.6667 16.666 13.6819 16.666 9.99999C16.666 6.31809 13.6812 3.33332 9.99935 3.33332C6.31745 3.33332 3.33268 6.31809 3.33268 9.99999C3.33268 13.6819 6.31745 16.6667 9.99935 16.6667ZM9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
                                fill="#23262F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.4562 15.1472C12.0718 13.916 12.5007 12.0985 12.5007 9.99999C12.5007 7.90144 12.0718 6.08396 11.4562 4.85279C10.7908 3.52193 10.1799 3.33332 10.0007 3.33332C9.82144 3.33332 9.21052 3.52193 8.54508 4.85279C7.9295 6.08396 7.50065 7.90144 7.50065 9.99999C7.50065 12.0985 7.9295 13.916 8.54508 15.1472C9.21052 16.4781 9.82144 16.6667 10.0007 16.6667C10.1799 16.6667 10.7908 16.4781 11.4562 15.1472ZM10.0007 18.3333C12.3018 18.3333 14.1673 14.6024 14.1673 9.99999C14.1673 5.39762 12.3018 1.66666 10.0007 1.66666C7.69946 1.66666 5.83398 5.39762 5.83398 9.99999C5.83398 14.6024 7.69946 18.3333 10.0007 18.3333Z"
                                fill="#23262F" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.2915 10.8333C18.3187 10.5592 18.3327 10.2812 18.3327 9.99999C18.3327 9.71874 18.3187 9.44075 18.2915 9.16666H1.70716C1.67995 9.44075 1.66602 9.71874 1.66602 9.99999C1.66602 10.2812 1.67995 10.5592 1.70716 10.8333H18.2915Z"
                                fill="#23262F" />
                        </svg>
                        RU
                    </div>
                    <svg @click="store.state.burger = !store.state.burger" style="cursor: pointer;" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#8C8785" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#8C8785" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div class="burger-list">
                <template v-if="$i18n.locale == 'en'">
                    <a v-for="item in store.state.enList"
                        @click="store.state.burger = false; item.name == 'Feedback' ? store.state.modal = true : ''"
                        :key="item.id" class="burger-item" :href="item.link">{{
                                                item.name
                                                }}</a>
                </template>
                <template v-else>
                    <a v-for="item in store.state.ruList"
                        @click="store.state.burger = false; item.name == 'Связаться' ? store.state.modal = true : ''"
                        :key="item.id" class="burger-item" :href="item.link">{{
                                                item.name
                                                }}</a>
                </template>
            </div>
            <span class="burger-name">{{ $t('burgerText') }}</span>
            <a class="burger-item another" href="tel:+996708221198">+996 (708) 221 198</a>
            <a class="burger-item another" href="mailto:cometobishkek@gmail.com">cometobishkek@gmail.com</a>
            <div class="burger-cocial">
                <a class="burger-item another cocial" target="_blank"
                    href="https://www.facebook.com/profile.php?id=100095160225441"><svg width="21" height="20"
                        viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0548 0H3.44504C1.95664 0 0.75 1.20659 0.75 2.69504V17.3049C0.75 18.7933 1.95659 19.9999 3.44504 19.9999H10.6505L10.6628 12.853H8.80601C8.56471 12.853 8.36886 12.6579 8.36793 12.4166L8.35903 10.1129C8.3581 9.87025 8.55453 9.67308 8.79715 9.67308H10.6505V7.44709C10.6505 4.86384 12.2282 3.45724 14.5326 3.45724H16.4236C16.6655 3.45724 16.8617 3.65339 16.8617 3.89537V5.83789C16.8617 6.07978 16.6657 6.27587 16.4238 6.27602L15.2634 6.27655C14.0102 6.27655 13.7675 6.87207 13.7675 7.74602V9.67313H16.5213C16.7836 9.67313 16.9872 9.90225 16.9563 10.1628L16.6832 12.4666C16.6571 12.687 16.4702 12.8531 16.2482 12.8531H13.7798L13.7675 20H18.0549C19.5433 20 20.7499 18.7934 20.7499 17.305V2.69504C20.7498 1.20659 19.5432 0 18.0548 0Z"
                            fill="#23262F" />
                    </svg>
                </a>
                <a class="burger-item another cocial" target="_blank"
                    href="https://instagram.com/come_to_bishkek?igshid=YzcxN2Q2NzY0OA=="><svg width="21" height="20"
                        viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_301_588)">
                            <path
                                d="M2.81801 0.000976562H17.6832C19.0955 0.000976562 20.25 1.1559 20.25 2.56816V17.4334C20.25 18.8452 19.0955 19.9994 17.6832 19.9994H2.81801C1.40574 19.9994 0.25 18.8452 0.25 17.4334V2.56816C0.25 1.1559 1.40574 0.000976562 2.81801 0.000976562ZM14.8197 2.22211C14.3239 2.22211 13.9194 2.62816 13.9194 3.12379V5.27805C13.9194 5.77383 14.3238 6.17898 14.8197 6.17898H17.0799C17.575 6.17898 17.9803 5.77387 17.9803 5.27805V3.12375C17.9803 2.62816 17.575 2.22207 17.0799 2.22207C17.0799 2.22211 14.8197 2.22211 14.8197 2.22211ZM17.9889 8.45801H16.2292C16.3961 9.00301 16.4866 9.57773 16.4866 10.1753C16.4866 13.5007 13.7021 16.1979 10.2688 16.1979C6.83637 16.1979 4.05188 13.5007 4.05188 10.1753C4.05188 9.57773 4.1432 9.00301 4.30926 8.45801H2.47332V16.9068C2.47332 17.3443 2.83059 17.7003 3.26773 17.7003H17.1949C17.6324 17.7003 17.9889 17.3443 17.9889 16.9068V8.45801ZM10.2689 6.06535C8.05152 6.06535 6.25285 7.80723 6.25285 9.95789C6.25285 12.1064 8.05152 13.8496 10.2689 13.8496C12.4874 13.8496 14.2861 12.1064 14.2861 9.95789C14.2861 7.80715 12.4874 6.06535 10.2689 6.06535Z"
                                fill="#23262F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_301_588">
                                <rect width="20" height="20" fill="white" transform="translate(0.25)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Logo from "../../../assets/icons/footer/Logo.vue";
const store = useStore()
</script>

<style lang="scss">
.burger {
    display: none;

    &-menu {
        width: 24px;
        height: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
        padding: 5px 2px;
        cursor: pointer;
    }

    &-line {
        height: 2px;
        background: white;
        border-radius: 2px;

        &.one {
            width: 17px;
        }

        &.two {
            width: 20px;
        }

        &.three {
            width: 13px;
        }
    }

    &-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 0;
        background: #EEEEEE;
        transition: .3s;
        overflow: hidden;
        z-index: 15;
        overflow: auto;

        &.active {
            height: 100vh;
        }
    }

    &-lang {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }

    &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16.50px 10px;
        background: #fff;
        margin-bottom: 16px;
    }

    &-store.state.lang {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        color: rgba(35, 38, 47, 1);
        cursor: pointer;
    }

    &-info {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    &-list {
        padding: 16px;
        display: flex;
        flex-direction: column;

    }

    &-item {
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #E3E3E3;
        background: #FFF;
        color: #23262F;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        margin-bottom: 8px;

        &.another {
            text-align: center;
            margin: 0 16px 8px;
            width: auto;
            display: flex;
        }

        &.cocial {
            width: 45%;
        }

        &.another.cocial {
            display: flex;
            justify-content: center;
        }

        &.cocial {
            width: 45%;
        }
    }

    &-cocial {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
    }

    &-name {
        margin: 16px 0 8px 16px;
        color: #23262F;
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
    }
}</style>
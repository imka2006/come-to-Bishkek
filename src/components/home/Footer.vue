<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <Logo />
                <ul class="footer-list">
                    <li class="footer-item"><a href="#" target="_blank">About us</a></li>
                    <li class="footer-item"><a href="#" target="_blank">Our advantages</a></li>
                    <li class="footer-item"><a href="#" target="_blank">Our Services</a></li>
                </ul>
                <ul class="footer-list">
                    <li class="footer-item"><a href="#" target="_blank">Awesome Team</a></li>
                    <li class="footer-item"><a href="#" target="_blank">Feedback</a></li>
                    <li class="footer-item"><a href="#" target="_blank">Video Preview</a></li>
                </ul>
                <ul class="footer-list_another">
                    <li class="footer-item litle"><a href="#" target="_blank">You will be contacted</a></li>
                    <li class="footer-item">
                        <Send />
                    </li>
                    <li class="footer-item cocial"><a href="tel:+996708221198" target="_blank">+996 (708) 221 198</a></li>
                    <li class="footer-item"><a href="mailto:info@cometobishkek.com" target="_blank">info@cometobishkek.com</a></li>
                </ul>

            </div>
            <p class="footer-descr">Copyright © 2023 Design by ITMAG Studio</p>
        </div>
    </footer>
</template>

<script setup>
import Logo from '../../assets/icons/footer/Logo.vue';
import Send from '../Send.vue';
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
        margin-top: 75px;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.01em;
    }

}
</style>
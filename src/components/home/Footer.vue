<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <Logo />
                <div class="footer-another">
                    <ul class="footer-list">
                        <li class="footer-item"><a href="#about">About us</a></li>
                        <li class="footer-item"><a href="#our">Our advantages</a></li>
                        <li class="footer-item"><a href="#services">Our Services</a></li>
                    </ul>
                    <ul class="footer-list">
                        <li class="footer-item"><a href="#team">Awesome Team</a></li>
                        <li class="footer-item"><a href="#">Feedback</a></li>
                        <li class="footer-item"><a href="#video">Video Preview</a></li>
                    </ul>
                </div>
                <ul class="footer-list_another">
                    <li class="footer-item litle"><a href="#" target="_blank">You will be contacted</a></li>
                    <li class="footer-item">
                        <Send />
                    </li>
                    <li class="footer-item cocial"><a href="tel:+996708221198" target="_blank">+996 (708) 221 198</a></li>
                    <li class="footer-item cocial"><a href="mailto:info@cometobishkek.com"
                            target="_blank">info@cometobishkek.com</a></li>
                </ul>


            </div>
            
            <div class="footer-line container"></div>
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
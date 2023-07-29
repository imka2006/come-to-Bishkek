<template>
    <div v-show="store.state.modal" class="modal">
        <div class="modal-wrapper">
            <div class="modal-head">
                <div>
                    <h2 class="modal-title">{{ $t('modalTitle') }}</h2>
                    <p class="modal-description">{{ $t('modalDescription') }}</p>
                </div>
                <Close style="cursor: pointer;" @click="store.state.modal = false" />
            </div>
            <form @submit.prevent="sendEmailToServer()" class="modal-content">
                <div class="modal-info">
                    <label class="modal-label">
                        <p v-if="$i18n.locale == 'en'" class="modal-text">First name <span>(optional)</span></p>
                        <p v-else class="modal-text">Имя <span>(необязательно)</span></p>
                        <input type="text" placeholder="Amelia" v-model="firstName">
                    </label>
                    <label class="modal-label">
                        <p v-if="$i18n.locale == 'en'" class="modal-text">Last name <span>(optional)</span></p>
                        <p v-else class="modal-text">Фамилия <span>(необязательно)</span></p>
                        <input type="text" placeholder="Watson" v-model="lastName">
                    </label>
                </div>
                <div class="modal-info">
                    <label class="modal-label">
                        <p v-if="$i18n.locale == 'en'" class="modal-text">Email address<span>(required)</span></p>
                        <p v-else class="modal-text">Электронная почта<span>(Обязательно)</span></p>
                        <input type="email" required placeholder="amelia.watson@gmail.com" v-model="email">
                    </label>
                    <label class="modal-label">
                        <p v-if="$i18n.locale == 'en'" class="modal-text">Phone number<span>(optional)</span></p>
                        <p v-else class="modal-text">Phone number<span>(необязательно)</span></p>
                        <input type="number" placeholder="123 - 456 - 7890" v-model="phone">
                    </label>
                </div>
                <button :disabled="email == ''" class="modal-btn">{{ $t('modalBtn') }}</button>
            </form>
        </div>
    </div>
</template>


<script setup >
import { useStore } from 'vuex';

import { ref } from "vue";
import Close from "../assets/icons/modal/Close.vue";

const store = useStore();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");

const sendEmailToServer = () => {
    let body = `Фио: ${firstName.value} ${lastName.value} <br/> Почта: ${email.value} <br/> Номер телефона: ${phone.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "cometobishkek@gmail.com",
        Password: "A849860F9A72F120AC8426FE86DC62AD1D9C",
        To: "cometobishkek@gmail.com",
        From: "cometobishkek@gmail.com",
        Subject: "Заявка на тур",
        Body: body,
    }).then((message) => alert(message));


    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
};
</script>


<style lang="scss">
.modal {
    background: rgba(0, 0, 0, 0.50);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 13;

    &-wrapper {
        max-width: 1120px;
        padding: 40px 70px 54px 70px;
        box-sizing: border-box;
        border-radius: 20px;
        background: #FFF;
        overflow: auto;
    }

    &-head {
        display: flex;
        align-items: start;
        justify-content: space-between;
        margin-bottom: 45px;
        gap: 22px;
    }

    &-title {
        font-size: 32px;
        font-weight: 600;
        line-height: 48px;
        letter-spacing: -0.02em;
        color: rgba(35, 38, 47, 1);
    }

    &-description {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: -0.01em;
        color: rgba(119, 126, 144, 1);
    }

    &-label {
        width: 480px;
    }

    &-text {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        color: #23262F;
        margin-bottom: 12px;

        span {
            font-size: 18px;
            font-weight: 600;
            line-height: 27px;
            color: #909296;
        }
    }

    &-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
        margin-bottom: 48px;
    }

    input {
        padding: 14px 32px 14px 32px;
        border-radius: 8px;
        box-sizing: border-box;
        width: 100%;
        border: 2px solid rgba(231, 229, 234, 1);
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: rgba(35, 38, 47, 1);
    }

    &-btn {
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.01em;
        padding: 16px 24px 17px 24px;
        border-radius: 90px;
        background: rgba(90, 204, 3, 1);
        color: rgba(252, 252, 253, 1);

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    @media screen and (max-width:770px) {
        &-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            letter-spacing: 0.01em;

        }

        &-description {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }

        &-info {
            flex-direction: column;
            width: 100%;
            margin-bottom: 24px;
        }

        &-label {
            width: 100%;
        }

        &-wrapper {
            height: 100%;
            padding: 16px;
            width: 100%;
            border-radius: unset;
        }

        &-text {
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;

            span {
                font-size: 14px;
                font-weight: 500;
                line-height: 21px;
            }

            margin-bottom: 4px;
        }

        input {
            padding: 14px 16px;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;

        }
    }
}
</style>
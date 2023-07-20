<template>
    <form >
        <div class="send">
            <input type="email" placeholder="Enter your email" v-model="val" />
            <button :disabled="val == ''">Send <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
                        fill="#FCFCFD" />
                </svg></button> 
        </div>

    </form>
</template>

<script setup>
import { ref } from "vue";
const val = ref("")

</script>

<style lang="scss">
.send {
    width: 300px;
    height: 48px;
    border-radius: 90px;
    border: 2px solid rgba(230, 232, 236, 1);
    display: flex;
    align-items: center;
    padding: 8px 8px 8px 16px;
    box-sizing: border-box; 
    overflow: hidden;

    input {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.01em;
    }

    button {
        padding: 4px 4px 4px 16px;
        border-radius: 100px;
        gap: 6px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.01em;
        background: rgba(90, 204, 3, 1);
        color: #fff;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

}
</style>
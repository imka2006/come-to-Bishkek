<template>
    <section class="team">
        <div class="container">
            <h2 class="title">Awesome Team</h2>
            <p style="max-width: 760px;  margin: 0 auto;" class="text">Our professional and friendly team speaks several
                languages and knows Kyrgyzstan inside and out.</p>
            <div class="team-wrapper">
                <div class="team-block">
                    <!-- img  -->
                   <h4 class="team-name">Meerim</h4>
                    <span class="team-description">Co-Founder</span>
                    <div class="team-line"></div>
                    <div class="team-cocial">
                        <a href="#" target="_blank"> <Instagram /> </a>
                        <a href="#" target="_blank"> <Facebook /> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Instagram from "../../assets/icons/team/Instagram.vue";
import Facebook from "../../assets/icons/team/Facebook.vue";
</script>

<style lang="scss">
.team {
    padding: 70px 0;

    &-wrapper {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
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
}
</style>
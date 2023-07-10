<template>
    <section class="how">
        <div class="container">
            <div class="how-wrapper">
                <h2 class="title">How we work</h2>
                <p class="text">Keep calm & travel on</p>
                <div class="how-content">
                    <div v-for="item in list" :key="item.id" class="how-block">
                        <img :src="item.img" alt="img">
                        <h4 class="how-name">{{item.name}}</h4>
                        <p class="how-description">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import First from "../../assets/img/team/first.png";
import Second from "../../assets/img/team/second.png";
import Third from "../../assets/img/team/third.png";


const enList = [
    {
        id: 0,
        img: First,
        name: 'Book & relax',
        description: "You book your best tour, fill out the application form where you can specify just your mail.",
    },
    {
        id: 1,
        img: Second,
        name: 'Tour preparation',
        description: "For our part, we are already preparing for your arrival, so that everything is at the highest level.",
    },
    {
        id: 2,
        img: Third,
        name: 'Payment on the spot',
        description: "You do not send money in advance, you pay only on the spot after your arrival to us.",
    },
]
const ruList = [
    {
        id: 0,
        img: "First",
        name: 'Забронируйте и расслабьтесь',
        description: "Вы бронируете лучший тур, заполняете заявку, в которой можете указать только вашу почту."
    },
    {
        id: 1,
        img: "Second",
        name: 'Подготовка к туру',
        description: "С нашей стороны, мы уже готовимся к вашему приезду, чтобы все было на самом высоком уровне."
    },
    {
        id: 2,
        img: "Third",
        name: 'Оплата на месте',
        description: "Вы не отправляете деньги вперед, вы платите только на месте по прибытии к нам."
    }
]


const list = ref(enList)

</script>

<style lang="scss">
.how {
    padding: 70px 0 55px;


    &-content {
        margin-top: 64px;
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

    &-block {
        max-width: 320px;
        text-align: center;
    }

    &-name {
        margin: 32px 0 8px;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 0em;
        color: rgba(35, 38, 47, 1);
    }

    &-description {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(119, 126, 144, 1);
    }

}
</style>
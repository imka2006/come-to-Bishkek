import { createStore } from "vuex";
import IK from "../assets/img/hero/IK.png"
import Bish from "../assets/img/hero/Bish.png"
import Naryn from "../assets/img/hero/Naryn.png"
export default createStore({
    state: {
        modal: false,
        enList: [
            {
                id: 1,
                name: "About us",
                link: "#about",
            },
            {
                id: 2,
                name: "Advantages",
                link: "#our",
            },
            {
                id: 3,
                name: "Services",
                link: "#services",
            },
            {
                id: 4,
                name: "Team",
                link: "#team",
            },
            {
                id: 5,
                name: "Feedback",
                link: "#",
            },
        ],
        ruList: [
            {
                id: 1,
                name: "О нас",
                link: "#about",
            },
            {
                id: 2,
                name: "Преимущества",
                link: "#our",
            },
            {
                id: 3,
                name: "Услуги",
                link: "#services",
            },
            {
                id: 4,
                name: "Команда",
                link: "#team",
            },
            {
                id: 5,
                name: "Связаться",
                link: "#",
            },
        ],
        lang: true,
        bg: 'bish',
        enListSlide: [
            {
                id: 0,
                img: IK,
                name: "Issyk kul",
                className: 'ik'
            },
            {
                id: 1,
                img: Bish,
                name: "Bishkek",
                className: 'bish'
            },
            {
                id: 2,
                img: Naryn,
                name: "Naryn",
                className: 'naryn'
            },
        ],
        ruListSlide: [
            {
                id: 0,
                img: IK,
                name: "Иссык-Куль",
                className: 'ik'
            },
            {
                id: 1,
                img: Bish,
                name: "Бишкек",
                className: 'bish'
            },
            {
                id: 2,
                img: Naryn,
                name: "Нарын",
                className: 'naryn'
            },
        ],
        currentSlide: {
          id: 0,
          img: IK,
          name: "Issyk kul",
          className: 'ik'
      },
    },
    getters: {},
    mutations: {
      setCurrentSlide(state, data) {
        state.currentSlide = data
      }
    },
    actions: {},
    modules: {},
});

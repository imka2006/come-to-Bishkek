import { createStore } from "vuex";

export default createStore({
    state: {
        modal:false,
        enList : [
            {
              id: 1,
              name: "About us",
              link: "#about"
            },
            {
              id: 2,
              name: "Advantages",
              link: "#our"  
            },
            {
              id: 3,
              name: "Services",
              link: "#services"
            },
            {
              id: 4,
              name: "Team",
              link: "#team"
            },
            {
              id: 5,
              name: "Feedback",
              link: "#"
            }
          ],
        ruList:  [
            {
              id: 1,
              name: "О нас",
              link: "#about"
            },
            {
              id: 2,
              name: "Преимущества",
              link: "#our"
            },
            {
              id: 3,
              name: "Услуги",
              link: "#services"
            },
            {
              id: 4,
              name: "Команда",
              link: "#team"
            },
            {
              id: 5,
              name: "Связаться",
              link: "#"
            }
          ],
          lang:true,
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});

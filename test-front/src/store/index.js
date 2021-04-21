import Vue from "vue";
import Vuex from "vuex";
import cities from "./cities";
import citizens from "./citizens";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    citizens,
  },
});

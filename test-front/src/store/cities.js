import { getCities } from "../services/cities.service";

const state = () => ({
  cities: [],
});

const mutations = {
  setCities(state, cities) {
    state.cities = cities;
  },
};

const actions = {
  async fetchCities({ commit }) {
    try {
      const cities = await getCities();
      commit("setCities", cities);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  cities: ({ cities }) => cities,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

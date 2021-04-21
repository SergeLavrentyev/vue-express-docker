import { getCitizens } from "../services/citizens.service";

const state = () => ({
  citizens: [],
});

const mutations = {
  setCitizens(state, citizens) {
    state.citizens = citizens;
  },
};

const actions = {
  async fetchCitizens({ commit }) {
    try {
      const citizens = await getCitizens();
      commit("setCitizens", citizens);
    } catch (error) {
      console.log(error);
    }
  },
};

const getters = {
  citizens: ({ citizens }) => citizens,
  districts: ({ districts }) => districts,
  streets: ({ streets }) => streets,
  people: ({ people }) => people,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

import { getMockUser } from '@/mocks/user';

export const state = () => ({
  user: null,
});

export const actions = () => ({
  async fetch({ commit }) {
    const user = await getMockUser();
    commit('update', user);
  },
});

export const mutations = {
  update(state, user) {
    state.user = user;
  },
};

export const getters = {
  get: (state) => state.user,
};

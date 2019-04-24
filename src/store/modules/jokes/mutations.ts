import Vue from 'vue';
import { MutationTree } from 'vuex';
import { JokesState } from './types';

export const mutations: MutationTree<JokesState> = {
  SET_JOKES_STATUS(state, payload) {
    state.status = payload.status;
  },
  UPDATE_JOKES(state, payload) {
    state.items = [...payload.items];
  },
  TOGGLE_FAVORITE_JOKE(state, payload) {
    const jokeIndex = state.items.findIndex(item => item.id === payload.id);
    if (jokeIndex >= 0) {
      Vue.set(state.items, jokeIndex, {
        ...state.items[jokeIndex],
        isFavorite: !state.items[jokeIndex].isFavorite
      });
    }
  }
};

import { MutationTree } from 'vuex';
import { JokesState } from './types';

export const mutations: MutationTree<JokesState> = {
  SET_JOKES_STATUS(state, payload) {
    state.status = payload.status;
  },
  UPDATE_JOKES(state, payload) {
    state.items = payload.items;
  }
};

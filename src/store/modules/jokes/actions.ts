import { ActionTree } from 'vuex';
import { RootState } from './../../../types';
import { JokesState, RequestStatus } from './types';
import jokeService from '@/services/jokeService';

export const actions: ActionTree<JokesState, RootState> = {
  async fetchJokes({ commit }, { amount = 1 }) {
    commit({
      type: 'SET_JOKES_STATUS',
      status: RequestStatus.PENDING
    });
    try {
      const result = await jokeService.getJokes(amount);
      commit({ type: 'UPDATE_JOKES', items: result });
      commit({
        type: 'SET_JOKES_STATUS',
        status: RequestStatus.SUCCESS
      });
    } catch (error) {
      commit({
        type: 'SET_JOKES_STATUS',
        status: RequestStatus.ERROR
      });
    }
  }
};

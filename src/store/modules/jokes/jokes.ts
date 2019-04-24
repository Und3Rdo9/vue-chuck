import { RootState } from './../../../types';
import { Module } from 'vuex';
import { JokesState, RequestStatus } from './types';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const state = {
  items: [],
  status: RequestStatus.INIT,
  isAutoFetching: false
};

const namespaced: boolean = true;

export const jokes: Module<JokesState, RootState> = {
  namespaced,
  actions,
  mutations,
  state,
  getters
};

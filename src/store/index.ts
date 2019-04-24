import Vuex, { StoreOptions } from 'vuex';
import Vue from 'vue';
import { RootState } from '../types';
import { jokes } from './modules/jokes/jokes';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== `production`,
  state: {
    version: '1.0.0'
  },
  modules: {
    jokes
  }
};

export default new Vuex.Store<RootState>(store);

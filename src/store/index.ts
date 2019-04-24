import Vuex, { StoreOptions } from 'vuex';
import Vue from 'vue';
import { RootState } from '../types';
import { jokes } from './modules/jokes/jokes';
import { jokesPlugin } from './plugins/jokesPlugin';
import {
  persistStorePlugin,
  getPersistedState
} from './plugins/persistStorePlugin';

Vue.use(Vuex);

const persistedState = getPersistedState() || {};

const storeConfig: StoreOptions<RootState> = {
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== `production`,
  state: {
    version: '1.0.0'
  },
  modules: {
    jokes
  },
  plugins: [jokesPlugin, persistStorePlugin]
};

const store = new Vuex.Store<RootState>(storeConfig);

if (persistedState !== undefined) {
  store.replaceState(persistedState);
}

export default store;

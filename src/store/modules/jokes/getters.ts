import { GetterTree } from 'vuex';
import { JokesState } from './types';
import { RootState } from './../../../types';

export const getters: GetterTree<JokesState, RootState> = {
  jokesLength: state => state.items.length,
  favoriteJokes: state => state.items.filter(joke => joke.isFavorite),
  favoriteJokesLength: (_, getters) => getters.favoriteJokes.length
  // TODO fix getters typing
};

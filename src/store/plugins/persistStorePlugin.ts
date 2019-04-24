import throttle from 'lodash/throttle';
// TODO avoid namespacing
// TODO reuse mutation constants?
// TODO improve typing

const throttlePersistState = (state: any) => {
  // WHY DOES THIS NOT WORK??
  //throttle(() => {
  persistState(state);
  //}, 500);
};

export const persistStorePlugin = (store: any) => {
  store.subscribe(({ type, payload }: any, state: any) => {
    throttlePersistState(state);
  });
};

export const getPersistedState = () => {
  try {
    const serializedState = localStorage.getItem('chucksFavorites');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const persistState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('chucksFavorites', serializedState);
  } catch (err) {
    console.log(err);
  }
};

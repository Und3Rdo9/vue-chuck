// TODO avoid namespacing
// TODO reuse mutation constants?
// TODO improve typing
export const jokesPlugin = (store: any) => {
  store.subscribe(({ type, payload }: any, state: any) => {
    switch (type) {
      case 'jokes/TOGGLE_AUTO_FETCH':
        handleJokeAutoFetching(state.jokes.isAutoFetching, store);
        break;
      default:
        break;
    }
  });
};

let interval: any;

export const handleJokeAutoFetching = (isAutoFetching: boolean, store: any) => {
  if (isAutoFetching) {
    interval = setInterval(() => {
      store.dispatch({
        type: 'jokes/fetchJokes',
        payload: {
          amount: 1
        }
      });
    }, 5000);
  } else if (isAutoFetching === false && interval) {
    clearInterval(interval);
  }
};

import { Joke } from './../store/modules/jokes/types';

const JOKE_ENDPOINT = 'http://api.icndb.com/jokes/random/';

export interface JokeRaw {
  id: number;
  joke: string;
}

export interface JokeApiResponse {
  type: string;
  value: Joke[];
}

export const normalizeJoke = (joke: JokeRaw): Joke => {
  return {
    ...joke,
    isFavorite: false
  };
};

export const getJokes = async (amount: number): Promise<Joke[]> => {
  const result = await fetch(`${JOKE_ENDPOINT}${amount}`);
  const json: JokeApiResponse = await result.json();
  const returnValue = json.value.map(joke => normalizeJoke(joke));
  return returnValue;
};

const jokeService = {
  getJokes
};

export default jokeService;

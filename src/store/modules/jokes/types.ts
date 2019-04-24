export interface JokesState {
  items: Joke[];
  status: RequestStatus;
  isAutoFetching: boolean;
}

export interface Joke {
  joke: string;
  id: number;
  isFavorite: boolean;
}

// TODO move somewhere generic
export enum RequestStatus {
  INIT = 'INIT',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

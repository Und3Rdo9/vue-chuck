export const fetchJokes = async (number: number) => {
  const result = await fetch(`http://api.icndb.com/jokes/random/${number}`);
  return result;
};

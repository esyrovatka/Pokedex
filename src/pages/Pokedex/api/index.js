const base_url = "https://pokeapi.co/api/v2/";

export const getPokemonList = async (
  link = `${base_url}pokemon?limit=12&offset=0`
) => {
  const res = await fetch(link);
  const result = await res.json();
  return result;
};

export const getPokemonById = async (link = `${base_url}pokemon/1`) => {
  const res = await fetch(link);
  const result = await res.json();
  return result;
};

export const getPokemonTypes = async () => {
  const res = await fetch(`${base_url}type`);
  const result = await res.json();
  return result;
};

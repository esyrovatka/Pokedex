import { useEffect, useState } from "react";
import { getPokemonTypes } from "../../api";

const useSearch = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await getPokemonTypes();
      setTypes(results);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { types };
};

export default useSearch;

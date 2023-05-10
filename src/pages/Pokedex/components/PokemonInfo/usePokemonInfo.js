import { useEffect, useState } from "react";

const usePokemonInfo = (pokemonInfo) => {
  const [link, setLink] = useState("");
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    if (isBack) return setLink(pokemonInfo?.sprites?.back_default);
    setLink(pokemonInfo?.sprites?.front_default);
  }, [isBack, pokemonInfo]);

  return { link, setIsBack };
};

export default usePokemonInfo;

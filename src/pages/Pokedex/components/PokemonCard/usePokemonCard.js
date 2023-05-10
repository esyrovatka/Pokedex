import { useEffect, useState } from "react";
import { getPokemonById } from "../../api";

const usePokemonCard = (link) => {
  const [card, setCard] = useState();
  useEffect(() => {
    (async () => {
      const results = await getPokemonById(link);
      setCard(results);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { card };
};

export default usePokemonCard;

import { useEffect, useState } from "react";
import { getPokemonList } from "./api";

const usePokedex = () => {
  const [list, setList] = useState([]);
  const [nextListLink, setNextListLink] = useState(undefined);

  const handleClick = async () => {
    const result = await getPokemonList(nextListLink);
    const newArr = JSON.parse(JSON.stringify(list));
    newArr.push(...result?.results);
    setList(newArr);
    setNextListLink(result.next);
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectType, setSelectType] = useState("All");

  const [pokemonInfo, setPokemonInfo] = useState({});

  return {
    list,
    handleClick,
    pokemonInfo,
    setPokemonInfo,
    selectType,
    setSelectType,
  };
};

export default usePokedex;

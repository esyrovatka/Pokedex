import { Card, Typography } from "antd";
import React from "react";
import InfoStat from "./components/InfoStat";
import usePokemonInfo from "./usePokemonInfo";

const PokemonInfo = ({ pokemonInfo }) => {
  const { link, setIsBack } = usePokemonInfo(pokemonInfo);

  if (!pokemonInfo?.name) {
    return (
      <Typography style={{ marginTop: "10px", position: "fixed" }}>
        Select Pokemon for info
      </Typography>
    );
  }
  return (
    <Card
      hoverable
      cover={<img alt={pokemonInfo.name} src={link} height={150} />}
      onMouseEnter={() => setIsBack((prev) => !prev)}
      onMouseLeave={() => setIsBack((prev) => !prev)}
      style={{ marginTop: "10px", position: "fixed" }}
    >
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {pokemonInfo.name} #{pokemonInfo.id}
      </Typography>

      <InfoStat name="type" value={pokemonInfo.types[0].type.name} />

      {pokemonInfo.stats.map((item, i) => (
        <InfoStat name={item.stat.name} value={item.base_stat} key={i} />
      ))}

      <InfoStat name="weight" value={pokemonInfo.weight} />
      <InfoStat name="total moves" value={pokemonInfo.moves.length} />
    </Card>
  );
};

export default PokemonInfo;

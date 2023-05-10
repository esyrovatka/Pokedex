import { Card, Col, Space, Tag, Typography } from "antd";
import React from "react";
import usePokemonCard from "./usePokemonCard";

const PokemonCard = ({ pokemon, setPokemonInfo, selectType }) => {
  const { card } = usePokemonCard(pokemon.url);
  if (!card) return <div>Loading...</div>;

  const filterCard = card.types.find((item) => item.type.name === selectType);

  return filterCard || selectType === "All" ? (
    <Col xs={24} sm={12} md={8} lg={6} className="pokemon_card">
      <Card
        hoverable
        className="card"
        cover={
          <img
            alt={card?.name}
            src={card?.sprites.front_default}
            height={150}
          />
        }
        onClick={() => setPokemonInfo(card)}
      >
        <Typography className="card_name">{card?.name}</Typography>
        <Space className="card_types">
          {card?.types.map((item) => (
            <Tag key={item.type.name} className={item.type.name}>
              {item.type.name}
            </Tag>
          ))}
        </Space>
      </Card>
    </Col>
  ) : null;
};

export default PokemonCard;

import React from "react";
import { Button, Layout, Row, Typography } from "antd";

import { LayoutStyles } from "./index.styles";
import usePokedex from "./usePokedex";
import PokemonCard from "./components/PokemonCard";
import PokemonInfo from "./components/PokemonInfo";
import Search from "./components/Search";

const Pokedex = () => {
  const { Content, Footer, Header, Sider } = Layout;
  const {
    list,
    handleClick,
    pokemonInfo,
    setPokemonInfo,
    selectType,
    setSelectType,
  } = usePokedex();
  return (
    <LayoutStyles>
      <Header>
        <Typography.Title>Pokedex</Typography.Title>
      </Header>
      <Search selectType={selectType} setSelectType={setSelectType} />

      <Layout>
        <Content>
          <Row>
            {list?.map((item) => (
              <PokemonCard
                key={item.name}
                pokemon={item}
                setPokemonInfo={setPokemonInfo}
                selectType={selectType}
              />
            ))}
          </Row>
        </Content>
        <Sider className="pokemon_info">
          <PokemonInfo pokemonInfo={pokemonInfo} />
        </Sider>
      </Layout>
      <Footer>
        <Button type="primary" onClick={handleClick}>
          Show more
        </Button>
      </Footer>
    </LayoutStyles>
  );
};

export default Pokedex;

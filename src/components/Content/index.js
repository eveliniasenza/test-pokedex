import React from 'react';
import {Row, Col} from "react-bootstrap";
import {usePokemonActions} from "../../actions/usePokemonsActions";
import {Container} from "../Container";
import Pagination from "../Pagination";
import {Wrapper} from "../Wrapper";
import './Content.css'

const Content = () => {
  const {
    currentPokemon,
    pokemons,
    setOffset,
    totalPages,
    onClickPokemon
  } = usePokemonActions()

  console.log('pokemons => ', pokemons)

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="pokedex">
              {
                currentPokemon && (
                  <>
                    <div className="pokemon-image">
                      <img src={currentPokemon.sprites.other.dream_world.front_default} alt=""/>
                    </div>
                    <div className="pokemon-description">
                      <h4>
                        Abilities/ Habilidades:
                      </h4>
                      <ul>
                        { currentPokemon.abilities.map(ability => (
                          <li>{ ability.ability.name }</li>
                        )) }
                      </ul>
                      <h4>
                        <p>Weight/ Peso:</p>
                      </h4>
                        { currentPokemon.weight }
                    </div>
                  </>
                )
              }
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <ul className="list-group">
              { pokemons.map(pokemon => (
                <li
                  onClick={() => onClickPokemon(pokemon.name)}
                  className="list-group-item cursor-pointer">
                  <span className="h1 position-relative">
                    { pokemon.name }
                    <div className="circle"></div>
                  </span>
                </li>
              )) }
            </ul>
            <Pagination
              totalPages={totalPages}
              setPage={(number) => {
                setOffset((number - 1) * 5)
              }}
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Content;

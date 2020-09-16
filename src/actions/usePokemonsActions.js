import axios from "axios";
import {useState, useEffect} from "react";
import {API_URL} from "../config/constants";

export const usePokemonActions = () => {
  const [pokemons, setPokemons] = useState([])
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [offset, setOffset] = useState(0)
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const limit = 5;

  useEffect(() => {
    axios.get(`${API_URL}/pokemon`, { params: { offset, limit } }).then(response => {
      setPokemons(response.data.results)
      setTotal(response.data.count)
    })
  }, [offset])

  useEffect(() => {
    const pages = Math.ceil(total / 5)
    setTotalPages(pages)
  }, [total])

  const onClickPokemon = (name) => {
    axios.get(`${API_URL}/pokemon/${name}`).then(response => {
      console.log(response.data);
      setCurrentPokemon(response.data)
    })
  }

  return {
    pokemons,
    currentPokemon,
    onClickPokemon,
    setOffset,
    totalPages
  }
}

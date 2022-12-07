import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Cards from './components/Card';
import './App.css';
import { getPokemons } from './services/commonServices';
import Search from './components/Search';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [types, setTypes] = useState([]);

  const filteredPokemons = useMemo(
    () => pokemons.filter((pokemon) => {
      const filteredName = search.length
        ? pokemon.name.includes(search)
        : true;
      const filteredType = types.length
        ? pokemon.types.some(({ type }) => types.includes(type.name))
        : true;
      return filteredName && filteredType;
    }),
    [search, pokemons, types],
  );

  useEffect(() => {
    (async function () {
      const { results } = await getPokemons();

      const promises = results.map((item) => axios.get(item.url));

      const responses = await Promise.all(promises);
      const pokemons = responses.map(({ data }) => data);
      setPokemons(pokemons);
    }());
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Search setSearch={setSearch} className="search" />
      <div className="pokemons">
        {filteredPokemons.map((item) => (
          <Cards key={item.id} item={item} setTypes={setTypes} />
        ))}
      </div>
    </div>
  );
}

export default App;

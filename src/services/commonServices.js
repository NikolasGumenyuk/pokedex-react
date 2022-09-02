import RequestService from './RequestApi';

export const getPokemons = () => {
  return new RequestService('http://pokeapi.co/api/v2/pokemon/').get();
}
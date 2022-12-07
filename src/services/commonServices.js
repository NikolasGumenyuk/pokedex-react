import RequestService from './RequestApi';

export const getPokemons = () => new RequestService('http://pokeapi.co/api/v2/pokemon/').get();

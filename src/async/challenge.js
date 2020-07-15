const fetchData = require ('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try{
        // Cuantos elementos trae
        const data = await fetchData (url_api);
        // Nombre del primer elemento
        const character = await fetchData(`${API}/${data.results[0].id}`)
        // Dimensión del primer elemento
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch (error){
        console.error(error);
    }
}
anotherFunction(API);
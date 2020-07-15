const fetchData = require ('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    // Cuantos elementos trae
    .then( data => {console.log(data.info.count);
        return fetchData(`${API}/${data.results[0].id}`)
    })
    // Nombre del primer elemento
    .then (data => {console.log(data.name);
        return fetchData(data.origin.url)
    })
    // Dimensión del primer elemento
    .then(data => {console.log(data.dimension);
    })
    .catch (error => {console.error(error);
    })

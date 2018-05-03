import axios from 'axios';
const DOG_URL = 'http://localhost:3000/dog';


function emptyDog() {
    return {name: '', imgs: [], age: 0, description: '', gender: '', matchesIds : [], favs : []}
}

function getDogs() {

    var url = DOG_URL;
    // if (queryObj && queryObj.bySeverity) {
    //     url += `?bySeverity=${queryObj.bySeverity}`
    // }
    return axios
            .get(url)
            .then(res => res.data)
            .catch(e => console.log('No Dogs', e))
}

function saveDog(dog) {
    if (dog._id) return axios.put(_getDogUrl(dog._id), dog)
    else return axios.post(DOG_URL, dog);  
}

function deleteDog(dogId) {
    return axios.delete(_getDogUrl(dogId))
}


function getDogById(dogId) {
    return axios
    .get(_getDogUrl(dogId))
    .then(res => res.data)
}

function _getDogUrl(dogId) {
    return `${DOG_URL}/${dogId}`;
}


// function getNextDog(prevId) {
//     prevId = prevId || '';
//     return axios
//         .get(`${DOG_URL}/next/${prevId}`)
//         .then(res => res.data[0]);
// }

function getNextDogs(prevId) {
    prevId = prevId || '';
    return axios
        .get(`${DOG_URL}/next/${prevId}`)
        .then(res => res.data);
}


export default {
    getDogs,
    saveDog,
    deleteDog,
    emptyDog,
    getDogById,
    getNextDogs
    // getNextDog
}
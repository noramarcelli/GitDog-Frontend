import axios from 'axios';
const DOG_URL = 'http://localhost:3000/dog';


function emptyDog() {
    return {name: '', imgs: [], age: 0, description: '', gender: '', matchesIds : [], favs : []}
}

function getDogs() {

    var url = DOG_URL;
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

function getNextDogs(prevId, userDogId) {
    prevId = prevId || '';
    var url = `${DOG_URL}/next?prevId=${prevId}&userDogId=${userDogId}`;
    console.log('dogId in service:', prevId)
    return axios
        .get(url)
        .then(res => {
            return res.data[0] ? res.data : getNextDogs('', userDogId)
        });
}

function addLikeToDog(likedId, userDogId, userId ){
    return axios
        .post(`${DOG_URL}/like`, {likedId, userDogId, userId} )
        .then(res => res.data);
}

function findLikes(userDogId){
    return axios
    .get(`${DOG_URL}/like/${userDogId}`)
    .then(res => {
        return res.data;
        console.log('all dogs who liked mine: ', res.data);
    })
}

// function uploadImg( imgUrl, imgIdx ){
//     return axios
//     .get(`${DOG_URL}/uploadImg`)
//     .then(res => {
//         res.data
//         console.log('updated dog after img upload: ', res.data);
//     })
// }

function uploadImg( imgUrl ){
    console.log('imgUrl', imgUrl);
    
    return axios
    .post(`${DOG_URL}/uploadImg`, {imgUrl})
    .then(res => {
        return res.data;
        console.log('updated url after img upload: ', res.data);
    })
}

export default {
    getDogs,
    saveDog,
    deleteDog,
    emptyDog,
    getDogById,
    getNextDogs,
    addLikeToDog,
    findLikes,
    uploadImg
}
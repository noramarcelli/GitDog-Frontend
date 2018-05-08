import axios from 'axios';
const MATCH_URL = 'http://localhost:3000/match';

function getDogMatches(userDogId) {
    return axios
        .get(`${MATCH_URL}/${userDogId}`, {userDogId} )
        .then(res => res.data);
}

export default {
    getDogMatches
}


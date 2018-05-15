import axios from 'axios';
const MATCH_URL = (process.env.NODE_ENV === 'development')? '//localhost:3000/match' : '/match';

// const MATCH_URL = 'http://localhost:3000/match';

function getDogMatches(userDogId) {
    return axios
        .get(`${MATCH_URL}/${userDogId}`, {userDogId} )
        .then(res => res.data);
}

export default {
    getDogMatches
}


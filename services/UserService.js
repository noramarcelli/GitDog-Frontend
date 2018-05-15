
import axios from 'axios';
const BASE_URL = (process.env.NODE_ENV === 'development')? '//localhost:3000' : '';

// const BASE_URL ='//localhost:3000';


function login(user) {
  return axios
    .post(`${BASE_URL}/login`, user)
    .then(res => {
      sessionStorage.user = JSON.stringify(res.data.user)
      return res.data.user
    })
    .catch(err => {throw new Error('Login Failed')})
}

function register(user) {
  return axios
    .post(`${BASE_URL}/register`, user)
    .then(res => console.log(res.data))
    .catch(err => {throw new Error('Register Failed')})
}

function logout() {
  return axios
    .post(`${BASE_URL}/logout`)
    .then(res => {
      delete sessionStorage.user;
    })
    .catch(err => {throw new Error('Logout Failed')})
}

function getUserById(userId){
  console.log('userId inside getUserById in front service', userId);
  
  return axios
  .get(`${BASE_URL}/user/${userId}`)
  .then(res => {
    console.log('res in getUserById', res);
    
    return res.data;
  })
  .catch(err => {throw new Error('Get User By Id Failed')})
}

export default {
  login,
  register,
  logout,
  getUserById
};

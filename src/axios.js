import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-everst-32d36.cloudfunctions.net/api'
    // 'http://localhost:5001/everst-32d36/us-central1/api'
});

export default instance;
const axios = require('axios');

const url = 'http://localhost:8080/server/demo';

    axios.get(url)
    .then(response => {
        console.log('Response :' , response.data);
    })
    .catch(error => {
        console.error('Error:' , error)
    })
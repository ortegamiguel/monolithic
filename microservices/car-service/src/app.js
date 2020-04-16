const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'CAR Service',
    architecture: 'microservices'
};

const logger = (message) => console.log('[car service]' + message);

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/cars', (req, res) => {
    response.data.push('CAR', 'CAR', 'CAR', 'CAR');
    logger('get car data');
    return res.send(response);
});


module.exports = app;
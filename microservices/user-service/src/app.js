const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'user Service',
    architecture: 'microservices'
};

const logger = (message) => console.log('[User service]' + message);

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/users', (req, res) => {
    response.data.push('Miguel', 'Angel', 'carlos', 'daniel');
    logger('get user data');
    return res.send(response);
});


module.exports = app;
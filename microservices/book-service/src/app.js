const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'Book Service',
    architecture: 'microservices'
};

const logger = (message) => console.log('[book service]' + message);

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/books', (req, res) => {
    response.data.push('boook', 'boook', 'boook', 'boook');
    logger('get book data');
    return res.send(response);
});


module.exports = app;
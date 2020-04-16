const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'Monolithics Service',
    architecture: 'Monolithics'
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v1/users', (req, res) => {
    response.data.push('Miguel', 'Angel');
    return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
    response.data.push('sw', 'sofr');
    return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
    response.data.push('toyota', 'nissan');
    return res.send(response);
});


module.exports = app;
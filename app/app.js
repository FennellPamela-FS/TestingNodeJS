const express = require('express');
require("dotenv").config();
const app = express();

app.use(express.json());

// default SERVICE call (kinda like an actuator)
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Service is Up',
    });
});

// middleware to handle errors and bad urls
app.use((req, res, next) => {
    const error = new Error("Not Found"); // error is a class and we pass in an error
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;
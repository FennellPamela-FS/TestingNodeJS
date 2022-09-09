const http = require('http'); // proven design pattern, lightweight smaller than using express
// const app = require('./app/app');
require("dotenv").config();

http.createServer().listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});
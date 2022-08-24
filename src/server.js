'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// MiddleWare
app.use(cors());
app.use(morgan('dev'));

// DATA
const users = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Serbentautas' },
  { id: 3, name: 'Lenteja' },
];

// Routes
app.get('/', (request, response) => {
  response.send('<h1>Welcome to users API</h1>');
});

// GET /api/users -> grazinti visu useriu masyva json

// 404
app.use((req, res) => {
  res.status(404).json({ msg: 'Sorry page not found' });
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

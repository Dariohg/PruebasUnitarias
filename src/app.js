const express = require('express');
const categoriaRoutes = require('./routes/categoriaRoutes');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(express.json());

app.use('/api', categoriaRoutes);
app.use('/api', productoRoutes);

module.exports = app;

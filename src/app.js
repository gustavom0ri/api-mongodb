const express = require('express');
const mongoose = require('mongoose');
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', produtoRoutes);
app.use('/api', usuarioRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});

module.exports = app;

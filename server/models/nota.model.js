const mongoose = require('mongoose');

// Definir o esquema de uma nota
const notaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  conteudo: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

// Criar o modelo com o esquema
const Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;

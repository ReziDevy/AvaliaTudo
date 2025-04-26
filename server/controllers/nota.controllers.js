const express = require('express');
const {
  criarNota,
  buscarNotas,
  deletarNota,
  atualizarNota
} = require('../controllers/nota.controllers'); // Importar as funções do controller
const router = express.Router();

// Adicionar uma nova nota
router.post('/nota', criarNota);

// Buscar todas as notas
router.get('/notas', buscarNotas);

// Deletar uma nota
router.delete('/nota/:id', deletarNota);

// Atualizar uma nota
router.put('/nota/:id', atualizarNota);

module.exports = router;

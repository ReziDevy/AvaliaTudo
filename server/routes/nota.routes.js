// routes/nota.routes.js
const express = require('express');
const Nota = require('../models/nota.model');
const router = express.Router();

// Adicionar uma nova nota
router.post('/nota', async (req, res) => {
  try {
    const { titulo, conteudo } = req.body;
    const novaNota = new Nota({ titulo, conteudo });
    await novaNota.save();
    res.status(201).json(novaNota);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a nota', error });
  }
});

// Buscar todas as notas
router.get('/notas', async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as notas', error });
  }
});

// Deletar uma nota
router.delete('/nota/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const notaDeletada = await Nota.findByIdAndDelete(id);
    if (!notaDeletada) {
      return res.status(404).json({ message: 'Nota não encontrada' });
    }
    res.status(200).json({ message: 'Nota deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a nota', error });
  }
});

// Atualizar uma nota
router.put('/nota/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;
    const notaAtualizada = await Nota.findByIdAndUpdate(
      id,
      { titulo, conteudo },
      { new: true }
    );
    if (!notaAtualizada) {
      return res.status(404).json({ message: 'Nota não encontrada' });
    }
    res.status(200).json(notaAtualizada);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a nota', error });
  }
});

// Exportando as rotas
module.exports = router;

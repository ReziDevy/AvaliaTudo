const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const notaRoutes = require('./server/routes/nota.routes'); // Caminho corrigido
const connectDB = require('./server/config/db'); // Caminho corrigido

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Conectar ao MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Usar as rotas de notas
app.use('/api', notaRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do AvaliaTudo funcionando!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

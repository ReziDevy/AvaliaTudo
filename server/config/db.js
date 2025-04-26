const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Finaliza o processo em caso de erro na conexão
  }
};

module.exports = connectDB;

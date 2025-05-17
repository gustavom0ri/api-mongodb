const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: String,
  preco: { type: Number, required: true },
  qtd_estoque: { type: Number, required: true },
  criado_em: { type: Date, default: Date.now },
  usuario: {
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    email: String,
  }
});

module.exports = mongoose.model('Produto', produtoSchema);

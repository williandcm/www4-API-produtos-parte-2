const produtosModel = require('../models/produtoModel');

const produtoController = {
    criarProduto: async (req, res) =>{
        const { codigo, nome, quantidade, preco} = req.body;
        // Validação simples dos campos obrigratórios
        if(!codigo || !nome || !quantidade || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtde, preco) são obrigatórios!"
            })
        }
        //Transformar e calcular os dados
        const nomeMaiusculo = String(nome).toUpperCase();
        const qtde = Number(quantidade);
        const valorPreco = Number(preco);
        const valorTotal = qtde * valorPreco;

        const novoProduto = await produtosModel.create({
            data: { //json
            codigo,
            nome: nomeMaiusculo,
            quantidade: qtde,
            preco: valorPreco,
            total: valorTotal
            }
    });
        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Produto cadastrado com sucesso!",
            produto: novoProduto
        })
    },
    listarProdutos: async (req, res) =>{
        try{

            const produtos = await produtosModel.findMany();
            return res.json({
                sucesso: true,
                total: produtos.length,
                produtos
            })
        }catch (error) {
            return res.status(500).json({sucesso: false, error: error.message})
        }
    }
}
module.exports = produtoController;
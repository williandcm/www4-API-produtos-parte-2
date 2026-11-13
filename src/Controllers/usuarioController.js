const usuarioController = {
    criarUsuario: (req, res) =>{
        const { codigo, nome, sobrenome, endereco} = req.body;
        // Validação simples dos campos obrigratórios
        if(!codigo || !nome || !sobrenome || !endereco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, sobrenome, endereço) são obrigatórios!"
            })
        }
        //Transformar e calcular os dados
               
        const novoUsuario ={
        codigo,
        nome: String(nome).toUpperCase(),
        sobrenome: String(sobrenome),
        endereco: String(endereco),
        criadoEm: new Date().toISOString()
        }

        
        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Usuario cadastrado com sucesso!",
            usuario: novoUsuario
        })
    },
    
}
module.exports = usuarioController;
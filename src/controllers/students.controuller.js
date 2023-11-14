export const buscarTodosAlunos = (req, res) => {
    return res.status(200).send({mensage: "Todos alunos via controller", status: "ok"})
    
};

export const buscarAlunoPorId = (req, res) => {
    const {id} = req.params;
    return res.status(200).send({mensage: `Aluno com ID ${id}`, origem:"Controler"})
}

export const criarAluno = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade){
        return res.status(400).send({mensage: "Dados Invalidos", origem: "Controler"})
    }
    return res.status(201).send({mensage: "Rota POST alunos", origem: "Controler"})
};

export const atualizarAluno = (req, res) => {
    const {id} = req.params;
    const { nome, email, idade} = req.body

    if(!nome || !email || !idade){
        return res.status(400).send({ mensage: "Dados inválidos", origem: "Controler"})
    }

    return res.status(200).send({mensage: `Rota PUT aluno com ID ${id}`, origem: "Controler"})
}

export const deletarAluno = (req, res) => {
    const {id} = req.params;
    return res.status(200).send({mensage: `Rota DELETE aluno com id ${id}`, origem: "Controler"})
}

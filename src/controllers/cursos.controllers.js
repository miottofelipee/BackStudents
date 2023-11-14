import {Cursos} from "../models/cursos/CursosList.js";

export const buscarTodosCursos = (req, res) => {
    const cursos = cursos.getTodososCursos();
    return res.status(200).send({ mensage: "Todos alunos via controller", status: "ok", data: cursos })

};

export const buscarCursoPorId = (req, res) => {
    const cursos = List.getTodosCursosPorId(id);
    const { id } = req.params;
    return res.status(200).send({ mensage: `Curso com ID ${id}`, origem: "Controler" })
}

export const criarCurso = (req, res) => {
    const { nome, desc, limit } = req.body;

    if (!nome || !desc || !limit) {
        return res.status(400).send({ mensage: "Dados Invalidos", origem: "Controler" })
    }
    return res.status(201).send({ mensage: "Rota POST cursos", origem: "Controler" })
};

export const atualizarCurso = (req, res) => {
    const { id } = req.params;
    const { nome, desc, limit } = req.body

    if (!nome || !desc || !limit) {
        return res.status(400).send({ mensage: "Dados do curso inválidos", origem: "Controler" })
    }

    return res.status(200).send({ mensage: `Rota PUT aluno com ID ${id}`, origem: "Controler" })
}

export const deletarCuros = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ mensage: `Rota DELETE curso com id ${id}`, origem: "Controler" })
}

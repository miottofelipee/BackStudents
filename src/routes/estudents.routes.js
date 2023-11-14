import { Router } from "express";
import { buscarTodosAlunos, buscarAlunoPorId, criarAluno, atualizarAluno, deletarAluno } from "../controllers/students.controuller.js";

const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos)

rotasAlunos.get("/:id", buscarAlunoPorId)

rotasAlunos.post("/", criarAluno)

rotasAlunos.put("/:id", atualizarAluno)

rotasAlunos.delete("/:id", deletarAluno)

export default rotasAlunos;
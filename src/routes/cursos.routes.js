import { Router } from "express";
import { buscarTodosCursos, buscarCursoPorId, criarCurso, atualizarCurso, deletarCuros } from "../controllers/cursos.controllers.js";
const rotasCursos = Router();

rotasCursos.get("/",buscarTodosCursos);

rotasCursos.get("/:id",buscarCursoPorId);

rotasCursos.post("/", criarCurso);

rotasCursos.put("/:id", atualizarCurso)

rotasCursos.delete("/:id", deletarCuros);


export default rotasCursos;
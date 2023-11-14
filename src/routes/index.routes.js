import { Router } from "express";
import rotasAlunos from "./estudents.routes.js";
import rotasCursos from "./cursos.routes.js";

const rotas = Router()
rotas.use("/alunos", rotasAlunos)
rotas.use("/cursos", rotasCursos)

rotas.get("/", (req, res) => {
    return res.status(200).send({mensage: "Servidor Ok!"})
})

export default rotas;
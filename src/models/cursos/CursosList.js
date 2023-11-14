export class CursosList{
    constructor(){
        this.cursos = [];
    }

    getTodosCursos(){
        return this.cursos
    }

    getCursosPorId(id){
        return this.cursos.find((cursos)=> cursos.id == id)
    }

    createCurso(cursos){
        this.cursos.push(cursos)
    }

    updateCurso(id, name, desc, limit){
        const cursoUpdate = this.getCursosPorId(id)

        if(!cursos){
            return null
        }

        cursos.nome = nome;
        cursos.desc = desc;
        this.cursos.limit = limit;

        return this.cursos
    }

    removerCurso(cursoId){
        this.cursos = this.cursos.filter((cursos) => cursos.id == cursoId)
    }

}

export default CursosList
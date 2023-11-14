import { v4 as uuidv4} from "uuid"
export class Cursos{
    constructor(nome, desc, limit){
        this.nome = nome;
        this.desc = desc;
        this.limit = limit;
        this.id = uuidv4();
    }
}
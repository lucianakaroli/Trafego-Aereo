import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";

 
//Implementacao da classe piloto
class Piloto {
    _matricula;
    _nome;
    _habilitacaoAtiva;

    constructor(matricula,nome,habilitacaoAtiva){
        validate(arguments, ["string", "string", "boolean"]);
        this._matricula = matricula;
        this._nome = nome;
        this._habilitacaoAtiva = habilitacaoAtiva;
    }

    getMatricula(){
        return this._matricula;
    }

    getNome(){
        return this._nome;
    }

    isHabilitacaoAtiva(){
        return this._habilitacaoAtiva;
    }

    toString(){
        return `Matricula: ${this._matricula}, Nome: ${this._nome}, Habilitacao ativa: ${this._habilitacaoAtiva}`;
    }
}

export default Piloto;
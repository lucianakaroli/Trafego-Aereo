import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Piloto from './piloto.js';

// Implementacao da classe ServicoPiloto (capaz de recuperar as informações 
// relativas aos pilotos que podem ser responsáveis pelos voos)
class ServicoPilotos{
    _pilotos;

    constructor(pilotos){
        typedef('Piloto', {
            _matricula: "string",
            _nome: "string",
            _habilitacaoAtiva: "boolean"
        });

        validate(pilotos, "Array.<Piloto>");
        this._pilotos = pilotos;
    }

    recupera(matricula){
        return this._pilotos.find(piloto => piloto.getMatricula() === matricula);
    }

    todos(){
        return this._pilotos;
    }
}

export default ServicoPilotos;
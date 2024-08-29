import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';

// Aeronave Particular (agregação Aeronave)
class AeronaveParticular extends Aeronave{
    _respManutencao;

    constructor(prefixo,velocidadeCruzeiro,autonomia,respManutencao){
        validate(arguments, ["string","number","number","string"])
        super(prefixo,velocidadeCruzeiro,autonomia);
        this._respManutencao = respManutencao;
    }

    getRespManutencao(){
        return this._respManutencao;
    }

    isValido(planoDeVoo){
        return planoDeVoo.getAltitude() > 25000 && planoDeVoo.getAltitude() < 27000
    }

    toString(){
        return super.toString() + `Responsavel pela manuntecao: ${this._respManutencao}`;
    }
        //todo: validar porque só pode voar enter 25k e 27
}

export default AeronaveParticular;

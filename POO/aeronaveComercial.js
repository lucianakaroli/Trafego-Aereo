import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';

// Aeronave Comercial (agregação Aeronave)
class AeronaveComercial extends Aeronave{
    _nomeCIA;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA){
        validate(arguments, ["string","number","number","string"]);
        super(prefixo,velocidadeCruzeiro,autonomia);
        this._nomeCIA = nomeCIA;
    }

    get nomeCIA(){
        return this._nomeCIA;
    }

    toString(){
        return super.toString() + `Nome da CIA aérea: ${this._nomeCIA}`;
    }


    //todo: validar porque só pode voar acima de 28.000 pés
}

export default AeronaveComercial;

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

    getNomeCIA(){
        return this._nomeCIA;
    }

    isValido(planoDeVoo){
        return planoDeVoo.getAltitude() > 28000;
    }

    toString(){
        return super.toString() + `Nome da CIA aérea: ${this._nomeCIA}`;
    }

}

export default AeronaveComercial;

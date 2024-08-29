import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';
import AeronaveComercial from './aeronaveComercial.js';

// AeronavePassageiros(agregação AeronaveComercial)
class AeronavePassageiros extends AeronaveComercial{
    _maxPassageiros;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,maxPassageiros){
        validate(arguments, ["string","number","number","string","number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCIA);
        this._maxPassageiros = maxPassageiros;
    }

    getMaxPassageiros() {
        return this._maxPassageiros;
    }

    toString(){
        return super.toString() + `Maximo de passageiros: ${this._maxPassageiros}`; 
    }
}

export default AeronavePassageiros;

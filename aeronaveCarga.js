import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';
import AeronaveComercial from './aeronaveComercial.js';

// AeronaveCarga (agregação AeronaveComercial)
class AeronaveCarga extends AeronaveComercial{
    _pesoMax;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,pesoMax){
        validate(arguments, ["string","number","number","string","number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCIA);
        this._pesoMax = pesoMax;
    }

    getPesoMax(){
        return this._pesoMax;
    }
}  

export default AeronaveCarga;

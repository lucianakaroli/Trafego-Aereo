import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import AeronaveComercial from './aeronaveComercial.js';

const HorariosPermitidos = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
];

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

    isValido(planoDeVoo){
        for (let a of planoDeVoo.getHorario()){
            if(!a in HorariosPermitidos){
                return false;
            }
            return true;
        } 
    }

    toString(){
        return super.toString() + `Peso Maximo: ${this._pesoMax}`;
    }
}  

export default AeronaveCarga;

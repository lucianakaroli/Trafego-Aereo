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
    
    verificaHorario(horario){
        let HorariosPermitidos = [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
        ];

        for (let a of horario){
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

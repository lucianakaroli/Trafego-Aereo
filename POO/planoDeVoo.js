import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aerovia from './aerovia.js';
import Aviao from './altitude.js';
import Piloto from './piloto.js'

class PlanoDeVoo {
    _id;
    _matricPiloto;
    _idAerovia;
    _prefixoAeronave;
    _data;
    _horario;
    _altitude;
    _slots;
    _cancelado;

    constructor(id,matricPiloto,idAerovia,_prefixoAeronave,data,horario,altitude,cancelado){
        validate(arguments, ["string", "string", "string","string","data", "hora", "number", "boolean"]);
        this._id = id;
        this._matricPiloto = matricPiloto;
        this._idAerovia = idAerovia;
        this._prefixoAeronave = prefixoAeronave;
        this._data = data;
        this._horario = horario;
        this._altitude = altitude;
        this._slots= slots;
        this._cancelado = cancelado;
    }
    getId(){
        return this._id;
    }

    getMatricPiloto() {
        return this._matricPiloto;
    }

    getidAerovia() {
        return this._idAerovia;
    }

    getData() {
        return this._data;
    }

    getHorario(){
        return this._horario;
    }

    getAltitude() {
        return this._altitude;
    }

    getSlots() {
        return this._slots;
    }

    getCancelado() {
        return this._cancelado;
    }

    //Cancela o plano de voo
    cancela(){
        this._cancelado = true;
    }

    toString(){
        return `Plano de Voo Id: ${this._id} - Matricula do Piloto: ${this._matricPiloto} - Prefixo da aeronave: ${this._prefixoAeronave} - Data: ${this._data} - Horário: ${this._horario} - Altitude: ${this._altitude} - Slots: ${this._slots} - Cancelado: ${this._cancelado}`};
    

}

export default PlanoDeVoo;
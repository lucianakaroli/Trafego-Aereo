import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import PlanoDeVoo from './planoDeVoo.js';

class ServicoPlanos{
    _planos;

    constructor(planos){
        typedef('PlanodeVoo', {
            _id: "string",
            _matricPiloto: "string",
            _idAerovia: "string",
            _data: "data",
            _horario: "horario",
            _altitude: "number",
            _slots: "array<numero>",
            _cancelado: "boolean"
        });

        validate(planos, "Array.<Piloto>");
        this._planos = planos;
    }


    consiste(plano){
    }

    recupera(id){
       return this._planos.find(PlanoDeVoo => PlanoDeVoo.getId() === id);
    }
    
    todos(){
        return _this.planos;
    }
}

import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import PlanoDeVoo from './planoDeVoo.js';

class ServicoPlanos{
    _planos;

    constructor(planos){
        typedef('PlanodeVoo', {
            _id: "number",
            _matricPiloto: "string",
            _idAerovia: "string",
            _data: "Date",
            _horario: "string",
            _altitude: "number",
            _cancelado: "boolean"
        });

        validate(planos, "Array.<PlanodeVoo>");
        this._planos = planos;
    }


    consiste(plano){
    }

    recupera(id){
       return this._planos.find(PlanoDeVoo => PlanoDeVoo.getId() === id);
    }
    
    todos(){
        return this._planos;
    }
}


export default ServicoPlanos;
import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';

// Implementação ServicoAeronave (capaz de recuperar as informações sobre as 
//aeronaves que podem ser utilizadas nos planos de voo)
class ServicoAeronaves{
    _aeronaves;

    constructor(aeronaves){
        validate([aeronaves], ["array"]);
        this._aeronaves = aeronaves;
    }

    todas(){
        return this._aeronaves;
    }
}

export default ServicoAeronaves;

import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";

import Aerovia from './aerovia.js';

// Implementação da classe ServicoAerovias (capaz de recuperar as informações sobre 
// as aerovias disponíveis para os voos) 
class ServicoAerovias{
    _aerovias;

    constructor(aerovias){
        validate([aerovias], ["array"]);
        this._aerovias = aerovias;
    }

    recupera(origem, destino){
        return this._aerovias.filter(aerovia => {
            aerovia.getOrigem() === origem && aerovia.getDestino() === destino
        })
    }
    
    todas(){
        return this._aerovias;
    }
}

export default ServicoAerovias;

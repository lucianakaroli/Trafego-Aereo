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
            let id = aerovia.getId();
            let splits = id.split("-");
            return splits[0] === origem && splits[1] === destino
        })
    }
    
    todas(){
        return this._aerovias;
    }
}

export default ServicoAerovias;

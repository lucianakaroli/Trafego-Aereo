import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";


class OcupacaoAerovia {
    _ocupacoes;

    constructor(){
        this._ocupacoes = new Map();
    }


    altitudesLivres(idAerovia, data){
        return 
    }

    ocupa(idAerovia,data,altitude,slot) {
        let chave = `${idAerovia}-${data}-${altitude}-${slot}`
        this._ocupacoes.set(chave, true);
        return
    }

    isOcupado(idAerovia,data,altitude,slot) {
        let chave = `${idAerovia}-${data}-${altitude}-${slot}`
        return this._ocupacoes.get(chave) === true
    }
}
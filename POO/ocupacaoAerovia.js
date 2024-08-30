import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";


class OcupacaoAerovia {
    _ocupacoesSlots;
    _ocupacoesAltitudes;

    constructor(){
        this._ocupacoesSlots = new Map();
        this._ocupacoesAltitudes = new Map();
    }

    altitudesLivres(idAerovia, data){
        let altitudesLivres = []
        for (let altitude = 25000; altitude<=35000; altitude+=1000){
            let exist = this._ocupacoesAltitudes.get(`${idAerovia}-${data}-${altitude}`) === true
            if (!exist){
                altitudesLivres.push(altitude)
            }
        }

        return altitudesLivres
    }

    ocupa(idAerovia,data,altitude,slot) {
        this._ocupacoesAltitudes.set(`${idAerovia}-${data}-${altitude}`, true)
        this._ocupacoesSlots.set(`${idAerovia}-${data}-${altitude}-${slot}`, true);
    }

    isOcupado(idAerovia,data,altitude,slot) {
        return this._ocupacoesSlots.get(`${idAerovia}-${data}-${altitude}-${slot}`) === true
    }
}

export default OcupacaoAerovia;
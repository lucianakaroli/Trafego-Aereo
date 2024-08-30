import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aerovia from './aerovia.js';

//Distancia minima entre avioes deve ser de 1000 pés.
//As altitudes dos avioes estejam entre 25.000 e 35.000 pés.
//As altitudes sejam multiplas de 1.000.
//No maximo, 10 avioes podem ser adicionados à aerovia.

class Aviao extends Aerovia {
    _altitude; // Altitude em pés
    _avioes;

    constructor(id,origem,destino,tamanho,altitude,avioes){
        validate(arguments, ["string","string","string","number","number","number"]);
        super(id,origem,destino,tamanho); 
        this._altitude = altitude;
        this._avioes = avioes;
    }

    adicionarAviao(aviao) {
        if (this._avioes.length >= 10) { // Verifica se já possui 10 avioes na pista
            throw new Error('A quantidade máxima de 10 aviões na aerovia foi atingida.');
        }

        for (let i = 0; i < this._avioes.length; i++) { // Verifica a distancia mínima de 1000 pés
            let difAltitude = Math.abs(this._avioes[i].altitude - aviao.altitude);
            if (difAltitude < 1000) {
                throw new Error(`Avião ${aviao.id} não pode ser adicionado. A distância mínima de 1.000 pés não é respeitada.`);
            }
        }
        this._avioes.push(aviao);
    }

    altitudeLivre(){
        const altitudesOcupadas = this.avioes.map(aviao => aviao.altitude);
        const altitudeLivre = [];

        for (let altitude = 25000; altitude <= 35000; altitude += 1000) {
            if (!altitudesOcupadas.includes(altitude)) {
                altitudeLivres.push(altitude);
            }
        }
        return altitudeLivre;

    }
}

export default Aviao;
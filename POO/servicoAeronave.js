import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Aeronave from './aeronave.js';
import AeronaveCarga from './aeronaveCarga.js';
import AeronaveParticular from './aeronaveParticular.js';

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

  toString() {
    let resultado = "";
    for (let aeronave of this._aeronaves) {
      resultado += aeronave.toString() + "\n";
    }
    return resultado;
  }
}

export default ServicoAeronaves;

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


  //Retorna a aeronave com o prefixo informado
  recupera(prefixo) {
    if (!this._aeronaves.find((aeronave) => aeronave.prefixo === prefixo)) {
      throw new Error("Aeronave não encontrada.");
    }
    return this._aeronaves.find(
      (aeronave) => aeronave.prefixo === aeronave.prefixo
    );
  }

  //Instancia as aeronaves de acordo com o tipo
  async adicionaAeronavesCarga(arquivo) {
    let linha;
    let dados = [];
    let buf = new nReadlines(arquivo);
    buf.next();
    while ((linha = buf.next())) {
      dados = linha.toString("utf8").split(",");
      this._aeronaves.push(
        new AeronaveCarga(dados[0], dados[1], dados[2], dados[3], dados[4])
      );
    }
  }
  //Instancia as aeronaves de acordo com o tipo
  async adicionaAeronavesPassageiros(arquivo) {
    let linha;
    let dados = [];
    let buf = new nReadlines(arquivo);
    buf.next();
    while ((linha = buf.next())) {
      dados = linha.toString("utf8").split(",");
      this._aeronaves.push(
        new AeronavePassageiros(
          dados[0],
          dados[1],
          dados[2],
          dados[3],
          dados[4]
        )
      );
    }
  }

  //Instancia as aeronaves de acordo com o tipo
  async adicionaAeronavesParticulares(arquivo) {
    let linha;
    let dados = [];
    let buf = new nReadlines(arquivo);
    buf.next();
    while ((linha = buf.next())) {
      dados = linha.toString("utf8").split(",");
      this._aeronaves.push(
        new AeronaveParticular(dados[0], dados[1], dados[2], dados[3], dados[4])
      );
    }
  }

  adiciona(aeronave) {
    this._aeronaves.push(aeronave);
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

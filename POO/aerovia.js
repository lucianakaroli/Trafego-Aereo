import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";

// Implementacao da classe Aerovia
class Aerovia{
    _id;
    _origem;
    _destino;
    _tamanho;

    constructor(id, origem, destino,tamanho){
        validate(arguments, ["string","string","string","number"]);
        this._id = id;
        this._origem = origem;
        this._destino = destino;
        this._tamanho = tamanho;
    }

    getId(){
        return this._id;
    }

    getOrigem() {
        return this._origem;
    }

    getDestino() {
        return this._destino;
    }

    getTamanho() {
        return this._tamanho;
    }

    toString(){
        return `Aerovia id: ${this._id}, Origem: ${this._origem}, Destino: ${this._destino}, Tamanho: ${this._tamanho}`;
    }
}

export default Aerovia;

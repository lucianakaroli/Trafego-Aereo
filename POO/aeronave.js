import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";


// Implementação da hierarquia de classes da Aeronave (conforme o diagrama de classes)
class Aeronave{
    _prefixo;
    _velocidadeCruzeiro;
    _autonomia;
    
    constructor(prefixo,velocidadeCruzeiro,autonomia){
        validate (arguments, ["string", "number", "number"]);
        this._prefixo = prefixo;
        this._velocidadeCruzeiro = velocidadeCruzeiro;
        this._autonomia = autonomia;
    }

    getPrefixo() {
        return this._prefixo;
    }

    getVelocidadeCruzeiro() {
        return this._velocidadeCruzeiro;
    }

    getAutonomia() {
        return this._autonomia;
    }

    toString() {
        return `Prefixo Aeronave: ${this._prefixo}, Velocidade Cruzeiro: ${this._velocidadeCruzeiro}, Autonomia: ${this._autonomia}`}
}

export default Aeronave;

import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";

 
//Implementacao da classe piloto
class Piloto {
    _matricula;
    _nome;
    _habilitacaoAtiva;

    constructor(matricula,nome,habilitacaoAtiva){
        validate(arguments, ["string", "string", "boolean"]);
        this._matricula = matricula;
        this._nome = nome;
        this._habilitacaoAtiva = habilitacaoAtiva;
    }

    getMatricula(){
        return this._matricula;
    }

    getNome(){
        return this._nome;
    }

    isHabilitacaoAtiva(){
        return this._habilitacaoAtiva;
    }
}

// Implementacao da classe ServicoPiloto (capaz de recuperar as informações 
// relativas aos pilotos que podem ser responsáveis pelos voos)
class ServicoPilotos{
    _pilotos;

    constructor(pilotos){
        typedef('Piloto', {
            _matricula: "string",
            _nome: "string",
            _habilitacaoAtiva: "boolean"
        });

        validate(pilotos, "Array.<Piloto>");
        this._pilotos = pilotos;
    }

    recupera(matricula){
        return this._pilotos.find(piloto => piloto.getMatricula() === matricula);
    }

    todos(){
        return this._pilotos;
    }
}

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
}

// Aeronave Comercial (agregação Aeronave)
class AeronaveComercial extends Aeronave{
    _nomeCIA;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA){
        validate(arguments, ["string","number","number","string"]);
        super(prefixo,velocidadeCruzeiro,autonomia);
        this._nomeCIA = nomeCIA;
    }
}

// Aeronave Particular (agregação Aeronave)
class AeronaveParticular extends Aeronave{
    _respManutencao;

    constructor(prefixo,velocidadeCruzeiro,autonomia,respManutencao){
        validate(arguments, ["string","number","number","string"])
        super(prefixo,velocidadeCruzeiro,autonomia);
        this._respManutencao = respManutencao;
    }

    getRespManutencao(){
        return this._respManutencao;
    }
}

// AeronaveCarga (agregação AeronaveComercial)
class AeronaveCarga extends AeronaveComercial{
    _pesoMax;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,pesoMax){
        validate(arguments, ["string","number","number","string","number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCIA);
        this._pesoMax = pesoMax;
    }

    getPesoMax(){
        return this._pesoMax;
    }
}

// AeronavePassageiros(agregação AeronaveComercial)
class AeronavePassageiros extends AeronaveComercial{
    _maxPassageiros;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,maxPassageiros){
        validate(arguments, ["string","number","number","string","number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCIA);
        this._maxPassageiros = maxPassageiros;
    }

    getMaxPassageiros() {
        return this._maxPassageiros;
    }
}

// Implementação ServicoAeronave (capaz de recuperar as informações sobre as 
//aeronaves que podem ser utilizadas nos planos de voo)
class ServicoAeronave{
    _aeronaves;

    constructor(aeronaves){
        validate([aeronaves], ["array"]);
        this._aeronaves = aeronaves;
    }

    todas(){
        return this._aeronaves;
    }
}

// Implementacao da classe Aerovia
class Aerovia{
    _id;
    _origem;
    _destino;
    _tamanho;

    constructor(id,origem,destino,tamanho){
        validate(arguments, ["string","string","string","number"]);
        this._id = id;
        this._origem = origem;
        this._destino = destino;
        this._tamanho = tamanho;
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
}

// Implementação da classe ServicoAerovias (capaz de recuperar as informações sobre 
// as aerovias disponíveis para os voos) 
class ServicoAerovias{
    _aerovias;

    constructor(aerovias){
        validate([aerovias], ["array"]);
        this._aerovias = aerovias;
    }

    recupera(){
        return this._aerovias.filter(aerovia => aerovia.getOrigem() === origem && aerovia.getDestino() === destino);
    }
    
    todas() {
        return this._aerovias;
    }
}

// Adiciona pilotos
let piloto1 = new Piloto("10156","Luciana Silva",true);
let piloto2 = new Piloto("10157","Bernardo Copstein",true);
let piloto3 = new Piloto("10158","Julio Machado",true);

let servicoPiloto = new ServicoPilotos([piloto1, piloto2, piloto3]);
console.log(servicoPiloto.todos());

// Adiciona aeronave
let aeronave1 = new AeronavePassageiros("PT-GSG",850,4000,"Azul",200);
let aeronave2 = new AeronavePassageiros("PS-STS",1000,5000,"Gol",300);
let aeronave3 = new AeronavePassageiros("PT-BRT",900,4500,"American Airlines",300);
let servicoAeronave = new ServicoAeronave([aeronave1,aeronave2,aeronave3]);
console.log(servicoAeronave.todas());

// Adiciona aerovias
let aerovia1 = new Aerovia ("GRU-POA", "Guarulhos", "Porto Alegre",10000);
let aerovia2 = new Aerovia ("SJK-POA", "São José dos Campos", "Porto Alegre",500);
let aerovia3 = new Aerovia ("RJ-POA", "Rio de Janeiro", "Porto Alegre",5000);
let servicoAerovia = new ServicoAerovias([aerovia1,aerovia2,aerovia3]);
console.log(servicoAerovia.todas());
import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate } from "bycontract";

 
//Implementacao da classe piloto
class Piloto{
    #matricula;
    #nome;
    #habilitacaoAtiva;

    constructor(matricula,nome,habilitacaoAtiva){
        validate(arguments, ["string", "string", "boolean"]);
        this.#matricula = matricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }
}

// Implementacao da classe ServicoPiloto (capaz de recuperar as informações 
// relativas aos pilotos que podem ser responsáveis pelos voos)
class ServicoPilotos{
    #pilotos;

    constructor(pilotos){
        validate(arguments, "Array.<Piloto>");
        this.#pilotos = pilotos;
    }

    recupera(){
        return this.pilotos.find(piloto => piloto.getMatricula() === matricula);
    }

    todos(){
        return this.pilotos;
    }
}

// Implementação da hierarquia de classes da Aeronave (conforme o diagrama de classes)
class Aeronave{
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;
    
    constructor(prefixo,velocidadeCruzeiro,autonomia){
        validate (arguments, ["string", "number", "number"]);
        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }
}

// Aeronave Comercial (agregação Aeronave)
class AeronaveComercial extends Aeronave{
    #nomeCIA;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCia){
        validate(arguments, ["sting"]);
        super(prefixo,velocidadeCruzeiro,autonomia);
        this.#nomeCIA = nomeCIA
    }
}

// Aeronave Particular (agregação Aeronave)
class AeronaveParticular extends Aeronave{
    #respManutencao;

    constructor(prefixo,velocidadeCruzeiro,autonomia,respManutencao){
        validate(arguments, ["string"])
        super(prefixo,velocidadeCruzeiro,autonomia);
        this.#respManutencao = respManutencao;
    }
}

// AeronaveCarga (agregação AeronaveComercial)
class AeronaveCarga extends AeronaveComercial{
    #pesoMax;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,pesoMax){
        validate(arguments, ["number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCia);
        this.#pesoMax = pesoMax;
    }
}

// AeronavePassageiros(agregação AeronaveComercial)
class AeronavePassageiros extends AeronaveComercial{
    #maxPassageiros;

    constructor(prefixo,velocidadeCruzeiro,autonomia,nomeCIA,maxPassageiros){
        validate(arguments, ["number"]);
        super(prefixo,velocidadeCruzeiro,autonomia,nomeCIA);
        this.#maxPassageiros = maxPassageiros;
    }
}

// Implementação ServicoAeronave (capaz de recuperar as informações sobre as 
//aeronaves que podem ser utilizadas nos planos de voo)
class ServicoAeronave{
    #aeronaves;

    constructor(aeronaves){
        validate(arguments, "Array.<Aeronave>");
        this.#aeronaves = aeronaves;
    }

    todas(){
        return this.#aeronaves;
    }
}

// Implementacao da classe Aerovia
class Aerovia{
    #id;
    #origem;
    #destino;
    #tamanho;

    constructor(id,origem,destino,tamanho){
        validate(arguments, ["string","string","string","number"]);
        this.#id = id;
        this.#origem = origem;
        this.#destino = destino;
        this.#tamanho = tamanho;
    }
}

// Implementação da classe ServicoAerovias (capaz de recuperar as informações sobre 
// as aerovias disponíveis para os voos) 
class ServicoAerovias{
    #aerovias;

    constructor(aerovias){
        validate(arguments, "Array.<Aerovias>");
        this.#aerovias = aerovias;
    }

    recupera(){
        return this.aerovias.filter(aerovia => aerovia.origem === origem && aerovia.destino === destino);
    }
}

// Adiciona pilotos
let piloto1 = new Piloto ("10156","Luciana Silva",true);
let piloto2 = new Piloto ("10157","Bernardo Copstein",true);
let piloto3 = new Piloto ("10158","Julio Machado",true);

let servicoPiloto = new ServicoPilotos( [piloto1, piloto2, piloto3]);
console.log(servicoPiloto.todos());

// Adiciona aeronave
let aeronave1 = new AeronavePassageiros("PT-GSG",850,4000,"Azul",200);
let aeronave2 = new AeronavePassageiros("PS-STS",1000,5000,"Gol",300);
let aeronave3 = new AeronavePassageiros("PT-BRT",900,4500,"American Airlines",300);
let servicoAeronave = new ServicoAeronave([aeronave1,aeronave2,aeronave3]);
console.log(servicoAeronave.todos());

// Adiciona aerovias
let aerovia1 = new Aerovia ("GRU-POA", "Guarulhos", "Porto Alegre",10000);
let aerovia2 = new Aerovia ("SJK-POA", "São José dos Campos", "Porto Alegre",500);
let aerovia3 = new Aerovia ("RJ-POA", "Rio de Janeiro", "Porto Alegre",5000);
let servicoAerovia = new ServicoAerovias([aerovia1,aerovia2,aerovia3]);
console.log(servicoAerovia.todos());

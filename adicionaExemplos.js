import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Piloto from './piloto.js';
import ServicoPilotos  from './servicoPiloto.js';
import Aeronave from './aeronave.js';
import ServicoAeronave from './servicoAeronave.js';
import AeronavePassageiros from './aeronavePassageiros.js';
import AeronaveParticular from './aeronaveParticular.js';
import AeronaveComercial from './aeronaveComercial.js';
import AeronaveCarga from './aeronaveCarga.js'
import Aerovia from './aerovia.js'
import ServicoAerovias from './servicoAerovias.js'


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
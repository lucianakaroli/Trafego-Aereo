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
import PlanoDeVoo from './planoDeVoo.js';


// Adiciona pilotos
let piloto1 = new Piloto("10156","Luciana Silva",true);
let piloto2 = new Piloto("10157","Bernardo Copstein",true);
let piloto3 = new Piloto("10158","Julio Machado",true);
let piloto4 = new Piloto("10159","Vinicius Lopes",true);
let piloto5 = new Piloto("10160","Luiza Siso",true);
let piloto6 = new Piloto("10161","Taina Mimessi",true);
let piloto7 = new Piloto("10162","Danielle Ferreira",true);
let piloto8 = new Piloto("10163","Gabriela Parpinelli",true);
let piloto9 = new Piloto("10164","Jaqueline Reaiche",true);
let piloto10 = new Piloto("10165","Brenda Moreira",true);

console.log(piloto1, piloto2, piloto3, piloto4, piloto5, piloto6, piloto7, piloto8, piloto9, piloto10);


// Adiciona aeronave
let aeronave1 = new AeronavePassageiros("PT-GSG",850,13500);
let aeronave2 = new AeronavePassageiros("PS-STS",750,20000,);
let aeronave3 = new AeronavePassageiros("PT-BRT",900,14100,);
let aeronave4 = new AeronavePassageiros("LD-PBN",850,30000,);
let aeronave5 = new AeronavePassageiros("JB-HBB",1000,14000);
let aeronave6 = new AeronavePassageiros("PT-RTQ",850,16000);
let aeronave7 = new AeronavePassageiros("EA-JBF",850,16780);
let aeronave8 = new AeronavePassageiros("BL-HBG",1000,18450);
let aeronave9 = new AeronavePassageiros("CR-IMD",1000,11000);
let aeronave10 = new AeronavePassageiros("EU-CTB",1500,20000);

console.log(aeronave1, aeronave2, aeronave3, aeronave4, aeronave5, aeronave6, aeronave7, aeronave8, aeronave9, aeronave10);

// Adiciona aeronave Particular
let aeronaveParticular1 = new AeronaveParticular("PT-GSG",850,13500,"GE CELMA");
let aeronaveParticular2 = new AeronaveParticular("PS-STS",750,20000,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");
let aeronaveParticular3 = new AeronaveParticular("PT-BRT",900,14100,300,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");
let aeronaveParticular4 = new AeronaveParticular("LD-PBN",850,30000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular5 = new AeronaveParticular("JB-HBB",1000,14000,"GE CELMA");
let aeronaveParticular6 = new AeronaveParticular("PT-RTQ",850,16000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular7 = new AeronaveParticular("EA-JBF",850,16780,"GE CELMA");
let aeronaveParticular8 = new AeronaveParticular("BL-HBG",1000,18450,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular9 = new AeronaveParticular("CR-IMD",1000,11000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular10 = new AeronaveParticular("EU-CTB",1500,20000,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");

console.log(aeronaveParticular1, aeronaveParticular2, aeronaveParticular3, aeronaveParticular4, aeronaveParticular5, aeronaveParticular6, aeronaveParticular7, aeronaveParticular8, aeronaveParticular9, aeronaveParticular10);


// Adiciona aeronave Comercial 
let aeronaveComercial1 = new AeronaveComercial("PT-GSG",850,13500,"Azul",);
let aeronaveComercial2 = new AeronaveComercial("PS-STS",750,20000,"Gol",);
let aeronaveComercial3 = new AeronaveComercial("PT-BRT",900,14100,"American Airlines");
let aeronaveComercial4 = new AeronaveComercial("LD-PBN",850,30000,"Latam");
let aeronaveComercial5 = new AeronaveComercial("JB-HBB",1000,14000,"Swiss Airlines");
let aeronaveComercial6 = new AeronaveComercial("PT-RTQ",850,16000,"Voepass");
let aeronaveComercial7 = new AeronaveComercial("EA-JBF",850,16780,"Azul");
let aeronaveComercial8 = new AeronaveComercial("BL-HBG",1000,18450,"Gol");
let aeronaveComercial9 = new AeronaveComercial("CR-IMD",1000,11000,"Japan Airlines");
let aeronaveComercial10 = new AeronaveComercial("EU-CTB",1500,20000,"Latam");

console.log(aeronaveComercial1, aeronaveComercial2, aeronaveComercial3, aeronaveComercial4, aeronaveComercial5, aeronaveComercial6, aeronaveComercial7, aeronaveComercial8, aeronaveComercial9, aeronaveComercial10);


// Adiciona aeronave Passageiros
let aeronavePassageiros1 = new AeronavePassageiros("PT-GSG",850,13500,"Azul",200);
let aeronavePassageiros2 = new AeronavePassageiros("PS-STS",750,20000,"Gol",100);
let aeronavePassageiros3 = new AeronavePassageiros("PT-BRT",900,14100,"American Airlines",300);
let aeronavePassageiros4 = new AeronavePassageiros("LD-PBN",850,30000,"Latam",200);
let aeronavePassageiros5 = new AeronavePassageiros("JB-HBB",1000,14000,"Swiss Airlines",300);
let aeronavePassageiros6 = new AeronavePassageiros("PT-RTQ",850,16000,"Voepass",100);
let aeronavePassageiros7 = new AeronavePassageiros("EA-JBF",850,16780,"Azul",280);
let aeronavePassageiros8 = new AeronavePassageiros("BL-HBG",1000,18450,"Gol",350);
let aeronavePassageiros9 = new AeronavePassageiros("CR-IMD",1000,11000,"Japan Airlines",300);
let aeronavePassageiros10 = new AeronavePassageiros("EU-CTB",1500,20000,"Latam",200);

console.log(aeronavePassageiros1, aeronavePassageiros2, aeronavePassageiros3, aeronavePassageiros4, aeronavePassageiros5, aeronavePassageiros6, aeronavePassageiros7, aeronavePassageiros8, aeronavePassageiros9, aeronavePassageiros10);


// Adiciona aeronave Carga
let aeronaveCarga1 = new AeronaveCarga("PT-GSG",850,13500,"Azul",2000);
let aeronaveCarga2 = new AeronaveCarga("PS-STS",750,20000,"Gol",1000);
let aeronaveCarga3 = new AeronaveCarga("PT-BRT",900,14100,"American Airlines",3000);
let aeronaveCarga4 = new AeronaveCarga("LD-PBN",850,30000,"Latam",2000);
let aeronaveCarga5 = new AeronaveCarga("JB-HBB",1000,14000,"Swiss Airlines",3000);
let aeronaveCarga6 = new AeronaveCarga("PT-RTQ",850,16000,"Voepass",1000);
let aeronaveCarga7 = new AeronaveCarga("EA-JBF",850,16780,"Azul",2800);
let aeronaveCarga8 = new AeronaveCarga("BL-HBG",1000,18450,"Gol",3500);
let aeronaveCarga9 = new AeronaveCarga("CR-IMD",1000,11000,"Japan Airlines",3000);
let aeronaveCarga10 = new AeronaveCarga("EU-CTB",1500,20000,"Latam",2000);

console.log(aeronaveCarga1, aeronaveCarga2, aeronaveCarga3, aeronaveCarga4, aeronaveCarga5, aeronaveCarga6, aeronaveCarga7, aeronaveCarga8, aeronaveCarga9, aeronaveCarga10);


// Adiciona aerovias
let aerovia1 = new Aerovia ("POA-FLO", "Porto Alegre", "Florianopolis",10000);
let aerovia2 = new Aerovia ("POA-GRU", "Porto Alegre", "Guarulhos",50000);
let aerovia3 = new Aerovia ("GRU-POA", "Guarulhos", "Porto Alegre",20000);
let aerovia4 = new Aerovia ("FLO-CWB", "Florianopolis", "Curitiba",12000);
let aerovia5 = new Aerovia ("CWB-FLO", "Curitiba", "Florianopolis",10000);
let aerovia6 = new Aerovia ("CWB-GRU", "Curitiba", "Guarulhos",50000);
let aerovia7 = new Aerovia ("GRU-CWB", "Guarulhos", "Curitiba",12000);
let aerovia8 = new Aerovia ("FLO-POA", "Florianopolis", "Porto Alegre",20000);
let aerovia9 = new Aerovia ("SJK-POA", "São José dos Campos", "Porto Alegre",20000);
let aerovia10 = new Aerovia ("POA-SJK", "Porto Alegre", "São José dos Campos",10000);

console.log(aerovia1, aerovia2, aerovia3, aerovia4, aerovia5, aerovia6, aerovia7, aerovia8, aerovia9, aerovia10);


// Adiciona Plano de Voo
let planoDeVoo1 = new PlanoDeVoo ("")
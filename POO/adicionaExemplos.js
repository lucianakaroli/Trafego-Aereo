import promptsync from 'prompt-sync'; 
const prompt = promptsync({sigint: true});
import { validate, typedef } from "bycontract";
import Piloto from './piloto.js';
import ServicoPilotos  from './servicoPilotos.js';
import Aeronave from './aeronave.js';
import ServicoAeronave from './servicoAeronave.js';
import AeronavePassageiros from './aeronavePassageiros.js';
import AeronaveParticular from './aeronaveParticular.js';
import AeronaveCarga from './aeronaveCarga.js'
import Aerovia from './aerovia.js'
import ServicoAerovias from './servicoAerovias.js'
import ServicoPlano from './servicoPlanos.js'
import OcupacaoAerovias from './ocupacaoAerovia.js'
import PlanoDeVoo from './planoDeVoo.js';
import Sistema from './sistema.js';


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



// Adiciona aeronave Particular
let aeronaveParticular1 = new AeronaveParticular("PA-01",800,13500,"GE CELMA");
let aeronaveParticular2 = new AeronaveParticular("PA-02",800,20000,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");
let aeronaveParticular3 = new AeronaveParticular("PA-03",900,14100,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");
let aeronaveParticular4 = new AeronaveParticular("PA-04",850,30000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular5 = new AeronaveParticular("PA-05",1000,14000,"GE CELMA");
let aeronaveParticular6 = new AeronaveParticular("PA-06",850,16000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular7 = new AeronaveParticular("PA-07",850,16780,"GE CELMA");
let aeronaveParticular8 = new AeronaveParticular("PA-08",1000,18450,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular9 = new AeronaveParticular("PA-09",1000,11000,"PRATT WHITNEY CANADA DO BRASIL LTDA");
let aeronaveParticular10 = new AeronaveParticular("PA-10",1500,20000,"TAP MANUTENCAO E ENGENHARIA BRASIL SA");

console.log(aeronaveParticular1, aeronaveParticular2, aeronaveParticular3, aeronaveParticular4, aeronaveParticular5, aeronaveParticular6, aeronaveParticular7, aeronaveParticular8, aeronaveParticular9, aeronaveParticular10);


// Adiciona aeronave Passageiros
let aeronavePassageiros1 = new AeronavePassageiros("PS-01",850,13500,"Azul",200);
let aeronavePassageiros2 = new AeronavePassageiros("PS-02",750,20000,"Gol",100);
let aeronavePassageiros3 = new AeronavePassageiros("PS-03",900,14100,"American Airlines",300);
let aeronavePassageiros4 = new AeronavePassageiros("PS-04",850,30000,"Latam",200);
let aeronavePassageiros5 = new AeronavePassageiros("PS-05",1000,14000,"Swiss Airlines",300);
let aeronavePassageiros6 = new AeronavePassageiros("PS-06",850,16000,"Voepass",100);
let aeronavePassageiros7 = new AeronavePassageiros("PS-07",850,16780,"Azul",280);
let aeronavePassageiros8 = new AeronavePassageiros("PS-08",1000,18450,"Gol",350);
let aeronavePassageiros9 = new AeronavePassageiros("PS-09",1000,11000,"Japan Airlines",300);
let aeronavePassageiros10 = new AeronavePassageiros("PS-10",1500,20000,"Latam",200);

console.log(aeronavePassageiros1, aeronavePassageiros2, aeronavePassageiros3, aeronavePassageiros4, aeronavePassageiros5, aeronavePassageiros6, aeronavePassageiros7, aeronavePassageiros8, aeronavePassageiros9, aeronavePassageiros10);


// Adiciona aeronave Carga
let aeronaveCarga1 = new AeronaveCarga("CA-01",850,13500,"Azul",2000);
let aeronaveCarga2 = new AeronaveCarga("CA-02",750,20000,"Gol",1000);
let aeronaveCarga3 = new AeronaveCarga("CA-03",900,14100,"American Airlines",3000);
let aeronaveCarga4 = new AeronaveCarga("CA-04",850,30000,"Latam",2000);
let aeronaveCarga5 = new AeronaveCarga("CA-05",1000,14000,"Swiss Airlines",3000);
let aeronaveCarga6 = new AeronaveCarga("CA-06",850,16000,"Voepass",1000);
let aeronaveCarga7 = new AeronaveCarga("CA-07",850,16780,"Azul",2800);
let aeronaveCarga8 = new AeronaveCarga("CA-08",1000,18450,"Gol",3500);
let aeronaveCarga9 = new AeronaveCarga("CA-09",1000,11000,"Japan Airlines",3000);
let aeronaveCarga10 = new AeronaveCarga("CA-10",1500,20000,"Latam",2000);

console.log(aeronaveCarga1, aeronaveCarga2, aeronaveCarga3, aeronaveCarga4, aeronaveCarga5, aeronaveCarga6, aeronaveCarga7, aeronaveCarga8, aeronaveCarga9, aeronaveCarga10);


// Adiciona aerovias
let aerovia1 = new Aerovia("POA-FLO", "Porto Alegre", "Florianopolis",1000);
let aerovia2 = new Aerovia("POA-GRU", "Porto Alegre", "Guarulhos",50000);
let aerovia3 = new Aerovia("GRU-POA", "Guarulhos", "Porto Alegre",1000);
let aerovia4 = new Aerovia("FLO-CWB", "Florianopolis", "Curitiba",12000);
let aerovia5 = new Aerovia("CWB-FLO", "Curitiba", "Florianopolis",10000);
let aerovia6 = new Aerovia("CWB-GRU", "Curitiba", "Guarulhos",50000);
let aerovia7 = new Aerovia("GRU-CWB", "Guarulhos", "Curitiba",12000);
let aerovia8 = new Aerovia("FLO-POA", "Florianopolis", "Porto Alegre",20000);
let aerovia9 = new Aerovia("SJK-POA", "São José dos Campos", "Porto Alegre",20000);
let aerovia10 = new Aerovia("POA-SJK", "Porto Alegre", "São José dos Campos",10000);

console.log(aerovia1, aerovia2, aerovia3, aerovia4, aerovia5, aerovia6, aerovia7, aerovia8, aerovia9, aerovia10);

// Adiciona Plano de Voo
let data1 = new Date(2023, 2, 1, 4, 50)
let hora1 = data1.getHours() + ":" + data1.getMinutes()
let planoDeVoo1 = new PlanoDeVoo(94837, "PRBG", "GRU-POA","PA-01", data1, hora1, 28000, false);

let data2 = new Date(2024, 3, 4, 1, 10)
let hora2 = data2.getHours() + ":" + data2.getMinutes()
let planoDeVoo2 = new PlanoDeVoo(965337, "GPOF", "POA-CWB","PA-02", data2, hora2, 30000, false);

let data3 = new Date(2024, 9, 4, 10, 10)
let hora3 = data3.getHours() + ":" + data3.getMinutes()
let planoDeVoo3 = new PlanoDeVoo(94217, "VJFH", "POA-FLO", "CA-01", data3, hora3, 21000, false);

let data4 = new Date(2013, 5, 7, 2, 20)
let hora4 = data4.getHours() + ":" + data4.getMinutes()
let planoDeVoo4 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "CA-02", data4, hora4, 28000, false);

let data5 = new Date(2013, 12, 12, 15, 30)
let hora5 = data1.getHours() + ":" + data5.getMinutes()
let planoDeVoo5 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "CA-03",data5, hora5, 28000, false);

let data6 = new Date(2013, 10, 1, 17, 15)
let hora6 = data6.getHours() + ":" + data6.getMinutes()
let planoDeVoo6 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "CA-04", data6, hora6, 28000, false);

let data7 = new Date(2013, 8, 5, 18, 45)
let hora7 = data7.getHours() + ":" + data7.getMinutes()
let planoDeVoo7 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "PS-01", data7, hora7, 28000, false);

let data8 = new Date(2013, 3, 4, 11, 20)
let hora8 = data8.getHours() + ":" + data8.getMinutes()
let planoDeVoo8 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "PS-02", data8, hora8, 28000, false);

let data9 = new Date(2013, 12, 11, 4, 40)
let hora9 = data9.getHours() + ":" + data9.getMinutes()
let planoDeVoo9 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "PS-03", data9, hora9, 28000, false);

let data10 = new Date(2013, 10, 2, 2, 30)
let hora10 = data10.getHours() + ":" + data10.getMinutes()
let planoDeVoo10 = new PlanoDeVoo(94837, "PRBG", "GRU-POA", "PS-04", data10, hora10, 28000, false);

console.log(planoDeVoo1, planoDeVoo2, planoDeVoo3, planoDeVoo4, planoDeVoo5, planoDeVoo6, planoDeVoo7, planoDeVoo8, planoDeVoo9, planoDeVoo10);


let servicoAerovias = new ServicoAerovias([aerovia1, aerovia2, aerovia3, aerovia4, aerovia5, aerovia6, aerovia7, aerovia8, aerovia9, aerovia10]);
let ocupacaoAerovias = new OcupacaoAerovias();
let servicoPlano = new ServicoPlano([planoDeVoo1, planoDeVoo2, planoDeVoo3, planoDeVoo4, planoDeVoo5, planoDeVoo6, planoDeVoo7, planoDeVoo8, planoDeVoo9, planoDeVoo10]);
let servicoAeronaves = new ServicoAeronave([
    aeronaveParticular1, aeronaveParticular2, 
    aeronaveCarga1, aeronaveCarga2,
    aeronaveCarga3, aeronaveCarga4,
    aeronavePassageiros1, aeronavePassageiros2,
    aeronavePassageiros3, aeronavePassageiros4]);

let sistema = new Sistema(servicoAerovias,ocupacaoAerovias,servicoPlano,servicoAeronaves)

sistema.aprovarPlanoDeVoo()
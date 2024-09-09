import AeronaveParticular from "../POO/aeronaveParticular";
import PlanoDeVoo from "../POO/planoDeVoo";

describe("Teste de aeronave particular", () => {
  it("Deve validar o retorno do toString", () => {
    let aeronave = new AeronaveParticular("PA-01",800,13500,"GE CELMA")
    let resposta = aeronave.toString()
    let resultadoEsperado = "Prefixo Aeronave: PA-01, Velocidade Cruzeiro: 800, Autonomia: 13500Responsavel pela manuntecao: GE CELMA";
    expect(resposta).toBe(resultadoEsperado);
  });


  it("Deve validar o metodo is valido para caso de maior de 27000", () => {
    let aeronave = new AeronaveParticular("PA-01",800,13500,"GE CELMA")
    
    let data1 = new Date(2023, 2, 1, 4, 50)
    let hora1 = data1.getHours() + ":" + data1.getMinutes()
    let planoDeVoo = new PlanoDeVoo(1, "LS", "GRU-POA","PA-01", data1, hora1, 28000, false);


    let resposta = aeronave.isValido(planoDeVoo)
    let resultadoEsperado = false;
    expect(resposta).toBe(resultadoEsperado);
  });


  it("Deve validar o metodo is valido para caso de menor de 25000", () => {
    let aeronave = new AeronaveParticular("PA-01",800,13500,"GE CELMA")
    
    let data1 = new Date(2023, 2, 1, 4, 50)
    let hora1 = data1.getHours() + ":" + data1.getMinutes()
    let planoDeVoo = new PlanoDeVoo(1, "LS", "GRU-POA","PA-01", data1, hora1, 24000, false);


    let resposta = aeronave.isValido(planoDeVoo)
    let resultadoEsperado = false;
    expect(resposta).toBe(resultadoEsperado);
  });

  it("Deve validar o metodo is valido", () => {
    let aeronave = new AeronaveParticular("PA-01",800,13500,"GE CELMA")
    
    let data1 = new Date(2023, 2, 1, 4, 50)
    let hora1 = data1.getHours() + ":" + data1.getMinutes()
    let planoDeVoo = new PlanoDeVoo(1, "LS", "GRU-POA","PA-01", data1, hora1, 25550, false);


    let resposta = aeronave.isValido(planoDeVoo)
    let resultadoEsperado = true;
    expect(resposta).toBe(resultadoEsperado);
  });
});



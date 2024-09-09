import AeronavePassageiros from "../POO/aeronavePassageiros";

describe("Teste de aeronave passageiros", () => {
    it("Deve validar o retorno do toString", () => {
        let aeronave = new AeronavePassageiros("PS-01",850,13500,"Azul",200);
        let resposta = aeronave.toString()
        let resultadoEsperado = "Prefixo Aeronave: PS-01, Velocidade Cruzeiro: 850, Autonomia: 13500Nome da CIA aérea: AzulMaximo de passageiros: 200";
        expect(resposta).toBe(resultadoEsperado);
    });
});
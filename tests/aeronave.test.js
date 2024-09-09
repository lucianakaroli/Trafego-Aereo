import Aeronave from "../POO/aeronave";

describe('Aeronave', () => {
    test('deve criar uma instância corretamente com parâmetros válidos', () => {
        const aeronave = new Aeronave('PP-ABCD', 800, 5000);
        
        expect(aeronave.getPrefixo()).toBe('PP-ABCD');
        expect(aeronave.getVelocidadeCruzeiro()).toBe(800);
        expect(aeronave.getAutonomia()).toBe(5000);
    });

    test('deve retornar a string formatada corretamente', () => {
        const aeronave = new Aeronave('PP-ABCD', 800, 5000);
        const resultado = aeronave.toString();
        
        expect(resultado).toBe('Prefixo Aeronave: PP-ABCD, Velocidade Cruzeiro: 800, Autonomia: 5000');
    });
});

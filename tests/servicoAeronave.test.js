import ServicoAeronaves from '../POO/servicoAeronave'; 
import Aeronave  from '../POO/aeronave'; 

describe('ServicoAeronaves', () => {
    let servico;
    let aeronave1;
    let aeronave2;

    beforeEach(() => {
        aeronave1 = new Aeronave('Modelo 1', 123, 321);
        aeronave2 = new Aeronave('Modelo 2', 123, 321);
        servico = new ServicoAeronaves([aeronave1, aeronave2]);
    });

    test('deve retornar todas as aeronaves', () => {
        expect(servico.todas()).toEqual([aeronave1, aeronave2]);
    });

    test('deve retornar a representação em string das aeronaves', () => {
        const expectedString = 
            'Prefixo Aeronave: Modelo 1, Velocidade Cruzeiro: 123, Autonomia: 321\n' +
            'Prefixo Aeronave: Modelo 2, Velocidade Cruzeiro: 123, Autonomia: 321\n';
        expect(servico.toString()).toBe(expectedString);
    });
});

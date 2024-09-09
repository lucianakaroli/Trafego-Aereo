import Aerovia from '../POO/aerovia';

describe('Aerovia', () => {
    let aerovia;

    beforeEach(() => {
        aerovia = new Aerovia('A001', 'São Paulo', 'Rio de Janeiro', 1000);
    });

    test('deve criar uma instância de Aerovia com os parâmetros corretos', () => {
        expect(aerovia).toBeInstanceOf(Aerovia);
        expect(aerovia.getId()).toBe('A001');
        expect(aerovia.getOrigem()).toBe('São Paulo');
        expect(aerovia.getDestino()).toBe('Rio de Janeiro');
        expect(aerovia.getTamanho()).toBe(1000);
    });

    test('deve retornar o ID correto', () => {
        expect(aerovia.getId()).toBe('A001');
    });

    test('deve retornar a origem correta', () => {
        expect(aerovia.getOrigem()).toBe('São Paulo');
    });

    test('deve retornar o destino correto', () => {
        expect(aerovia.getDestino()).toBe('Rio de Janeiro');
    });

    test('deve retornar o tamanho correto', () => {
        expect(aerovia.getTamanho()).toBe(1000);
    });

    test('deve retornar a string formatada corretamente', () => {
        expect(aerovia.toString()).toBe('Aerovia id: A001, Origem: São Paulo, Destino: Rio de Janeiro, Tamanho: 1000');
    });
});

import ServicoAerovias from '../POO/servicoAerovias';

describe('ServicoAerovias', () => {
    let servico;
    let mockAerovias;

    beforeEach(() => {
        mockAerovias = [
            { getId: () => 'SFO-LAX' },
            { getId: () => 'LAX-JFK' },
            { getId: () => 'JFK-SFO' }
        ];
        servico = new ServicoAerovias(mockAerovias);
    });

    test('recupera deve retornar as aerovias que correspondem à origem e destino', () => {
        const resultado = servico.recupera('SFO', 'LAX');
        expect(resultado).toHaveLength(1);
        expect(resultado[0].getId()).toBe('SFO-LAX');
    });

    test('recupera deve retornar um array vazio se não houver correspondência', () => {
        const resultado = servico.recupera('LAX', 'SFO');
        expect(resultado).toHaveLength(0);
    });

    test('todas deve retornar todas as aerovias', () => {
        const resultado = servico.todas();
        expect(resultado).toHaveLength(3);
        expect(resultado[0].getId()).toBe('SFO-LAX');
        expect(resultado[1].getId()).toBe('LAX-JFK');
        expect(resultado[2].getId()).toBe('JFK-SFO');
    });
});

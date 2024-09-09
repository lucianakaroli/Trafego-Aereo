import Piloto from "../POO/piloto"

describe('Piloto', () => {
    let piloto;

    beforeEach(() => {
        piloto = new Piloto('12345', 'João Silva', true);
    });

    test('deve retornar a matrícula corretamente', () => {
        expect(piloto.getMatricula()).toBe('12345');
    });

    test('deve retornar o nome corretamente', () => {
        expect(piloto.getNome()).toBe('João Silva');
    });

    test('deve retornar o status da habilitação corretamente', () => {
        expect(piloto.isHabilitacaoAtiva()).toBe(true);
    });

    test('deve retornar a string formatada corretamente', () => {
        const expectedString = 'Matricula: 12345, Nome: João Silva, Habilitacao ativa: true';
        expect(piloto.toString()).toBe(expectedString);
    });
});

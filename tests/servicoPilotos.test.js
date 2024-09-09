import ServicoPilotos from "../POO/servicoPilotos"
import Piloto from "../POO/piloto"

describe('ServicoPilotos', () => {
    let servico;
    let piloto1;
    let piloto2;

    beforeEach(() => {
        piloto1 = new Piloto('123', 'Piloto 1', true);
        piloto2 = new Piloto('456', 'Piloto 2', false);
        servico = new ServicoPilotos([piloto1, piloto2]);
    });

    test('deve retornar o piloto correto baseado na matrícula', () => {
        expect(servico.recupera('123')).toBe(piloto1);
        expect(servico.recupera('456')).toBe(piloto2);
    });

    test('deve retornar undefined se o piloto com a matrícula fornecida não existir', () => {
        expect(servico.recupera('999')).toBeUndefined();
    });

    test('deve retornar todos os pilotos', () => {
        expect(servico.todos()).toEqual([piloto1, piloto2]);
    });
});

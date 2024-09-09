import ServicoPlanos from "../POO/servicoPlanos";
import PlanoDeVoo from "../POO/planoDeVoo";


describe('ServicoPlanos', () => {
    let servico;

    let data8 = new Date(2013, 3, 4, 11, 20)
    let hora8 = data8.getHours() + ":" + data8.getMinutes()
    let planoDeVoo8 = new PlanoDeVoo(8, "JR", "GRU-POA", "PS-02", data8, hora8, 28000, false);

    let data9 = new Date(2013, 12, 11, 4, 40)
    let hora9 = data9.getHours() + ":" + data9.getMinutes()
    let planoDeVoo9 = new PlanoDeVoo(9, "BM", "GRU-POA", "PS-03", data9, hora9, 28000, false);

    let data10 = new Date(2013, 10, 2, 2, 30)
    let hora10 = data10.getHours() + ":" + data10.getMinutes()
    let planoDeVoo10 = new PlanoDeVoo(10, "VL", "GRU-POA", "PS-04", data10, hora10, 28000, false);

    const planosMock = [planoDeVoo8, planoDeVoo9, planoDeVoo10];

    beforeEach(() => {
        servico = new ServicoPlanos(planosMock);
    });

    test('deve retornar todos os planos', () => {
        expect(servico.todos()).toEqual(planosMock);
    });

    test('deve retornar o plano com o ID correto', () => {
        expect(servico.recupera(8)).toEqual(planosMock[0]);
    });
});

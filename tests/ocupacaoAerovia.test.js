import OcupacaoAerovia from '../POO/ocupacaoAerovia';

describe('OcupacaoAerovia', () => {
    let ocupacao;

    beforeEach(() => {
        ocupacao = new OcupacaoAerovia();
    });

    test('deve iniciar com altitudes e slots desocupados', () => {
        const altitudesLivres = ocupacao.altitudesLivres('R1', '2024-09-08');
        expect(altitudesLivres).toEqual([25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000]);
    });

    test('deve ocupar uma altitude e slot', () => {
        ocupacao.ocupa('R1', '2024-09-08', 25000, 'slot1');
        expect(ocupacao.isOcupado('R1', '2024-09-08', 25000, 'slot1')).toBe(true);
    });

    test('deve marcar altitudes ocupadas como indisponíveis', () => {
        ocupacao.ocupa('R1', '2024-09-08', 25000, 'slot1');
        const altitudesLivres = ocupacao.altitudesLivres('R1', '2024-09-08');
        expect(altitudesLivres).toEqual([26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000]);
    });

    test('deve verificar se um slot específico está ocupado', () => {
        ocupacao.ocupa('R1', '2024-09-08', 30000, 'slot2');
        expect(ocupacao.isOcupado('R1', '2024-09-08', 30000, 'slot2')).toBe(true);
        expect(ocupacao.isOcupado('R1', '2024-09-08', 30000, 'slot3')).toBe(false);
    });

    test('deve permitir ocupar múltiplos slots em diferentes altitudes', () => {
        ocupacao.ocupa('R1', '2024-09-08', 25000, 'slot1');
        ocupacao.ocupa('R1', '2024-09-08', 26000, 'slot2');
        expect(ocupacao.isOcupado('R1', '2024-09-08', 25000, 'slot1')).toBe(true);
        expect(ocupacao.isOcupado('R1', '2024-09-08', 26000, 'slot2')).toBe(true);
    });

    test('não deve ocupar altitudes se já estiverem ocupadas', () => {
        ocupacao.ocupa('R1', '2024-09-08', 25000, 'slot1');
        ocupacao.ocupa('R1', '2024-09-08', 25000, 'slot2');  // Mesmo altitude, outro slot
        expect(ocupacao.isOcupado('R1', '2024-09-08', 25000, 'slot1')).toBe(true);
        expect(ocupacao.isOcupado('R1', '2024-09-08', 25000, 'slot2')).toBe(true);
    });
});

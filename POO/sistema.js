import { is } from "bycontract";

class Sistema {
    _servicoAerovias;
    _ocupacaoAerovia;
    _servicoPlano;
    _servicoAeronaves;

    constructor(servicoAerovias, ocupacaoAerovia, servicoPlano, servicoAeronaves){
        this._servicoAerovias = servicoAerovias
        this._ocupacaoAerovia = ocupacaoAerovia
        this._servicoPlano = servicoPlano;
        this._servicoAeronaves = servicoAeronaves;
    }

    listarAerovias(){
        this._servicoAerovias.todas().forEach(each => {
            console.log("id", each.id); //todo: colocar todas as informacoes das aerovias
        })
    }

    aprovarPlanoDeVoo() {
        let planosVoo = this._servicoPlano.todos();
        for(let i = 0; i < planosVoo.length; i++) {
            let planoDeVoo = planosVoo[i];
            let split = planoDeVoo.getIdAerovia().split("-");
            let aerovia = this._servicoAerovias.recupera(split[0], split[1]);
            if (aerovia === undefined || aerovia.length == 0){
                continue
            }
            aerovia = aerovia[0];

            let aeronave  = this._servicoAeronaves.todas().filter(a => {
                let prefixoPlano = planoDeVoo.getPrefixoAeronave()
                let prefixoAeronave = a.getPrefixo()
                return prefixoAeronave === prefixoPlano
            })
            if (aeronave === undefined || aeronave.length == 0){
                continue
            }
            aeronave = aeronave[0];

            let isAeronaveValida = aeronave.isValido(planoDeVoo)
            if(!isAeronaveValida) {
                continue //todo: criar erro
            }

            let slotsSize = Math.ceil(aerovia.getTamanho()/aeronave.getVelocidadeCruzeiro())
            let dataVoo = planoDeVoo.getData(); //todo estar preparado para meia noite
            let horaVoo = dataVoo.getHours()
            let slots = [horaVoo]
            for (let i = 1; i < slotsSize; i++){
                slots.push(horaVoo+i);
            }

            planoDeVoo.setSlots(slots);
            for (var slot in slots){
                let isOcupado = this._ocupacaoAerovia.isOcupado(planoDeVoo.getIdAerovia(), dataVoo.toString(), planoDeVoo.getAltitude(), slot)
                if (isOcupado){
                    //todo erro
                }
            }

            for (var slot in slots){
                this._ocupacaoAerovia.ocupa(planoDeVoo.getIdAerovia(), dataVoo.toString(), planoDeVoo.getAltitude(), planoDeVoo.slots)
            }
        }
    }

    listarPlanos(){
        
    }

}

export default Sistema
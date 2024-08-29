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
        for(let planoDeVoo in planosVoo) {
            let origem, destino = planoDeVoo.split("-")
            let aerovia = this.servicoAerovias.recupera(origem, destino);
            let aeronave  = this.servicoAeronaves.todas().filter(a => a.prefixo === planoDeVoo.getPrefixoAeronave())

            let slotsSize = Math.ceil(aerovia.getTamanho()/aeronave.getVolocidadeCruzeiro())
            let dataVoo = planoDeVoo.getData(); //todo estar preparado para meia noite
            let horaVoo = dataVoo.getHours()
            let slots = [horaVoo]
            for (let i = 1; i < slotsSize; i++){
                slots.append(horaVoo+i);
            }

            planoDeVoo.setSlots(slots);
            for (var slot in slots){
                let isOcupado = this.isOcupado(planoDeVoo.idAerovia, dataVoo, planoDeVoo.altitude, slot)
                if (isOcupado){
                    //todo erro
                }
            }

            for (var slot in slots){
                this.ocupacaoAerovia(planoDeVoo.idAerovia, planoDeVoo.data, planoDeVoo.altitude, planoDeVoo.slots)
            }
        }
    }

    listarPlanos(){
        
    }

}

export default Sistema
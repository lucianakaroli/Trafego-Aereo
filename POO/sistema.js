import { is } from "bycontract";

class Sistema {
    _servicoAerovias;
    _ocupacaoAerovia;
    _servicoPlano;
    _servicoAeronaves;
    _servicoPiloto;

    constructor(servicoAerovias, ocupacaoAerovia, servicoPlano, servicoAeronaves,servicoPiloto){
        this._servicoAerovias = servicoAerovias
        this._ocupacaoAerovia = ocupacaoAerovia
        this._servicoPlano = servicoPlano;
        this._servicoAeronaves = servicoAeronaves;
        this._servicoPiloto = servicoPiloto;
    }

    
    //Listando aerovias
    listarAerovias(){
        this._servicoAerovias.todas().forEach(each => {
            console.log(`Aerovia: ${each.getId()}`);
        })

    }
    //Aprovando planos
    aprovarPlanoDeVoo() {
        let planosVoo = this._servicoPlano.todos();
        for(let i = 0; i < planosVoo.length; i++) {
            let planoDeVoo = planosVoo[i];

            // Verifica se a matricula é existente
            let matricula = planoDeVoo.getMatricPiloto()
            let piloto = this._servicoPiloto.recupera(matricula);
            if (piloto === undefined){
                console.log(`O piloto com a matricula: ${matricula} nao existe`)
                continue
            }
            //Verifica se a habilitacao está ativa
            if (piloto.isHabilitacaoAtiva() === false){
                console.log(`Habilitacao nao ativa!. Piloto: ${piloto.getNome()}, Matricula: ${piloto.getMatricula()}`)
                continue
            }

            // Verifica se a aerovia é valida
            let split = planoDeVoo.getIdAerovia().split("-");
            let aerovia = this._servicoAerovias.recupera(split[0], split[1]);
            if (aerovia === undefined || aerovia.length == 0){
                console.log(`Aerovia com id ${planoDeVoo.getIdAerovia()} é inválida.`);
                continue
            }
            aerovia = aerovia[0];

            let aeronave  = this._servicoAeronaves.todas().filter(a => {
                let prefixoPlano = planoDeVoo.getPrefixoAeronave()
                let prefixoAeronave = a.getPrefixo()
                return prefixoAeronave === prefixoPlano
            })

            if (aeronave === undefined || aeronave.length == 0){
                console.log(`Aerovia é inválida!`);
                continue
            }
            
            aeronave = aeronave[0];

            let isAeronaveValida = aeronave.isValido(planoDeVoo)
            if(!isAeronaveValida) {
                console.log(`A aeronave com o id: ${aeronave.getPrefixo()} não pode realizar o plano de voo ${planoDeVoo.getId()}`);
                continue
            }

            let slotsSize = Math.ceil(aerovia.getTamanho()/aeronave.getVelocidadeCruzeiro())
            let dataVoo = planoDeVoo.getData(); //toDo: estar preparado para meia noite
            let dataString = dataVoo.toISOString().split('.')[0]
            let horaVoo = dataVoo.getHours()
            let slots = [horaVoo]
            for (let i = 1; i < slotsSize; i++){
                slots.push(horaVoo+i);
            }

            planoDeVoo.setSlots(slots);
            for (var slot in slots){
                let isOcupado = this._ocupacaoAerovia.isOcupado(planoDeVoo.getIdAerovia(), dataString, planoDeVoo.getAltitude(), slot)
                if (isOcupado){
                    console.log(`A aerovia com o Id: ${aerovia.getId()} está ocupada.`);
                    continue
                }
            }

        // Validando autonomia
        if (aeronave.getAutonomia() >= aerovia.getTamanho() * 1.1) {
            console.log(`A autonomia da aeronave ${aeronave.getPrefixo()} não é suficiente para percorrer a aerovia ${aerovia.getId()}`);
          } else {
            console.log("Validação da autonomia da aeronave: OK.");
          }

            for (let i = 0; i < slots.length; i ++){
                let slot = slots[i]
                this._ocupacaoAerovia.ocupa(planoDeVoo.getIdAerovia(), dataString, planoDeVoo.getAltitude(), slot)
                console.log(`Ocupando aerovia: ${planoDeVoo.getIdAerovia()} | Data: ${dataString} | Altitude: ${planoDeVoo.getAltitude()} | Slot: ${slot}`);
            }
        }
    }


    // Listando plano a partir de um numero
    listarPlanos(numero){
       let planoVoo =  this._servicoPlano.recupera(numero)
       if (planoVoo){
            console.log(`Plano de Voo com o Id: ${planoVoo.getId()}, Matricula Piloto: ${planoVoo.getMatricPiloto()}, Id Aerovia: ${planoVoo.getIdAerovia()}, Data: ${planoVoo.getData()}, Horario: ${planoVoo.getHorario()}, Altitude: ${planoVoo.getAltitude ()}, Foi cancelado: ${planoVoo.getCancelado()}`);
            return
       }
    }

    listarAltitudesLivres(){
        let planosVoo = this._servicoPlano.todos();
        for(let i = 0; i < planosVoo.length; i++) {
            let planoDeVoo = planosVoo[i];
            let idAerovia = planoDeVoo.getIdAerovia()
            let dataVoo = planoDeVoo.getData(); 
            let dataString = dataVoo.toISOString().split('.')[0]

           let altitudesLivres = this._ocupacaoAerovia.altitudesLivres(idAerovia, dataString)
           for (let i =0; i < altitudesLivres.length; i++){
                let altitudeLivre = altitudesLivres[i];
                console.log(`Altitude ${altitudeLivre} está livre na data ${dataString} para a aerovia ${idAerovia}`)
           }
           console.log("\n\n\n")
        }
    }
}


export default Sistema
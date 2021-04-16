import Carro from './Carro'
import {Concessionaria} from './Concessionaria'
import {Pessoa} from './Pessoa'


/* --- criar carros --- */

let carroA = new Carro('Mustang Amarelo', 2)
let carroB = new Carro('Delorean', 2)
let carroC = new Carro('Chevette 2.0', 4)

/* --- montar a lista de carros -- */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Rua Joseval Peixoto, 443, Aclimação, São José do Passo Fundo', listaDeCarros)
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro --- */

let cliente = new Pessoa('Arlete', 'Delorean')

concessionaria.mostrarListaDeCarros().map((carro:Carro) =>{
    if (carro['modelo'] == cliente['carroPreferido']) {
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
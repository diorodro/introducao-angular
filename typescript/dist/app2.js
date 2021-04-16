"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* --- criar carros --- */
var carroA = new Carro_1.default('Mustang Amarelo', 2);
var carroB = new Carro_1.default('Delorean', 2);
var carroC = new Carro_1.default('Chevette 2.0', 4);
/* --- montar a lista de carros -- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Rua Joseval Peixoto, 443, Aclimação, São José do Passo Fundo', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro --- */
var cliente = new Pessoa_1.Pessoa('Arlete', 'Delorean');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente['carroPreferido']) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

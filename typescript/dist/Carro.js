"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.modelo = '';
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
exports.default = Carro;
//comentário
exports.qualquer_coisa = 'Qualquer coisa';

export default class Carro{
    private modelo:string = ''
    private numeroDePortas:number = 0
    private velocidade:number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade += 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

export let qualquer_coisa : string = 'Qualquer coisa'
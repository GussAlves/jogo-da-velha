import { Tabuleiro } from './domain/Tabuleiro.js'

let tabuleiro = new Tabuleiro()

tabuleiro.exibirTabuleiro()

tabuleiro.alterarLinha('x', 1, 5)

console.log(tabuleiro.exibirTabuleiro())
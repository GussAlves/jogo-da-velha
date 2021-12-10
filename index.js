import { Tabuleiro } from './domain/Tabuleiro.js'

let tabuleiro = new Tabuleiro()

tabuleiro.exibirTabuleiro()

tabuleiro.alterarLinha('x', 1, 2)

tabuleiro.exibirTabuleiro()
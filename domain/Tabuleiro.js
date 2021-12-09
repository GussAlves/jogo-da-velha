export class Tabuleiro {

    _linhaA = ['a', 'a', 'a'];
    _linhaB = ['b', 'b', 'b'];
    _linhaC = ['c', 'c', 'c'];

    exibirTabuleiro() {
        console.log(this.linhaA)
        console.log(this.linhaB)
        console.log(this.linhaC)
    }

    get linhaA() {
        return this._linhaA;
    }

    get linhaB() {
        return this._linhaB;

    }
    get linhaC() {
        return this._linhaC;
    }

    modificaLinhaA(valor, index) {
        this._linhaA[index] = valor
    }

    modificaLinhaB(valor, index) {
        this._linhaB[index] = valor
    }

    modificaLinhaC(valor, index) {
        this._linhaC[index] = valor
    }

    alterarLinha(valor, linha, coluna) {

        if (this.validaPosicao(linha, coluna)) {
            switch(linha) {
                case 1:
                    this.modificaLinhaA(valor, coluna)
                    break
                
                case 2:
                    this.modificaLinhaB(valor, coluna)
                    break
                
                case 3:
                    this.modificaLinhaC(valor, coluna) 
                    break
                default:
            }
        } else {
            console.log("Por favor confira a posição que você quer jogar")
        }
    } 

    validaPosicao(linha, coluna) {
        return linha >= 0 && linha <= 3 
            && coluna >= 0 && coluna <= 3 
    }
}

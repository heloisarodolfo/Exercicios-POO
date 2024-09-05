class Produto {
    constructor(nome, preço) {
        this.nome = nome;
        this.preço = preço;
    }

    calcularPrecoFinal() {
        return this.preço;
    }

    imprimirDados() {
        console.log(`Produtos: ${this.nome} - Preço: R$ ${this.preço}`);
    }
}

class ProdutoImportado extends Produto {
    constructor (nome, preço, taxa) {
        super(nome, preço) 
        this.taxa = taxa;
    }

    calcularPrecoFinal() {
        return this.preço + this.taxa;
    }

    imprimirDados() {
        console.log(`Produto Importado: ${this.nome} - Preço: R$ $(this.calcularPrecoFinal().toFixed(2)`);  
    }

}

class ProdutoUsado extends Produto {
    constructor(nome, preco, datafabricacao){
        super(nome, preco);
        this.datafabricacao = datafabricacao;
    }

    calcularPrecoFinal() {
        const desconto = (new Date().getFullYear() - this.datafabricacao.getFullYear()) * 0.1;
        return this.preco - (this.preco * desconto);
    }

    imprimirDados() {
        console.log(`Produto Usado: ${this.nome} - Preço: R$ ${this.calcularPrecoFinal().toFixed(2)}`);  
    }
}

const n = ParseInt(prompt('Digite o número de produtos a serem cadastrados:'))

const produtos = [];

for(let i = 1; i <= n; i++) {
    console.log(`Digite os dados do Produto ${i}:`);
    const nome = prompt('Nome: ');
    const preco = parseFloat(prompt('Preco: '));
    const tipo = prompt('Tipo (I para importado, U para usado): ').toUpperCase();
    if (tipo === 'I') {
        const taxa = parseFloat(prompt('Taxa da Alfândega: R$ '))
        produtos.push(new ProdutoImportado(nome, preco, taxa));
    } else if (tipo === 'U') {
        const dataFabricacao = new Date(prompt('Data de Fabricação (DD/MM/AAAA): '));
        produtos.push(new ProdutoUsado(nome, preco, dataFabricacao))
    } else {
        produtos.push(new Produto(nome, preco));
    }
}

console.log('\nPreços dos Produtos:');
produtos.forEach((produto) => {
    produto.imprimirDados();
})

/* Abstração é o processo de simplificar sistemas complexos,
focando nos aspectos essenciais e ignorando detalhes
desnecessários.
*/ 

// Classe abstrata que define o esqueleto de uma forma geométrica
class Forma {
    constructor() {
        if (this.constructor === Forma) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
        }
    }

    // Método abstrato para calcular a área
    calcularArea() {
        throw new Error("Método abstrato 'calcularArea' precisa ser implementado.");
    }
}

// Subclasse que implementa a forma de um círculo
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    // Implementação do método para calcular a área de um círculo
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

// Subclasse que implementa a forma de um retângulo
class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    // Implementação do método para calcular a área de um retângulo
    calcularArea() {
        return this.largura * this.altura;
    }
}

// Uso das classes
const circulo = new Circulo(5);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)}`); // Saída: "Área do círculo: 78.54"

const retangulo = new Retangulo(4, 6);
console.log(`Área do retângulo: ${retangulo.calcularArea()}`); // Saída: "Área do retângulo: 24"
/* Herança permite que uma classe (subclasse) herde atributos e 
métodos de outra classe (superclasse), permitindo a reutilização
de código e a criação de uma hierarquia de classes.
*/ 

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    dormir(){
        console.log(`${this.nome} está dormindo.`);
    }
}

// Subclasse:

class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo.`);
    }
}

// Uso

const meuCachorro = new Cachorro ('Loki');
meuCachorro.dormir(); // Saída: Loki está dormindo.
meuCachorro.latir(); // Saída: Loki está latindo.
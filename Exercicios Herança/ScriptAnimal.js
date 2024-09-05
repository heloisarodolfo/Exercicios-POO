class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom() {
        console.log("O som do animal é desconhecido");
    }
}

class Camelo extends Animal {
    constructor(nome) {
        super(nome, "Camelo");
    }

    emitirSom() {
        console.log("O camelo faz um som de grunhido");
    }
}

class Tubarao extends Animal {
    constructor(nome){
        super(nome, "Tubarão");
    }

    emitirSom() {
        console.log("O tubarão não faz som");
    }
}

class UrsoDoCanada extends Animal {
    constructor(nome){
        super(nome, "Urso-do-Canadá")
    }

    emitirSom() {
        console.log("O Urso-do-Canadá faz um som de rosnado");
    }
}

const jardimZoologico = [];

jardimZoologico.push(new Camelo("Camelo 1"));
jardimZoologico.push(new Tubarao("Tubarao 1"));
jardimZoologico.push(new UrsoDoCanada("Urso 1"));

for (let animal of jardimZoologico) {
    console.log(`Nome: ${animal.nome} | Tipo: ${animal.tipo}`);
    animal.emitirSom();
}